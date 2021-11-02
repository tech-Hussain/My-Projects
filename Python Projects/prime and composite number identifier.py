print("This is Prime and composite number identifier developed in python by Syed Muhammad Hussain")
print("Find out whether your number is prime or composite")
num=int(input())
a=1
factors=[]
while a<=num:
    if num%a==0:
        factors.append(a)
    a=a+1
if len(factors)==1:
    print(f"{num} is neither prime nor composite")
elif len(factors)==2:
    print(f"{num} is prime number and can be factorized by following numbers:")
    length = len(factors)
    for item in factors[0:length - 2]:
        print(item, end=",")
    print(factors[length - 2], end=" and ")
    print(factors[length - 1])
elif len(factors)>2:
    print(f"{num} is composite number and can be factorized by following numbers:")
    length=len(factors)
    for item in factors[0:length-2]:
        print(item,end=",")
    print(factors[length-2],end=" and ")
    print(factors[length-1])
else:
    print("Please enter valid value")
