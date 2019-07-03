$(document).ready(function() {
    $("#login").on("submit", function(e) {
        e.preventDefault();
        if ($("#username").val() == "admin" && $("#password").val() == "admin") {
            window.location.href = 'index.html';
        }
    })
})