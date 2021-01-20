//https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181
//https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=183
var json = null;
var list1 = document.getElementById("list");
$.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=183", insertA)

function insertA(data) {
    json = data.data.list;
    $.getJSON("https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181", insertB)

}

function insertB(data) {
    var json1 = data.data.list;
    for (let i = 0; i < json.length; i++) {
        var qwq = document.createElement("div");
        var div = $("<div></div>").html(`<div>${json[i]["ext"][0]["value"]}</div>
    <div></div>
    <div>${json[i]["ext"][1]["value"]}</div>`)
        qwq.appendChild(div[0])
        var qaq = document.createElement("div");
        for (let j = 0; j < json1.length; j++) {
            if (json1[j]["type"] == json[i]["ext"][2]["value"]) {
                qaq.appendChild($("<a></a>").html(`
            <div>
                <div>
                    <img src="${json1[j]["ext"][4]["value"][0]["url"]}" alt="米哈游">
                </div>
            </div>`).attr("href", "/role.html").on("click", function() {
                    localStorage.setItem("id", json1[j]["id"]);
                    localStorage.setItem("name", json[i]["ext"][0]["value"]);
                    localStorage.setItem("E_name", json[i]["ext"][1]["value"]);
                    localStorage.setItem("type", json[i]["ext"][2]["value"])
                })[0])
            }
        }
        qwq.appendChild(qaq)
        list1.appendChild(qwq)
    }
}