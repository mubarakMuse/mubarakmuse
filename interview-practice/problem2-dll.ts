/**
 * LRU Cache — HashMap + Doubly Linked List
 *
 * Map<key, Node>  → O(1) lookup by key
 * DLL             → O(1) move to front, O(1) remove tail (LRU)
 *
 *   head (MRU) ↔ node ↔ node ↔ tail (LRU)
 *
 * Time:  O(1) get & put
 * Space: O(capacity)
 */

class DLLNode {
  key: number
  value: number
  prev: DLLNode | null = null
  next: DLLNode | null = null

  constructor(key: number, value: number) {
    this.key = key
    this.value = value
  }
}

class LRUCacheDLL {
  private capacity: number
  private map: Map<number, DLLNode>
  private head: DLLNode  // dummy — most recently used is head.next
  private tail: DLLNode  // dummy — least recently used is tail.prev

  constructor(capacity: number) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new DLLNode(0, 0)
    this.tail = new DLLNode(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)!
    this.moveToFront(node)
    return node.value
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!
      node.value = value
      this.moveToFront(node)
      return
    }

    if (this.map.size >= this.capacity) {
      this.evictLRU()
    }

    const node = new DLLNode(key, value)
    this.map.set(key, node)
    this.addToFront(node)
  }

  // --- DLL helpers (all O(1)) ---

  private removeNode(node: DLLNode): void {
    const prev = node.prev!
    const next = node.next!
    prev.next = next
    next.prev = prev
  }

  private addToFront(node: DLLNode): void {
    node.next = this.head.next
    node.prev = this.head
    this.head.next!.prev = node
    this.head.next = node
  }

  private moveToFront(node: DLLNode): void {
    this.removeNode(node)
    this.addToFront(node)
  }

  private evictLRU(): void {
    const lru = this.tail.prev!
    this.removeNode(lru)
    this.map.delete(lru.key)
  }
}

// --- tests ---
const cache = new LRUCacheDLL(2)
cache.put(1, 1)
cache.put(2, 2)
console.log("get(1):", cache.get(1)) // 1
cache.put(3, 3)
console.log("get(2):", cache.get(2)) // -1
cache.put(4, 4)
console.log("get(1):", cache.get(1)) // -1
console.log("get(3):", cache.get(3)) // 3
console.log("get(4):", cache.get(4)) // 4
