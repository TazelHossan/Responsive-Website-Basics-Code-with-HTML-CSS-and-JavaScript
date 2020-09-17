$(document).ready(function(){
    $(".add").click(function(){
        var text = $("#inputBox").val();
        var li = "<li>"+text+"</li>";
        $(".messageList").append(li);
    });
});
