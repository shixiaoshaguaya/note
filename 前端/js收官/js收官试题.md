# js收官试题

### 一、选择
1. 哪个是DOM独有的对象(C)
A. History 
B. Screen  
C. Document  
D. Location

2. Location上的哪个属性更改不会刷新页面(D)
A. href   
B. search  
C. host   
D. hash

3. 以下哪个方法没有对数组进行遍历操作(D)
A. Reduce  
B. Map  
C. Sort  
D. Pop

4. userAgent属性不包含下列哪种信息(B)
A. 浏览器渲染引擎 
B. 设备分辨率 
C. 操作系统 
D. 浏览器版本

5. 在js中获取div标签对应的Dom对象oDiv, 执行oDiv.class = 'duyi'，div标签上或出现(C)
A．class = 'duyi' 
B. className ='duyi'
C.空  
D. class=''

---

### 二、填空
1. DOM中文名称为文档对象模型，是js操作文档的中介，BOM中文名称为__浏览器对象模型__，是js操作__浏览器__的中介。
2. History可以通过__go(-2)__方法进行页面回退2步操作。
3. Label标签通过__for__属性和其他标签进行关联。
4. 数组ForEach和普通的for循环哪个遍历效率更高__for__。
5. 模拟重力场的课中是通过____top = document.documentElement.clientHeight – oDiv.offsetHeight____公式判断该物体正好运动到浏览器底部。

---

### 三、编程题
1. 定义数组：var arr = [{name: 'cst', age: '18'}, {name: 'jc', age: '20'}, {name: 'dxm', age: '50'} , {name: 'dcg', age: '30'}]。利用filter和map对数组进行操作：留下name中包含c的，并且让他们的年龄都乘2。

```javascript
var arr = [
  {name: 'cst', age: '18'},
  {name: 'jc', age: '20'},
  {name: 'dxm', age: '50'},
  {name: 'dcg', age: '30'}
]
var arr2 = arr.filter(function (ele) {
  return ele.name.indexOf('c') != -1;
}).map(function (ele) {
  ele.age *= 2;
  return ele;
})
console.log(arr2);
```

2. 用你能想到较好的，且通用方式把浏览器输入框上的网址，如：https://www.baidu.com/s?ie=utf-8&f=8。
按以下几个部分划分并且创建对象：
• 协议：https  
• 主机：www.baidu.com 
• 路径：/s 
• 参数：ie=utf-8&f=8
此对象属性和属性值形式如下：
```javascript
{
  protocol: 'https',  
  host: 'www.baidu.com', 
  path: '/s',  
  search: {ie:'utf-8',f:'8'}
}
```

实现方式一：
```javascript
var url = new URL('https://www.baidu.com/s?ie=utf-8&f=8');

function urlToObj() {
  var result = {
    protocol: url.protocol,
    host: url.hostname, //此处获取hostname,如果获取host，则包含端口号
    path: url.pathname,
    search: {}
  };
  var str = url.search.substr(1);
  params = str.split("&");
  params.reduce(function (pre, cur) {
    var items = cur.split('=');
    pre[items[0]] = items[1];
    return pre;
  }, result.search);
  console.log(result);
}
urlToObj()
```

实现方式二：
```javascript
var url = new URL('https://www.baidu.com/s?ie=utf-8&f=8')

function urlToObj() {
  var result = {
    protocol: url.protocol,
    host: url.hostname,
    path: url.pathname,
    search: {}
  }
  for (param of url.searchParams) {
    result.search[param[0]] = param[1];
  }
  console.log(result);
}
urlToObj()
```

3. 实现一个getDom(str)函数，可以根据参数（str形式如：'#id'、'.Class'、'tag'）的不同选择对应选择不同的dom。 
注：
• '#id'此参数为根据id名称选择dom，.Class此参数为根据类名选择dom，'tag'此参数为根据标签名称获取dom。
• 不能使用原生的getElementsByClassName方法
```javascript
function trimClassName (dom) {
  var reg = /\s+/g;
  // 把所有的空格变成一个先
  var newClassStr = dom.className.replace(reg, ' ');
  return newClassStr;
};      

function getByClass(_className) {
  var allDomArray = [].slice.call(document.getElementsByTagName('*'), 0);
  var newDomArr = [];
  allDomArray.forEach(function (ele, index) {
    var newClassStr = trimClassName(ele).trim();
    var classNameArray = newClassStr.split(' ');
    classNameArray.forEach(function (className, index) {
      if (className == _className) {
        newDomArr.push(ele);
      }
    })
  });
  return newDomArr;            
};

function getDom(selector) {
  this.length = 0;
  if (selector.indexOf('.') != -1) {
    var dom = getByClass( selector.slice(1) );
  } else if (selector.indexOf('#') != -1) {
    var dom = document.getElementById( selector.slice(1) );
  } else {
    var dom = document.getElementsByTagName(selector);
  }
  return dom;
};
```

4. 请尝试写出缓冲运动的效果。

```javascript
function startMove(dom, target) {
  clearInterval(timer);
  var iSpeed = null;
  timer = setInterval(function () {
    iSpeed = (target - dom.offsetLeft) / 7; 
    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
    if (dom.offsetLeft == target) {
      clearInterval(timer);
    } else {
      dom.style.left = dom.offsetLeft + iSpeed + 'px';
    }
  }, 30);
};
```
 
5. 请用伪代码（用中文分步描述逻辑）写出轮播图的制作思路。
    a. 布局 需要 overflow:hidden的标签（div），内部有ul且宽度足够容纳多个li：float变成一横排。
    b. 引入之前的运动函数配合完成操作。
    c. 用一个定时器控制时间间隔，利用运动函数让ul当前当前位置发生改变，每次移动一个li或最外侧div的宽度。
    d. 添加左右点击事件，通过计算移动方向和移动距离控制ul左右移动
    e. 利用闭包原理给每一个索引按钮绑定事件，事件处理函数可以根据当前索引值决定ul移动到哪个位置上。
    若有收获，就点个赞吧