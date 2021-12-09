class newNode:
 
    # Construct to create a newNode
    def __init__(self, key):
        self.info = key
        self.left = None
        self.right = None
        self.level = 0
 
# function should print the topView
# of the binary tree

def topview(root):
 
    if(root == None):
        return
    q = []
    m = dict()
    level = 0
    root.level = level

    q.append(root)
    # print(len(q))

    while(len(q)):
        root = q[0]
        level = root.level
        
        if level not in m:
            m[level] = root.info
        if(root.left):
            root.left.level = level - 1
            q.append(root.left)
 
        if(root.right):
            root.right.level = level + 1
            q.append(root.right)
 
        q.pop(0)
    
    for i in sorted(m):
        print(m[i], end=" ")
        
if __name__ == '__main__':

    root = newNode(1)
    root.left = newNode(2)
    root.right = newNode(3)
    root.left.right = newNode(4)
    root.left.right.right = newNode(5)
    root.left.right.right.right = newNode(6)
    print("Following are nodes in top",
          "view of Binary Tree")
    topview(root)