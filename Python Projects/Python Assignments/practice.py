# x=[1,2,3,4,"ko",45]
# print(x[-1:0:-2])
# y=int(-2.33)
# print((y))
# x = ["wasim", "lubaid", "shahroz", "usman", "faisal", "farhan"]
# print("faisal" in x)

# def fact(num):
#     factAns=1
#     if num ==1 or num == 0:
#         return 1
#     else:
#         return num*fact(num-1)
#
# i=0
# while i<=10:
#     print("Factorial of",i,"is",fact(i))
#     i+=1
#
# x=[2,3,64,2,"j"]
# print(x.extend([58]))
# print(x)
# l=[1,2,69,87,45,69,3]
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

# first='John'
# middle='Fitzgerald'
# last='Kennedy'
# fullname=first+" "+middle+" "+last
# print(fullname)
# x=int(input("Enter no:"))
# y=int(input("Enter no:"))
# print(x)
# print(y)
# temp=x
# x=y
# y=temp
# print(x)
# print(y)
# x=int(input("Enter no of data calls:"))
# bill=0
# if (x<=100):
#     bill=2000
# elif x<=150:
#     bill=2000+(0.60*(x-100))
# elif x<=200:
#     bill=2000+(0.60*(150-100)+(0.50*(x-150)))
# elif x>200:
#     bill=2000+(0.60*(150-100)+(0.50*(200-150))+(0.40*(x-200)))
# print(bill)

import math
import os

# radius=5
# angvel=((5000)/60)*2*math.pi
# print(angvel)
# print((radius)/100*angvel)
#
# datalist = [300, 12.65, 5+6j, True, 'Faisal', (5, -7), [8, 52],{"color":'blue', "color":'red'}]
# for item in datalist:
#     print ("Type of ",item, " is ", type(item))

# for i in range(9,0,-1):
#     for j in range(i):
#         print("*",end="")
#     print()

# for i in range(3):
#     for j in range(3):
#         if i==1 and j==1:
#             print(" ",end="  ")
#         else:
#             print("*",end="  ")
#     print()

# def sum(n):
#     if n==1:
#         return 1
#     return n+sum(n-1)


# for i in range(1,10):
#     for j in range(i):
#         if j==0:
#             print(f"{i}:",end=" ")
#         else:
#             print(f"{j}",end="-")
#     print()

# for i in range(10):
#     for j in range(7):
#         if j==0:
#             print("*",end=" ")
#         elif i==0:
#             print("*",end=" ")
#         elif i==5:
#             print("*",end=" ")
#         else:
#             print("",end=" ")
#     print()

# x=input("enter word: ")
# x=x.casefold()
# revese=x[::-1]
# if x==revese:
#     print("yes")
# else:
#     print("no")
# s,e=1,5
# for i in range(s,e+1):
#     for j in range(s,e+1):
#         if i==1 :
#             print(j,end=" ")
#         elif j==1:
#             print(i,end=" ")
#         else:
#             print(i*j,end=" ")
#     print()
# x = ["ahmed", "bashir"]
# y = ["ahmed", "bashir"]
# z = x
#
# print(x is not z)
# print(x is not y)
# n=1
# for i in range(1,6):
#     for j in range(1,i+1):
#         print(j,end=" ")
#     print()
# for i in range(5,0,-1):
#     for j in range(n):
#         print(" ",end=" ")
#     n+=1
#     for j in range(1,i+1):
#          print(j,end=" ")
#     print()
h=5
# for i in range(1,6):
#     print(("*"*a).center(20),end="")
#     a+=2
#     print()
# for x in range(h):
#     print(" " * (h - x), "*" * (2*x + 1))
# for x in range(h - 2, -1, -1):
#     print(" " * (h - x), "*" * (2*x + 1))

# series=[0,1]
# no=int(input())
# for i in range(no-2):
#     series.append((series[-1])+series[-2])
# for i in range(no):
#     print(series[i],end=" ")
# file=open("sample.txt","r")
# content=file.read()
# print(content)
# file.seek(0)
# line=file.readlines()
# print(len(line))
# file.close()
# alpha="abcdefghijklmnopqrstuvwxyz"
# x=97
# dict={}
# for i in alpha:
#     dict.update({i:str(x)})
#     x+=1
# for x,y in dict.items():
#     hex="{0:X}"
#     y=hex.format(int(y))
#     dict.update({x:y})
# print(dict)
# a="abcdefghijkl"
# print(a[3::-1])
# x=1,"Hussain"
# print(type(x))
n=int(input())
x=1
for i in range(1,n+1):
    x=x*i
print(x)