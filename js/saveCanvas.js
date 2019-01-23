function saveCanvas(name){
  imageType = "image/png";
  fileName = name + ".png";
  var canvas = document.querySelector(".particles-js-canvas-el");
  var base64 = canvas.toDataURL(imageType);
  var blob = Base64toBlob(base64);
  saveBlob(blob, fileName);
}
 
function Base64toBlob(base64)
{
  var tmp = base64.split(',');
  var data = atob(tmp[1]);
  var mime = tmp[0].split(':')[1].split(';')[0];
  var buf = new Uint8Array(data.length);
  for (var i = 0; i < data.length; i++) {
    buf[i] = data.charCodeAt(i);
  }
  var blob = new Blob([buf], { type: mime });
  return blob;
}

function saveBlob(blob, fileName)
{
  var url = (window.URL || window.webkitURL);
  var dataUrl = url.createObjectURL(blob);
  console.log(dataUrl);

  const formdata = new FormData();
  formdata.append("file", blob, fileName);
  const xhttpreq = new XMLHttpRequest();
  xhttpreq.onreadystatechange = function() {
    if (xhttpreq.readyState == 4 && xhttpreq.status == 200) {
      console.log(xhttpreq.responseText);
    }
  };

  xhttpreq.onerror = function (e) {
    uploadFlg = 500;
  };

  xhttpreq.open("POST", "http://0.0.0.0:8008/capture.php", true);
  xhttpreq.send(formdata);
}
