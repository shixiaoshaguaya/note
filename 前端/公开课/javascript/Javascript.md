## 一、typeof能返回的六种数据类型（区分数字类型） 
number、string、boolean、undefined、object、function
```javascript
var num = { };
console.log(typeof(num)); //返回object

var num = [ ];
console.log(typeof(num)); //返回object
var num = null;
console.log(typeof(num)); //null返回object，最早是代替空对象的
```

---

## 二、类型转换
```javascript
var num = 1 + "1";
console.log(typeof(num) + ":" + num); //显示string:11

var num =  1 * "1";
console.log(typeof(num) + ":" + num); //显示number:1

var num =  1 - "1";
console.log(typeof(num) + ":" + num); //显示number:0

var num =  "2" - "1";
console.log(typeof(num) + ":" + num); //显示number:1

var num =  "2" * "1";
console.log(typeof(num) + ":" + num); //显示number:2
```

---

## 三、显示类型转换
#### 1、Number(mix)是想把里面的东西转换成数字
```javascript
var num = Number('123');
console.log(typeof(num) + ":" + num); //显示number:123
 
var demo = "123";
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:123
 
var demo = true;
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:1
 
var demo = false;
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:0
 
var demo = undefined;
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:NaN

var demo = "abc";
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:NaN
 
var demo = "-123";
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:-123

var demo = "123abc";
var num = Number(demo);
console.log(typeof(num) + ":" + num); //显示number:NaN
```

#### 2、parseInt(string, radix) parse 是转化，Int是整型，整数，目的是把里面转换成整数
```javascript
var demo = "123";
var num = parseInt(demo);
console.log(typeof(num) + ":" + num); //显示number:123

var demo = true;
var num = parseInt(demo);
console.log(typeof(num) + ":" + num); //显示number:NaN

var demo = false;
var num = parseInt(demo);
console.log(typeof(num) + ":" + num); //显示number:NaN

var demo = 123.9;
var num = parseInt(demo);
console.log(typeof(num) + ":" + num); //显示number:123
//此处是直接去掉小数，不是四舍五入

var demo = "10";
var num = parseInt(demo, 16);
console.log(typeof(num) + ":" + num); //显示number:16
//var num = parseInt(demo, radix)  radix是基底的意思
//radix写成16，系统会认为是以16进制为基底，10（一零）是16进制的一零，是
//以16进制为基底，把他转换成为10进制的数字（就是16），上面是以目标进制为基底，
//转换成十进制（radix范围是2-36）

var demo = "3";
var num = parseInt(demo, 2);
console.log(typeof(num) + ":" + num); //显示number:NaN

var demo = "b";
var num = parseInt(demo, 16);
console.log(typeof(num) + ":" + num); //显示number:11

var demo = "123abc";
var num = parseInt(demo, 16);
console.log(typeof(num) + ":" + num); //显示number:123

var demo = "100px";
var num = parseInt(demo, 16);
console.log(typeof(num) + ":" + num); //显示number:100
//parseInt从数字类开始看，看到非数类为止，返回前面的数
```

#### 3、parseFloat(string)转换成浮点数字，就是正常小数
```javascript
var demo = "100.2";
var num = parseFloat(demo);
console.log(typeof(num) + ":" + num); //显示number:100.2

var demo = "100.2.3";
var num = parseFloat(demo);
console.log(typeof(num) + ":" + num); //显示number:100.2

var demo = "100.2abc";
var num = parseFloat(demo);
console.log(typeof(num) + ":" + num); //显示number:100.2
//parseFloat从数字类开始看，看到除了第一个点以外的非数字类型为截至，
//返回前面的数
```

#### 4、toString(radix)
```javascript
var demo = 123；
var num = demo.toSting();
console.log(typeof(num) + ":" + num); //显示string:123
//相当与把123转换成字符串
//想把谁转换成字符串，就写成谁.toSting，上面是想把demo转换成toSting，
//写成demo.toSting

var demo = undefined;
var num = demo.toSting();
console.log(typeof(num) + ":" + num); //显报错，
//undefined和null不能用toString

var demo = 123;
var num = demo.toSting(8);
console.log(typeof(num) + ":" + num); //173，把123转成为八进制
//这里的radix意思是以十进制为基底，转换成目标进制（即8进制）

//例给你一个二进制的数，转换成十六进制，是先从二进制到十进制再到十六进制
var num = 10101010;
var test = parseInt(num, 2);
console.log(test.toString(16));//aa
```

#### 5、String(mix)
转换成字符串，写什么都成了字符串
```javascript
var demo = 123.234;
var num = String (demo);
console.log(typeof(num) + ":" + num);//显示string: 123.234
```

#### 6、Boolean()
Boolean()转换成布尔值false和true
```javascript
var demo = "";
var num = String (demo);
console.log(typeof(num) + ":" + num);//显示boolean: false
```

---

## 四、隐式类型转换
隐式类型转换是跟你转换了也不知道
隐式类型转换内部隐式调用的是显示的方法
隐式类型转换包括isNaN()，++，--，+/-（一元正负），+，*，%，，&&，||，！，<，>，<=，>=，==，!=
```javascript
console.log(isNaN(NaN);//答案true
console.log(isNaN("123");//答案false
console.log(isNaN("abc");//答案true。会调用number，先把"abc"放number里面转换，通过number的转换再和NaN比对，如果相等就是true
console.log(isNaN(null);//答案false，在number里面放null是0，不是NaN
console.log(isNaN(undefined);//答案true
```

---

## 五、函数function
#### 1、定义
1. 函数声明
定义一个函数可以先写一个function,函数就是另一个类型的变量
我声明一个函数test,test是函数名。写成下面
function test(){
函数体
}
函数名起名：开发规范要求，函数名和变量名如果由多个单词拼接，必须符合小驼峰原则（第一个单词首字母小写，后面的首字母大写）
2. 函数表达式
命名函数表达式
匿名函数表达式（常用，一般说的函数表达式就是匿名函数表达式）

#### 2、组成形式
1. 函数名称
function test(){}其中function是函数关键字，test是函数名，必须有(){}，参数可有可没有，参数是写在()括号里面的。如果写成function test(a，b){}，相当于隐式的在函数里面var a，var b申明了两个变量，（）括号里面不能直接写var
2. 参数(可有可没有，但是高级编程必有)
   1. 形参（形式参数）：指的是function sum（a，b）{}括号里面的a和b
   2. 实参（实际参数）：指的是sum(1，2);里面的1，2
   (**==天生不定参，形参可以比实参多，实参也可以比形参多==**)
   (**==js参数不限制位置，天生不定参数==**)
   (**==在每一个函数里面都有一个隐式的东西arguments这个是实参列表==**)
3. 返回值return
结束条件和返回值return，return有终止函数的功能
没写return，实际上是加上了一个隐式的return
return最常用的是返回值。本意是把一个值返回到函数以外

---

## 六、原型
1. 定义：原型是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先。通过该构造函数产生的对象，可以继承该原型的属性和方法。原型也是对象。
2. 利用原型特点和概念，可以提取共有属性。
3. 对象属性的增删和原型上属性增删改查。
4. 对象如何查看原型==>隐式属性__proto__。
5. 对象如何查看对象的构造函数==> constructor

## 七、原型链
1. 如何构成原型链?（见上一个例子）
2. 原型链上属性的增删改查
原型链上的增删改查和原型基本上是一致的。只有本人有的权限，子孙是没有的。
3. 谁调用的方法内部this就是谁-原型案例
4. 绝大多数对象的最终都会继承自Object.prototype
5. Object.create(原型);
6. 原型方法上的重写

---

## 八、call/apply
作用，改变this指向。
区别，后面传的参数形式不同。call第一位是改变this指向的，第二位实参（对应第一个形参）及以后的参数都当做正常的实参按照形参的个数传进去
apply第一位也是改变this指向的，第二位apply只能传一个实参，而且必须传数组arguments

---

## 九、克隆
#### 1、浅层克隆
```javascript
function clone(origin, target) {
  var target = target || {};
  for(var prop in origin) {
    target[prop] = origin[prop];
  }
  return target;
}
```
#### 2、深层克隆
```javascript
function deepClone(origin, target) {
  var target = target || {},
      toStr = object.prototype.toSting,
      arrStr = "[object Array]";
  for(var prop in origin) {
    if (origin.hasOwnProperty(prop)) {
      if (origin[prop] !== "null" && typeof(origin[prop]) == 'object') {
        if (toStr.call(origin[prop]) == arrStr) {
          target[prop] = [];
        } else {
          target[prop] = {};
        }
        deepClone(origin[prop], target[prop]);
      } else {
        target[prop] = origin[prop];
      }
    }
  }
  return target;
}
```
#### 3、深度克隆的步骤
1. 先把所有的值都遍历一遍（看是引用值和原始值）用for ( var prop in obj )，对象和数组都可以使用
2. 判断是原始值，还是引用值？用typeof判断是不是object
   1. 如果是原始值就直接拷贝
   2. 如果是引用值，判断是数组还是对象
3. 判断是数组还是对象？（方法instanceof【看a的原型链上有没有b的原型】、toString、constructor，建议用toString,另外两个有个小bug——跨父子域不行）
   1. 如果是数组，就新建一个空数组；
   2. 如果是对象，就新建一个空对象。
4. 建立了数组以后，如果是挨个看原始对象里面是什么，都是原始值就可以直接考过来了；或者，建立了对象以后，挨个判断对象里面的每一个值，看是原始值还是引用值
5. 递归

---

## 十、数组
#### 1、数组常用的方法
改变原数组（在原来数组基础上去改变）
1）reverse,sort,push,pop, unshift, shift,
2）splice
不改变原数组
1）forEach filter map reduce reduceRight
2）slice concat,join—>split,toString

push是在数组的最后一位添加数据，可以添加一个，也可以添加很多个
pop是剪切方法（把最后一位数剪切出去）。在pop( )括号里面不能传参，写了会忽略
unshift是从第一位加东西
shift是从第一位开始减
reverse逆反
splice一种剪切，切片
**==arr.splice(从第几位开始，截取多少长度，传参在切口处添加新的数据（可不填）)==**
sort给数组排序（按照从小到大），改变原数组
**==sort按asc码排序的==**
**==1必须写两形参==**
**==2看返回值return==**
**==1）当返回值为负数时，那么前面的数放在前面，==**
**==2）当返回值为正数时，那么后面的数在前，==**
**==3）为0，不动==**
concat连接，把后面的数组拼到前面，并成立一个新的数组，不影响之前的两个
数组。不能改变原数组
toString是把数组当做字符串展示出来
slice从该位开始截取，截取到该位，并不改变原数组，这里也可以写负数
join括号里面需要用字符串形式（标准语法规定），就会用加的东西连接起数组
#### 2、类数组
1、可以利用属性名模拟数组的特性
2、可以动态的增长length属性
3、如果强行让类数组调用push方法，则会根据length属性值的位置进行属性的扩充。
#### 3、数组去重
思路：
写一个对象，把数组的每一位当做对象的属性名。利用对象的特性（同一属
性名不可以出现两次），先把第一位当做属性名添加进去，属性值随便写个，再看第二位，如果第二位在对象里面有属性名，就看下一位，如果对象里面没有属性名，就把这个值添加进去当属性名。只看对象的属性名，就去重了，这个方法叫hash
```javascript
Array.prototype.unique = function () [
  var temp = {},
      arr = [],
      len = this.length;
  for(var i = 0; i < len; i++) {
    if (!temp[this[i]]) {
      temp[this[i]] = "abc";
      arr.push(this.[i]);
    }
  }
  return arr;
]
```

---

## 十一、事件处理模型—事件冒泡、捕获
事件处理的两个模型：事件冒泡、捕获（不能同时存在）
#### 1、事件冒泡：
结构上（非视觉上）嵌套关系的元素，会存在事件冒泡的功能，即同一事件，自子元素冒泡向父元素。（自底向上）
结构上存在父子关系的元素，如果点击到子元素，会一级级向父元素传递这个事件（从代码的角度是自底向上一层层冒泡的）
#### 2、事件捕获：（只有谷歌有，最新火狐有）
1）结构上（非视觉上）嵌套关系的元素，会存在事件捕获的功能，即同一事件，自
父元素捕获至子元素（事件源元素）。（自底向上）
2）IE没有捕获事件
一个对象的一个事件类型，只能存在一个事件处理模型（冒泡或捕获）obj.addEventListener(type, fn, true);第三个参数为true就是事件捕获
#### 3、触发顺序，先捕获，后冒泡
同一个对象的一个事件处理类型，上面绑定了两个事件处理，分别执行事件冒泡和事件执行
#### 4、focus，blur，change，submit，reset，select等事件不冒泡
#### 5、取消冒泡
```javascript
function stopBubble(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }
}
```
#### 6、阻止默认事件
默认事件—表单提交，a标签跳转，右键菜单等
1. return false;兼容性非常好，以对象属性的方式注册的事件才生效（这是句柄的方式阻止默认事件，只有句柄的方式绑定事件才好使）
2. event.preventDefault();W3C标注，IE9以下不兼容
3. event.returnValue = false;兼容IE
4. 封装阻止默认事件的函数cancelHandler(event);
   ```javascript
   function stopBubble(e) {
     if (e.stopPropagation) {
       e.stopPropagation();
     } else {
       e.cancelBubble = true;
     }
   }
   ```