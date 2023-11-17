
$(document).ready(function () {
	
	clearFormBoxes();

	setInterval(processForm, 1000);

});

function clearFormBoxes(){

//	setInputValue("");

	//setLabelValue("");

$("#originalContent").val("");

$("#topArea").click();
$("#bottomArea").click();

//alert('clicked..');

$("#rightSideTextBox").val("");

$("#percentageOutputButton").html("--");


}

function clearButtonValue() {

	console.debug(" -> :: clearButtonValue()");	

	$("#percentageOutputButton").html("");

	console.debug(" <- :: clearButtonValue()");
}

function setButtonValue(percentageDifference) {

	console.debug(" -> :: setButtonValue()");	

const result = parseFloat(1.0-percentageDifference)*100;

aaaa = +result.toFixed(1) + "% different";

	$("#percentageOutputButton").html(aaaa);

	console.debug(" <- :: setButtonValue()");

}

function processForm() {

	console.debug(" -> :: formatTextFromFirstTextBox()");	


	//

	originalContent=$("#originalContent").val();

	console.debug("originalContent: " + originalContent);

	rightSideTextBox=$( "#rewrittenContent" ).val();

	console.debug("rightSideTextBox: " + rightSideTextBox);

	//

	textFromFirstAndSecondTextBox = JSON.stringify({

		originalContent: originalContent,

		rewrittenContent: rightSideTextBox

	});

	console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	//

	$.ajax({

		type: "POST",

		url: "http://localhost:8080/calculate-text-percentage-difference",

		data: textFromFirstAndSecondTextBox,

		contentType: "application/json; charset=utf-8",
	
	//contentType: "text/plain",

		crossDomain: true,

		dataType: "text",

		success: function (data, status, jqXHR) {

			//alert("good");

			setButtonValue(data);

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
