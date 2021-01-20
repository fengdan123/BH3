var bz = document.getElementsByClassName("bz");
var tup_title = document.getElementsByClassName("title");
var ljie = document.getElementsByClassName("ljie");
var btn = document.getElementsByClassName("btn");
var dabox = document.getElementsByClassName("dabox")
var request = new XMLHttpRequest();
var url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=1&channelId=177";

function requ() {
    request.open("get", url);
    request.send(null);
    request.onload = function() {
        if (request.status == 200) {
            var json = JSON.parse(request.responseText);
            var cdu = Object.keys(json["data"]["list"]).length;
            if (cdu < 9) {
                for (let i = 1; i <= 9 - cdu; i++) {
                    dabox[9 - i].style.opacity = 0;
                }
            } else {
                for (let i = 0; i < 9; i++) {
                    dabox[i].style.opacity = 1;
                }
            }
            for (let i = 0; i < cdu; i++) {
                var kkt = json["data"]["list"][i]["ext"][0]["value"][0]["url"];
                var name = json["data"]["list"][i]["ext"][1]["value"];
                bz[i].src = kkt;
                tup_title[i].innerHTML = name;
                ljie[i].href = kkt;
            }
        }
    }
}

function btn_dianj() {
    act_btn = document.getElementsByClassName("btn active")[0];
    if (parseInt(act_btn.value) > 1 && parseInt(act_btn.value) < 5) {
        btn[0].style.cursor = "pointer"
        btn[1].style.cursor = "pointer"
        btn[8].style.cursor = "pointer"
        btn[7].style.cursor = "pointer"
        btn[0].onmouseover = function() {
            btn[0].style.color = "#0097de";
        }
        btn[0].onmouseout = function() {
            btn[0].style.color = "#000"
        }
        btn[1].onmouseover = function() {
            btn[1].style.color = "#fff";
            btn[1].style.backgroundColor = "#0097de";
        }
        btn[1].onmouseout = function() {
            btn[1].style.color = "#000"
            btn[1].style.backgroundColor = "transparent";
        }
        btn[8].onmouseover = function() {
            btn[8].style.color = "#0097de";
        }
        btn[8].onmouseout = function() {
            btn[8].style.color = "#000"
        }
        btn[7].onmouseover = function() {
            btn[7].style.color = "#fff";
            btn[7].style.backgroundColor = "#0097de";
        }
        btn[7].onmouseout = function() {
            btn[7].style.color = "#000"
            btn[7].style.backgroundColor = "transparent";
        }
    } else if (parseInt(act_btn.value) == 5) {
        btn[8].style.cursor = "text"
        btn[8].onmouseover = function() {
            btn[8].style.color = "#000";
        }
        btn[7].style.cursor = "text"
        btn[7].onmouseover = function() {
            btn[7].style.color = "#000";
            btn[7].style.backgroundColor = "transparent"
        }
        btn[0].style.cursor = "pointer"
        btn[1].style.cursor = "pointer"
        btn[0].onmouseover = function() {
            btn[0].style.color = "#0097de";
        }
        btn[0].onmouseout = function() {
            btn[0].style.color = "#000"
        }
        btn[1].onmouseover = function() {
            btn[1].style.color = "#fff";
            btn[1].style.backgroundColor = "#0097de";
        }
        btn[1].onmouseout = function() {
            btn[1].style.color = "#000"
            btn[1].style.backgroundColor = "transparent";
        }
    } else if (parseInt(act_btn.value) == 1) {
        btn[0].style.cursor = "text"
        btn[0].onmouseover = function() {
            btn[0].style.color = "#000";
        }
        btn[1].style.cursor = "text"
        btn[1].onmouseover = function() {
            btn[1].style.color = "#000";
        }
        btn[8].style.cursor = "pointer"
        btn[7].style.cursor = "pointer"
        btn[8].onmouseover = function() {
            btn[8].style.color = "#0097de";
        }
        btn[8].onmouseout = function() {
            btn[8].style.color = "#000";
        }
        btn[7].onmouseover = function() {
            btn[7].style.color = "#fff";
            btn[7].style.backgroundColor = "#0097de";
        }
        btn[7].onmouseout = function() {
            btn[7].style.color = "#000"
            btn[7].style.backgroundColor = "transparent";
        }
    }
}
window.onload = function() {
    var act_btn = document.getElementsByClassName("btn active")[0];
    requ();
    btn[0].style.cursor = "text"
    btn[1].style.cursor = "text"
    btn[8].onmouseover = function() {
        btn[8].style.color = "#0097de";
    }
    btn[8].onmouseout = function() {
        btn[8].style.color = "#000";
    }
    btn[0].onmouseover = function() {
        btn[0].style.color = "#000";
    }
    btn[1].onmouseover = function() {
        btn[1].style.color = "#000";
        btn[1].style.backgroundColor = "transparent";
    }

    for (let i = 0; i < 9; i++) {
        if (i >= 2 && i <= 6) {
            btn[i].onclick = function() {
                url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=" + btn[i].value + "&channelId=177";
                for (let i = 0; i < 9; i++) {
                    btn[i].className = "btn"
                }
                btn[i].className = "btn active"
                requ();
                btn_dianj();
            }

        }
        if (i == 0) {
            btn[i].onclick = function() {
                btn[0].style.color = "#000"
                url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=" + btn[2].value + "&channelId=177";
                for (let i = 0; i < 9; i++) {
                    btn[i].className = "btn"
                }
                btn[2].className = "btn active"
                requ();
                btn_dianj();
            }
        }
        if (i == 1) {
            btn[i].onclick = function() {
                act_btn = document.getElementsByClassName("btn active")[0]
                var btn_num = act_btn.value - 1

                if (btn_num <= 1) {
                    btn_num = 1;
                    btn[1].style.color = "#000";
                    btn[1].style.backgroundColor = "transparent";
                }
                url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=" + btn_num + "&channelId=177";
                for (let i = 0; i < 9; i++) {
                    btn[i].className = "btn"
                }
                btn[btn_num + 1].className = "btn active"
                requ();
                btn_dianj();
            }
        }
        if (i == 7) {
            btn[i].onclick = function() {
                act_btn = document.getElementsByClassName("btn active")[0]
                var btn_num = parseInt(act_btn.value) + 1
                if (btn_num >= 5) {
                    btn_num = 5
                    btn[7].style.color = "#000";
                    btn[7].style.backgroundColor = "transparent";
                }
                url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=" + btn_num + "&channelId=177";
                for (let i = 0; i < 9; i++) {
                    btn[i].className = "btn"
                }
                btn[btn_num + 1].className = "btn active"
                requ();
                btn_dianj();
            }
        }
        if (i == 8) {
            btn[i].onclick = function() {
                btn[8].style.color = "#000";
                url = "https://www.bh3.com/content/bh3Cn/getContentList?pageSize=9&pageNum=" + btn[6].value + "&channelId=177";
                for (let i = 0; i < 9; i++) {
                    btn[i].className = "btn"
                }
                btn[6].className = "btn active"
                requ();
                btn_dianj();
            }
        }
    }

}