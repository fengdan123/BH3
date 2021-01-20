var news_content = document.getElementsByClassName("news_content")[0];
var box_zk = news_content.children[0];
var box_zkgd = news_content.children[1];
$("#content>.news_title>h2").attr("index", 1);
$("#content>.news_title>h2").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
    $(this).attr("index", 1);
    var index = $(this).index() + 1;
    box_zk.innerHTML = null;
    $.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=17" + index, insortA)

})
$("#content>.news_content>div").eq(1).click(function() {
    var n = Number($("#content>.news_title>.active").attr("index"));
    $("#content>.news_title>.active").attr("index", n + 1);
    var index = $("#content>.news_title>.active").index() + 1;
    $.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=" + $("#content>.news_title>.active").attr("index") + "&channelId=17" + index, insortA)
})

$.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=10&pageNum=1&channelId=171", insortA)

function insortA(data) {
    var json = data.data.list;
    var frg = document.createDocumentFragment();
    for (var i = 0; i < json.length; i++) {
        var $a = $("<a></a>").html(`<div>
            <img src="${json[i]["ext"][0]["value"][0]["url"]}">
        </div>
        <div>
            <p><span>${json[i]["title"]}</span><span>发布日期：${json[i]["start_time"].split(" ")[0]}</span></p>
            <p>${json[i]["intro"]}</p>
            <div></div>
        </div>`)
        frg.appendChild($a[0])
    }
    box_zk.appendChild(frg);
}