'use strict';

const   gulp    = require('gulp'),
        eslint  = require('gulp-eslint'),
        mocha   = require('gulp-mocha'),
        using   = require('gulp-using');


const   SOURCE  = './src',
        TEST    = './test';


/** run eslint on tests and outputs result */
gulp.task('lint-test', function(){
    return gulp
        .src([TEST + '/*.js', TEST + '/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});


/** run unit tests */
gulp.task('test', ['lint-test'], function(){
    return gulp
            .src([TEST + '/*.js', TEST + '/**/*.js'])
            .pipe(mocha({reporter: 'spec'}))
            // If your test suite is not exiting it might be because you still have a lingering callback,
            // most often caused by an open database connection. You should close this connection or do the following:
            .once('error', (e) => {
                console.log('Got error: ' + e);
                process.exit(1);
            })
            .once('end', () => {
                process.exit();
            });
});



