# Q1
# calTotal=int(input("Enter amount of Calories you intake everyday:"))
# fatGm=float(input("Enter the amount of fat in grams you intake everyday:"))
# if(calTotal==0 or fatGm==0):
#     print("Either the calories or fat grams were incorrectly entered")
# else:
#     fatCal=fatGm*9
#     if fatCal>calTotal:
#         print("Either the calories or fat grams were incorrectly entered")
#     else:
#         fatCalPerc=(fatCal/calTotal)*100
#         print(fatCalPerc)
#
#         if fatCalPerc<30:
#             print("Diet is low in fat calories")
#         else:
#             print("Your Diet is perfect in fat intake")

# Q2
coffeeSteps=["Putting Water","Adding Sugar","Mixing well","Adding Coffee","Adding Milk","Again mixing well"]
coffeeStepsM=["Put Water","Add Sugar","Mix well","Add Coffee","Add Milk","Mix well again"]
def instruction():
    print("Welcome to DCafe!!!")
    print("Would you like to take Black coffee or White Coffee")
    while(True):
        tCoffee=input("Please Enter B for Black or W for White:")
        if tCoffee == "b" or tCoffee == "B" or tCoffee == "w" or tCoffee=="W":
            break
        else:
            print("Please make correct choice")
    print("What would be the size double or manual")
    while(True):
        sCoffee=input("Please Enter D for double or R for regular:")
        if sCoffee == "d" or sCoffee == "D" or sCoffee == "r" or sCoffee=="R":
            break
        else:
            print("Please make correct choice")
    print("Would you like automatic baking or manually")
    while (True):
        wCoffee = input("Please Enter A for automatic or M for manual:")
        if wCoffee == "a" or wCoffee == "A" or wCoffee == "m" or wCoffee == "M":
            break
        else:
            print("Please make correct choice")
    return tCoffee,sCoffee,wCoffee
def coffeemethod(meth,tcof):
    if meth=="A" or meth == "a":
        if tcof=="b":
            for i in coffeeSteps:
                if i!="Adding Milk":
                    print(i)
            print("Your coffee is ready")
        elif tcof=="w":
            for j in coffeeSteps:
                print(j)
            print("Your coffee is ready")
    elif meth=="m" or meth=="M":
        if tcof=="b":
            for i in coffeeStepsM:
                if i!="Add Milk":
                    print(f"Would you like to {i}")
                    choice=input("Press s for skip or any key to continue:")
            print("Your coffee is ready")
        elif tcof=="w":
            for j in coffeeStepsM:
                print(f"Would you like to {j}")
                choice = input("Press s for skip or any key to continue:")
            print("Your coffee is ready")
def coffeeTime(content):
    bCoffee=105
    wCoffee=76
    if content[0] == "b" or content[0] == "B":
        if content[1] == "d" or content[1] == "D":
            print(f"Your estimated double size Black Coffee baking time is {((50/100)*bCoffee)+bCoffee} mins")
            coffeemethod(content[2],"b")
        elif content[1] == "r" or content[1] == "R":
            print(f"Your estimated manual size Black Coffee baking time is {bCoffee} mins")
            coffeemethod(content[2],"b")

    elif content[0] == "w" or content[0] == "W":
        if content[1] == "d" or content[1] == "D":
            print(f"Your estimated double size White Coffee baking time is {((50/100)*wCoffee)+wCoffee} mins")
            coffeemethod(content[2],"w")
        elif content[1] == "r" or content[1] == "R":
            print(f"Your estimated manual size White Coffee baking time is {wCoffee} mins")
            coffeemethod(content[2],"w")
contentCofee=instruction()
coffeeTime(contentCofee)


# Q3
# a=11
# for i in range(7):
#     print(a,end="\t")
#     a+=5
# print()
# b=3
# for i in range(7):
#     print(b,end="\t")
#     b+=5
# print()
# c=20
# for i in range(7):
#     print(c,end="\t")
#     if i%2==0:
#         continue
#     else:
#         c-=3

# Q4
# List1 = [10, 7, 4, 9, 5, 18, 2, 1, 8, 11, 12, 6, 3, 1, 11, 24]
# Length=len(List1)
# avgList=(sum(List1)/Length)
# List1.pop(0)
# List1.insert(0,avgList)
# List1.pop(Length-1)
# List1.insert(Length,avgList)
# List1.pop(int(Length / 2))
# List1.insert(int(Length / 2), avgList)
# List1.pop((int(Length/ 2))-1)
# List1.insert((int(Length / 2)-1), avgList)
# print(List1)

# Q5
# def interest(rate):
#     i=1
#     year=1
#     while(True):
#         i=(i*rate)+i
#         if i>=2:
#             break
#         year+=1
#
#     return year
# print("Enter interest rate in floating points to know when your investment will be doubled")
# print("Note: 0.02 corresponds to 20%")
# rate=float(input("Enter:"))
# doubleYear=interest(rate)
# print(f"Your investment will be doubled in {doubleYear} years")


# Q6
# def mult3(listInp):
#     for i in listInp:
#         if i%3==0:
#             print(i,end="\t")
#
# numList=[]
# print("Write Series of Numbers and get only Multiples of 3")
# print("Note:If you want to exit, press just enter key without typing anything.")
# while True:
#     num=input("Enter the Number:")
#     if num=="":
#         break
#     else:
#         numList.append(int(num))
#
# mult3(numList)

# Q7
# def indexes(word,char):
#     charindexes=[]
#     for i in range(0,len(word)):
#         if char==word[i]:
#             charindexes.append(i)
#     return charindexes
# wordInp=input("Enter the Word:")
# charInp=input("Enter the Character to find out its occurrences in above word:")
# charIndexes=indexes(wordInp,charInp)
# if len(charIndexes)==0:
#     print(f"No occurrence of {charInp} in {wordInp} are found")
# else:
#     print(f"The occurrence of {charInp} in {wordInp} are these indexes {charIndexes}")

# Q8
# def month(num):
#     abbrMonthStr="1Jan 2Feb 3Mar 4Apr 5May 6Jun 7Jul 8Aug 9Sep 10Oct 11Nov 12Dec"
#     index=abbrMonthStr.find(str(num))
#     numLen=len(str(num))
#     abbr=abbrMonthStr[(index+1)+(numLen-1):(index+4)+(numLen-1)]
#     return abbr
#
# monthNumInp=int(input("Enter the Month number to get its abbreviations:"))
# print(month(monthNumInp))

# Q9
# def many(fname):
#     f = open(fname)
#     content = f.read()
#     content = content.replace(".", "")
#     content = content.replace(",", "")
#     word = content.split()
#     len1=0
#     len2=0
#     len3=0
#     len4=0
#     for i in word:
#         if len(i)==1:
#             len1+=1
#         elif len(i)==2:
#             len2+=1
#         elif len(i)==3:
#             len3+=1
#         elif len(i)==4:
#             len4+=1
#     print(f"Words of length 1 : {len1}")
#     print(f"Words of length 2 : {len2}")
#     print(f"Words of length 3 : {len3}")
#     print(f"Words of length 4 : {len4}")
#     f.close()
#
#
# many("test.txt")

# Q10
# def crypto(fname):
#     f=open(fname)
#     content=f.read()
#     updatedContent= content.replace("secret","xxxxxx")
#     print(updatedContent)
#     f.close()
# crypto("sample.txt")
#
