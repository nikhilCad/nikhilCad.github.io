t = int(input())#test case

a=[]
b=[]

output =[]
if t>=1 and t<=64:

    for i in range(t):

        inp = input().split()

        a = inp

        inp = input().split()

        b = inp

        for i in a:
            if i not in ["0", "1"]:
                continue
        
        for i in b:
            if i not in ["0", "1"]:
                continue
        #Upto this is same in all codechef problems

        if len(a)==len(b)==3:

            num1a = 0
            num1b = 0

            for i in range(len(a)):
                
                if a[i]=="1":
                    num1a += 1
                
                if b[i]=="1":
                    num1b += 1
        
            if num1a==num1b:
                output.append("Pass")
            else:
                output.append("Fail")

for i in output:
    print(i)

                