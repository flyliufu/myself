$(function () {
    $(".li-a").on("click", function () {
        var name = $(this).attr("name");
        $("#index_frame").attr("src", "html/" + name + ".html");
    });
    $("li").hover(function () {
        $(this).css("background-color", "#f5f5f5");
    }, function () {
        $(this).css("background-color", "transparent");
    });
});
