module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
		 	scripts: {
				files: ['**/*.scss'],
				tasks: ['sass'],
				options: {
		    		spawn: false,
		    	},
			},
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('default', ['watch']);

};