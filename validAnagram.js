// Frequency Counter - validAnagram

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        if (!obj[str1[i]]) {
            obj[str1[i]] = 1;
        } else {
            obj[str1[i]] += 1;
        }
    }
    for (let i = 0; i < str1.length; i++) {
        if (!obj[str2[i]]) {
            return false;
        } else {
            obj[str2[i]] -= 1;
        }
    }
    return true;
}