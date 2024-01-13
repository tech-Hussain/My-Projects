#1
# def stats(file_name):
#     file=open(file_name,'r')
#     content = file.read()
#     lines = content.count('\n')
#     words = len(content.split())
#     characters = len(content)
#     print(f"Number of lines: {lines}")
#     print(f"Number of words: {words}")
#     print(f"Number of characters: {characters}")
#     file.close()
# file_name = "sample.txt"
# stats(file_name)

# Q2
# def distribution(file_name):
#     file=open(file_name,'r')
#     content = file.read()
#     grades = content.split()
#     gradesSet=list(set(grades))
#     for i in gradesSet:
#         print(f" Students got {grades.count(i)} {i}")
#     file.close()
# distribution("grades.txt")

# Q3
# def duplicate(file_name):
#     file=open(file_name,'r')
#     content = file.read()
#     content=content.replace(",","")
#     content=content.replace(".","")
#     words=content.split()
#     compareWords=[]
#     for i in words:
#         compareWords.append(i.casefold())
#     setWords=list(set(compareWords))
#     for i in setWords:
#         count=compareWords.count(i)
#         if count>1:
#             print(True)
#             break
#     else:
#         print(False)
#     file.close()
# duplicate("test.txt")

# def abc(file_name):
#     file=open(file_name,'r')
#     content=file.read()
#     secfile=open("abc.txt",'w')
#     updateContent=[]
#     for i in content.split():
#         if len(i)==4:
#             updateContent.append("xxxx")
#         else:
#             updateContent.append(i)
#     secfile.write(" ".join(updateContent))
#     secfile.close()
#
#     file.close()
# abc("test.txt")