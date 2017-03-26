const fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

const app = require('electron').remote; 
var dialog = app.dialog;

function saveResultAt() {
	content = "<html><body>"
	content += document.getElementById('PlayFieldDiV').innerHTML
	content += "</html></body>"
	
	dialog.showSaveDialog(function (fileName) {
       if (fileName === undefined){
            console.log("You didn't save the file");
            return;
       }
       // fileName is a string that contains the path and filename created in the save file dialog.  
       fs.writeFile(fileName, content, function (err) {
           if(err){
               alert("An error ocurred creating the file "+ err.message)
           }
                        
           alert("The file has been succesfully saved");
       });
	});
}