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
  with_background = Request["bg"];
  if (with_background !== "false") {
    document.getElementById("no-container").id = "container";
    document.getElementById("header-without-background").id =
      "header-with-background";
    document.getElementById("no-bg").id = "bg";
  }
};
