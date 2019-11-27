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

```css
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
var _0x6786 = ['append', '<div\x20id=\x22modal-overlay\x22></div>', '#modal-overlay', 'fadeIn', '#modal-content', 'fast', '#modal-overlay,#modal-close', 'unbind', 'click', 'fadeOut', 'remove', 'resize', 'width', 'height', 'outerHeight', '#body', 'hover', ':hover', 'each', 'attr', 'class', 'indexof', 'body', 'blur'];
(function(_0x1e5d37, _0x8115f1) {
  var _0x5b3b8e = function(_0xa69629) {
    while (--_0xa69629) {
      _0x1e5d37['push'](_0x1e5d37['shift']());
    }
  };
  _0x5b3b8e(++_0x8115f1);
}(_0x6786, 0xcf));
var _0x6678 = function(_0x471448, _0x1c0e9e) {
  _0x471448 = _0x471448 - 0x0;
  var _0x38190b = _0x6786[_0x471448];
  return _0x38190b;
};
var flag = ![];
var modal = 0x0;
$(_0x6678('0x0'))[_0x6678('0x1')](function(_0x2ca354) {}, function(_0x5e42be) {
  if (modal == 0x0) {
    flag = ![];
    jQuery(_0x6678('0x2'))[_0x6678('0x3')](function() {
      var _0x280b09 = $(this)[_0x6678('0x4')](_0x6678('0x5'));
      if (_0x280b09 != null && ckassname[_0x6678('0x6')](_0x6678('0x7')) >= 0x0) {
        flag = !![];
      }
    });
    if (!flag) {
      $(function() {
        $(this)[_0x6678('0x8')]();
        $(_0x6678('0x7'))[_0x6678('0x9')](_0x6678('0xa'));
        $(_0x6678('0xb'))[_0x6678('0xc')]('fast');
        $(_0x6678('0x7'))[_0x6678('0x9')]('<div\x20id=\x22modal-content\x22><button\x20type=\x22button\x22\x20name=\x22button\x22\x20id=\x22modal-close\x22>×\x20閉じる</button><img\x20src=\x22assets/img/sample.jpg\x22></div>');
        $(_0x6678('0xd'))['fadeIn'](_0x6678('0xe'));
        modal = 0x1;
        centeringModalSyncer();
        $(_0x6678('0xf'))[_0x6678('0x10')]()[_0x6678('0x11')](function() {
          $('#modal-content,#modal-overlay')[_0x6678('0x12')](_0x6678('0xe'), function() {
            $('#modal-overlay')['remove']();
            $(_0x6678('0xd'))[_0x6678('0x13')]();
            modal = 0x0;
          });
        });
      });
    }
  }
});
$(window)[_0x6678('0x14')](centeringModalSyncer());

function centeringModalSyncer() {
  var _0x2433d4 = $(window)[_0x6678('0x15')]();
  var _0x521fdb = $(window)[_0x6678('0x16')]();
  var _0x219620 = $(_0x6678('0xd'))['outerWidth']();
  var _0x1a6dc7 = $(_0x6678('0xd'))[_0x6678('0x17')]();
  $('#modal-content')['css']({
    'left': (_0x2433d4 - _0x219620) / 0x2 + 'px',
    'top': (_0x521fdb - _0x1a6dc7) / 0x2 + 'px'
  });
}

```

# sample3

[デモページ](https://www.olp.co.jp/lp/sample3/)
