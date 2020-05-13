$(document).ready(function () {
    $('#start').bind('click', function () {
        $('#start .option').addClass('target');
        $('#players .option').removeClass('target');
        $('#partners .option').removeClass('target');
        $('#kontakt .option').removeClass('target');
    });
    $('#players').bind('click', function () {
        $('#players .option').addClass('target');
        $('#start .option').removeClass('target');
        $('#partners .option').removeClass('target');
        $('#kontakt .option').removeClass('target');
    });
    $('#partners').bind('click', function () {
        $('#partners .option').addClass('target');
        $('#players .option').removeClass('target');
        $('#start .option').removeClass('target');
        $('#kontakt .option').removeClass('target');
    });
    $('#kontakt').bind('click', function () {
        $('#kontakt .option').addClass('target');
        $('#players .option').removeClass('target');
        $('#partners .option').removeClass('target');
        $('#start .option').removeClass('target');
    });
    $('#players_intxt').bind('click', function () {
        $('#players .option').addClass('target');
        $('#start .option').removeClass('target');
        $('#partners .option').removeClass('target');
        $('#kontakt .option').removeClass('target');
    });
    $('#partners_intxt').bind('click', function () {
        $('#partners .option').addClass('target');
        $('#players .option').removeClass('target');
        $('#start .option').removeClass('target');
        $('#kontakt .option').removeClass('target')
    });
    $('#kontakt_intxt').bind('click', function () {
        $('#kontakt .option').addClass('target');
        $('#players .option').removeClass('target');
        $('#partners .option').removeClass('target');
        $('#start .option').removeClass('target');
    });
});
