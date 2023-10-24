let sentence = "hello there from lighthouse labs";

sentence = sentence.split('');

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, i * 50);
  
}

setTimeout(() => {
  process.stdout.write('\n')
}, sentence.length * 50);

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char)
//   }, 1000);
// }
