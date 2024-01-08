
$(document).ready(function () {

	clearFormBoxes();

    setInterval(processForm, 1000);

});

function clearFormBoxes(){

	setInputValue("");

	setLabelValue("");

}

function setInputValue(newStringValue) {   

	$("#toPermalinkInput").val(newStringValue);

}

function setLabelValue(newStringValue) {

	$("#toPermalinkOutput").val(newStringValue);

}

function processForm() {

	console.debug(" -> :: processForm()");	

	//

	leftSideTextBox=$("#toPermalinkInput").val();

	console.debug("toPermalinkInput /" + leftSideTextBox);

	//

	$.ajax({

		type: "POST",

		url: "https://api.articlemagick.softwareshinobi.digital/article-magick/convert-to-permalink",

        data: leftSideTextBox,

		contentType: "text/plain",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

            console.log("data", data);

            setLabelValue(data);

		},

		error: function (jqXHR, status) {

			console.log("Something Went Wrong Issuing Post Request");

			console.log(jqXHR);

			console.log(status);

		}

	});

	//

	console.debug(" <- :: processForm()");
  
}
