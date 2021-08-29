t = int(input())#test case

arr=[]

if t>=1 and t<=100:

    for i in range(t):

        inp = input().split()

        arr.append(inp)
    
    #Upto this is same in all codechef problems

    for i in arr:
        if len(i)==3:
            sa = int(i[0])
            sb = int(i[1])
            sc = int(i[2])

            if sa>=1 and sb>=1 and sc>=1 and sa<=100 and sb<=100 and sc<=100:
                if sa!=sb and sb!=sc and sc!=sa:

                    if sa<sb and sa<sc:
                        print("Draw")
                    
                    if sb<sa and sb<sc:
                        print("Bob")

                    if sc<sa and sc<sb:
                        print("Alice")


                