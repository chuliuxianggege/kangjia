"use strict";

require(["scripts/config.js"], function () {
	require(["jquery", "supbanner", "ajaxnewpro", "supbanner2"], function ($, supb, ajaxnewpro, supb2) {
		//广告栏
		// $("#ad-top").find("a").on("click",function(){
		// 	$("#ad-top").remove();
		// })

		// twinav.init();
		//banner轮播图加载
		$.fn.supbanner({
			src: ["http://www.konka.com/public/images/50/61/67/4359b86eb20035bd757ddccd5f27a951adb7cca4.jpg?1515720119#w", "http://www.konka.com/public/images/4f/ab/2e/d9cc695cade3174b2ee3973313dab98bd961a2e5.jpg?1515743516#w", "http://www.konka.com/public/images/eb/ea/3a/e6307dc8dbc746dfd9bda6d8970ac9c8650319e0.jpg?1515982629#w", "http://www.konka.com/public/images/95/b5/cd/ab454c2fd8aa6674a0ad9b4fc24aa209ff7ff4d7.jpg?1515752024#w"]
		}, ".slidebox");
		//newpro ajax获取数据
		$.fn.ajaxnewpro(".newlb", "scripts/newproduct.txt");
		//newpro按钮点击切换产品轮播图事件
		$(".newlf").on("click", function () {
			$(".newlf").css({ opacity: 0.4 });
			$(".newrt").css({ opacity: 1 });

			$(".newlb").animate({ left: 0 }, 500);
		});
		$(".newrt").on("click", function () {
			$(".newlf").css({ opacity: 1 });
			$(".newrt").css({ opacity: 0.4 });
			$(".newlb").animate({ left: -1200 }, 500);
		}).stop(true);
		//hotpro明星产品区hotbdbotom区ajax~
		$.fn.ajaxnewpro(".hotbdul", "scripts/hotproduct.txt");
		//rexiao热销产品区rexiaobd1和rexiaobd2区ajax
		$.fn.ajaxnewpro(".rexiaoul1", "scripts/rexiaoproduct1.txt");
		$.fn.ajaxnewpro(".rexiaoul2", "scripts/rexiaoproduct2.txt");
		// 
		//1 
		//2 
		//3 
		//4 
		//news轮播图
		$.fn.supbanner2({
			src: ["images/bef86e00213464aeead25ef4509bc00ee37b7c38.jpg", "images/7312560dff0f67fa9ea40c208c175697e8ed0ee8.jpg", "images/44b302dbc8dd6cb03128f9ace7e5e193ff994207.jpg", "images/bddeecda3c6da7dad98484c195548aeec44fc4b8.jpg"] }, ".newsbdright");
		// $.fn.ajaxnewpro(".hodbdul","scripts/newproduct.txt");

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
	});
});