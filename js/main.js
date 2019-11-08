new WOW().init();

$(document).ready(function () {
	console.log('靜態元素載入完成');
	$('.nav-link').click(function () {
		console.log('nav-link clicked');
		//1.取得視窗滾動的目標
		var target = $(this).attr('href');
		console.log(target);
		//2. 取得目標的座標
		var targetPosition = $(target).offset();
		console.log(targetPosition);
		//3.滾動視窗至目標的位置



	})

});