var baseURL = "http://timetableapi.ptv.vic.gov.au";
// var key = "2765ded7-ed93-4e8c-87ff-dfda9edc0bc8";

// Input fields from index page
var start_input = document.getElementById("start");
var end_input = document.getElementById("end");

// registering an event for key up in input field.
start_input.onkeyup = function(){

    var input_string = start_input.value;
    var request_string = "/v3/search/" + input_string;
    calculateSignature(request_string);
}

function calculateSignature(request_string)
{

    var url = "./calculateSignature.php?urlString=" + request_string;
    var request = new XMLHttpRequest();

    request.open('GET', url, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var signature = this.responseText;
        
        if (request.status == 200 && request.readyState==4) 
        {
            var request_url = baseURL + encodeURI(request_string) + "?devid=3001296&" + "signature=" + signature;
            console.log("Signature: "+signature);
            console.log("URL: "+request_url);
            search(request_url);
        }
        else 
        {
            console.log('signature error');
        }
    };

    request.send();
}


function search(request_url)
{
    var request = new XMLHttpRequest();

    request.open('GET', request_url, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            display_search_result(data);
        } else {
            console.log('search error');
        }
    }

    request.send();
}

function display_search_result(data)
{
    // console.log(data);3
    // stops = data.stops;
    // console.log(stops);
    
}

