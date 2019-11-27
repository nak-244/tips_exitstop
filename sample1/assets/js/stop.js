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