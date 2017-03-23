var gulp = require("gulp"),
    scss = require("gulp-sass"),
    browserSync = require('browser-sync').create(),
    watch = require("gulp-watch"),
    fileinclude = require('gulp-file-include'),
    reload = browserSync.reload;
//编译sass
function scssfn() {
    return gulp.src("./src/scss/*.scss")
        .pipe(scss({ outputStyle: 'compact' }).on('error', scss.logError)) //outputStyle:nested, expanded, compact, compressed;css压缩的模式
        .pipe(gulp.dest("./dist/css"))
        .pipe(reload({ stream: true }));
};
//拼接html
function html() {
    gulp.src(['./src/module/*.html']) //[步骤1：读取]，读取被改动的html文件
        .pipe(fileinclude({ //[步骤2：处理]，
            prefix: '@@',
            basepath: './src/module/_module' //引用文件所在的文件夹名称
        }))
        .pipe(gulp.dest('./dist')); //[步骤3：写入]，将处理（拼接）好的html文件写入到根目录中
};

gulp.task('server', ['scss'], function() {
    browserSync.init({
        server: { index: "index.html",baseDir:"./dist"}
    });
// 监听变动文件
    watch('./src/scss', scssfn);
    watch('./dist/*.html', reload);
    watch('./src/module', html);
});
// 定义sass任务
gulp.task("scss", scssfn);

gulp.task('default', ['server']);
