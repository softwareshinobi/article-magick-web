
$(document).ready(function () {

});

function formatTextFromFirstTextBox(textToFormat) {

	console.debug(" -> :: formatTextFromFirstTextBox()");	

	//

	leftSideTextBox=$("#leftSideTextBox").text();

	console.debug("leftSideTextBox: " + leftSideTextBox);

	rightSideTextBox=$( "#rightSideTextBox" ).text();

	console.debug("rightSideTextBox: " + rightSideTextBox);

	//

	textFromFirstAndSecondTextBox = JSON.stringify({

		originalContent: leftSideTextBox,

		rewrittenContent: rightSideTextBox

	});

	console.debug("textFromFirstAndSecondTextBox: " + textFromFirstAndSecondTextBox);

	//

	$.ajax({

		type: "POST",
		url: "http://desktop.mateomontenegro.online:8080/simple-text-format",

		data: textFromFirstAndSecondTextBox,

		contentType: "application/json; charset=utf-8",
		crossDomain: true,
		dataType: "json",

		success: function (data, status, jqXHR) {

console.log("data");console.log(data);			setTextOfFirstTextBoxToRewrittenText(data);

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

function setTextOfFirstTextBoxToRewrittenText(rewrittenText) {

	console.debug(" -> :: setTextOfFirstTextBoxToRewrittenText()");

//	$("#leftSideTextBox").html(rewrittenText);
	$("#rightSideTextBox").html(rewrittenText);
	console.debug(" <- :: setTextOfFirstTextBoxToRewrittenText()");

}
