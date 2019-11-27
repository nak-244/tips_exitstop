# sample1

[デモページ](https://www.olp.co.jp/lp/sample1/)

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

## CSS

~~~css
#msk {
    width: 100vw;
    height: 100vh;
    background: #333;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 90;
}

#msk #mskInner {
    text-align: center;
}

#msk #mskInner #return {
    width: 150px;
    margin: 20px auto;
    color: #fff;
    padding: 15px 0;
    border: solid 1px #fff;
    cursor: pointer;
}

/*mskInnerの位置調整*/

#mskInner {
    position: absolute;
    top: -100%;
    left: 0;
    right: 0;
}

/*マスク非表示*/

#msk {
    display: none;
}

/*マスクスイッチ*/

#mskSwitch{
    width: 100vw;
    height: 200px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
~~~

## jQuery

```Javascript
$(function () {

    $('#mskSwitch').on('mouseover', function () {
        $('#msk').fadeIn(200);
        $('#mskInner').delay(200).animate({
            top: '20%'
        }, 500);
    });

    $('#return').on('click', function () {
        $('#mskInner').animate({
            top: '-100%'
        }, 500);
        $('#msk').delay(300).fadeOut(200);
    });

});
```

# sample2

[デモページ](https://www.olp.co.jp/lp/sample2/)

## html

~~~html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>sample-modal</title>
    <meta name="robots" content="noindex,nofollow">
    <link rel="stylesheet" href="assets/css/common.css">
    <script src="https://sigotora.jp/js/jquery-1.11.3.min.js" type="text/javascript"></script>
</head>
<body id="body" class="body" style="margin: 0;width: 100%;height: 1000px;">
    <script src="assets/js/modal.js" type="text/javascript"></script>
</body>
</html>
~~~
## CSS

```php:hello.php
function hello(){
　return "hello world!";
}
```

```css:common.css
#modal-close{
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 0px auto;
	padding: 0px 4px 0px 4px;
	font-size: 16px;
	background-color: #FFFFFF;
	border: none;
}

#modal-content{
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 0px 0px;
	padding:0px 0px;
	width: 400px;
	height: 300px;
	border: 0;
	z-index:999;
	opacity: 1;
    position:fixed;
}

#modal-overlay{
	z-index:998;
	display:none;
	position:fixed;
	top:0;
	left:0;
	width:100%;
	height:120%;
	background-color:rgba(0,0,0,0.75);
}

#modal-content img{
	box-sizing: border-box;
	vertical-align: top;
	width: 100%;
}
```

## jQuery

```Javascript
$(function () {

    $('#mskSwitch').on('mouseover', function () {
        $('#msk').fadeIn(200);
        $('#mskInner').delay(200).animate({
            top: '20%'
        }, 500);
    });

    $('#return').on('click', function () {
        $('#mskInner').animate({
            top: '-100%'
        }, 500);
        $('#msk').delay(300).fadeOut(200);
    });

});
```
