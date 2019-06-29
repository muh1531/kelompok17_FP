//form check
var checker = document.getElementById('gridCheck');
var sendbtn = document.getElementById('btnSubmit');
// when unchecked or checked, run the function
checker.onchange = function() {
	if (this.checked) {
		sendbtn.disabled = false;
	} else {
		sendbtn.disabled = true;
	}
};
