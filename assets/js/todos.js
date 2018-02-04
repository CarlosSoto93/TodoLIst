// Check off specific todos by clicking
$("li").click(function(){
   $(this).toggleClass("completed");
});

//Click on X to delete todo
$("span").click(function(event){
    $(this).parent().remove();
    event.stopPropagation();
});