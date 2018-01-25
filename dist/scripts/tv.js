"use strict";

require(["scripts/config.js"], function () {
	require(["jquery", "supbanner", "ajaxnewpro", "supbanner2"], function ($, supb, ajaxnewpro, supb2) {
		$.fn.ajaxnewpro(".tvul", "scripts/tv1.txt");
		$(".tvli1").on("click", function () {
			$(".tvul").find("li").remove();
			$.fn.ajaxnewpro(".tvul", "scripts/tv1.txt");
			$(".tvli1").css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			});
		});
		$(".tvli2").on("click", function () {
			$(".tvul").find("li").remove();
			$.fn.ajaxnewpro(".tvul", "scripts/tv2.txt");
			$(".tvli2").css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			});
		});
		$(".tvli3").on("click", function () {
			$(".tvul").find("li").remove();
			$.fn.ajaxnewpro(".tvul", "scripts/tv3.txt");
			$(".tvli3").css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			});
		});
		$(".tvli4").on("click", function () {
			$(".tvul").find("li").remove();
			$.fn.ajaxnewpro(".tvul", "scripts/tv4.txt");
			$(".tvli4").css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			});
		});
		$(".tvli5").on("click", function () {
			$(".tvul").find("li").remove();
			$.fn.ajaxnewpro(".tvul", "scripts/tv5.txt");
			$(".tvli5").css({
				background: "#ddd"
			}).siblings().css({
				background: "#fff"
			});
		});
	});
});