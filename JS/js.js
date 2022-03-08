// MODAL
$("#andreiModal").click(function(){
    $("#modalAndrei").modal('show');
});
// CARROSSEL
$('#carouselExampleIndicators').carousel()
$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
})
// TOAST
$(document).ready(function(){
  $('#andreiToast').toast('show');
});
// TOOLTIP
$('[data-toggle="tooltip"]').tooltip(function(){
  $('#andreiTooltip').tooltip('show');
});
  
