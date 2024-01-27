import random
# # Q1
# cities=["Karachi","Lahore","Faisalabad","Multan","Islamabad"]
# random.shuffle(cities)
# print(cities)

# Q2
# students=["Hussain","Ali","Faiz","Ahmed","Ahsan","Adnan"]
# newStudent=students.copy()
# students.pop()
# luckyStudents=random.sample(newStudent,k=2)
# for student in luckyStudents:
#     print(student,"got scholarship")

# Q3
def roll_dice(dice):
    return random.choice(dice)

dice1=[1,2,3,4,5,6]
dice2=[1,2,3,4,5,6]
players=["Player1","Player2"]
print("Start Playing")
x=0
while True:
    for player in players:
        print(f"Its turn of {player}")
        input("Enter Any key to Roll Dice")
        diceRolled1=roll_dice(dice1)
        diceRolled2=roll_dice(dice2)
        print(f"{player} rolled {diceRolled1}")
        print(f"{player} rolled {diceRolled2}")
        if diceRolled1==6 and diceRolled2==6:
            print(f"{player} got a match")
            x=1
            break
    if x==1:
        break

