$(document).ready(function() {
    $('ul.tabs li a:first').addClass('active1');
    $('.secciones article').hide();
    $('.secciones article:first').show();


    $('ul.tabs li a').click(function() {
        $('ul.tabs li a').removeClass('active1');
        $(this).addClass('active1');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});


$(document).ready(function() {
    $('#table_id').DataTable();
});