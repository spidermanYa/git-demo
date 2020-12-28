function animate(obj, target, callback) {
    // 步长公式(目标位置 - 现在位置)/10

    clearInterval(obj.timr);

    obj.timr = setInterval(function() {
        // 步长公式(目标位置 - 现在位置)/10
        // var step = Math.ceil((target - obj.offsetLeft) / 100);
        var step = (target - obj.offsetLeft) / 10;
        if (step > 0) {
            step = Math.ceil(step);
        } else {
            step = Math.floor(step);
        }
        if (obj.offsetLeft == target) {
            clearInterval(obj.timr);
            // if (callback) {
            //     // calback();
            //     callback();

            // }
            callback && callback();

        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}