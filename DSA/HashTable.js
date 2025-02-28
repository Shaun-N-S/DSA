//without collosion handling

class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]); // Store key-value pairs to handle collisions
    }

    get(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined; // Return undefined if key not found
    }

    remove(key) {
        const index = this.hash(key);
        if (this.table[index]) {
            this.table[index] = this.table[index].filter(pair => pair[0] !== key);
            if (this.table[index].length === 0) {
                this.table[index] = undefined;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example usage
const table = new HashTable(50);
table.set("name", "Shaun");
table.set("age", 18);
table.set("city", "Bangalore");

console.log(table.get("name")); // Shaun
console.log(table.get("city")); // Bangalore

table.remove("age");
table.display();



//with collosion handling


class HashTable2 {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyIndex = bucket.findIndex(item => item[0] === key);
            if (sameKeyIndex !== -1) {
                bucket[sameKeyIndex][1] = value; // Update value if key exists
            } else {
                bucket.push([key, value]); // Add new key-value pair
            }
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (bucket) {
            const sameKeyItem = bucket.find(item => item[0] === key);
            if (sameKeyItem) {
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            const sameKeyIndex = bucket.findIndex(item => item[0] === key);
            if (sameKeyIndex !== -1) {
                bucket.splice(sameKeyIndex, 1);
                if (bucket.length === 0) {
                    this.table[index] = undefined; // Cleanup empty buckets
                }
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// ✅ Example usage
const table1 = new HashTable2(50);
table1.set("name", "Shaun");
table1.set("age", 18);
table1.set("city", "Bangalore");

console.log(table1.get("name")); // Shaun
console.log(table1.get("city")); // Bangalore

table1.remove("age");
table1.display();
