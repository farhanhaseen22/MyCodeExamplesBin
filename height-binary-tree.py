class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

def treeHeight(root):
    if root is None:
        return 0
     
    # Create a empty queue for level order traversal
    queue = []
    queue.append(root)
    height = 0
 
    while(True):
        totalNodes = len(queue)
        if totalNodes == 0 :
            return height
     
        height += 1
 
        # Dequeue all nodes of current level and Enqueue
        # all nodes of next level
        while(totalNodes > 0):
            node = queue[0]
            queue.pop(0)
            if node.left is not None:
                queue.append(node.left)
            if node.right is not None:
                queue.append(node.right)
 
            totalNodes -= 1

            
 
 
# Driver program to test above function
# Let us create binary tree shown in above diagram
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)
 
print("Height of tree is", treeHeight(root))

