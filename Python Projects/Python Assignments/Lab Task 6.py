#Q1
# l=[2, 1, 3, 5, 4, 3, 8]
# l.remove(1)
# print(l)
# l.sort()
# print(l)
# l.insert(0,19)
# print(l)
# l.pop(2)
# print(l)
# l.extend([19,63,25])
# print(l)
# del l

# Q2
# def height(length,degangle):
#     import math
#     radangle=(math.pi*degangle)/180
#     return round(length*math.sin(radangle),2)
# print(height(16,75))
# print(height(20,0))
# print(height(24,45))
# print(height(24,80))

# Q3
# l=[1,2,69,87,45,69,3,12]
# l1=l.copy()
# if len(l)%2==0:
#     indexMid=(len(l))/2
#     print("Index of middle element is",int(indexMid))
#     print("Middle element is",l[int(indexMid)])
# else:
#     indexMid=(len(l)-1)/2
#     print("Index of middle element is",int(indexMid))
#     print("Middle element is",l[int(indexMid)])
# l.sort(reverse=True)
# x=l1.pop(0)
# l1.insert(len(l1),x)
# print(l)
# print(l1)

# Q4
# monthsL=['Jan','Feb','Mar','May']
# monthsT=('Jan','Feb','Mar','May')
# monthsL.insert(3,"Jun")
# print(monthsL)
# monthsL.append("Jun")
# print(monthsL)
# monthsL.pop()
# print(monthsL)
# monthsL.remove("Feb")
# print(monthsL)
# print(monthsL[::-1])
# monthsL.sort()
# print(monthsL)
# print("*"*8+"Tuple"+"*"*8)
# print(monthsT[::-1])
# monthsT.insert("Apr",3)
# monthsT.append("Jun")
# monthsT.pop()
# monthsT.remove("Feb")
# monthsT.sort()
# print(monthsT)

# Q5
a,b=6,7
c=(a+b)/2
inventory=['paper', 'staples', 'pencils']
first='John'
middle='Fitzgerald'
last='Kennedy'
fullname=first+" "+middle+" "+last
print(fullname)