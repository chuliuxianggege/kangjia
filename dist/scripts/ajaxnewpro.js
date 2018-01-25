"use strict";

;(function ($) {
	//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
	//2ajax抓数据且分别传入img,span123;
	//3加载到innerHTML里
	function _ajaxnewpro(eleclass, ajaxurl) {
		this.init(eleclass, ajaxurl);
	}
	_ajaxnewpro.prototype = {
		constructor: _ajaxnewpro,
		init: function init(eleclass, ajaxurl) {
			// console.log($li[0]);
			//1ajax抓数据成功后且分别传入img,span123;
			$.ajax({ url: ajaxurl, success: function success(res) {
					res = JSON.parse(res);
					var $ul = $(eleclass);
					for (var i = 0; i < res.length; i++) {
						//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
						var $li = $("<li></li>");
						var $a = $("<a href='goodinf.html'></a>");
						var $img = $("<img src=''/>");
						var $fon1 = $("<h4></h4>");
						var $fon2 = $("<p></p>");
						var $fon3 = $("<span></span>");
						$a.append($img);
						$li.append($a, $fon1, $fon2, $fon3);
						$li.attr("class", res[i].class);
						$fon1.html(res[i].font1);
						$fon2.html(res[i].font2);
						$fon3.html(res[i].font3);
						$img.attr("src", res[i].src);
						$ul.append($li);
					}
				}
			});
			// console.log(res,res[0].class)
		}

	};
	$.fn.extend({
		ajaxnewpro: function ajaxnewpro(eleclass, ajaxurl) {
			// console.log(1);
			return new _ajaxnewpro(eleclass, ajaxurl);
		}
	});
})(jQuery);