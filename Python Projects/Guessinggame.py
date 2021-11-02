import random
a=random.randint(1,100)
num=7
turn=1
print("Welcome to our guessing game developed in python by Syed Muhammad Hussain")
print("Enter a number to guess actual number which lies between 1 and 100")
print("You have 7 turns to guess the number")
while(True):
    if num==0:
        print("Your game is over")
        print("Right number is",a)
        break
    inp=int(input())
    if num==1:
        if inp == a:
            print("Congratulations You guess the right number")
            print("You guess the number in last turn")
            break
        elif inp > a:
            num=num-1
            continue
        elif inp < a:
            num=num-1
            continue
    if inp==a:
        print("Congratulations You guess the right number")
        print("You guess the number in",turn,"turn")
        break
    elif inp>a:
        print("Please enter lesser number")

    elif inp<a:
        print("Please enter greater number")
    num = num - 1
    turn=turn+1
    print("You have", num, " guesses left")


