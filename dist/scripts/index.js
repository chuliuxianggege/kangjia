"use strict";

require(["scripts/config.js"], function () {
	require(["jquery", "supbanner", "ajaxnewpro"], function ($, supb, ajaxnewpro) {
		//广告栏
		// $("#ad-top").find("a").on("click",function(){
		// 	$("#ad-top").remove();
		// })

		// twinav.init();
		$.fn.supbanner({
			src: ["http://www.konka.com/public/images/50/61/67/4359b86eb20035bd757ddccd5f27a951adb7cca4.jpg?1515720119#w", "http://www.konka.com/public/images/4f/ab/2e/d9cc695cade3174b2ee3973313dab98bd961a2e5.jpg?1515743516#w", "http://www.konka.com/public/images/eb/ea/3a/e6307dc8dbc746dfd9bda6d8970ac9c8650319e0.jpg?1515982629#w", "http://www.konka.com/public/images/95/b5/cd/ab454c2fd8aa6674a0ad9b4fc24aa209ff7ff4d7.jpg?1515752024#w"]
		}, ".slidebox");
		$.fn.ajaxnewpro();
		// //登录框
		// $("#login").on("click",function(){
		// 	pop.init();

		// 	//console.log(pop)
		// })
		// //图片加载

		// loadli.init($(".goodslist li"));
		// //购物车
		// var $shop_btn = $("<button>加入购物车</button>");
		// $(".goodslist").find("p").after($shop_btn);
		// var $shop_btn = $(".goodslist").find("button")
		// $shop_btn.on("click",function(){
		// 	shopcar.init($shop_btn);
		// })

	});
});