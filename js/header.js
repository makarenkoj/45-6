$(function () {
    $('.buttons').click(function () {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 80)
        }, 700);
        return false;
    });
});
