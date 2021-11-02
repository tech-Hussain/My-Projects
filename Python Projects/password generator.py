import random,clipboard
spc=[]
ul=[]
ll=[]
num=[]
for i in range(35,39):
    spc.append(chr(i))
for i in range(91,95):
    spc.append(chr(i))
for i in range(65,91):
    ul.append(chr(i))
for i in range(97,123):
    ll.append(chr(i))
for i in range(48,58):
    num.append(chr(i))
st=random.choices(ul,k=3)
st.extend(random.choices(ll,k=4))
st.extend(random.choices(spc,k=4))
st.extend(random.choices(num,k=5))
st.extend(random.choices(ul,k=3))
c=""
for item in st:
    c=c+item
clipboard.copy(c)
print(c,"\nYour password is copied to clipboard")


