t = int(input())#test case

a=[] #n l k
b=[] # speeds (total n)

output =[]
if t>=1 and t<=200:

    for i in range(t):

        inp = input().split()

        a = inp

        if len(a)==3:

            n = int(a[0])#number of participants
            k = int(a[1])#change with one drug
            l = int(a[2])#Max drugs -1 

            inp = input().split()

            b = inp

            si = False

            for i in range(len(b)):
                if int(b[i])>=1 and int(b[i])<=1000:
                    si = True
                else:
                    si = False
                    break

            if len(b)==n and n>=1 and n<=1000 and si==True:

                if  l>=1 and l<=1000 and k>=-1000 and k<=1000:

                    muhspeed = int(b[len(b)-1])

                    if l-1>0 and k>0:
                        for i in range(l-1):
                            muhspeed += k
                    
                    winning = 0

                    for i in range(len(b)-1):

                        if muhspeed > int(b[i]):
                            winning = 1

                        else:
                            winning = 0
                            output.append("No")
                            break
                    
                    if winning == 1:
                        output.append("Yes")

for i in output:
    print(i)

                