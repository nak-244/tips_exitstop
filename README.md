# 仕組み
簡単に説明すると、ユーザーがページを閉じようとマウスカーソルをブラウザ上部に移動させると、コンテンツが表示される仕組みです。  

思わずユーザーが「なんだろう？」と目が行く仕様になっています。

**悪用は厳禁！**

## html

~~~html
<div id="msk">
<div id="mskInner">
<img src="images/cat1.jpg">
<p id="return">× 閉じる</p>
</div>
</div>

<div id="mskSwitch"></div>
~~~
