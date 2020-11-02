let circle ="|/-\|/_\-|";
let t = 0;
const timer = function(c, t){
  setTimeout(() => { ;
    process.stdout.write(`\r${c}   `);
  }, t);
};
let element = circle.split("");

for (const e of element) {
  timer(e.substr(0), t+=200);
}
/*setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);
setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);
setTimeout(() => {
  process.stdout.write('\r_   ');
}, 1300);*/