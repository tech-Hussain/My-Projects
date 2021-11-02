l=[25,20,18,15,9,7,9]
l1=l.copy()
a=len(l1)-1
mid1=a/2
i=1
y=0
if not(a%2==0):
    mid1=mid1-0.5
    while i<=(a-int(mid1)):
        l1[int(mid1) - y] = l[int(mid1) + i]
        l1[int(mid1) + i] = l[int(mid1) - y]
        y=y+1
        i=i+1
else:
    while i<=(a-int(mid1)):
        l1[int(mid1)-i]=l[int(mid1)+i]
        l1[int(mid1) + i] = l[int(mid1) - i]
        i=i+1

print(l1)
print(l[::-1])
l.reverse()
print(l)