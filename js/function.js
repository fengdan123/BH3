//获取经过浏览器渲染的样式
//兼容性
// - 标准浏览器下使用getComputedStyle，IE8及以下不兼容
// - 兼容方法：IE下独有的方法用来获取经过浏览器渲染的样式  
//   - 元素对象.currentStyle.样式属性；
//只能获取不能修改属性值
function qaq(ele, art) {
    return window.getComputedStyle ? window.getComputedStyle(ele)[art] : ele.currentStyle[art];
}

function yunDong(ele, ele2, ele3, attr, step, target, quanshu) {
    clearInterval(ele.temr);
    target = target * quanshu;
    if (quanshu == 1) {
        ele.style[attr] = "0px";
    }
    ele.temr = setInterval(function() {
        var speed = parseFloat(qaq(ele, attr)) + step;
        if (speed <= target) {
            speed = target;
            clearInterval(ele.temr);
            for (var j = 0; j < ele3.length; j++) {
                ele3[j].className = "";
            }
            if (quanshu == ele2.length - 1) {
                quanshu = 0;
            }
            ele3[quanshu].className = "active";
        }
        ele.style[attr] = speed + "px";
    }, 0);

}

function lunbo(ele1, ele2, ele3, attr, step) {
    var quanshu = 0;
    var cdu = ""
    if (attr == "left" || attr == "right") {
        cdu = "width";
    } else {
        cdu = "height";
    }
    var hei = parseFloat(qaq(ele2[0], cdu))
    var target = -hei;
    var dsq = setInterval(function() {
        quanshu += 1;
        if (quanshu >= ele2.length) {
            quanshu = 1;
        }
        yunDong(ele1, ele2, ele3, attr, step, target, quanshu);
    }, 2000)

    for (var i = 0; i < ele3.length; i++) {
        ele3[i].index = i
        ele3[i].onclick = function() {
            clearInterval(dsq);
            ele1.style[attr] = (-hei * this.index) + "px";
            for (var j = 0; j < ele3.length; j++) {
                ele3[j].className = "";
            }
            ele3[this.index].className = "active";
            quanshu = this.index;
            dsq = setInterval(function() {
                quanshu += 1;
                if (quanshu >= ele2.length) {
                    quanshu = 1
                }
                yunDong(ele1, ele2, ele3, attr, step, target, quanshu);
            }, 2000)

        }
    }
}

/*
           eleObj:元素对象
           attr:操作属性
           step:步长
           target:目标值

*/
function move(eleObj, attr, step, target) {
    // 防止多次点击 清除定时器
    window.clearInterval(eleObj.timer);
    // 设置定时器
    // 将当前定时器的返回值保存到元素的自定义属性上
    eleObj.timer = window.setInterval(function() {
        // 要设置的值
        var speed = parseFloat(qaq(eleObj, attr)) + step;
        if (speed >= target) {
            // 将speed的赋值为目标值
            speed = target;
            // 清除定时器
            window.clearInterval(eleObj.timer);
        }
        // 设置样式
        eleObj.style[attr] = speed + 'px';
    }, 0);
}


// 生成n到m之间的随机数  
function getRandom(n, m) {
    // 判断如果n > m
    if (n > m) {
        var temp;
        temp = n;
        n = m;
        m = temp;
    }
    return Math.round(Math.random() * (m - n) + n);
}