document.documentElement.style.fontSize = document.documentElement.clientWidth / (12.5) + 'px';
$(window).resize(function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / (12.5) + 'px';
})



$(document).ready(function () {
    $('.index_info_tab li').hover(function () {
        $(this).addClass('on').siblings('li').removeClass('on');
        $('.index_info_tab_con').eq($(this).index()).addClass('active').siblings('.index_info_tab_con').removeClass('active');
    })
})