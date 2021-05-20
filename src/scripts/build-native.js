const { exec } = require('child_process');

exec('ns plugin build', err => {
  if (err) {
    // node couldn't execute the command
    console.log(`${err}`);
    return;
  }
});
