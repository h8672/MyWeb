//Admin only methods in server side

class MyWebFileWriter {
    var ChangeLogPath = "./../Files/ChangeLog.txt";

    //Private methods

    private function check(path) {
        //Check if file exists
        //if it doesn't exists, create it
    }
    private function write(path, message) {
        check(path);
        //Check if file exists
    }
    private function addLine(path, message) {
        check(path);
        //Check if file exists
    }

    //Public methods

    //Used to log admin changes made to the page
    function log() {
        addLine(ChangeLogPath, "");
        //Read file
        //Return data
    }
    //Write new file
    function writeToFile(path, message) {
        write(path, message);
    }
    //Add a new line to the file
    function writeLineToFile(path, message) {
        addLine(path, message);
    }
    function test(){
        //Check if file exists, except not to
        //Create the file with text
        //Check if file exists, except it to exist
        //Read file and except the text to be same
        //Remove the test file, test if it is removed
    }
}
