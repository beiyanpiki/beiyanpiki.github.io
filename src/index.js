function GetRequest() {
    const url = location.search;
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

window.onload = function () {
    let Request = new Object();
    Request = GetRequest();
    no_background = Request['with_background']
    if (no_background === 'true') {
        document.getElementById("container").id = 'without-container';
        document.getElementById("header-with-background").id = 'header-without-background';
        document.getElementById("with-bg").id = 'no-bg';
    }
}