import json
import os
import re
import time
from urllib.parse import quote

from base.sys_utils import split_os_path, find_os_path
from base.base_func import is_number, ROOT_DIR

mdict_path = os.path.join('media', 'mdict', 'doc')
mdict_root_path = os.path.join(ROOT_DIR, mdict_path)

history_path = os.path.join(ROOT_DIR, 'history.dat')

audio_path = os.path.join(ROOT_DIR, 'media', 'mdict', 'audio')

mdict_path_list = []
audio_path_list = []

mdict_path_json = os.path.join(ROOT_DIR, 'mdict_path.json')

if os.path.exists(mdict_path_json):
    with open(mdict_path_json, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
            mdict_path_list.extend(data['mdict_path'])
            audio_path_list.extend(data['audio_path'])
        except Exception:
            pass
else:
    con = {'mdict_path': [], 'audio_path': []}
    with open(mdict_path_json, 'w', encoding='utf-8') as f:
        json.dump(con, f, indent=4)
    os.chmod(mdict_path_json, 0o777)

mdict_path_list.append(mdict_root_path)


def set_mdict_path():
    global mdict_root_path, mdict_path_list, audio_path_list, audio_path
    for p in mdict_path_list:
        t = False
        if os.path.exists(p):
            for root, dirs, files in os.walk(p):
                for file in files:
                    if file.lower().endswith('.mdx') or file.lower().endswith('.zim'):
                        mdict_root_path = p
                        t = True
                        break
                if t:
                    break
        if t:
            break
    for p in audio_path_list:
        t = False
        if os.path.exists(p):
            for root, dirs, files in os.walk(p):
                for file in files:
                    if file.lower().endswith('.mdd'):
                        audio_path = p
                        t = True
                        break
                if t:
                    break
        if t:
            break


set_mdict_path()

reg = r'^\.+(\\|/)'
regp = re.compile(reg)


def replace_res_name(res_name):
    res_name = regp.sub('', res_name)
    if res_name[0] == "'" or res_name[0] == "'":
        res_name = res_name[1:]
    if res_name[-1] == "'" or res_name[-1] == "'":
        res_name = res_name[:-1]
    # 在html中href是用/，在mdd中文件名用\，因此这里要替换。
    res_name = res_name.strip()
    # Concise Oxford English Dictionary and Thesaurus中部分图片名前后有不可见字符\1E和\1F干扰，需要去掉。
    if res_name[0] != '/' and res_name[0] != '\\':
        res_name = '/' + res_name
    res_name = res_name.replace('/', '\\')
    return res_name


def replace_res_name21(res_name):
    if res_name[0] == "'" or res_name[0] == "'":
        res_name = res_name[1:]
    if res_name[-1] == "'" or res_name[-1] == "'":
        res_name = res_name[:-1]
    if res_name.startswith('../'):
        res_name = res_name[3:]
    elif res_name.startswith('/'):
        res_name = res_name[1:]
    return res_name


def replace_res_name2(res_name):
    while True:
        res_name = replace_res_name21(res_name)
        if not res_name.startswith('../'):
            break
    return res_name


is_local = False


def is_mdict_media_local():
    global is_local
    path1_dict = split_os_path(mdict_root_path)
    local_mdict_media = os.path.join(ROOT_DIR, 'media', 'mdict', 'doc')
    path2_dict = split_os_path(local_mdict_media)

    ab1 = path1_dict['absolute']
    ab2 = path2_dict['absolute']

    if ab1 == '' and ab2 != '':
        is_local = False
    elif ab1 != '' and ab2 == '':
        is_local = False
    elif ab1 != '' and ab2 != '':
        if ab1 != ab2:
            is_local = False

    path1 = path1_dict['path']
    path2 = path2_dict['path']

    s, e = find_os_path(path1, path2)
    if s == -1:
        is_local = False
    else:
        is_local = True


is_mdict_media_local()


def get_m_path(mdx, enable_quote=True):
    m_path = ''
    mdict_path_dict = split_os_path(mdict_root_path)
    mdict_path_t = mdict_path_dict['path']

    mdx_path_dict = split_os_path(mdx.get_fpath())
    mdx_path = mdx_path_dict['path']

    s, e = find_os_path(mdx_path, mdict_path_t)
    # e已经+1了
    if s > -1:
        t_path = mdx_path[e:-1]
        m_path = '/'.join(t_path)
    if enable_quote:
        return quote(m_path)
    else:
        return m_path


def write_to_history(query):
    time_str = time.strftime("%Y.%m.%d:%H:%M:%S", time.localtime(time.time()))
    history_str = time_str + '\t' + query + '\n'
    if os.path.exists(history_path):
        try:
            with open(history_path, 'a', encoding='utf-8') as f:
                f.write(history_str)
        except Exception as e:
            print(e)
    else:
        try:
            with open(history_path, 'w', encoding='utf-8') as f:
                f.write(history_str)
        except Exception as e:
            print(e)


def get_history_file():
    file_list = []
    for file in os.listdir(ROOT_DIR):
        if file.startswith('history.dat') and file != 'history.dat':
            file_list.append(file)

    file_list.sort(key=lambda x: int(x.split('.')[2]))
    if os.path.exists(os.path.join(ROOT_DIR, 'history.dat')):
        file_list.append('history.dat')
    return file_list


def rename_history():
    if os.path.exists(history_path) and os.path.getsize(history_path) / (1024 * 1024) > 1:
        try:
            max_num = 0
            for file in os.listdir(ROOT_DIR):
                if file.startswith('history.dat') and file != 'history.dat':
                    file_split = file.split('.')
                    if len(file_split) == 3:
                        if is_number(file_split[2]):
                            tmp_num = int(file_split[2])
                            if tmp_num > max_num:
                                max_num = tmp_num
            os.rename(history_path, history_path + '.' + str(max_num + 1))
        except Exception as e:
            print(e)


def compare_time(time1, time2):
    try:
        s_time = time.mktime(time.strptime(time1, '%Y-%m-%d'))
        e_time = time.mktime(time.strptime(time2, '%Y-%m-%d'))
        return int(s_time) - int(e_time)
    except Exception as e:
        return 0


def get_dic_attrs(dic):
    return dic.pk, dic.mdict_name, dic.mdict_file, dic.mdict_priority


def check_xapian():
    # 是否已安装xapian
    try:
        import xapian
        database = xapian.Database()
    except Exception:
        return False

    return True


def clear_duplication(record_list):
    # 查询coaling station,enwiki-p1指向fuelling station，enwiki-p3指向Fuelling station，最后是重复的词条，因此这里比较f_pk,f_p1,f_p2，如果相同，说明重复
    # 其2是简繁查询，有的词典自带简繁转化，因此查一遍简，再查一遍繁，合并，导致结果重复
    for i in range(len(record_list) - 1, -1, -1):
        mdx_i = record_list[i]
        i_pk = mdx_i.f_pk
        i_p1 = mdx_i.f_p1
        i_p2 = mdx_i.f_p2
        d_list = []
        if i_pk != -1:
            for j in range(len(record_list) - 1, -1, -1):
                mdx_j = record_list[j]
                j_pk = mdx_j.f_pk
                j_p1 = mdx_j.f_p1
                j_p2 = mdx_j.f_p2
                if i_pk == j_pk and i_p1 == j_p1 and i_p2 == j_p2:
                    d_list.append(j)
        if len(d_list) > 1:
            del record_list[i]
    return record_list