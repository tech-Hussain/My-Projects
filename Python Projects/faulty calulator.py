num1=int(input("Please enter first number\n"))
num2=int(input("Please enter second number\n"))
oper=input("Enter the operator to calculate your numbers\n")
if (num1 == 45 or num1== 3) and (num2== 3 or num2== 45) and (oper=="*"):
    if num1==num2:
        print("Your answer is",num1*num2)
    else:
        print("Your answer is 555")
elif (num1 == 56 or num1== 9) and (num2== 56 or num2== 9) and (oper=="+"):
    if num1==num2:
        print("Your answer is",num1+num2)
    else:
        print("Your answer is 77")
elif (num1 == 56) and (num2 == 6) and (oper=="/"):
    print("Your answer is 4")
elif oper=="+":
    print("Your answer is",num1+num2)
elif oper=="-":
    print("Your answer is",num1-num2)
elif oper=="*":
    print("Your answer is",num1*num2)
elif oper=="/":
    print("Your answer is",num1/num2)
else:
    print("Enter valid arithmetic operator")



