import json
import sys
from ctypes import cdll

# 导入 dll 该文件 有一个 Add方法 累加的
DLLFUN = cdll.LoadLibrary("./add.dll")

data = sys.stdin.readline()  # 从js 传过来 获取数据
jsonData = json.loads(data)  # 转换为字典 js中的对象

dlladdRes=DLLFUN.Add(jsonData['a'],jsonData['b'])

print(dlladdRes)
# num=int(data)  # 数据转换为 int
# def sum(a):
#     return a+3

# print(type(data))
# print(getattr(data,'a'))

# print(DLLFUN.Add(1,2))


# print(sum(num)) #print()的内容交付给js


# 读取 json文件中 的数据 发送给js 接收
# import sys
# import json

# # (3-1)打开JSON文件test.json
# f = open("./pyjson.json", "r")
# # (3-2)读取test.json的数据
# json_dict = json.load(f)
# # (3-3)JSON数据json_dict的key:'stoch_访问num’。
# dat1 = json_dict["stock_num"]
# print(dat1)  # 将打印内容返回给python-shell
