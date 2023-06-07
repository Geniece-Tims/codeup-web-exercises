"use strict";
$('li').css('font-size', '20px');
$('h1, p, li').hover(
    function() {
        $(this).css({
            'background-color': 'black',
            'color': 'pink'
        });
    },
    function() {
        $(this).css('color', 'pink');
    },
    function() {
        $(this).css('color', '');
    }
);

$('h1').each(function() {
    alert($(this).text());
});

