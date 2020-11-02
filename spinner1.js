//process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\rhe   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\rhell   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\rhello    ');
}, 2000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\rhello my   '); 
}, 3000);



// ... fill in the rest yourself ...
