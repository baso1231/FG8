const refLink = "http://www.fg8.dev/?referralCode=fvn6973";

const userAgent = navigator.userAgent.toLowerCase();
const isGoogleBot = userAgent.includes("googlebot") || userAgent.includes("google-inspectiontool");

if (!isGoogleBot) {
    document.querySelectorAll('.direct-link').forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = refLink;
        });
    });
}
