function uploadFile() {
  var file = document.getElementById("fileToUpload").files[0];
  var formData = new FormData();
  formData.append("fileToUpload", file);
  var xhr = new XMLHttpRequest();
  xhr.upload.addEventListener("progress", function(event) {
    var percent = (event.loaded / event.total) * 100;
    document.getElementById("progress").innerHTML = "Uploading: " + percent.toFixed(2) + "%";
  }, false);
  xhr.addEventListener("load", function(event) {
    document.getElementById("progress").innerHTML = "Upload Complete!";
  }, false);
  xhr.addEventListener("error", function(event) {
    document.getElementById("progress").innerHTML = "Upload Failed!";
  }, false);
  xhr.open("POST", "upload.php");
  xhr.send(formData);
}
