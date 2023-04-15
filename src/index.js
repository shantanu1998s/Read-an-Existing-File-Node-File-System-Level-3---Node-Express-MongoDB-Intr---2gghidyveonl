const fs = require("fs/promises");
const fileName = "myfile.txt";
const reader = async (fileName) => {

function reader(fileName) {
  fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) throw err;
    console.log(content);
  });
}

reader('myfile.txt');

  
};


module.exports =  reader ;
