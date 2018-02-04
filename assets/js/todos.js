// Check off specific todos by clicking
$("li").click(function(){
    //if li is gray
    if($(this).css("color") === "gray"){
        //turn it black
        console.log("It is currently gray!");
    }
    //else
        //turn it gray
    $(this).css({
        color: "gray",
        textDecoration: "line-through"
    });
});