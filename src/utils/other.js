//
function S(cor1, cor2) {
  let str1 = cor1.split(' ');
  let str2 = cor2.split(' ');
  let arrayStr = str1.concat(str2);
  let yCor = arrayStr.filter((item, index) => index % 2);
  let xCor = arrayStr.filter((item, index) => !((index + 2) % 2));
  let xMin = Math.min(...xCor);
  let xMax = Math.max(...xCor);
  let yMin = Math.min(...yCor);
  let yMax = Math.max(...yCor);
  return Math.max(xMax - xMin, yMax - yMin) ** 2;
};
console.log(S('6 6 8 8', '1 8 4 9'));

//
function win(N, ...team) {
  let result = {};
  for (let i = 0; i < N; i++) {
    let str = team[i].split(' ').sort().join();

    if (result.hasOwnProperty(str)) {
      result[str] = result[str] + 1;
    } else {
      result[str] = 1;
    }
  }
  return Math.max(...Object.values(result));
};
console.log(win(5, 'MIKHAIL VLADISLAV GRIGORY', 'VLADISLAV MIKHAIL GRIGORY', 'IVAN ILYA VLADIMIR', 'VLADISLAV MIKHAIL GRIGORY', 'VLADIMIR IVAN ANDREY'))

//
function assignmentСontrol(...str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '{') {

    }
    if (str[i] == '}') {

    } else {
      let assignment = str[i].match(/[^=]/gi);

      return assignment
    }
  }
};
console.log(assignmentСontrol('thats=zero', 'a=10', 'ten=a', 'aboba=ten', 'ten=-10', '{', 'b=a', 'a=1337', 'c=a', '{', 'd=a', 'e=aboba', '}', '}', 'lol=a'))

//
function a(...str) {

};

console.log(a('5 3', 'ad', 'a', 'abc', 'aboba', 'b', '3 a', '2 ab', '1 b'))


function a(str) {
  return str.match(/^=./g)
}

console.log(a('=sd446 =jij8'))