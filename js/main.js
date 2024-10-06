
$(function () {
$(".hamburger").click(function (e) {
    e.stopPropagation(); // クリックイベントの伝播を止める
    $(".hamburger").toggleClass("open");
    $(".header_nav").fadeToggle();
});


// ドキュメント全体にクリックイベントを設定
$(document).click(function () {
    // hamburgerが開かれている場合のみ処理を実行
    if ($(".hamburger").hasClass("open")) {
    $(".hamburger").removeClass("open");
    $(".header_nav").fadeOut();
    }
});
});

//scroll、page top表示のスクロール設定
$(function () {
$(window).scroll(function () {
    var scroll = $('.scroll');
    if ($(this).scrollTop() > 100) {
    scroll.fadeOut();
    } else {
    scroll.fadeIn();
    }
})
});

$(function () {
var topBtn = $('.back-to-top');
topBtn.hide();
//スクロールが300に達したらボタン表示
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
    topBtn.fadeIn();
    } else {
    topBtn.fadeOut();
    }
});
});

