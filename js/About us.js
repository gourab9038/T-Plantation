$(document).ready(function() {
    $('.count-number').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('to')
        }, {
            duration: $(this).data('speed'),
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});