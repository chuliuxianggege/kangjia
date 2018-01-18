"use strict";

;(function ($) {
	//0：by WANGXINYU 2018年1月11日 09:17:18；
	//以下参数：
	//-1 src=>图片链接地址数组；必选参数；
	//-2 createbtn是否创建button；=>  true(默认)/false;
	//-3 imgmove 图片切换方式；=>fade(默认)/scroll/slide;
	//-4 aotu move 自动轮播；=>true(默认)/false;

	//this /当前事件的触发者dom；


	//1设置默认参数————等待与传入参数合并
	var defaults = {
		src: [],
		imgmove: "fade",
		createbtn: true,
		automove: false
	};

	function banner(obj, ele) {
		this.init(obj, ele);
	}
	banner.prototype = {
		constructor: banner,
		//2 对传入参数判断
		// console.log(obj.src);		
		init: function init(obj, eleclass) {
			// console.log($("eleclass"));
			var ele = $(eleclass);
			// console.log(ele[0]);
			this.judge(obj);
			//3 合并参数；得到新的参数newparameter；
			var newparameter = $.extend(defaults, obj);
			// console.log(defaults,newparameter);
			//4 渲染页面=>4.1创建页面框架；4.2把参数中的src数组加载到入页面 4.3设置样式
			this.bd = $("<div class='bd'></div>");
			this.hd = $("<div class='hd'></div>");
			this.frameset(newparameter, ele);

			// console.log(this.hd.find("li")[0]);
			//5 鼠标划过事件，轮播图切换

			this.hd.find("li").on("mouseover", $.proxy(this.imagemove, this));
		},
		//构建判断函数
		judge: function judge(obj) {
			if (!obj.src) {
				throw "你传入的这是啥？？？";
			}
			return 0;
		},
		//构建轮播图框架函数；
		frameset: function frameset(newparameter, ele) {
			var $ul1 = $("<ul></ul>");
			var $ul2 = $("<ul></ul>");

			var srcnum = newparameter.src.length;
			for (var i = 0; i < srcnum; i++) {
				// console.log(newparameter.src[i]);
				var $li = $("<li></li>");
				var $a = $("<a></a>");
				var $img = $("<img/>");
				// console.log($img[i]);
				$img.attr("src", newparameter.src[i]);
				$a.append($img);
				$li.append($a);
				$ul1.append($li);
				var $li2 = $("<li></li>");
				$ul2.append($li2);
			}
			this.bd.append($ul1);
			this.hd.append($ul2);
			ele.append(this.bd);
			ele.append(this.hd);
		},
		//构建imagemove函数
		imagemove: function imagemove(event) {
			// console.log(1);

			var target = $(event.target);

			var index = target.index();

			this.bd.find("li").eq(index).fadeIn().siblings("li").fadeOut();

			this.hd.find("li").eq(index).css({
				background: "#fff"
			}).siblings().css({
				background: "none"
			});
		}

	};
	$.fn.extend({
		supbanner: function supbanner(obj, eleclass) {
			// console.log(1);
			return new banner(obj, eleclass);
		}
	});
})(jQuery);