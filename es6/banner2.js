;(function($){
	//0：by WANGXINYU 2018年1月11日 09:17:18；
	//以下参数：
	//-1 src=>图片链接地址数组；必选参数；
	//-2 createbtn是否创建button；=>  true(默认)/false;
	//-3 imgmove 图片切换方式；=>fade(默认)/scroll/slide;
	//-4 aotu move 自动轮播；=>true(默认)/false;

	//this /当前事件的触发者dom；
	

	//1设置默认参数————等待与传入参数合并
	var defaults={
		src:[],
		imgmove:"fade",
		createbtn:true,
		automove:false
	}

	function banner(obj,ele){
		this.init(obj,ele);
	}
	banner.prototype={
		constructor:banner,
		//2 对传入参数判断
		// console.log(obj.src);		
		init:function(obj,eleclass){
			// console.log($("eleclass"));
			this.ele=$(eleclass);
			// console.log(ele[0]);
			this.judge(obj);
			//3 合并参数；得到新的参数newparameter；
			var newparameter=$.extend(defaults,obj);
			// console.log(defaults,newparameter);
			//4 渲染页面=>4.1创建页面框架；4.2把参数中的src数组加载到入页面 4.3设置样式
			
			this.frameset(newparameter,this.ele);
			
			// console.log(this.hd.find("li")[0]);
			//5 鼠标划过事件，轮播图切换
			this.index=0;
			//6 左右按钮prev next点击发生事件
			this.ele.find("button").on("click",$.proxy(this.index2,this))
		},
		//构建判断函数
		judge:function(obj){
			if (!obj.src) {
				throw "你传入的这是啥？？？"
			}
			return 0;
		},
		//构建轮播图框架函数；
		frameset:function(newparameter,ele){
			var $ul1=$("<ul></ul>");
			var $btn1=("<button class='prev' value=''></button>");
			var $btn2=("<button class='next' value=''></button>");
			var srcnum=newparameter.src.length;
			for(var i=0;i<srcnum;i++){
				// console.log(newparameter.src[i]);
				var $li=$("<li></li>");
				var $a=$("<a></a>");
				var $a2=$("<a></a>");
				var $img=$("<img/>");
				var $p=$("<p></p>");
				// console.log($img[i]);
				$img.attr("src",newparameter.src[i]);
				$a.append($img);

				$ul1.append($li);
				$p.append($a2);
				$li.append($a);
				$li.append($p);
			}
			$(ele).append($ul1);
			$(ele).append($btn1);
			$(ele).append($btn2);	
		},
		//构建index函数
		index2:function(event){
			var target = $(event.target);
			if(target.index()==1){
				this.index--;
				if(this.index==-1){
					this.index=3;
				}
				this.imagemove(this.index);
			}
			if(target.index()==2){
				this.index++;
				if(this.index==4){
					this.index=0;
				}
				this.imagemove(this.index);
			}
			
		},
		//构建imagemove函数
		imagemove:function(index){
			// console.log(1);
			this.ele.find("li").eq(index)
			.fadeIn()
			.siblings("li").fadeOut()


		}

	
	}
	$.fn.extend({
		supbanner2:function(obj,eleclass){
			// console.log(1);
			return new banner(obj,eleclass);}
		}
	)
})(jQuery)

