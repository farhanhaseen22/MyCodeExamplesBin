
def insertIntoMap(occurenceMap, val):
    try:
        if (occurenceMap[val]):
            occurence = occurenceMap.get(val)
            occurenceMap[val] = occurence + 1
    except:
        occurenceMap[val] = 1

def getOccurenceMap(arr):
    occurenceMap = {};
    for val in arr:
        insertIntoMap(occurenceMap, val)
    
    return occurenceMap

def countTriplets(arr, r):
    rhsNums = getOccurenceMap(arr)
    # print(rhsNums)
    lhsNums = {}
    numberOfGeometricPairs = 0
    for val in arr:
        countLeft = 0
        countRight = 0
        lhs = 0
        rhs = val * r;
        if (val % r == 0):
            lhs = val / r
        occrnceOfNum = rhsNums.get(val)
        rhsNums[val] = occrnceOfNum - 1

        try:
            if (rhsNums[rhs]):
                countRight = rhsNums.get(rhs)
        except:
            pass
        try:
            if (lhsNums[lhs]):
                countLeft = lhsNums.get(lhs)
        except:
            pass
        
        numberOfGeometricPairs += countLeft * countRight
        
        insertIntoMap(lhsNums, val)
        
    return numberOfGeometricPairs

def main():
    # arr=[1,3,3,9,3,27,81]
    arr=[1,2,4,2,4]
    r=2
    print(countTriplets(arr, r))

if __name__ == "__main__":
    main()