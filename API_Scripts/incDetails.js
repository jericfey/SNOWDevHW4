//Initial api query to return data when an incident is specified.
//Need to create variable so user can input incident number and corresponding fields are returned.
var requestBody = "";

var client = new XMLHttpRequest();
client.open(
  "get",
  "https://dev105671.service-now.com/api/now/table/incident?sysparm_query=number%3DINC0007001&sysparm_display_value=true&sysparm_fields=number%2Cshort_description%2Cincident_state%2Cpriority%2Cassignment_group%2Cassigned_to&sysparm_limit=1"
);

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
