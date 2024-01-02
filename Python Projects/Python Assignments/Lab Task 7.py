# Q1
# sample = [(2, 3), (4, 7), (8, 11), (3, 6)]
# maxNum,minNum=sample[0][0],sample[0][0]
#
# for i in range(len(sample)):
#     tempMax=max(sample[i])
#     tempMin=min(sample[i])
#     if tempMax>maxNum:
#         maxNum=tempMax
#     if tempMin<minNum:
#         minNum=tempMin
# print("Maximum no is",maxNum)
# print("Minimum no is",minNum)

# Q2
# def dart(x,y,radius):
#     exp=(x**2+y**2)<=radius**2
#     if exp:
#         print("You hit within the dart board")
#     else:
#         print("Try again!!")
#
# radius=10
# dart(0,0,10)
# dart(10,10,10)
# dart(6,6,10)
# dart(7,8,10)


# Q3
# def dictcheck(worda,wordb):
#     alpha="abcdefghijklmnopqrstuvwxyz"
#     worda=worda.casefold()
#     wordb=wordb.casefold()
#     length=min((len(worda),len(wordb)))
#     for i in range(length):
#         if alpha.index(worda[i])<alpha.index(wordb[i]):
#             return worda
#         elif alpha.index(wordb[i])<alpha.index(worda[i]):
#             return wordb
#     else:
#         if len(worda)<len(wordb):
#             return worda
#         else:
#             return wordb
#
# expA=len("anachronistically")-1==len("counterintuitive")
# expB=dictcheck("misinterpretation","misrepresentation")
# expC="e" not in "ﬂoccinaucinihilipiliﬁcation"
# expD=len("counterrevolution")==(len("counter")+len("resolution"))
# print(expA)
# print(expB)
# print(expC)
# print(expD)

# Q4
# pvTuple=tuple()
# listpv=list(pvTuple)
# for i in range(4):
#     name=input("Enter names of provinces of Pakistan: ")
#     listpv.append(name)
# pvTuple=tuple(listpv)
# print(pvTuple)


# Q5
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
