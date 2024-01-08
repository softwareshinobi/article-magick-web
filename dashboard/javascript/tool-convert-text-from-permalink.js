
$(document).ready(function () {
	
	clearFormBoxes();

	setInterval(processForm, 1000);

});

function clearFormBoxes(){

	setInputValue("");

	setLabelValue("");

}

function setInputValue(newStringValue) {

	$("#fromLeftSideTextBox").val(newStringValue);

}

function setLabelValue(newStringValue) {

	$("#fromRightSideTextBox").val(newStringValue);

}

function processForm(textToFormat) {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	leftSideTextBox=$("#fromLeftSideTextBox").val();

	console.debug("fromRightSideTextBox: " + leftSideTextBox);

	//

	$.ajax({

		type: "POST",

		url: "https://api.articlemagick.softwareshinobi.digital/article-magick/convert-from-permalink",

        data: leftSideTextBox,

		contentType: "text/plain",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

            console.log("data");

            console.log(data);

            setLabelValue(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	//

	console.debug(" <- :: formatTextFromFirstTextBox()");
  
}
