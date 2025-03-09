class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new TreeNode(value);
        if(!this.root){
            this.root = newNode;
            return;
        }

        let current = this.root;
        while(current){
            if(value < current.value){
                if(!current.left){
                    current.left = newNode;
                    return ;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    contains(value){
        let current = this.root;
        while(current){
            if(value === current.value) return true;
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }

    delete(value){
        this.root = this._deleteNode(this.root,value);
    }

    _deleteNode(root,value){
        if(!root) return null;
        if(value < root.value){
            root.left = this._deleteNode(root.left,value);
        }else if(value > root.value){
            root.right = this._deleteNode(root.right,value);
        }else{
            if(!root.left) return root.right;
            if(!root.right) return root.left;

            root.value = this._minValue(root.right);
            root.right = this._deleteNode(root.right,root.value);
        }
        return root;
    }

    _minValue(node){
        while(node.left){
            node = node.left;
        }
        return node.value;
    }

    inorder(node = this.root){
        if(node){
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }


    preorder(node = this.root){
        if(node){
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }


    postorder(node = this.root){
        if(node){
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }


}



const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12); 
bst.insert(17);


bst.inorder();
console.log('-----------------');
bst.preorder();
console.log('-----------------');
bst.postorder();
console.log('-----------------');
bst.delete(10);
bst.inorder();
console.log('-----------------');
console.log(bst.contains(10));
console.log(bst.contains(5));




// Find the closest value in BST.

function findClosest(tree,target){
    let closest = tree.root.value;
    let current = tree.root;

    while(current){
        if(Math.abs(target - closest) > Math.abs(target - current.value)){
            closest = current.value;
        }
        current = target < current.value ? current.left : current.right;
    }
   return closest;
}

console.log(findClosest(bst,9)); 

function isValidBST(node,min = -Infinity,max = Infinity){
    if(!node) return true;
    if(node.value <= min || node.value >= max) return false;
    return isValidBST(node.left,min,node.value) && isValidBST(node.right,node.value,max);
}

console.log(isValidBST(bst.root));