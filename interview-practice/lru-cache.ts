/**
 * LeetCode 146 — LRU Cache
 *
 * get & put must be O(1) average time.
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
    this.cache.set(key, value)
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

// ============ EXAMPLE WALKTHROUGH ============
//
// Input:
//   ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
//   [[2],        [1,1], [2,2], [1],   [3,3], [2],   [4,4], [1],   [3],   [4]]
//
// Step by step (capacity = 2):
//
// LRUCache(2)     cache: {}
// put(1, 1)       cache: {1→1}
// put(2, 2)       cache: {1→1, 2→2}
// get(1) → 1      access 1, move to end → cache: {2→2, 1→1}
// put(3, 3)       full! evict LRU key 2 → cache: {1→1, 3→3}
// get(2) → -1     key 2 was evicted
// put(4, 4)       full! evict LRU key 1 → cache: {3→3, 4→4}
// get(1) → -1     key 1 was evicted
// get(3) → 3      cache: {4→4, 3→3}
// get(4) → 4      cache: {3→3, 4→4}
//
// Output: [null, null, null, 1, null, -1, null, -1, 3, 4]

const runExample = () => {
  const results: (number | null)[] = []

  const cache = new LRUCache(2)
  results.push(null)

  cache.put(1, 1)
  results.push(null)

  cache.put(2, 2)
  results.push(null)

  results.push(cache.get(1)) // 1

  cache.put(3, 3)
  results.push(null)

  results.push(cache.get(2)) // -1

  cache.put(4, 4)
  results.push(null)

  results.push(cache.get(1)) // -1
  results.push(cache.get(3)) // 3
  results.push(cache.get(4)) // 4

  console.log("Output:", results)
  // Expected: [null, null, null, 1, null, -1, null, -1, 3, 4]
}

runExample()
