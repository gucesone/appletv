App.onLaunch = function(options) {
    var mainURL = 'https://github.com/gucesone/appletv/blob/master/main.tvml';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = "document";
    xmlhttp.onload = function () {
      navigationDocument.pushDocument(xmlhttp.responseXML);
    };
    xmlhttp.open("GET", mainURL, true);
    xmlhttp.send();
}

App.onExit = function() {
    console.log('App finished');
}

/*
function getDocument(url) {
    var templateXHR = new XMLHttpRequest();
    templateXHR.responseType = "document";
    templateXHR.addEventListener("load", function() {pushDoc(templateXHR.responseXML);}, false);
    templateXHR.open("GET", url, true);
    templateXHR.send();
    return templateXHR;
}

function pushDoc(document) {
    navigationDocument.pushDocument(document);
}

App.onLaunch = function(options) {
    var templateURL = 'https://db.tt/rYiUsNJX';
    getDocument(templateURL);
}

App.onExit = function() {
    console.log('App finished');
}
*/