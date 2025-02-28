class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    
    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    
    addLast(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    
    size(){
        let count = 0;
        let current = this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }
    
    addAt(index,data){
        if(index<0||index>this.size()){
            console.error("Invalid Index");
        }
        const newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
    
    removeTop(data){
        if(!this.head){
            return;
        }
        this.head = this.head.next;
    }
    
    removeLast(data){
        if(!this.head){
            return;
        }
        
        let current = this.head;
        while(current.next.next){
            current = current.next;
        }
        
        current.next = null;
    }
    
    removeAt(index){
        if(index<0||index>this.size()){
            console.error("Invalid Index");
            return;
        }
        
        if(index === 0){
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next
        }
        if(current.next){
            current.next = current.next.next
        }
    }
    
    
    print(data){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    
}


const linkedlist = new LinkedList();

linkedlist.addFirst(1);
linkedlist.addFirst(2);
linkedlist.addFirst(3);
linkedlist.addLast(4);
linkedlist.addLast(5);
linkedlist.removeTop();
linkedlist.addAt(2,10)
linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log("size = "+linkedlist.size())

























