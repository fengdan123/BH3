;
(function() {
    var n = 0
    var timer = setInterval(function() {
        lunbo();
    }, 3000)

    function lunbo() {
        n++;
        $(".datu").animate({
            left: -n * 1235
        }, 500, function() {
            if (n == $(".datu>li").length - 1) {
                console.log($(".datu>li").length - 1)
                n = 0;
                $(".datu").css("left", "0");
            }
            $(this).parent().siblings("ul").children().eq(n).children().addClass("active").parent().siblings().children().removeClass("active")
        })
    }
    $(".banner").mouseenter(function() {
        clearInterval(timer)
    }).mouseleave(function() {
        timer = setInterval(function() {
            lunbo();
        }, 3000)
    })
    $(".banner>ul>li").click(function() {
        n = $(this).index() - 1
        lunbo(n)
    })
})()