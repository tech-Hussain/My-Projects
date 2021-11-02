no_of_palindrome=int(input("How many numbers you want to input to find its next palindrome:"))
input_list3=[]
output_list=[]
i=0
while i<no_of_palindrome:
    if i==0:
        input_numbers=input(f"Enter {i+1}st number:")
    elif i==1:
        input_numbers = input(f"Enter {i + 1}nd number:")
    elif i==2:
        input_numbers = input(f"Enter {i + 1}rd number:")
    else:
        input_numbers = input(f"Enter {i + 1}th number:")
    if int(input_numbers) >= 10:
        input_list3.append(input_numbers)
    else:
        print("PLease enter number greater than 9")
        i = i - 1
    i=i+1
for item in input_list3:
    item=str(int(item)+1)
    while not(item==item[::-1]):
        value=int(item)+1
        item=str(value)
    output_list.append(item)

for y in output_list:
    print(y)