let { src, dest } = require("gulp");
let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let plumber = require("gulp-plumber");
let del = require("del");
let imagemin = require("gulp-imagemin");
let newer = require('gulp-newer');
let inlineCss = require('gulp-inline-css');
let rename = require("gulp-rename");
let autoprefixer = require("gulp-autoprefixer");
let scss = require('gulp-sass')(require('sass'));
let group_media = require("gulp-group-css-media-queries");
let replace = require('gulp-replace');

let build_folder = "build";
let src_folder = "source";
let path = {
    build: {
        html: build_folder + "/",
        css: src_folder + "/scss/",
        images: build_folder + "/images/",
    },
    src: {
        html: src_folder + "/*.html",
        css: src_folder + "/scss/*.scss",
        images: src_folder + "/images/**/*.{jpg,png,gif}"
    },
    watch: {
        html: src_folder + "/**/*.html",
        css: src_folder + "/scss/**/*.scss",
        images: src_folder + "/images/**/*.{jpg,png,gif}"
    },
    clean: "./" + build_folder + "/"
};

function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./" + build_folder + "/"
        },
        notify: false,
        port: 3000,
    });
}

function css() {
    return src(path.src.css)
        .pipe(plumber())
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(group_media())
        .pipe(
            autoprefixer({
                grid: true,
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(src(path.src.html))
        .pipe(plumber())
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function html() {
    return src(path.src.html)
        .pipe(plumber())
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function images() {
    return src(path.src.images)
        .pipe(newer(path.build.images))
        // .pipe(
        //     imagemin({
        //         progressive: true,
        //         interlaced: true,
        //         optimizationLevel: 4 // 0 to 7
        //     })
        // )
        .pipe(dest(path.build.images))
}

function clean() {
    return del(path.clean);
}

/**
 * Очищает файл от классов
 */
function deleteClasses() {
    return src(path.src.html)
        .pipe(plumber())
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true
        }))
        .pipe(replace(/\sclass=".*?"/g, ''))
        .pipe(rename({ extname: ".clean.html" }))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], async () => {
        await css();
        html();
    });
    gulp.watch([path.watch.images], images);
}

let build = gulp.series(clean, css, gulp.parallel(images, html));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.images = images;
exports.clean = clean;
exports.dc = deleteClasses
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.browserSync = browserSync;