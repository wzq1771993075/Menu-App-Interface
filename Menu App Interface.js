$(document).ready(function(){
	$(".paper .item").click(function() {
        $(".paper .item").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(".paper .item").hasClass("active")) {
            $(".paper").addClass("item-active");
        } else {
            $(".paper").removeClass("item-active");
        }
    });
	// Preventing Closing when Click inside counter
	$(".plus,.minus").click(function(a){
		a.stopPropagation();
	});
	//Adding Counter
	$(".paper .item .counter .plus").click(function(){
		$(this).parent().find(".number").html(function(y,val){
			return val*1+1;
		});
	});
	$(".paper .item .counter .minus").click(function(){
		var increased = $(this).parent().find(".number").text();
		if(isNaN(increased)|increased>0){
			$(this).parent().find(".number").html(function(t,val){
				return val*1-1;
			});
		}else{
			return false;
		}	
	});
	
	$('.paper .plus, .paper .minus').click(function () {
		var increased = parseInt($(this).parent().find('.number').text());
		
		var itemsTotal = 0;
		$('.paper .number').each(function () {
			itemsTotal += ($(this).text() * 1);
		});
		$('.paper .items-total').html(itemsTotal);
		
		var itemsTotalAll = parseInt($('.paper .items-total').text());
		if (isNaN(itemsTotalAll) || itemsTotalAll <= 0) {
			$('.paper .action').hide();
		} else {
			$('.paper .action').show();
		}
		
		if (isNaN(increased) || increased <= 0) {        
			$(this).parent().find('.number').hide();
		} else {
			$(this).parent().find('.number').show();
		}
	});
});
