const {
  src,
  dest,
  watch, // слежка
  parallel, // одновременно запустить 2 watchera
  series // выполнение каких-то тасков последовательно
} = require('gulp');

const scss              = require('gulp-sass'); // компилятор из sass в css
const rename            = require('gulp-rename');
const cssbeautify       = require('gulp-cssbeautify');
const concat            = require('gulp-concat'); // конкатинатор, объединяет все файлы в один
const uglify            = require('gulp-uglify')
const gulpBrowserSync   = require('browser-sync').create(); // автообновление браузера
const panini            = require('panini');
const autoprefixer      = require('gulp-autoprefixer');
const imagemin          = require('gulp-imagemin');
const del               = require('del');
const webpackStream     = require('webpack-stream');

const _src = 'src/';
const _build = 'build/';
const _dist = 'dist/';

/* === browserSync === */ 
function browserSync() {
  gulpBrowserSync.init({
    server: {
      baseDir: _build
    },
    online: true,
    tunnel: 'localhost',
    notify: false,
    host: '192.168.1.1',
    port: 3000
  })
}

/* === html === */ 
function html() {
  panini.refresh();
  return src(_src + 'html/*.html')
  .pipe(panini({
    root:       _src + 'html/',
    layouts:    _src + 'html/' + 'layouts/',
    partials:   _src + 'html/' + 'partials/',
    helpers:    _src + 'html/' + 'helpers/',
    data:       _src + 'html/' + 'data/'
}))
  .pipe(dest(_build))
  .pipe(gulpBrowserSync.reload({stream: true}));
}

/* === css === */ 
function css() {
  return src(_src + 'scss/main.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(rename({
      basename: "style",
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(dest(_build + 'css'))
    .pipe(gulpBrowserSync.reload({stream: true}))
    .pipe(cssbeautify())
    .pipe(rename({
      basename: "style",
      extname: ".css"
    }))
    .pipe(dest(_build + 'css'))
}

/* === cssLibs === */ 
function cssLibs(){
  return src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/animate.css/animate.css',
    'node_modules/slick-carousel/slick/slick.css'
  ])
  .pipe(concat('_libs.scss'))
  .pipe(dest(_src + 'scss'))
  .pipe(gulpBrowserSync.reload({stream: true}));
}

/* === js === */ 
function js() {
  return src(_src + 'js/index.js')
    .pipe(webpackStream({
          mode: 'development',
          output: {
            filename: 'bundle.js',
          },
          module: {
            rules: [
              {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['@babel/preset-env']
                }
              }
            ]
          }
        }))
    .pipe(dest(_build))
    .pipe(gulpBrowserSync.reload({stream: true}));
}

/* === jslibs === */
function jslibs(){
  return src([
    'node_modules/slick-carousel/slick/slick.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(dest(_build))
}

/* === images === */ 
function fonts(){
  return src(_src + 'fonts/**/*')
  .pipe(dest(_build + '/fonts'));
}

/* === images === */ 
function images(){
  return src(_src + 'img/**/*')
  .pipe(dest(_build + '/img'));
}

/* === imagesmin === */ 
function imagesmin(){
  del(_build + '/img');
  return src(_src + 'img/**/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest(_dist + '/img'));
}

/* === watching === */ 
function watching() {
  watch([_src + 'scss/**/*.scss'], css);
  watch([_src + 'js/**/*.js'], js);
  watch([_src + 'html/**/*.html'], html);
  watch([_src + 'img/**/*'], images);
}

/* === build === */ 
function build(){
  return src([
    _src + '*.html',
    _src + 'css/style.min.css',
    _src + 'libs.min.js',
    _src + 'fonts/**/*'
  ], {base: _src}) // копирует вместе с папками
    .pipe(dest(_dist));
}

/* === bundlejs === */ 
function bundlejs(){
  return src(_src + 'bundle.js')
  .pipe(webpackStream({
    mode: 'production',
    output: {
      filename: 'bundle.js',
    }
  }))
  .pipe(dest(_dist));
}

/* === cleandist === */ 
function cleandist(){
  return del(_dist)
}

exports.html = html;
exports.css = css;
exports.csslibs = cssLibs;
exports.js = js;
exports.jslibs = jslibs;

exports.images = images;
exports.fonts = fonts;
exports.watching = watching;
exports.browsersync = browserSync;
exports.cleandist = cleandist;

exports.build = series(cleandist, imagesmin, build, bundlejs);
exports.default = series(series(html, css, js, fonts, images), parallel(watching, browserSync));