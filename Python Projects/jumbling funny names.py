import random
print("This is name jumbling funny game created and designed by Syed Muhammad Hussain")
no_of_names=int(input("How many names you want to enter:"))
if no_of_names<=1:
    print("Please Enter atleast two names to jumble it")
else:
    list1=list()
    first_name=list()
    last_name=[]
    output=list()
    print("Note:Name should consist of two parts first name and last name separated with space")
    for i in range(no_of_names):
        if i == 0:
            names = input(f"Enter {i + 1}st name:")
        elif i == 1:
            names = input(f"Enter {i + 1}nd name:")
        elif i == 2:
            names = input(f"Enter {i + 1}rd name:")
        else:
            names = input(f"Enter {i + 1}th name:")
        list1.append(names)
    for item in list1:
        f=item.split(" ")
        first_name.append(f[0])
        last_name.append(f[1])
    iter=0

    possibility=[]
    n=[]
    for items in first_name:
        possibility=[]
        for y in range(len(first_name)):
            possibility.append(1)
        for h in n:
            possibility[h]=0
        possibility[iter]=0

        a=random.choices(last_name,weights=possibility,k=1)
        n.append(last_name.index(a[0]))
        for x in a:
            op=f"{items} {x}"
            output.append(op)
        iter+=1
    z=1
    for item4 in output:
        print(f"{z}) {item4}")
        z=z+1