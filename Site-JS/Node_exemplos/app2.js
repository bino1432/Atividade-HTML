const fs = require('fs')

fs.readFile('exemplo.txt', 'utf-8', function(err,data) {
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})