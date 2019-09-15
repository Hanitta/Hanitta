const {src, dest, task, series} = require('gulp');
const rm = require( 'gulp-rm' );

const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const concat = require('gulp-concat');

const cleanCSS = require('gulp-clean-css');

const sourcemaps = require('gulp-sourcemaps');

const babel = require('gulp-babel');

const uglify = require('gulp-uglify');

const svgo = require('gulp-svgo');

const svgSprite = require('gulp-svg-sprite');

const gulpif = require('gulp-if');

const env = process.env.NODE_ENV;

task( 'clean', () => {
    return src( 'dist/**/*', { read: false })
      .pipe( rm() )
  })

task('copy', () => {
    return src('./src/style/*.scss').pipe(dest('dist'));
});

const styles = [
    "./node_modules/normalize.css/normalize.css",
    "./src/style/main.scss"
];

task('styles', () => {
    return src(styles)
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    .pipe(concat('main.min.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(env === "prod", cleanCSS()))
    .pipe(gulpif(env === "dev", sourcemaps.write()))  
    .pipe(dest('dist'));
    
});

const libs = [
    "./jquery-3.4.1.min.js",
    "src/scripts/*.js"
]

task('script', () => {
    return src(libs)
    .pipe(gulpif(env === "dev", sourcemaps.init()))
    .pipe(concat('main.min.js', {newLine: ";"}))
    .pipe(gulpif(env === "prod", babel({
        presets: ['@babel/env']
    })))
    .pipe(gulpif(env === "prod", uglify()))
    .pipe(gulpif(env === "dev", sourcemaps.write()))
    .pipe(dest('dist'));
});

task('icons', () => {
    return src('./src/icons2/*.svg')
    .pipe(svgo({
        plugins: [
            {
                removeAttrs: {
                    attrs: "(width|height|data.*)"
                }
            }
        ]
    }))
    .pipe(dest('dist/images/icons'));
});

task("default", series('clean', 'styles', 'icons', 'script')) 