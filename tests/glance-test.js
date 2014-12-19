
//casper.test.begin('Resurrectio test', function(test) {
//    casper.start('http://localhost:3001/glance/configure');
//    casper.waitForSelector("form#widget-configurator input#vehicle-api-key-input",
//        function success() {
//            test.assertExists("form#widget-configurator input#vehicle-api-key-input");
//            this.click("form#widget-configurator input#vehicle-api-key-input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#vehicle-api-key-input");
//        });
//    casper.waitForSelector("form#widget-configurator input#vehicle-api-key-input",
//        function success() {
//            test.assertExists("form#widget-configurator input#vehicle-api-key-input");
//            this.click("form#widget-configurator input#vehicle-api-key-input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#vehicle-api-key-input");
//        });
//    casper.waitForSelector("form#widget-configurator button#vehicle-api-key-apply",
//        function success() {
//            test.assertExists("form#widget-configurator button#vehicle-api-key-apply");
//            this.click("form#widget-configurator button#vehicle-api-key-apply");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator button#vehicle-api-key-apply");
//        });
//    casper.waitForSelector("form#widget-configurator input#zip-code-input",
//        function success() {
//            test.assertExists("form#widget-configurator input#zip-code-input");
//            this.click("form#widget-configurator input#zip-code-input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#zip-code-input");
//        });
//    casper.waitForSelector("form#widget-configurator input#zip-code-input",
//        function success() {
//            test.assertExists("form#widget-configurator input#zip-code-input");
//            this.click("form#widget-configurator input#zip-code-input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#zip-code-input");
//        });
//    casper.waitForSelector("form#widget-configurator button#zip-code-apply",
//        function success() {
//            test.assertExists("form#widget-configurator button#zip-code-apply");
//            this.click("form#widget-configurator button#zip-code-apply");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator button#zip-code-apply");
//        });
//    casper.waitForSelector(".at-glance-mmy.makes.not-valid.form-control",
//        function success() {
//            test.assertExists(".at-glance-mmy.makes.not-valid.form-control");
//            this.click(".at-glance-mmy.makes.not-valid.form-control");
//        },
//        function fail() {
//            test.assertExists(".at-glance-mmy.makes.not-valid.form-control");
//        });
//    casper.waitForSelector(".at-glance-mmy.models.not-valid.form-control",
//        function success() {
//            test.assertExists(".at-glance-mmy.models.not-valid.form-control");
//            this.click(".at-glance-mmy.models.not-valid.form-control");
//        },
//        function fail() {
//            test.assertExists(".at-glance-mmy.models.not-valid.form-control");
//        });
//    casper.waitForSelector(".at-glance-mmy.years.not-valid.form-control",
//        function success() {
//            test.assertExists(".at-glance-mmy.years.not-valid.form-control");
//            this.click(".at-glance-mmy.years.not-valid.form-control");
//        },
//        function fail() {
//            test.assertExists(".at-glance-mmy.years.not-valid.form-control");
//        });
//    casper.waitForSelector("form#widget-configurator input#toggleAllTabs",
//        function success() {
//            test.assertExists("form#widget-configurator input#toggleAllTabs");
//            this.click("form#widget-configurator input#toggleAllTabs");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#toggleAllTabs");
//        });
//    casper.waitForSelector("form#widget-configurator input#toggleAllTabs",
//        function success() {
//            test.assertExists("form#widget-configurator input#toggleAllTabs");
//            this.click("form#widget-configurator input#toggleAllTabs");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator input#toggleAllTabs");
//        });
//    casper.waitForSelector("form#widget-configurator .list-group-item.checkbox:nth-child(2) input",
//        function success() {
//            test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
//            this.click("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
//        });
//    casper.waitForSelector(".list-group-item.checkbox:nth-child(4)",
//        function success() {
//            test.assertExists(".list-group-item.checkbox:nth-child(4)");
//            this.click(".list-group-item.checkbox:nth-child(4)");
//        },
//        function fail() {
//            test.assertExists(".list-group-item.checkbox:nth-child(4)");
//        });
//    casper.waitForSelector("form#widget-configurator .list-group-item.checkbox:nth-child(4) input",
//        function success() {
//            test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
//            this.click("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
//        });
//    casper.waitForSelector("fieldset:nth-child(2) .control-group",
//        function success() {
//            test.assertExists("fieldset:nth-child(2) .control-group");
//            this.click("fieldset:nth-child(2) .control-group");
//        },
//        function fail() {
//            test.assertExists("fieldset:nth-child(2) .control-group");
//        });
//    casper.waitForSelector("fieldset:nth-child(2)",
//        function success() {
//            test.assertExists("fieldset:nth-child(2)");
//            this.click("fieldset:nth-child(2)");
//        },
//        function fail() {
//            test.assertExists("fieldset:nth-child(2)");
//        });
//    casper.waitForSelector("form#widget-configurator button#widget-get",
//        function success() {
//            test.assertExists("form#widget-configurator button#widget-get");
//            this.click("form#widget-configurator button#widget-get");
//        },
//        function fail() {
//            test.assertExists("form#widget-configurator button#widget-get");
//        });
//    casper.waitForSelector(".close span:nth-child(1)",
//        function success() {
//            test.assertExists(".close span:nth-child(1)");
//            this.click(".close span:nth-child(1)");
//        },
//        function fail() {
//            test.assertExists(".close span:nth-child(1)");
//        });
//    casper.waitForSelector(".glance-wdg",
//        function success() {
//            casper.withFrame('glance-frame', function() {
//                this.echo('Page url is ' + this.getCurrentUrl());
//            });
//        },
//        function fail() {
//            console.log('fail');
//        });
//
//
//    casper.run(function() {test.done();});
//});


casper
    .start(casper.cli.get('baseUrl'))
    .then(function () {
        this.waitForSelector("form#widget-configurator input#vehicle-api-key-input",
            function success() {
                this.test.assertExists("form#widget-configurator input#vehicle-api-key-input");
                this.click("form#widget-configurator input#vehicle-api-key-input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#vehicle-api-key-input");
            });
        this.waitForSelector("form#widget-configurator input#vehicle-api-key-input",
            function success() {
                this.test.assertExists("form#widget-configurator input#vehicle-api-key-input");
                this.click("form#widget-configurator input#vehicle-api-key-input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#vehicle-api-key-input");
            });
        this.waitForSelector("form#widget-configurator button#vehicle-api-key-apply",
            function success() {
                this.test.assertExists("form#widget-configurator button#vehicle-api-key-apply");
                this.click("form#widget-configurator button#vehicle-api-key-apply");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator button#vehicle-api-key-apply");
            });
        this.waitForSelector("form#widget-configurator input#zip-code-input",
            function success() {
                this.test.assertExists("form#widget-configurator input#zip-code-input");
                this.click("form#widget-configurator input#zip-code-input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#zip-code-input");
            });
        this.waitForSelector("form#widget-configurator input#zip-code-input",
            function success() {
                this.test.assertExists("form#widget-configurator input#zip-code-input");
                this.click("form#widget-configurator input#zip-code-input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#zip-code-input");
            });
        this.waitForSelector("form#widget-configurator button#zip-code-apply",
            function success() {
                this.test.assertExists("form#widget-configurator button#zip-code-apply");
                this.click("form#widget-configurator button#zip-code-apply");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator button#zip-code-apply");
            });
        this.waitForSelector(".at-glance-mmy.makes.not-valid.form-control",
            function success() {
                this.test.assertExists(".at-glance-mmy.makes.not-valid.form-control");
                this.click(".at-glance-mmy.makes.not-valid.form-control");
            },
            function fail() {
                this.test.assertExists(".at-glance-mmy.makes.not-valid.form-control");
            });
        this.waitForSelector(".at-glance-mmy.models.not-valid.form-control",
            function success() {
                this.test.assertExists(".at-glance-mmy.models.not-valid.form-control");
                this.click(".at-glance-mmy.models.not-valid.form-control");
            },
            function fail() {
                this.test.assertExists(".at-glance-mmy.models.not-valid.form-control");
            });
        this.waitForSelector(".at-glance-mmy.years.not-valid.form-control",
            function success() {
                this.test.assertExists(".at-glance-mmy.years.not-valid.form-control");
                this.click(".at-glance-mmy.years.not-valid.form-control");
            },
            function fail() {
                this.test.assertExists(".at-glance-mmy.years.not-valid.form-control");
            });
        this.waitForSelector("form#widget-configurator input#toggleAllTabs",
            function success() {
                this.test.assertExists("form#widget-configurator input#toggleAllTabs");
                this.click("form#widget-configurator input#toggleAllTabs");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#toggleAllTabs");
            });
        this.waitForSelector("form#widget-configurator input#toggleAllTabs",
            function success() {
                this.test.assertExists("form#widget-configurator input#toggleAllTabs");
                this.click("form#widget-configurator input#toggleAllTabs");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator input#toggleAllTabs");
            });
        this.waitForSelector("form#widget-configurator .list-group-item.checkbox:nth-child(2) input",
            function success() {
                this.test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
                this.click("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(2) input");
            });
        this.waitForSelector(".list-group-item.checkbox:nth-child(4)",
            function success() {
                this.test.assertExists(".list-group-item.checkbox:nth-child(4)");
                this.click(".list-group-item.checkbox:nth-child(4)");
            },
            function fail() {
                this.test.assertExists(".list-group-item.checkbox:nth-child(4)");
            });
        this.waitForSelector("form#widget-configurator .list-group-item.checkbox:nth-child(4) input",
            function success() {
                this.test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
                this.click("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator .list-group-item.checkbox:nth-child(4) input");
            });
        this.waitForSelector("fieldset:nth-child(2) .control-group",
            function success() {
                this.test.assertExists("fieldset:nth-child(2) .control-group");
                this.click("fieldset:nth-child(2) .control-group");
            },
            function fail() {
                this.test.assertExists("fieldset:nth-child(2) .control-group");
            });
        this.waitForSelector("fieldset:nth-child(2)",
            function success() {
                this.test.assertExists("fieldset:nth-child(2)");
                this.click("fieldset:nth-child(2)");
            },
            function fail() {
                this.test.assertExists("fieldset:nth-child(2)");
            });
        this.waitForSelector("form#widget-configurator button#widget-get",
            function success() {
                this.test.assertExists("form#widget-configurator button#widget-get");
                this.click("form#widget-configurator button#widget-get");
            },
            function fail() {
                this.test.assertExists("form#widget-configurator button#widget-get");
            });
        this.waitForSelector(".close span:nth-child(1)",
            function success() {
                this.test.assertExists(".close span:nth-child(1)");
                this.click(".close span:nth-child(1)");
            },
            function fail() {
                this.test.assertExists(".close span:nth-child(1)");
            });
        this.waitForSelector(".glance-wdg",
            function success() {
                casper.withFrame('glance-frame', function() {
                    this.echo('Page url is ' + this.getCurrentUrl());
                });
            },
            function fail() {
                console.log('fail');
            });

    })
    .run(function () {
        this.test.done();
    });

