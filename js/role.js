var gjc = localStorage.getItem("id");
var name = localStorage.getItem("name");
var type = localStorage.getItem("type");
var E_name = localStorage.getItem("E_name");
$.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181", insertA)
var div23 = $("<div></div>").append($("<div></div>").html(`<span>${E_name}</span>`));
var div232 = $("<div id='list'></div>");
var div2 = $("<div></div>");
var div = $(".main>div");
var src = null;

function insertA(data) {
    json = data.data.list;
    var flag = null;
    console.log(json)
    for (var i = 0; i < json.length; i++) {
        if (gjc == json[i].contentId) {
            src = json[i].ext[11].value[0].url;
            flag = i;
            div2.html(`<div>
            <img src="${json[i].ext[3].value[0].url}">
            <div>
                <img src="${json[i].ext[5].value[0].url}">
            </div>
        </div>
        <div>
            <div>${name}</div>
            <div>
                <div>
                    <div>${json[i].ext[0].value}</div>
                    <div>背景资料</div>
                    <div>姓名：${name}</div>
                    <div>生日：${json[i].ext[43].value}</div>
                    <div>装甲：${json[i].ext[0].value}</div>
                    <div>作战方式：${json[i].ext[1].value}</div>
                    <div>角色招式</div>
                    <div id="jn">
                        <div class="active">
                            <img src="${json[i].ext[8].value[0].url}">
                            <img src="${json[i].ext[9].value[0].url}">
                        </div>
                        <div>
                            <img src="${json[i].ext[14].value[0].url}">
                            <img src="${json[i].ext[15].value[0].url}">
                        </div>
                        <div>
                            <img src="${json[i].ext[20].value[0].url}">
                            <img src="${json[i].ext[21].value[0].url}">
                        </div>
                        <div>
                            <img src="${json[i].ext[26].value[0].url}">
                            <img src="${json[i].ext[27].value[0].url}">
                        </div>
                    </div>
                    <div id="mshu">
                        <div>
                            <div>${json[i].ext[6].value}
                                <div></div>
                            </div>
                            <p>${json[i].ext[7].value}</p>
                        </div>
                        <div>
                            <img src="${json[i].ext[10].value[0].url}">
                            <div id="btn"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
        }
        if (json[i]["type"] == type) {
            if (gjc == json[i].contentId) {
                div232.append($("<div></div>").html(`<div class="active">
            <div>
                <img src="${json[i].ext[4].value[0].url}" alt="米哈游">
            </div>
            <div>${json[i].ext[0].value}</div>
        </div>`).attr("index", json[i].contentId))
                continue
            }
            div232.append($("<div></div>").html(`<div>
            <div>
                <img src="${json[i].ext[4].value[0].url}" alt="米哈游">
            </div>
            <div>${json[i].ext[0].value}</div>
        </div>`).attr("index", json[i].contentId))
        }
    }
    div23.append(div232)
    div2.append(div23)
    div.append(div2)
    $("#jn>div").on("click", function() {
        var index = $(this).index();
        src = json[flag].ext[(index + 1) * 6 + 5].value[0].url;
        $(".video>video").attr("src", src);
        $(".video>video").attr("poster", src + "?x-oss-process=video/snapshot,t_1000,f_jpg");
        $("#mshu").html(`<div>
        <div>${json[flag].ext[(index+1)*6].value}
            <div></div>
        </div>
        <p>${json[flag].ext[(index+1)*6+1].value}</p>
    </div>
    <div>
        <img src="${json[flag].ext[(index+1)*6+4].value[0].url}">
        <div id="btn"></div>
    </div>`);
        $("#btn").on("click", function() {
            console.log(111)
            $(".video").css("display", "flex")
        })
        $(this).addClass("active").siblings().removeClass("active");
    })
    $("#list>div").on("click", function() {
        localStorage.setItem("id", $(this).attr("index"));
        location.href = "/role.html"
    })
    $(".video>video").attr("src", src);
    $(".video>video").attr("poster", src + "?x-oss-process=video/snapshot,t_1000,f_jpg");
    $("#btn").on("click", function() {
        $(".video").css("display", "flex")
    })
}