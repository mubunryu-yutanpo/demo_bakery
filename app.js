$(function(){

    //SPハンバーガーメニュー
    var $toggleMenu = $('.js-sp-menu');
    $toggleMenu.on('click', function(){
        $(this).toggleClass('active');
        $('.js-toggle-target').toggleClass('active');
    });

    //リンクをクリックしたら、SPメニューを非表示に
    $('.js-menu-link').on('click', function(){
        $('.js-toggle-target').removeClass('active');
    });

    //スクロールでヒーロー部分を超えたら、ヘッダーにクラスをつけ外し
    var targetHeight = $('.js-float-trigger').height();
    $(window).on('scroll', function(){
        $('.js-float-menu').toggleClass('on-bg', $(this).scrollTop() > targetHeight);
    });

});

