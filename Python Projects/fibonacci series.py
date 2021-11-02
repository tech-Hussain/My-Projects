num = int(input("Enter the number to find nth fibonacci number:"))
n = [0, 1]
i = 0
while i <= (num-2):
    add = n[len(n)-1]+n[(len(n)-2)]
    n.append(add)
    i += 1
print(n[len(n)-1])
for i in n:
    print(i, end=" ")