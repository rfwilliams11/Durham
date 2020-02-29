$(document).ready(function(){

/*! Fades in page on load */
$('#jsFadein').css('display', 'none');
$('#jsFadein').fadeIn(750);

$('#jsFadein2').css('display', 'none');
$('#jsFadein2').fadeIn(750);

$('#slider').css('display', 'none');
$('#slider').slideDown(500);

$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('500');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('1500');
            $('.filter').filter('.'+value).show('1500');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
