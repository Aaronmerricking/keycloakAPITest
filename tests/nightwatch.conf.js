require('babel-core/register');
// var allure = require("nightwatch-allure-adapter");

module.exports = {
	globals_path: "Global.js",
	// reporter: allure.write,
	//src_folders: ['src'], 

	src_folders:["src/specs/API","src/specs/Accessibility"],

	custom_commands_path: ["./commands","./node_modules/nightwatch-axe-verbose/src/commands"],
	//page_objects_path: ["pages/UI","pages/API"],
	// output_folder: ['/reports'],
	

	"exclude" : ["src/specs/Database", 
				"src/specs/Accessibility/pa11y_*.js",
				"src/specs/UI/*",
				"src/specs/UI_Pipeline"
				],
	"webdriver": {
		"start_process": true,
		//"server_path": "node_modules/.bin/chromedriver",
		"server_path": "./node_modules/chromedriver/lib/chromedriver/chromedriver",
		"cli_args": [
			"--verbose"
		],
		"port": 9515
	},

	"test_settings": {
		"default": {
			"skip_testcases_on_fail": true,
			"silent": true,
			"desiredCapabilities": {
				"browserName": "chrome",
				"javascriptEnabled": true,
				"acceptSslCerts": true,
				"resolution":"1366x768",

				chromeOptions: {
					useAutomationExtension: false,
					args: [
						'--headless',
						'--no-sandbox',
						'--disable-gpu',
						'--log-level=OFF',
						'--enable-logging=stderr --v=1 > 😂.txt 2>&1',
						'--enable-features=NetworkService,NetworkServiceInProcess',
						'window-size=800,800'						
					]
				}
			}
		}
	}	
};
