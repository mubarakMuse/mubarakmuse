/**
 * SOLUTIONS — peek only after you try!
 */

// --- Problem 1: Group Anagrams ---
// Key insight: sort each string OR count letter frequencies → use as map key
const groupAnagramsSolution = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const key = str.split("").sort().join("")
    const group = map.get(key) ?? []
    group.push(str)
    map.set(key, group)
  }

  return Array.from(map.values())
}

// Alt: frequency key — "a1b1c0..." style
const groupAnagramsFreq = (strs: string[]): string[][] => {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    const counts = new Array(26).fill(0)
    for (const ch of str) {
      counts[ch.charCodeAt(0) - 97]++
    }
    const key = counts.join("#")
    const group = map.get(key) ?? []
    group.push(str)
    map.set(key, group)
  }

  return Array.from(map.values())
}

// --- Problem 2: LRU Cache ---
// Key insight: Map preserves insertion order in JS/TS
class LRUCacheSolution {
  private capacity: number
  private cache: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1

    const value = this.cache.get(key)!
    // Move to end (most recently used)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size >= this.capacity) {
      // Evict least recently used (first key in Map)
      const lruKey = this.cache.keys().next().value
      this.cache.delete(lruKey)
    }
    this.cache.set(key, value)
  }
}

export { groupAnagramsSolution, groupAnagramsFreq, LRUCacheSolution }
