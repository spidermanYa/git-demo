window.addEventListener("load", function () {
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var brand_carousel = document.querySelector(".brand-carousel");
  var focusWidth = brand_carousel.offsetWidth;
  var ul = brand_carousel.querySelector("ul");
 
  var num = 0;
  var flag = true;
  // 右侧
  arrow_r.addEventListener("click", function () {
   
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = "0";
        num = 0;
      }
      num++;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
  
    }
  });

  // 左侧
  arrow_l.addEventListener("click", function () {
    if (flag) {
      flag = false;
      if (num == 0) {
        num = ul.children.length - 1;
        ul.style.left = -num * focusWidth + "px";
      }
      num--;
      animate(ul, -num * focusWidth, function () {
        flag = true;
      });
    }
  });
  // 小圆圈

  // 自动播放

});

