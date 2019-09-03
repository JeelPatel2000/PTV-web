var hmacsha1 = require('hmacsha1');

var baseURL = "http://timetableapi.ptv.vic.gov.au/";
var dev_id = "3001296";
var key = "2765ded7-ed93-4e8c-87ff-dfda9edc0bc8";

// Input fields from index page
var start_input = document.getElementById("start");
var end_input = document.getElementById("end");

// registering an event for key up in input field.
start_input.onkeyup = function(){

    var input_string = start_input.value;
    var request_string = "/v3/search/" + input_string + "?devid=" + dev_id;
    var signature = hmacsha1(request_string, key);
    console.log(signature);

}