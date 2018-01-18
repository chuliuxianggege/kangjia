;(function($){
			//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
			//2ajax抓数据且分别传入img,span123;
			//3加载到innerHTML里
	function ajaxnewpro(){
		this.init();
	}
	ajaxnewpro.prototype={
		constructor:ajaxnewpro,
		init:function(){
			//1创造媒介 li，a，img，span.fon1，span.fon2，span.fon3；
			var $li=$("<li></li>");
			var $a=$("<a></a>");
			var $img=$("<img src=''/>");
			var $fon1=$("<h4></h4>")
			var $fon2=$("<p></p>");
			var $fon3=$("<span></span>");
			$a.append($img);
			$li.append($a,$fon1,$fon2,$fon3);
			// console.log($li[0]);
			//2ajax抓数据且分别传入img,span123;
			var _this = this;
			$.ajax({
				url:"scripts/newproduct.txt",
				// dateType:"json",
				success:_this.getRes
			})
		},
		getRes: function(res){
			console.log(res);

		}

	}
	$.fn.extend({
		ajaxnewpro:function(obj,eleclass){
			// console.log(1);
			return new ajaxnewpro(obj,eleclass);}
		}
	)
})(jQuery)
