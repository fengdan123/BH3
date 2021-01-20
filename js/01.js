;
(function() {
    var da_box = document.getElementsByClassName("video")[0];
    var video = da_box.getElementsByTagName("video")[0];
    var box = document.getElementById("box");

    var left_box1 = box.children[0].children[0];
    var left_box2 = box.children[0].children[1];

    var middle_ti = box.children[1].children[0];
    var middle_kuai = box.children[1].children[1];
    var middle_kuaiTi = box.children[1].children[2];

    var sj = box.children[2].children[0];
    var now = sj.children[0];
    var total = sj.children[1];
    var titi = box.children[2].children[1];
    var gti = titi.children[1];
    var right_ti = gti.children[0];
    var right_kuai = gti.children[1];
    var right_kuaiTi = gti.children[2];
    var syin = titi.children[0].children[0];
    var left = 0;
    var yin_left = right_ti.offsetWidth - right_kuai.offsetWidth;
    right_kuai.style.left = yin_left + "px";
    right_kuaiTi.style.width = yin_left + "px";
    //加载视频总时长
    video.addEventListener("loadedmetadata", function() {
        total.index = video.duration;
        total.innerHTML = formatSj(video.duration);
    });

    function formatSj(data) {
        var hour = parseInt(data / 3600);
        var fen = parseInt(data / 60);
        var m = parseInt(data % 60);
        return buzero(hour) + ":" + buzero(fen) + ":" + buzero(m);
    }

    function buzero(data) {
        if (data < 10) {
            return "0" + data;
        } else {
            return data;
        }
    }

    //获取视频播放时的以播放的时间
    video.addEventListener("timeupdate", function() {
        now.innerHTML = formatSj(video.currentTime);
        var bl = (middle_ti.offsetWidth - middle_kuai.offsetWidth) / video.duration;
        middle_kuai.style.left = video.currentTime * bl + "px";
        middle_kuaiTi.style.width = video.currentTime * bl + "px";
        left = video.currentTime * bl;
        if (now.innerHTML === total.innerHTML) {
            left_box1.style.backgroundPositionY = "-22px";
        }
    });

    //开始暂停
    left_box1.onclick = zti

    function zti() {
        if (video.paused) {
            video.paused = !video.paused;
            left_box1.style.backgroundPositionY = "-11px";
            video.play();
        } else {
            video.paused = !video.paused;
            left_box1.style.backgroundPositionY = "-22px";
            video.pause();
        }
    }
    //重置时间
    left_box2.onclick = function() {
        video.pause();
        video.currentTime = 0;
        left_box1.style.backgroundPositionY = "-22px";
    }

    //视频进度条
    middle_kuai.onmousedown = function(ev) {
        ev = ev || window.event;
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        var x = ev.clientX - left;
        document.onmousemove = function(ev) {
            ev = ev || window.event;
            left = ev.clientX - x;
            ydong(middle_ti, middle_kuai, middle_kuaiTi, left, true);

        }
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null
        }
    }

    function ydong(ti, kuai, kuaiTi, left, flag) {
        if (flag) {
            var zsc = total.index;
            var bl = (ti.offsetWidth - kuai.offsetWidth) / zsc;
        } else {
            var bl = (ti.offsetWidth - kuai.offsetWidth)
        }
        if (left < 0) {
            left = 0;
        } else if (left > ti.offsetWidth - kuai.offsetWidth) {
            left = ti.offsetWidth - kuai.offsetWidth;
        }
        kuai.style.left = left + "px";
        if (flag) {
            video.currentTime = left / bl;
        } else {
            video.volume = left / bl;
            if (video.volume == 0) {
                syin.style.backgroundPositionY = "-46px";
            } else {
                syin.style.backgroundPositionY = "-34px";
            }
        }
        kuaiTi.style.width = left + "px";
    }
    //键盘监听事件
    document.onkeydown = function(ev) {
        ev = ev || window.event;
        // console.log(ev.keyCode); //spance 32 右39 左37
        switch (ev.keyCode) {
            case 32:
                {
                    zti();
                    break;
                }
            case 39:
                {
                    var cdu = video.currentTime + 2;
                    if (cdu > total.index) {
                        video.currentTime = video.currentTime;
                    } else {
                        video.currentTime += 2;
                    }
                    break;
                }
            case 37:
                {
                    var cdu = video.currentTime - 2;
                    if (cdu < 0) {
                        video.currentTime = 0;
                    } else {
                        video.currentTime -= 2;
                    }
                    break;
                }
        }
    }

    //点击总进度条
    middle_ti.onclick = function(ev) {
        ev = ev || window.event;
        left = ev.clientX - box.children[0].offsetWidth;
        ydong(middle_ti, middle_kuai, middle_kuaiTi, left, true);
    }

    //点击当前进度
    middle_kuaiTi.onclick = function(ev) {
        ev = ev || window.event;
        left = ev.clientX - box.children[0].offsetWidth;
        ydong(middle_ti, middle_kuai, middle_kuaiTi, left, true);
    }

    //音量进度条
    right_kuai.onmousedown = function(ev) {
        ev = ev || window.event;
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        var x = ev.clientX - yin_left;
        document.onmousemove = function(ev) {
            ev = ev || window.event;
            yin_left = ev.clientX - x;
            ydong(right_ti, right_kuai, right_kuaiTi, yin_left, false);

        }
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        }
    }
    right_ti.onclick = function(ev) {
        ev = ev || window.event;
        yin_left = ev.clientX - gti.offsetLeft;
        ydong(right_ti, right_kuai, right_kuaiTi, yin_left, false);
    }

    //点击当前进度
    right_kuaiTi.onclick = function(ev) {
            ev = ev || window.event;
            yin_left = ev.clientX - gti.offsetLeft;
            ydong(right_ti, right_kuai, right_kuaiTi, yin_left, false);
        }
        //关闭全局视频
    var close = document.getElementById("close");
    close.onclick = function() {
        video.pause();
        left_box1.style.backgroundPositionY = "-22px";
        da_box.style.display = "none";
    }
})()