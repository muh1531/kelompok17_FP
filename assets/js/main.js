//form check
var checker = document.getElementById('gridCheck');
var sendbtn = document.getElementById('btnSubmit');
// when unchecked or checked, run the function
checker.onchange = function () {
	if (this.checked) {
		sendbtn.disabled = false;
	} else {
		sendbtn.disabled = true;
	}
};


//seaarch

$(document).ready(function () {
	$("#myInput").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#myTable tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
});