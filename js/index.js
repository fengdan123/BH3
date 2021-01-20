//获取轮播图所需的标签
var lunbotu = document.getElementsByClassName("lunbotu")[0];
var tup = lunbotu.getElementsByTagName("li");
var jdian = document.getElementsByClassName("jdian")[0];
var jdian_li = jdian.getElementsByTagName("li");
//动态获取公告title
var gg_title = document.getElementById("gg_title");
var lbiao_li = gg_title.getElementsByTagName("li");
//动态获取公告
var gg = document.getElementById("gg");
var span = gg.getElementsByTagName("span");
var em = gg.getElementsByTagName("em");
var url = ""
var request = new XMLHttpRequest();
var lis = []
var str = ""
    //轮播图
lunbo(lunbotu, tup, jdian_li, "left", -30);

//获取json文件并绑定点击事件
function requ(url, str) {
    request.open("get", url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            var cdu = json["data"]["list"].length;
            for (var i = 0; i < cdu; i++) {
                span[i].innerHTML = str + json["data"]["list"][i].title;
                em[i].innerHTML = json["data"]["list"][i].start_time.split(" ")[0];
            }
        }
    }
}

function csyemiao(url, str) {
    request.open("get", url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            var cdu = json["data"]["list"].length;
            for (let k = 0; k < cdu; k++) {
                var liss = [str + json["data"]["list"][k].title, json["data"]["list"][k].start_time.split(" ")[0]];
                lis.push(liss)
            }
        }
    }
}

var l = 2;
var dsq1 = setInterval(function() {
    url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=4&pageNum=1&channelId=17" + l;
    if (l == 2) {
        str = "[ 动态 ] ";
    } else if (l == 3) {
        str = "[ 公告 ] ";
    } else if (l == 4) {
        str = "[ 活动 ] ";
    } else if (l == 5) {
        str = "[ 补给 ] ";
    }
    csyemiao(url, str);
    l++;
    if (l == 7) {
        clearInterval(dsq1);
        var lis1 = [];
        for (var i = 0; i < lis.length - 1; i++) {
            for (var j = 0; j < lis.length - i - 1; j++) {
                if (lis[j][1] < lis[j + 1][1]) {
                    lis1 = lis[j];
                    lis[j] = lis[j + 1];
                    lis[j + 1] = lis1;
                }
            }
        }
        for (var i = 0; i < 4; i++) {
            span[i].innerHTML = lis[i][0];
            em[i].innerHTML = lis[i][1];
        }
    }
}, 300)
lbiao_li[0].onclick = function() {
    var lis1 = [];
    for (var i = 0; i < lis.length - 1; i++) {
        for (var j = 0; j < lis.length - 1 - i; j++) {
            if (lis[j][1] < lis[j + 1][1]) {
                lis1 = lis[j];
                lis[j] = lis[j + 1];
                lis[j + 1] = lis1;
            }
        }
    }
    for (var i = 0; i < lbiao_li.length; i++) {
        lbiao_li[i].className = "";
    }
    lbiao_li[0].className = "active";
    for (var i = 0; i < 4; i++) {
        span[i].innerHTML = lis[i][0];
        em[i].innerHTML = lis[i][1];
    }
}

for (let i = 1; i < 5; i++) {
    lbiao_li[i].onclick = function() {
        url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=4&pageNum=1&channelId=17" + (i + 1);
        if (i == 1) {
            str = "[ 动态 ] ";
        } else if (i == 2) {
            str = "[ 公告 ] ";
        } else if (i == 3) {
            str = "[ 活动 ] ";
        } else if (i == 4) {
            str = "[ 补给 ] ";
        }
        requ(url, str);
        for (let i = 0; i < lbiao_li.length; i++) {
            lbiao_li[i].className = "";
        }
        lbiao_li[i].className = "active";
    }
}

//https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181
var roles_wrap = document.getElementById("roles-wrap");
var roles_wrap_img = roles_wrap.getElementsByTagName("img");
var roles_wrap_em = roles_wrap.getElementsByTagName("em");
var roles_wrap_divs = roles_wrap.getElementsByClassName("mideo")[0].children;
var h2 = roles_wrap.getElementsByTagName("h2")[0];

function requ1(i) {
    request.open("get", "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=200&pageNum=1&channelId=181");
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            roles_wrap_img[0].src = json["data"]["list"][i]["ext"][3]["value"][0]["url"];
            roles_wrap_img[1].src = json["data"]["list"][i]["ext"][10]["value"][0]["url"];
            switch (json["data"]["list"][i]["type"]) {
                case ("官网萝莎莉娅"):
                    h2.innerText = "萝莎莉娅·阿琳";
                    break;
                case ("官网芽衣"):
                    h2.innerText = "雷电芽衣";
                    break;
                case ("官网丽塔"):
                    h2.innerText = "丽塔·洛丝薇瑟";
                    break;
                case ("官网德丽莎"):
                    h2.innerText = "德丽莎·阿波卡利斯";
                    break;
                case ("官网幽兰黛尔"):
                    h2.innerText = "幽兰黛尔";
                    break;
                case ("官网符华"):
                    h2.innerText = "符华";
                    break;
                case ("官网八重樱"):
                    h2.innerText = "八重樱";
                    break;
                case ("官网莉莉娅"):
                    h2.innerText = "莉莉娅·阿琳";
                    break;
                case ("官网希儿"):
                    h2.innerText = "希儿·芙乐艾";
                    break;
                case ("官网布洛妮娅"):
                    h2.innerText = "布洛妮娅·扎伊切克";
                    break;
                case ("官网卡莲"):
                    h2.innerText = "卡莲·卡斯兰娜";
                    break;
                case ("官网姬子"):
                    h2.innerText = "无量塔姬子";
                    break;
                case ("官网琪亚娜"):
                    h2.innerText = "琪亚娜·卡斯兰娜";
                    break;
            }
            roles_wrap_em[0].innerText = json["data"]["list"][i]["title"];
            roles_wrap_em[1].innerText = h2.innerText;
            roles_wrap_em[2].innerText = json["data"]["list"][i]["title"];
            roles_wrap_em[3].innerText = json["data"]["list"][i]["ext"][1]["value"];
            roles_wrap_em[4].innerText = json["data"]["list"][i]["ext"][2]["value"];
        }
    }
}

//获取获取json文件并绑定点击事件

for (let i = 0; i < roles_wrap_divs.length; i++) {
    roles_wrap_divs[i].onclick = function() {
        requ1(i);
        for (var j = 0; j < roles_wrap_divs.length; j++) {
            roles_wrap_divs[j].className = "";
        }
        roles_wrap_divs[i].className = "active";
        roles_wrap_img[0].style.left = -parseInt(qaq(roles_wrap_img[0], "width")) + "px";
        move(roles_wrap_img[0], "left", 20, 0)
    }
}

//
var wx = document.getElementById("wx");
var wx_box = wx.children;
var wx_close = wx.getElementsByClassName("close")[0];
wx_box[0].flag = true;
wx_box[0].onclick = function() {
    if (wx_box[0].flag) {
        wx_box[2].style.display = "block";
        wx_box[0].flag = false;
    } else {
        wx_box[2].style.display = "none";
        wx_box[0].flag = true;
    }
}
wx_close.onclick = function() {
    wx_box[2].style.display = "none";
    wx_box[0].flag = true;
}


//视频全屏
var btn = document.getElementById("btn");
var video1 = document.getElementsByClassName("video")[0];
btn.onclick = function() {
        video1.style.display = "flex";
    }
    //视频全屏
var btn1 = document.getElementById("btn1");
btn1.onclick = function() {
    video1.style.display = "flex";
}


//下载
var desktopDownload = document.getElementById("desktopDownload");
var desktop = document.getElementsByClassName("desktop")[0];
desktopDownload.onclick = function() {
    desktop.style.display = "block";
}
desktop.children[0].onmouseleave = function() {
    desktop.onclick = function() {
        desktop.style.display = "none";
    }
    desktop.children[0].onmouseenter = function() {
        desktop.onclick = desktop.children[0].onmouseenter = null
    }
}

desktop.children[0].children[0].onclick = function() {
    desktop.style.display = "none";
}


//监测刷新事件
window.onbeforeunload = function() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}