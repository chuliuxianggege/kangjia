"use strict";

;(function ($) {
	//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
	//2ajax抓数据且分别传入img,span123;
	//3加载到innerHTML里
	function _ajaxnewpro() {
		this.init();
	}
	_ajaxnewpro.prototype = {
		constructor: _ajaxnewpro,
		init: function init() {
			//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
			var $li = $("<li></li>");
			var $a = $("<a></a>");
			var $img = $("<img src=''/>");
			var $fon1 = $("<h4></h4>");
			var $fon2 = $("<p></p>");
			var $fon3 = $("<span></span>");
			$a.append($img);
			$li.append($a, $fon1, $fon2, $fon3);
			// console.log($li[0]);
			//2ajax抓数据且分别传入img,span123;
			var _this = this;
			$.ajax({
				url: "scripts/newproduct.txt",
				// dateType:"json",
				success: _this.getRes
			});
		},
		getRes: function getRes(res) {
			console.log(res);
		}

	};
	$.fn.extend({
		ajaxnewpro: function ajaxnewpro(obj, eleclass) {
			// console.log(1);
			return new _ajaxnewpro(obj, eleclass);
		}
	});
})(jQuery);