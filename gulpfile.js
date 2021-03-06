const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");
gulp.task("font",()=>{
	 return gulp.src('font/**/*')
    .pipe(gulp.dest('dist/font'));
})

gulp.task("html",()=>{
	return gulp
				.src(["*.html","html/*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})
gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","es6/*.js","images/**/*","libs/**/*"],["sass","es6","img","libs"]);
	gulp.watch(["*.html","html/*.html"],["html"]);
})
gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true //开启自动刷新;
    });
});

gulp.task("sass",()=>{
	 return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})
gulp.task("img",()=>{
	 return gulp.src('images/**/*')
    .pipe(gulp.dest('dist/images'));
})
gulp.task("libs",()=>{
	 return gulp.src('libs/**/*')
    .pipe(gulp.dest('dist/scripts'));
})
gulp.task("default",["watch","server"]);

gulp.task('es6',() =>{
	   return gulp.src('es6/**/*')
	        .pipe(babel({
	            presets: ['env']
	        }))
	        .pipe(gulp.dest('dist/scripts'))
});

