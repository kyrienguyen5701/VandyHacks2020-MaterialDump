
const FileContent = () => {
    var uploadFile = require("fs");
    uploadFile.readFile('Sample Essay.txt',  (err, data) => {
        if (err) {
        return console.error(err);
        }
        console.log(data.toString());
    });
}

FileContent();
// export default FileContent;