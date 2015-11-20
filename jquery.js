$(document).ready(function(){
    $(".deleteMe").on("click"), function(){
       $(this).closest("li").remove(); 
    });
});

$(".checkbox").on("click"), function(){
  $(this).closest("li").remove();
});
