$('document').ready(function(){
	$('.cycle_banner').cycle({  // Banner
	    fx:     'fade', 
	    speed:  'fast', 
	    timeout: 5000, 
	    pager:  '.nav_banner' 
	});

	if ( $('.block_wishlist').size() > 0 ){
		$('.block_wishlist').BlocksIt({ // 我的祈願 瀑布式排版
			numOfCol: 3,
			offsetX: 8,
			offsetY: 8,
			blockElement: '.box_wishlist'
		});
	}

	$('.colorlist .colors').click(function(){  // 祈願選顏色
	  $('.colorlist .colors').removeClass('picked');
	  $(this).addClass('picked');
     $('.color_picked').css('background-color', $(this).css('background-color'));	  
	});


	$('.box_designer').click(function(){ //按設計師開視窗
		var who_designer = $(this).index(); //可依索引值開視窗 或是其他方法
		$('.block_data').fadeIn();
	});


	$('.block_list_contact .box').click(function(){ //按聯絡資訊開視窗
		var who_designer = $(this).index(); //可依索引值開視窗 或是其他方法
		$('.block_data').fadeIn();
	});

	$('.data_close').click(function(){ //按X關視窗
		$('.block_data').fadeOut();
	});
	$('.data_mask').click(function(){ //按旁邊關視窗
		$('.block_data').fadeOut();
	});

	$('.colorswitch').cycle({
	    fx:     'scrollHorz', 
	    timeout: 0, 
	    prev: '.block_switch .prev',
	    next: '.block_switch .next'
	});
	$('.box_toggle').click(function(){
		$('.box_search').animate().show();
	});
	/*
	//window resize 高度計算有問題
	var currentWidth = 990;
	$(window).resize(function() {
		var winWidth = $(window).width();
		var conWidth;
		if(winWidth < 660) {
			conWidth = 440;
			col = 2
		} else if(winWidth < 880) {
			conWidth = 660;
			col = 3
		} else {
			conWidth = 990;
			col = 4;
		}
		
		if(conWidth != currentWidth) {
			currentWidth = conWidth;
			$('.block_wishlist').width(conWidth);
			$('.block_wishlist').BlocksIt({
				numOfCol: col,
				offsetX: 8,
				offsetY: 8,
				blockElement: '.box_wishlist'
			});
		}
	});
	*/
	
	/*
	//找到有第2次選單時就把上一層的超連結網址取消
	if ( $('.sub_category').size() > 0 ){
			$('.sub_category').parent().find(" > a").removeAttr("href").css('cursor','pointer');
	}

	//有第2次選單時按超連結會展開
	$('.block_category li').click(function(){
		$(this).find("ul").slideToggle();
	});
	*/
});
