function solution(text) {
    return text.match(/[a-zA-Z]+/g).sort((a, b) => b.length - a.length)[0];
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test longestWord

// alternative solution
