// Trie Node Class
class TrieNode {
    constructor() {
      this.children = {}; // Stores child nodes (characters)
      this.isEndOfWord = false; // Marks the end of a valid word
    }
  }
  
  // Trie Class
  class Trie {
    constructor() {
      this.root = new TrieNode(); // Initialize root node
    }
  
    // Insert a word into the Trie
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode(); // Create node if it doesn’t exist
        }
        node = node.children[char]; // Move to next character
      }
      node.isEndOfWord = true; // Mark end of the word
    }
  
    // Search for a word in the Trie
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) return false; // Word not found
        node = node.children[char];
      }
      return node.isEndOfWord; // Check if it’s a valid word
    }
  
    // Delete a word from the Trie
    delete(word) {
      function deleteHelper(node, word, depth = 0) {
        if (!node) return false; // Word not found
  
        if (depth === word.length) {
          if (node.isEndOfWord) node.isEndOfWord = false; // Unmark end of word
          return Object.keys(node.children).length === 0; // Delete if no children
        }
  
        let char = word[depth];
        let shouldDelete = deleteHelper(node.children[char], word, depth + 1);
  
        // If child node should be deleted, remove reference
        if (shouldDelete) {
          delete node.children[char];
          return Object.keys(node.children).length === 0 && !node.isEndOfWord;
        }
        return false;
      }
  
      deleteHelper(this.root, word);
    }
  
    // Check if a prefix exists in the Trie
    startsWith(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) return false; // Prefix not found
        node = node.children[char];
      }
      return true;
    }
  
    // Get all words starting with a given prefix (Autocomplete)
    autoComplete(prefix) {
      let node = this.root;
      let result = [];
  
      // Step 1: Traverse to the end of the prefix
      for (let char of prefix) {
        if (!node.children[char]) return result; // Prefix not found
        node = node.children[char];
      }
  
      // Step 2: Helper function to collect words from this node
      function findWords(currentNode, currentWord) {
        if (currentNode.isEndOfWord) result.push(currentWord);
  
        for (let char in currentNode.children) {
          findWords(currentNode.children[char], currentWord + char);
        }
      }
  
      findWords(node, prefix);
      return result;
    }
  }
  
  // Usage Example
  const trie = new Trie();
  
  // Insert words
  trie.insert("cat");
  trie.insert("car");
  trie.insert("cart");
  
  // Search words
  console.log(trie.search("cat")); // true
  console.log(trie.search("carp")); // false
  console.log(trie.search("cart")); // true
  
  // Delete word
  trie.delete("cat");
  console.log(trie.search("cat")); // false
  console.log(trie.search("car")); // true
  console.log(trie.search("cart")); // true
  
  // Check prefix
  console.log(trie.startsWith("ca")); // true
  console.log(trie.startsWith("bat")); // false
  
  // Autocomplete feature
  trie.insert("bat");
  trie.insert("bath");
  trie.insert("ball");
  console.log(trie.autoComplete("ba")); // ["bat", "bath", "ball"]
  console.log(trie.autoComplete("car")); // ["car", "cart"]  