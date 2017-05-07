var gulp   = require( 'gulp' );
var less   = require( 'gulp-less' );
var cssmin = require( 'gulp-cssmin' );

gulp.task('less', function() {
	return gulp.src( 'styles/*.less' )
		.pipe( less() )
		.pipe( cssmin() )
		.pipe( gulp.dest( 'styles' ));
});

gulp.task( 'less:watch', ['less'], function () {
	gulp.watch('styles/*.less', ['less']);
});