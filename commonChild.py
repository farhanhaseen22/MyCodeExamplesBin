from collections import Counter

def commonChild(s1, s2):
    
    newS1=Counter(s1)
    newS2=Counter(s2)

    curatedS1=[]
    curatedS2=[]

    for letter in s1:
        if letter in newS2.keys():
            curatedS1.append(letter)

    for letter in s2:
        if letter in newS1.keys():
            curatedS2.append(letter)


    newBest=0
    lnth=len(curatedS1)-1
    for x in range(lnth):
        m=x
        best=0
        i=0
        breakAlert=0
        while(i<len(curatedS2)):
            if(curatedS1[m]==curatedS2[i]):
                best+=1
                i+=1
                m+=1
                breakAlert=1
            else:
                i+=1
                if breakAlert==1:
                    break
        if best>newBest:
            newBest=best

    return newBest


if __name__ == '__main__':

    s1 = 'SHINCHAN'
    s2 = 'NOHARAAA'

    result = commonChild(s1, s2)

    print(str(result) + ' ')