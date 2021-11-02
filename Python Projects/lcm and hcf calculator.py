print("This is L.C.M and H.C.F calculator developed in python by Syed Muhammad Hussain")
while True:
    choice = int(input("Press 1 for L.C.M calculator, 2 for H.C.F calculator or 3 for exit\n"))
    if choice==1:
                        #LCM
        print("Enter numbers to find their L.C.M\nNote:Numbers must be separated with commas")
        a=input()
        numbers=a.split(',')
        numbers=[int (i) for i in numbers]
        if len(numbers)<2:
            print("Please enter two or more values")
        else:
            c=1
            if 0 in numbers:
                print("L.C.M of 0 can't be calculated.Please remove it then try again!")
            else:
                while True:
                    numbers1 = [(c % item == 0) for item in numbers]
                    if all(numbers1)==True:
                        print(f"L.C.M: {c}")
                        break
                    else:
                        c=c+1
                            #HCF
    elif choice==2:
        print("Enter numbers to find their H.C.F\nNote:Numbers must be separated with commas")
        a=input()
        numbers=a.split(',')
        numbers=[int (i) for i in numbers]
        if len(numbers)<2:
            print("Please enter two or more values")
        else:
            max1=max(numbers)
            if any(numbers)==False:
                print("Please try again with one non-zero value")
            else:
                while True:
                    numbers1=[(item % max1 == 0) for item in numbers]
                    if all(numbers1) == True:
                        print(f"H.C.F: {max1}")
                        break
                    else:
                        max1=max1-1
    elif choice==3:
        print("Thanks for using my calculator.Have a good day!!")
        break
    else:
        print("Please enter correct choice")


