
def countSwaps(arr):
    
    n = len(arr)
    sc = 0
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
                sc += 1
        if swapped == False:
            break

    s1 = 'Array is sorted in '+str(sc)+' swaps.'
    s2 = 'First Element: '+str(arr[0])
    s3 = 'Last Element: '+str(arr[n-1])
    print(s1)
    print(s2)
    print(s3)
if __name__ == '__main__':
    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    countSwaps(a)
