import time

with open("search engine.txt","r") as f:
    doc=f.read()
    doc1=doc.splitlines()
query=input("Enter your query string:")
tm=time.time()
query_list=query.split(" ")
maximum=[]
for item in query_list:
    a=item.lower()
    for i in doc1:
        b=i.lower()
        if a in b and a not in maximum:
            maximum.append(i)


order=[]
for h in query_list:
    g=h.lower()
    for m in maximum:
        n=m.lower()
        l=n.count(g)
        order.append(l)
order.sort(reverse=True)

out=[]
for h in query_list:
    g=h.lower()
    for j in order:
        for m in maximum:
            n=m.lower()
            l=n.count(g)
            if l==j and m not in out:
                out.append(m)

v=1
print(f"{len(out)} results found ({time.time()-tm} seconds) ")
for q in out:
    print(f"{v}) {q}")
    v=v+1