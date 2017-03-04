module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
		 	scripts: {
				files: ['**/*.scss', '**/*.js'],
				tasks: ['sass', 'concat'],
				options: {
		    		spawn: false,
		    	},
			},
		},
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'build/main.css': 'scss/main.scss',
				},
			},
		},
		concat: {
		    options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['js/get-data.js', 'js/info-modal.js'],
		      dest: 'build/main.js',
		    },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', ['watch']);

};