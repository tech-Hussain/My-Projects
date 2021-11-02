def multiplication():
    import random
    num1 = int(input("Enter number to print its multiplication table:"))
    answers = []
    for item in range(1, 11):
        ans = num1 * item
        answers.append(ans)
    a=random.randint(1,8)
    answers[a]=random.randint((random.randint(answers[a]-2,answers[a]-1)),(random.randint(answers[a]+1,answers[a]+2)))
    print(answers)
    return answers,num1
def correct(table):
    list1=list(table)
    number=list1[1]
    tb=list1[0]
    answers = []
    for item in range(1, 11):
        ans = number * item
        answers.append(ans)
    for i in range(0,10):
        if not(tb[i]==answers[i]):
            print(f"Wrong number detected!!Position is {i+1}")
            break
        if i==9:
            if tb[i] == answers[i]:
                print("No wrong value detected")
correct(multiplication())