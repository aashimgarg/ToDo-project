$("ul").on("click","li", function(){
    $(this).toggleClass("completed");

});
$("ul").on("click","span",function(e){
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    
    });
    e.stopPropagation();
});

$("input[type = 'text'").keypress(function(f){
    if(f.which === 13){
        var a = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + a +"</li>")

    }
});

$(".fa-plus").click(function(){
    $("input[type ='text'").fadeToggle()
});
