/**
 * 身份证号验证
 */
function isSFZAvailable(str) {
  var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

/**
 * 手机号验证
 */
function isMobile(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 查看滚动条的滚动距离
 */
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}

/**
 * 查看视口的尺寸
 */
function getViewportOffset() {
  if (window.innerWidth) {
    return {
      w: window.innerWidth,
      h: window.innerHeight
    }
  } else {
    if (document.compatMode === "BackCompat") {
      return {
        w: document.body.clientWidth,
        h: document.body.clientHeight
      }
    } else {
      return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
      }
    }
  }
}

/**
 * 元素相对于文本的坐标
 */
function getElementPosition() {

}

/**
 * 查询样式
 */
function getStyle(elem, prop) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(elem, null)[prop];
  } else {
    return elem.currentStyle[prop];
  }
}

/**
 * 事件绑定
 */
function addEvent(elem, type, handle) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handle, false);
  } else if (elem.attachEvent) {
    elem.attachEvent('on' + type, function () {
      handle.call(elem);
    })
  } else {
    elem['on' + type] = handle;
  }
}

/**
 * 事件解除
 */
function removeEvent(elem, type, handle) {

}

/**
 *  取消冒泡
 */
function stopBubble(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else {
    event.cancelBubble = true;
  }
}

/**
 * 阻止默认事件
 */
function cancelHandler(event) {
  if (event.prevenyDefault) {
    event.prevenyDefault();
  } else {
    event.returnValue = false;
  }
}

/**
 * 拖拽
 */
function drag(elem) {
  var disX,
    disY;
  addEvent(elem, 'mousedown', function (e) {
    var event = e || window.event;
    disX = event.clientX - parseInt(getStyle(elem, 'left'));
    disY = event.clientY - parseInt(getStyle(elem, 'top'));
    addEvent(document, 'mousemove', mouseMove);
    addEvent(document, 'mouseup', mouseUp);
    stopBubble(event);
    cancelHandler(event);
  });

  function mouseMove(e) {
    var event = e || window.event;
    elem.style.left = event.clientX - disX + "px";
    elem.style.top = event.clientY - disY + "px";
  }

  function mouseUp(e) {
    var event = e || window.event;
    removeEvent(document, 'mousemove', mouseMove);
    removeEvent(document, 'mouseup', mouseUp);
  }
}

/**
 * 
 */
function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = "text/javascript";
  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState == "complete" || script.readyState == "loaded") {
        callback();
      }
    }
  } else {
    script.onload = function () {
      callback();
    }
  }
  script.src = url;
  document.head.appendChild(script);
}