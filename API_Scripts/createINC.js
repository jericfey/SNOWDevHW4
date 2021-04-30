//need to add environment variables
var requestBody =
  '{"short_description":"Test short description","business_duration":"Database"}';

var client = new XMLHttpRequest();
client.open("post", "https://dev105671.service-now.com/api/now/table/incident");

client.setRequestHeader("Accept", "application/json");
client.setRequestHeader("Content-Type", "application/json");

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader(
  "Authorization",
  "Basic " + btoa("user" + ":" + "password")
);

client.onreadystatechange = function () {
  if (this.readyState == this.DONE) {
    document.getElementById("response").innerHTML = this.status + this.response;
  }
};
client.send(requestBody);
