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


// Double Hashing methode

class HashTable3 {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // First hash function
    hash1(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }

    // Second hash function (must return a non-zero step size)
    hash2(key) {
        let prime = 7; // A prime number smaller than the table size
        return prime - (this.hash1(key) % prime);
    }

    // Insert key-value pair
    set(key, value) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let i = 0;

        while (this.table[(index + i * stepSize) % this.size] !== undefined) {
            i++; // Find next available slot using double hashing
        }

        this.table[(index + i * stepSize) % this.size] = [key, value];
    }

    // Retrieve value by key
    get(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let i = 0;

        while (this.table[(index + i * stepSize) % this.size] !== undefined) {
            let [storedKey, value] = this.table[(index + i * stepSize) % this.size];
            if (storedKey === key) return value;
            i++;
        }

        return undefined; // Key not found
    }

    // Remove key-value pair
    remove(key) {
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let i = 0;

        while (this.table[(index + i * stepSize) % this.size] !== undefined) {
            let [storedKey] = this.table[(index + i * stepSize) % this.size];
            if (storedKey === key) {
                this.table[(index + i * stepSize) % this.size] = undefined;
                return;
            }
            i++;
        }
    }

    // Display hash table
    display() {
        this.table.forEach((entry, index) => {
            if (entry) console.log(index, entry);
        });
    }
}

// ✅ Example usage
const table2 = new HashTable3(11); // Use prime size for better performance
table2.set("name", "Shaun");
table2.set("age", 18);
table2.set("city", "Bangalore");

console.log(table2.get("name")); // Shaun
console.log(table2.get("city")); // Bangalore

table2.remove("age");
table2.display();







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
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
            if (index === startIndex) {
                console.log("Hash table is full");
                return;
            }
        }

        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
            if (index === startIndex) break;
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        let startIndex = index;

        while (this.table[index]) {
            if (this.table[index][0] === key) {
                this.table[index] = null; // Mark as deleted (null)
                return;
            }
            index = (index + 1) % this.size;
            if (index === startIndex) break;
        }
    }

    display() {
        for (let i = 0; i < this.size; i++) {
            console.log(i, this.table[i]);
        }
    }
}

// Example usage
const ht = new HashTable(10);
ht.set("name", "Shaun");
ht.set("age", 18);
ht.set("city", "NY");
console.log(ht.get("age")); // 18
ht.remove("age");
console.log(ht.get("age")); // undefined
ht.display();
