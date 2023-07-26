$(document).ready(function () {
    $("h6").click(function (){
        $("h6").hide();
    });


    $("#frameButton").click(function () {
        $("iframe").slideUp(2000).slideDown(2000);
    });
    
});