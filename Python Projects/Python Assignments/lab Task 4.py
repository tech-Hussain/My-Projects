# quadratic equation solver
# import math
# print("This is standard Equation ax\u00B2+bx+c")
# a=float(input("Enter value of a:"))
# b=float(input("Enter value of b:"))
# c=float(input("Enter value of c:"))
#
# if(a!=0):
#     x1=(-b+math.sqrt((b**2)-4*a*c))/(2*a)
#     x2=(-b-math.sqrt((b**2)-4*a*c))/(2*a)
#     print(f"Roots of Equation are {x1} and {x2}")
# else:
#     print("Zero Division Error")
#
# # arithmetic sequence
# firstNum=float(input("Enter the First Number of sequence:"))
# commonDiff=float(input("Enter the Common Difference:"))
# while(True):
#     nTerm=int(input("Enter the nth term you want:"))
#     ans=firstNum+((nTerm-1)*commonDiff)
#     print(f"{nTerm}th term of this sequence is {ans}")
#     recurr=input("Would you like to continue. If yes press Y else press any key to end program:")
#     if(recurr=="Y" or recurr=="y"):
#         continue
#     else:
#         break

# string is Palindrome or not
# inpStr=input("Enter the word:")
# inpStr=inpStr.casefold()
# revStr=reversed(inpStr)
# i=0
# for x in revStr:
#     if inpStr[i]==x:
#         i+=1
#     else:
#         i=-1
#         break
# if(i!=-1):
#     print("The Word is palindrome")
# else:
#     print("Sorry, The Word is not palindrome")


# Generate Report Card
# print("Hello! It is Result Time. Get Ready!!!!!")
# sName = input("Enter your Name:")
# fName = input("Enter your Father's Name:")
# rNo = input("Enter your Roll No:")
# subj = []
# marks = []
# i = 0
# print("Now You will Enter Your 5 Subject's Name with Marks")
# while (i < 5):
#     if i == 0:
#         subjName = input(f"Enter your 1st Subject Name:")
#     elif i == 1:
#         subjName = input(f"Enter your 2nd Subject Name:")
#     elif i == 2:
#         subjName = input(f"Enter your 3rd Subject Name:")
#     else:
#         subjName = input(f"Enter your {i + 1}th Subject Name:")
#     mNo = int(input(f"Enter {subjName}'s Marks:"))
#     if mNo >= 10 and mNo <= 100:
#         subj.append(subjName)
#         marks.append(mNo)
#         i += 1
#     else:
#         print("Error Marks Input!!")
#
# mObt = sum(marks)
# maxMarks = 500
# percentage = (mObt / maxMarks) * 100
# if percentage <= 100 and percentage >= 86:
#     grade = "A-1"
#     remarks = "Tremendous"
# elif percentage < 86 and percentage >= 75:
#     grade = "A"
#     remarks = "Excellent"
# elif percentage < 75 and percentage >= 64:
#     grade = "B"
#     remarks = "Good"
# elif percentage < 64 and percentage >= 53:
#     grade = "C"
#     remarks = "Nice Try"
# elif percentage < 53 and percentage >= 40:
#     grade = "D"
#     remarks = "Fair"
# else:
#     grade = "F"
#     remarks = "Better Luck Next time"
# print("Result Card".center(50))
# print(f"Name:{sName.upper()}\t\tRoll No:{rNo}")
# print(f"Father's Name:{fName.upper()}")
# print("S.No".ljust(10) + "Subjects".ljust(20) + "Marks Obtained".ljust(20) + "Max Marks".ljust(20))
# for i in range(5):
#     for j in range(4):
#         if j == 0:
#             print(f"{i + 1}".ljust(10), end="")
#         elif j == 1:
#             print(subj[i].capitalize().ljust(20), end="")
#         elif j == 2:
#             print(f"{marks[i]}".ljust(20), end="")
#         elif j == 3:
#             print("100")
# print(f"Total".center(30) + f"{mObt}".ljust(20) + "500".ljust(20))
# print(f"Percentage:".center(10) + f"\t{round(percentage, 2)}" + "Grade:".rjust(9) + f" {grade}")
# print("Remarks:".center(10) + f"\t{remarks}")



# Generate a table
# sNum=int(input("Enter the Starting Number:"))
# lNum=int(input("Enter the Last Number:"))
# for i in range(sNum,lNum+1):
#     for j in range(sNum,lNum+1):
#         if j==sNum:
#             print(i,end="\t")
#         elif i==sNum:
#             print(j,end="\t")
#         else:
#             print(i*j,end="\t")
#     print()

# # program which will add two square matrices
#
print("Welcome to Matrix Addition Calculator!!!")
matA=[]
matArow=[]
matB=[]
matBrow=[]

order=int(input("Enter the order of square Matrices:"))
print("You are entering Data for Matrix A")
for i in range(order):
    matArow=[]
    for j in range(order):
        inp=int(input(f"Enter data for {i+1} row and {j+1} column:"))
        matArow.append(inp)
    matA.append(matArow)
print("You are entering Data for Matrix B")
for i in range(order):
    matBrow=[]
    for j in range(order):
        inp=int(input(f"Enter data for {i+1} row and {j+1} column:"))
        matBrow.append(inp)
    matB.append(matBrow)
sumMat=[]
sumMatrow=[]
for i in range(order):
    sumMatrow=[]
    for j in range(order):
        sum=matA[i][j]+matB[i][j]
        sumMatrow.append(sum)
    sumMat.append(sumMatrow)

print("The sum of Matrices is: ")
for i in sumMat:
    print(i,end="\n")

# Q7
# print("Welcome to Matrix Multiplication Calculator!!!")
# matA=[]
# matArow=[]
# matB=[]
# matBrow=[]
#
# order=int(input("Enter the order of square Matrices:"))
# print("You are entering Data for Matrix A")
# for i in range(order):
#     matArow=[]
#     for j in range(order):
#         inp=int(input(f"Enter data for {i+1} row and {j+1} column:"))
#         matArow.append(inp)
#     matA.append(matArow)
# print("You are entering Data for Matrix B")
# for i in range(order):
#     matBrow=[]
#     for j in range(order):
#         inp=int(input(f"Enter data for {i+1} row and {j+1} column:"))
#         matBrow.append(inp)
#     matB.append(matBrow)
# print("Answer is")
# multMat=[]
# multMatrow=[]
# result=0
# for i in range(order):
#     multMatrow=[]
#     for j in range(order):
#         result=0
#         for k in range(order):
#             result+=matA[i][k]*matB[k][j]
#         multMatrow.append(result)
#     multMat.append(multMatrow)
# for i in multMat:
#     print(i)

















