

import json
from pathlib import Path
import re

CUR_DIR = Path(__file__).parent.absolute()



def parse():
    file_path = CUR_DIR / '538keyword.md'
    table_start = False
    all_data = [
        {
            'title': '第 1 类考点词',
            'define': '当其出现 90% 概率考察',
            'require': '滚瓜烂熟',
            'words': [],
        },
         {
            'title': '第 2 类考点词',
            'define': '当其出现 60% 概率考察',
            'require': '熟记 10 遍以上',
            'words': [],
        },
        {
            'title': '第 3 类考点词',
            'define': '阅读中被考察过的单词，是阅读的考点词',
            'require': '熟记 5 遍以上',
            'words': [],
        },
    ]
    index = -1
    word_no = 0
    word_regex = re.compile(r',|，')
    for line in file_path.open('r'):
        line = line.strip()
        if line:
            if line.startswith('|---'):
                index += 1
                continue

            parts = line.split('|')
            if len(parts) >= 5 and parts[0]:

                word_no += 1
                parts = [p.strip() for p in parts]

                replaces = [s.strip() for s in word_regex.split(parts[4])]
                remark = ''
                if len(parts) == 6:
                    remark = parts[5]
                all_data[index]['words'].append([
                    word_no,
                    parts[1],
                    parts[2].split('/'),
                    parts[3].split('/'),
                    replaces,
                    remark,
                ])
    json_str = json.dumps(all_data, ensure_ascii=False)
    print(json_str)
    (CUR_DIR / 'reading538words.js').write_text(f"export default {json_str}")
    pass




if __name__ == '__main__':
    parse()
    pass
