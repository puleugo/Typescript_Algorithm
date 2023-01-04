// 솔루션
// const input: string = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .split(" ");

// const n = parseInt(input[0]);
// const m = input
//   .slice(1, input.length - 1)
//   .split(" ")
//   .map((pebble) => parseInt(pebble));



// TODO: dp 테이블 생성

function solution(n: number, pebbles: number[]) {
  while (true) {
    for (let i = 1; i <= n - 1; i++) {
      // TODO: isAdjoinPebbleCountEqual 함수 이용해서 한번에 지울 수 있는 조약돌 조회
    }
  }
}

function isAdjoinPebbleCountEqual(totalIndex: string, pebbleCount: number, currentIndex: number) {
  if ((currentIndex === 0) || (currentIndex === n)) { // currentPositon이 밖으로 나갔다면
    return totalIndex;
  }

  if (currentIndex > 1  &&  pebbles[currentIndex-1] === pebbleCount && totalIndex.indexOf((currentIndex-1).toString()) === -1) { // 왼쪽을 조회하는것이 의미 있다면
    totalIndex = isAdjoinPebbleCountEqual(totalIndex + (currentIndex - 1) , pebbleCount, currentIndex - 1);
  }

  if (currentIndex < n && pebbles[currentIndex+1] === pebbleCount && totalIndex.indexOf((currentIndex+1).toString()) === -1) { // 오른쪽을 조회하는것이 의미 있다면
    totalIndex = isAdjoinPebbleCountEqual(totalIndex + (currentIndex + 1), pebbleCount, currentIndex + 1);
  }
  return totalIndex;
}


const n = 4 +2 // 2 ~ 2 500
const pebbles = [...[0],...[1, 1, 3, 3]];
console.log(isAdjoinPebbleCountEqual('3', 3, 3)); // 시작 시, totalIndex는 currentIndex와 동일

solution(n, pebbles);
