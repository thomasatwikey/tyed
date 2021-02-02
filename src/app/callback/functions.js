function test() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("response").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "http://securoserv.epizy.com/dedicated/?event=ajax", true);
  xhttp.send();
}
