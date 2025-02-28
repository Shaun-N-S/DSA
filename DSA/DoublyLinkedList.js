class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
    }

    addFirst(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        if(this.head){
            this.head.prev = newNode;
        }
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

        newNode.prev = current;
        current.next = newNode;

    }

    size(){
        let count  = 0;
        let current = this.head;
        while(current){
            count++;
            current = current.next;
        }
        return count;
    }

    addAt(index,data){
        if(index<0||index>this.size()){
            console.error("Invalid index");
            return;
        }

        const newNode = new Node(data);
        if(index === 0){
            newNode.next = this.head;
            if(this.head){
                this.head.prev = newNode;
            }
            this.head = newNode;
            return;
        }

        let current = this.head;
        for(let i=0;i<index;i++){
            current = current.next;
        }

        newNode.prev = current;
        newNode.next = current.next;

        if(current.next){
            current.next.prev = newNode;
        }

        current.next = newNode;

    }

    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;

        if(this.head){
            this.head.prev = null;
        }

    }

    removeLast(){
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head = null;
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
            console.error("Invalid index");
            return;
        }

        if(index === 0){
            this.head = this.head.next;
        }

        let current = this.head;
        for(let i=0;i<index-1;i++){
            current = current.next;
        }

        

        if(current.next){
            current.next = current.next.next;
        }

        if(current.next){
            current.next.prev = current;
        }

    }

    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}


const dll = new DoublyLinkedList();

dll.addFirst(1);
dll.addFirst(2);
dll.addFirst(3);
dll.addLast(4);

dll.addAt(2,5);

// dll.removeFirst();
// dll.removeLast();

dll.removeAt(2);


dll.print();