let str = "Salam olsun hamiya";

function checkString(words) {
  let result = words.split(" ").map((m) => m.length);
  return result;
}
console.log(checkString(str));
