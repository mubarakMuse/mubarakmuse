/**
 * PROBLEM 1 — Group Anagrams (warm-up)
 *
 * Given an array of strings, group the anagrams together.
 * An anagram is a word formed by rearranging letters of another.
 *
 * Example:
 *   Input:  ["eat","tea","tan","ate","nat","bat"]
 *   Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 * Constraints: 1 <= strs.length <= 10^4, strings are lowercase English letters
 *
 * Think aloud: What's your approach? Time/space complexity?
 */

const groupAnagrams = (strs: string[]): string[][] => {
  // YOUR CODE HERE
  

  return []
}

// --- tests (run with: npx ts-node interview-practice/problem1.ts) ---
const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log("Result:", result)
// Expected: order of groups/words may vary, but each group should match:
// [["eat","tea","ate"],["tan","nat"],["bat"]]
