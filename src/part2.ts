import * as R from "ramda";
const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

export const countVowels = (s: string): number => {
  return R.pipe(
    R.toLower,                        
    stringToArray,       
    R.filter((char: string) => vowels.includes(char)),   
    R.length                           
  )(s);
};


/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const arr= R.pipe(
        R.toLower,
        R.replace(/[^a-z0-9]/g, ""),
        stringToArray
     )(text);
    const length = arr.length;
    const myEquals = (c: string, index: number, arr: string[]): boolean => {
    return arr[index] === arr[arr.length - index - 1];
    };
    return arr.every(myEquals);
}

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

 export const treeToSentence = (t: WordTree): string => {
  return R.pipe(
    (tree: WordTree) => R.prepend(tree.root, R.map(treeToSentence, tree.children)),
    R.join(" ")
  )(t);
};