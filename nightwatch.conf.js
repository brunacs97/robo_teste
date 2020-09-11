module.exports = {
    src_folders: ["tests"],

    webdriver: {
        start_process: true,
        port: 4444,
        server_path: require('chromedriver').path,
        cli_args: []
    },

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                "acceptInsecureCerts": true,
                "chromeOptions": {
                    "args": [
                        "--no-sandbox",
                        "window-size=1920,1080",
                        // "--headless",
                        "--disable-dev-shm-usage",
                        "--disable-gpu",
                        "--disable-web-security",
                        "--ignore-certificate-error",
                        "--allow-running-insecure-content",
                        "--ignore-ssl-errors"
                    ],
                    "prefs": {
                        "credentials_enable_service": false,
                        "profile.password_manager_enabled": false,
                        "profile.managed_default_content_settings.images": 2,
                        'download': {
                            'prompt_for_download': false,
                            'default_directory': `${__dirname}/images`
                        }
                    }
                }
            }
        }
    }
};
