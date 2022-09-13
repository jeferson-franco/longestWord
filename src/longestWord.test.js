const solution = require('./longestWord.js');

test('test 1', () => {
    expect(solution("Ready, steady, go!")).toBe("steady");
});

test('test 2', () => {
    expect(solution("Ready[[[, steady, go!")).toBe("steady");
});

test('test 3', () => {
    expect(solution("ABCd")).toBe("ABCd");
});

test('test 4', () => {
    expect(solution("To be or not to be")).toBe("not");
});

test('test 5', () => {
    expect(solution("You are the best!!!!!!!!!!!! CodeFighter ever!")).toBe("CodeFighter");
});
