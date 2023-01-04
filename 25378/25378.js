// 솔루션
// const input: string = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ");
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const n = parseInt(input[0]);
// const m = input
//   .slice(1, input.length - 1)
//   .split(" ")
//   .map((pebble) => parseInt(pebble));
function solution(n, pebbles) {
    while (true) {
        for (var i = 1; i <= n - 1; i++) {
        }
    }
}
function isAdjoinPebbleCountEqual(totalIndex, pebbleCount, currentIndex) {
    if ((currentIndex === 0) || (currentIndex === n)) { // currentPositon이 밖으로 나갔다면
        return totalIndex;
    }
    if (currentIndex > 1 && pebbles[currentIndex - 1] === pebbleCount && totalIndex.indexOf((currentIndex - 1).toString()) === -1) { // 왼쪽을 조회하는것이 의미 있다면
        totalIndex = isAdjoinPebbleCountEqual(totalIndex + (currentIndex - 1), pebbleCount, currentIndex - 1);
    }
    if (currentIndex < n && pebbles[currentIndex + 1] === pebbleCount && totalIndex.indexOf((currentIndex + 1).toString()) === -1) { // 오른쪽을 조회하는것이 의미 있다면
        totalIndex = isAdjoinPebbleCountEqual(totalIndex + (currentIndex + 1), pebbleCount, currentIndex + 1);
    }
    return totalIndex;
}
var n = 4 + 2; // 2 ~ 2 500
var pebbles = __spreadArray(__spreadArray([], [0], false), [1, 1, 3, 3], false);
console.log(isAdjoinPebbleCountEqual('3', 3, 3));
solution(n, pebbles);
