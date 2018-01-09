# nodejs_fileSystem

* To use the file system, first of all we will have to require its package(npm)
npm install file-system //installing npm package for file system
```
const fs = require('file-system');
```
>  All the methods have asynchronous and synchronous forms.

*we also have to take the path wher file is located , for that purpose we require path i.e. 
```
const path = require('path');
```

* Operations performed in file system
1. to read the file of a directory we can use **fs.readdirSync(path[, options])** or **fs.readdir(path[, options], callback)*        
Example:: 
```
const files = fs.readdirSync(filePath);
```

wherefilePath will be the location of the folder
```
const filePath = path.join(__dirname, 'Name_of_the_folder');
```

2. to get the details of a file on a system we can use **fs.statSync()** or **fs.stat()**  
Example:  
```
  stats = fs.statSync(filePath + '/' + file_name);  // it can usually be used to get the birthtime of the file i.e. created date
```
3. to read the content of a file we can use **fs.readFileSync()** or **fs.readFile()**
Example:
```
fs.readFile(filePath + '/' + file_name, {
        encoding: 'utf-8'
      }, function(err, data) {
        if (!err) {
           console.log(data);
          }
        } else {
          console.log(err);
        }
      });
 ```
 
