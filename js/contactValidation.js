function validate()
{
	name = $("#fullName").val();
	Subject = $("#subject").val();
	comments = $("#comment").val();
	evalidate();
	//validate name
	if (name == "") 
	{
		$("#nameVal").text("Please enter a Name");
	}
	else
	{
		$("#nameVal").text("");
	}
	//validate the subject
	if (Subject == "Select") 
	{
		$("#subjectVal").text("Please select a subject");
	}
	else
	{
		$("#subjectVal").text("");
	}
	// validate the comment
	if (comments == "") 
	{
		$("#commentVal").text("Please write some comments so that we can understand your inquiry");
	}
	else
	{
		$("#commentVal").text("");
	}

	if (name != "" && Subject != "Select" && comments != "" && $("#emailVal").text() == "") 
	{
		alert("Success, Thank you for the feedback!");
	}
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function evalidate() {
	var email = $("#email").val();

	if (!validateEmail(email)) 
	{
		$("#emailVal").text("Please Enter a valid Email E.G: JohnDoe@Gmail.com");
	}
	else
	{
		$("#emailVal").text("");
	}

}
