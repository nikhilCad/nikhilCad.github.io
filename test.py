t = int(input())#test case

if t>=1 and t<=288:

    arr=[]

    for i in range(t): 

        inptemp = input()
        arr.append(inptemp)

for inp in arr:
    inp= inp.split()
    if len(inp)==6:

        for i in inp:
            if int(i)>=1 and int(i)<=4:
                if inp[0]!=inp[1]:
                    if inp[2]!=inp[3] and inp[3]!=inp[4] and inp[4]!=inp[5]:
                        pass
                    else:
                        break

        if inp[0] in [inp[2],inp[3]] and inp[1] in [inp[2],inp[3]]:
            print(1)
            continue
        if inp[0] in [inp[4],inp[5]] and inp[1] in [inp[4],inp[5]]:
            print(2)
            continue
        else:
            print(0)


                