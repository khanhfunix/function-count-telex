const countTelex = (data) => {
  // tao bien dem count va arr chua cac chu co the ghep duoc tieng viet
  const telexArr = ["aa", "aw", "oo", "ow", "ee", "dd"];
  let count = 0;
  // chay vong lap quet qua dât
  for (let i = 0; i < data.length; i++) {
    const pairOfLetter = data[i] + data[i + 1];
    // truong hop chu "w" . theo telex thi neu co 2 chu w tro len canh nhau se khong hinh thanh duoc chu ư
    if (data[i] === "w") {
      if (data[i + 1] !== "w") {
        count++;
        continue;
      } else {
        while (data[i + 1] === "w") {
          i++;
        }
      }
    }
    // check voi arr da tao luc dau
    for (let j = 0; j < telexArr.length; j++) {
      if (
        pairOfLetter + data[i + 3] === "aww" ||
        pairOfLetter + data[i + 3] === "oww"
      ) {
        break;
      }
      if (pairOfLetter === telexArr[j]) {
        count++;
        i++;
        break;
      }
    }
  }
  return count;
};
