function test2() {
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
function login1() {
    $( document ).ready(function() {
  let endpoint = 'https://api.beta.twikey.com/creditor'
  let apiKey = '760200C4479699F032E73B77F938A6FB44EEF81E'

  $( ".content a" ).each(function( index, element ) {

    $.ajax({
        url: endpoint + "?key=" + apiKey + " &q=" + $( this ).text(),
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            console.log(result);
        }
    })
  });
});

}
