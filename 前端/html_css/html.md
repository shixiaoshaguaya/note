####1、\<html lang="en">告诉搜索引擎爬虫，我们的网站是关于什么内容的 en代表是英文，zh代表中文
例：这样是告诉搜索引擎的
``` html
<meta content="服饰" name="keywords"></meta>
<meta content="时装" name="description"></meta>
```

####2、
\<p>\</p>段落标签，让内容成段展示

####3、
\<strong>加粗\</strong>    \<em>斜体\</em>  \<del>中划线\</del>   \<address>地址标签\</address>  

####4、
\<div>独占一行\</div>   \<span>不独占一行\</span>

####5、 转义
空格文本为\&nbsp;
<为\&lt;
\>为\&gt;

####6、
\<br>换行符
\<hr>水平线

####7、无序列表 ul 
ul 和 li 是一个很好的天生父子结构（柜子与抽屉），可以做导航栏

####8、a标签是anchor --> 锚，定位某个点
######a标签的功能有以下几个：
``` html
<!-- 超链接 -->
<a href="https://www.baidu.com" target="_blank">超链接</a>
<!-- （target="_blank"在新窗口打开） -->
<!-- 锚点 -->
<a href="#div">锚点</a>  <!-- （定位到id="div"的标签位） -->
<!-- 打电话 -->
<a href="tel:13348349872">打电话</a>
<!-- 发邮件 -->
<a href="mailto:shixiaoshaguaya@163.com">发邮件</a>
<!-- 协议限定符 -->
<a href="javascript:while(1){alert('让你手欠')}">你点我试试</a>
```

####9、form表单
``` html
<form methond="get/post" action="发送到哪里">
    <input type="text" name="username">  <!-- 输入框 -->
    <!-- onfocus="鼠标聚焦时发生"   onblur="鼠标失去焦点时发生" -->
    <input type="password" name="password">  <!-- 密码框 -->
    <!-- 单选 --> 
    <!-- checked="checked" 默认选中 -->
    <input type="radio" name="sex" value="male" checked="checked">male
    <input type="radio" name="sex" value="female">female
    <!-- 多选 -->
    <input type="checkbox" name="fruit" value="apple">apple
    <input type="checkbox" name="fruit" value="orange">orange
    <input type="checkbox" name="fruit" value="banana">banana
    <!-- 下拉框 -->
    <select name="province">
        <option value="龙岩">北京</option>  <!-- 后台提交数据为龙岩 -->
        <option>上海</option>  <!-- 后台提交数据为上海 -->
        <option>广州</option>
        <option>深圳</option>
    </select>
    <input type="submit" value="提交框的值">  <!-- 提交组件 登录 -->
</form>
```

####10、主流浏览器及其内核
| 浏览器 | 内核 |
| --- | --- |
| IE | trident |
| Firefox | Gecko |
| Google chrome | Webkit/blink |
| Safari | Webkit |
| Opera | presto |