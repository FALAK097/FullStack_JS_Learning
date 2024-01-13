const fs = require('fs');
const path = require('path');

// Reading 'starter.txt'
fs.readFile(
  path.join(__dirname, 'files', 'starter.txt'),
  'utf8',
  (err, data) => {
    if (err) throw err;
    console.log(data); // Content of 'starter.txt' (e.g., "Hi My Name is Falak")
  }
);

console.log('Hello'); // Printed immediately

// Writing 'reply.txt'
fs.writeFile(
  path.join(__dirname, 'files', 'reply.txt'),
  'Nice to meet you',
  (err) => {
    if (err) throw err;
    console.log('Write Complete'); // Printed when the write operation is complete

    // Appending to 'reply.txt'
    fs.appendFile(
      path.join(__dirname, 'files', 'reply.txt'),
      '\nYes it is',
      (err) => {
        if (err) throw err;
        console.log('Append Complete'); // Printed when the append operation is complete

        // Renaming 'reply.txt' to 'newReply.txt'
        fs.rename(
          path.join(__dirname, 'files', 'reply.txt'),
          path.join(__dirname, 'files', 'newReply.txt'),
          (err) => {
            if (err) throw err;
            console.log('Rename Complete'); // Printed when the rename operation is complete
          }
        );
      }
    );
  }
);
