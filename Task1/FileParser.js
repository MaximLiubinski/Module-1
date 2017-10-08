const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let strArray = data.split('\n');
    let resultStr = '';
    let counter = 1;
    while(strArray[counter]){
        resultStr += strArray[counter] + ' ';
        counter += 2;
    }
    console.log(resultStr);
})