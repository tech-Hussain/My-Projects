import random
choices=["Scissor","Paper","Stone"]
chose=random.choice(choices)
print("This is scissor,stone and paper game developed in python by Syed Muhammad Hussain")
print("Rules:\n1)This game is repeated by 10 times\n2)The one got more points wins the game\n")
print("Lets play!Best of luck")
a=1
comp=0
player=0
while a<=10:
    choices = ["scissor", "paper", "stone"]
    chose = random.choice(choices)
    user=input("Enter: \n's' for scissor\n'st' for stone\n'p' for paper\n")
    print("Computer: "+chose)
    if (chose=='scissor' and user=='p') or (chose=='paper' and user =='st') or (chose =='stone' and user =='s'):
        print("Computer get one point")
        comp=comp+1
    elif (user=='s' and chose=='paper') or (user=='p' and chose =='stone') or (user =='st' and chose =='scissor'):
        print("You get one point")
        player=player+1
    elif (user=='s' and chose=='scissor') or (user=='p' and chose =='paper') or (user =='st' and chose =='stone'):
        print("No one get any point")
    else:
        print("Please enter correct choice.This is not calculated as a turn")
        a=a-1
    a=a+1
if comp>player:
    print("Sorry!You lose.Try again later")
elif comp==player:
    print("Game is drawn")
else:
    print("Congratulations you have won the game")
print("You got",player,"points")
print("Computer got",comp,"points")