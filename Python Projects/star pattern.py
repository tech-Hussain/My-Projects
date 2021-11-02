inp=int(input("Please enter number of rows\n"))
boolean=int(input("Enter 1 to print forward pattern or Enter 2 to print backward pattern\n"))
if boolean==1:
    number=1
    star = "*"
    while(number<=inp):
        print(star*number)
        number=number+1
elif boolean==2:
    number=inp
    while (number >= 1):
        star = '*'
        print(star * number)
        number = number - 1
else:
    print("Please enter valid number to print pattern")
