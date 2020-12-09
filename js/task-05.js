console.log("====== task-05 ======");

const checkForSpam = function (message) {
  const findWord = message.toLowerCase();
  return findWord.includes("spam") || findWord.includes("sale");
};
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
