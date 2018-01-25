"use strict";

var $ = document.querySelectorAll.bind(document);
var oBtn = $("#register-btn")[0];
var oEmail = $("#email")[0];
var oPass = $("#pass")[0];
var oConfirm = $("#confirmPass")[0];
var valiaddom = [oEmail, oPass, oConfirm];

oEmail.onblur = function () {
	var str = this.value;
	var reg = /^[a-z]\w{5,19}@[a-z]{2,10}\.[a-z]{2,8}$/gi;
	if (reg.test(str)) {
		//通过验证;
		stautsTip(this, "请输入用户名(邮箱格式):", "success");
		this.pass = true;
	} else {
		//不通过验证;
		// 判定是否存在success 或者 error;
		stautsTip(this, "请输入正确邮箱格式", "error");
		this.pass = false;
	}
};
oPass.onblur = function () {
	var str = this.value;
	var reg = /^[^/\\\*<>\|\?]{6,20}$/;
	var count = 0;
	if (reg.test(str)) {
		//6位以上;
		if (/\d/g.test(str)) {
			count++;
		}
		if (/[a-z]/gi.test(str)) {
			count++;
		}
		if (/[!@#\$%\^&\*\(\)]/gi.test(str)) {
			count++;
		}
		switch (count) {
			case 1:
				stautsTip(this, "密码强度太差，建议更换密码", "low");break;
			case 2:
				stautsTip(this, "密码强度一般", "mid");break;
			case 3:
				stautsTip(this, "请输入密码:", "success");break;
			default:
				stautsTip(this, "赶紧回火星吧地球不适合你!", "goout");break;
				setTimeout(function () {
					close();
				}, 3000);
		}
		if (count >= 1) {
			this.pass = true;
		}
	} else {
		//提示密码位数不对;
		stautsTip(this, "请输入合理密码", "error");
		this.pass = false;
	}
};
oConfirm.onblur = function () {
	if (oPass.value == oConfirm.value && this.value != "") {
		stautsTip(this, "请再次输入密码:", "success");
		this.pass = true;
	} else {
		stautsTip(this, "两次密码不一致，请重新输入:", "error");
		this.pass = false;
	}
};
function stautsTip(dom, tip, clas) {
	var sClass = dom.className;
	if (/success|error/g.test(sClass)) {
		sClass = sClass.replace(/\ssuccess|\serror|\smid|\slow/, " " + clas);
	} else {
		sClass += " " + clas;
	}
	dom.className = sClass;
	dom.previousElementSibling.innerHTML = tip;
}
oBtn.onclick = function (event) {
	var evt = event || window.event;
	//alert("hello world");
	var flag = true;
	for (var i = 0; i < valiaddom.length; i++) {
		//alert(valiaddom[i].pass)
		if (!valiaddom[i].pass) {
			flag = false;
			break;
		}
	}
	if (flag == false) {
		evt.preventDefault();
	}
	//alert(flag);
};