//Admin only methods in server side

class MyWebFileReader {
    //Public methods
    function get(path) {
        //Get file data using http request
        var request = new XmlHttpRequest();
        request.open("GET", path, false);
        request.responseType = "text";
        request.send(null);
        return request.responseText;
    }
}
