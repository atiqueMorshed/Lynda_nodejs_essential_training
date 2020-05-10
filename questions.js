const ques = [
  "What is your name?",
  "how old are you?",
  "Say aye."
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${ques[i]}`);
  process.stdout.write(` > `);
};
ask();

const ans = [];
process.stdin.on("data", data => {
  ans.push(data.toString().trim());
  if(ans.length < ques.length)
    ask(ans.length);
  else
    process.exit();
});

process.on("exit", () => {
  const [name, age, a] = ans;
  console.log(`
    Hi, ${name}, your age is ${age} and you said ${a}
  `);
});