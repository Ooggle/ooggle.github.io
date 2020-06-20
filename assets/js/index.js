document.addEventListener("scroll", scrollcheck);

/* Verify scroll status at loading */
window.onload = function(){
    scrollcheck();
};

/* shadow navbar on scroll */
function scrollcheck() {
    if(window.pageYOffset > 20) {
        /* Shadow over the navbar */
        document.getElementById("site-navbar").style.boxShadow = "0 8px 17px 2px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)";
    } else {
        document.getElementById("site-navbar").style.boxShadow = "";
    }
}
