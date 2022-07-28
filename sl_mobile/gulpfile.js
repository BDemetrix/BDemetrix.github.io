let replace = require('gulp-replace'); //.pipe(replace('bar', 'foo'))
let cheerio = require('gulp-cheerio');
let svgmin = require('gulp-svgmin');
let svgsprite = require('gulp-svg-sprite');
let { src, dest } = require("gulp");
let fs = require('fs');
let gulp = require("gulp");
let browsersync = require("browser-sync").create();
let autoprefixer = require("gulp-autoprefixer");
let scss = require('gulp-sass')(require('sass'))
let group_media = require("gulp-group-css-media-queries");
let plumber = require("gulp-plumber");
let del = require("del");
let imagemin = require("gulp-imagemin");
let uglify = require("gulp-uglify-es").default;
let rename = require("gulp-rename");
let fileinclude = require("gulp-file-include");
let clean_css = require("gulp-clean-css");
let newer = require('gulp-newer');

/* let webpcss = require("gulp-webpcss");
let webphtml = require('gulp-webp-html'); */

let fonter = require('gulp-fonter');

let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');



let project_name = "build";
let src_folder = "#src";

let path = {
	build: {
		html: project_name + "/",
		js: project_name + "/js/",
		css: project_name + "/css/",
		cssBlocks: project_name + "/css/blocks/",
		// cssThemes: project_name + "/css/themes/",
		images: project_name + "/images/",
		fonts: project_name + "/fonts/"
	},
	src: {
		favicon: src_folder + "/images/favicon.{jpg,png,svg,gif,ico,webp}",
		html: [src_folder + "/*.html", "!" + src_folder + "/_*.html"],
		js: [src_folder + "/js/app.js", src_folder + "/js/vendors.js", src_folder + "/js/demo.js"],
		css: src_folder + "/scss/style.scss",
		cssBlocks: src_folder + "/scss/blocks/*.scss", //[src_folder + "/scss/blocks/*.scss", "!" + src_folder + "/scss/blocks/_*.scss"],
		// cssThemes: src_folder + "/scss/themes/*.scss",
		images: [src_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}", "!**/favicon.*", "!**/sprite/**.*"],
    webp: [src_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}", "!**/favicon.*", "!**/sprite/**.*", "!**/**.svg"],
		fonts: src_folder + "/fonts/*.ttf",
		sprite: src_folder + "/images/sprite/**.svg"
	},
	watch: {
		html: src_folder + "/**/*.html",
		js: src_folder + "/**/*.js",
		css: src_folder + "/scss/**/*.scss",
		images: src_folder + "/images/**/*.{jpg,png,svg,gif,ico,webp}"
	},
	clean: "./" + project_name + "/"
};
function browserSync(done) {
	browsersync.init({
		server: {
			baseDir: "./" + project_name + "/"
		},
		notify: false,
		port: 3000,
	});
}
function html() {
	return src(path.src.html, {})
		.pipe(plumber())
		.pipe(fileinclude())
		//.pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(browsersync.stream());
}

function css() {
	return src(path.src.css, {})
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
		/* .pipe(webpcss(
			{
				webpClass: "._webp",
				noWebpClass: "._no-webp"
			}
		)) */
		.pipe(dest(path.build.css))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css))
		.pipe(browsersync.stream());
}
function cssBlocks() {
	return src(path.src.cssBlocks, {})
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
		/* .pipe(webpcss(
			{
				webpClass: "._webp",
				noWebpClass: "._no-webp"
			}
		)) */
		.pipe(dest(path.build.cssBlocks))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.cssBlocks))
		.pipe(browsersync.stream());
}
/* function cssThemes() {
	return src(path.src.cssThemes, {})
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
		//.pipe(webpcss(
		//	{
		//		webpClass: "._webp",
		//		noWebpClass: "._no-webp"
		//	}
		//)) 
		.pipe(dest(path.build.cssThemes))
		.pipe(clean_css())
		.pipe(
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.cssThemes))
		.pipe(browsersync.stream());
} */
function js() {
	return src(path.src.js, {})
		.pipe(plumber())
		.pipe(fileinclude())
		.pipe(gulp.dest(path.build.js))
		.pipe(uglify(/* options */))
		.pipe(
			rename({
				suffix: ".min",
				extname: ".js"
			})
		)
		.pipe(dest(path.build.js))
		.pipe(browsersync.stream());
}
function images() {
    return src(path.src.images)
		.pipe(newer(path.build.images))
		/* .pipe(
			imagemin({
				progressive: true,
				//svgoPlugins: [{ removeViewBox: false }],
				interlaced: true,
				optimizationLevel: 3 // 0 to 7
			})
		) */
		.pipe(dest(path.build.images))
}
function favicon() {
	return src(path.src.favicon)
		.pipe(plumber())
		.pipe(
			rename({
				extname: ".ico"
			})
		)
		.pipe(dest(path.build.html))
}
function fonts_otf() {
	return src('./' + src_folder + '/fonts/*.otf')
		.pipe(plumber())
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(gulp.dest('./' + src_folder +'/fonts/'));
}
function fonts() {
	src(path.src.fonts)
		.pipe(plumber())
		.pipe(ttf2woff())
		.pipe(dest(path.build.fonts));
	return src(path.src.fonts)
		.pipe(ttf2woff2())
		.pipe(dest(path.build.fonts))
		.pipe(browsersync.stream());
}
function fontsCopy() {
	return src(src_folder + '/fonts/*.{woff,woff2}')
		.pipe(newer(path.build.fonts))
		.pipe(dest(path.build.fonts));
}
function svgSprite() {
	return src(path.src.sprite)
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(cheerio({
			run: function ($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: {xmlMode: true},
		}))
		.pipe(replace('&gt', '>'))
		.pipe(svgsprite({
			mode: {
				symbol: {
					sprite: "sprite.svg",
				}
			}
		}))
		.pipe(dest(path.build.images))
}
function fontstyle() {
	let file_content = fs.readFileSync(src_folder + '/scss/base/fonts.scss');
	if (file_content == '') {
		fs.writeFile(src_folder + '/scss/base/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let fontWeightArr = ['Light', 'Regular', 'Medium', 'Semi', 'Bold', 'Extra', 'Black'];
				let c_filename, fontname, fontWeigh = 400;
				for (var i = 0; i < items.length; i++) {
					let filename = items[i].split('.');
					//let fname = items[i];
					filename = filename[0];
					fontname = filename;
					for (let i = 0; i < fontWeightArr.length; i++) {
						if (filename.includes(fontWeightArr[i])) {
							fontWeigh = (i+3)*100;
							break;
						}
					}
					fontname = fontname.split('-');
					fontname = fontname[0];
					//fontname.replace(' ', '');
					if (c_filename != filename) {
						fs.appendFile(src_folder + '/scss/base/fonts.scss', '@include font("' + fontname + '", "' + filename + '", "' + fontWeigh + '", "normal");\r\n', cb);
					}
					c_filename = filename;
					fontWeigh = 400;
				}
			}
		})
	}
}
function cb() { }
function clean() {
	return del(path.clean);
}
function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	//gulp.watch([path.watch.css], cssThemes);
	gulp.watch([path.watch.js], js);
	gulp.watch([path.watch.images], images);
}
let build = gulp.series(clean, fontsCopy, fonts_otf, gulp.parallel(html, css, cssBlocks, /* cssThemes, */ js, favicon, images, svgSprite), fonts, gulp.parallel(fontstyle));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.css = css;
exports.cssBlocks = cssBlocks;
//exports.cssThemes = cssThemes;
exports.js = js;
exports.favicon = favicon;
exports.fonts_otf = fonts_otf;
exports.fontstyle = fontstyle;
exports.fonts = fonts;
exports.fontsCopy = fontsCopy;
exports.images = images;
exports.svgSprite = svgSprite;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
exports.browserSync = browserSync;