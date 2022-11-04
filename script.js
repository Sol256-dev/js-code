const randNum = [3, 1, 0, 2, "b", "a", 5, 2.1, 0.4, "c", "f"];

function popQuiz(m) {
  let chars = [];
  let even = [];
  let oddNumber = [];

  m.forEach((element) => {
    if (typeof element === "string") {
      chars.push(element);
    }
    if (element % 2 === 0) {
      even.push(element);
    }
    if (element % 2 !== 0 && typeof element !== "string") {
      oddNumber.push(element);
    }
  });

  console.log(chars.sort(), even.sort(), oddNumber.sort());

  return {
    chars: chars.sort(),
    even: even.sort(),
    oddNumber: oddNumber.sort(),
  };
}

console.log(popQuiz(randNum));