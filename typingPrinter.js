window.onload = listenToDocumentKeypress

function listenToDocumentKeypress() {
    document.addEventListener("keypress", function(event) {
        console.log(String.fromCharCode(event.keyCode));
    });
 }


