/**
 * LRU Cache — O(1) average get & put
 *
 * Approach: JavaScript Map preserves insertion order.
 *   - Most recently used  → end of Map
 *   - Least recently used → first key in Map
 *
 * On get/put: delete key then re-set → moves it to the end.
 * On eviction: delete map.keys().next().value (the LRU key).
 *
 * Time:  O(1) average for get & put
 * Space: O(capacity)
 */

class LRUCache {
  private capacity: number
  private cache: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1

    const value = this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key, value) // move to end (most recently used)
    return value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }

    this.cache.set(key, value)
  }
}

// --- tests ---
const cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
console.log("get(1):", cache.get(1)) // 1
cache.put(3, 3)
console.log("get(2):", cache.get(2)) // -1
cache.put(4, 4)
console.log("get(1):", cache.get(1)) // -1
console.log("get(3):", cache.get(3)) // 3
console.log("get(4):", cache.get(4)) // 4
