def add(data, b):
    f = open(b, "a")
    month1=month()
    b1=open(f"{month1}.txt","a")
    a = f.write(str(getdate()) + ': ' + data + '\n')
    b2 = b1.write(str(getdate()) + ': ' + data + '\n')
    f.close()
def month():
    a=getdate()
    x=a.split('/')
    return int(x[1])

def retreive(info):
    f = open(info)
    content = f.read()
    print(content)
    f.close()

def getdate():
    import datetime
    x = datetime.datetime.now()
    return x.strftime("%d/%m/%Y %I:%M %p")


def addexp(fuel):
    f = open(fuel)
    str1 = f.read()
    res = [int(s) for s in str1.split() if s.isdigit()]
    print("You spend total " + str(sum(res)) + "rs")
    f.close()


print("This is maintenance management system developed in python by Syed Muhammad Hussain")
while (True):
    print("Did you want to add, retrieve your data or get sum of your expenses")
    addorret = int(input("Press 1 to add or 2 to retreive or 3 to get sum of expenses \n"))


    if addorret == 1:
        name = int(input("Press \n1 for maintenance\n2 for bashir-help\n3 for extra payment\n"))
        if name == 1:
            ex = input("What update you want add in your maintenance management system\n")
            add(ex, "maintenance.txt")
            print("You have successfully updated your data in your maintenance management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 2:
            ex = input("What update you want add in your help-of-bashir management system\n")
            add(ex, "help-of-bashir.txt")
            print("You have successfully updated your data in your help-of-bashir management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 3:
            ex = input("What update you want add in your extra-payment management system\n")
            add(ex, "extra-payment.txt")
            print("You have successfully updated your data in your extra-payment management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        else:
            print("Please enter valid choice")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
    elif addorret == 2:
        name = int(input("Press \n1 for maintenance\n2 for bashir-help\n3 for extra payment\n4 for month\n"))
        if name == 1:
            retreive("maintenance.txt")
            print("You have successfully retreive your data from your maintenance management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 2:
            retreive("help-of-bashir.txt")
            print("You have successfully retreive your data from your help-of-bashir management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 3:
            retreive("extra-payment.txt")
            print("You have successfully retreive your data from your extra-payment management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 4:
            mon=int(input("Enter no of month:"))
            if mon>=1 and mon<=12:
                retreive(f"{mon}.txt")
            else:
                print("Please enter in range of 1 to 12")
            print("You have successfully retreive your data from your extra-payment management system")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        else:
            print("Enter valid choice")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue

    elif addorret == 3:
        name = int(input("Press \n1 for maintenance\n2 for bashir-help\n3 for extra payment\n4 for month\n"))
        if name == 1:
            addexp("maintenance.txt")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 2:
            addexp("help-of-bashir.txt")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 3:
            addexp("extra-payment.txt")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        elif name == 4:
            mon = int(input("Enter no of month:"))
            if mon >= 1 and mon <= 12:
                addexp(f"{mon}.txt")
            else:
                print("Please enter in range of 1 to 12")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
        else:
            print("Enter valid choice")
            ite = input("Press Enter key to continue or 1 to quit: ")
            if ite == '1':
                break
            else:
                continue
    else:
        print("Enter valid choice")
        ite = input("Press Enter key to continue or 1 to quit: ")
        if ite == '1':
            break
        else:
            continue
