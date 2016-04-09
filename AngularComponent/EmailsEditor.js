var EmailsEditor;
(function (EmailsEditor) {
    var Email = (function () {
        function Email(email) {
            this.email = email;
        }
        Object.defineProperty(Email.prototype, "email", {
            get: function () {
                return this._email;
            },
            set: function (value) {
                this._email = value;
                this._isCorrect = EmailsEditor.Helper.checkemail(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Email.prototype, "isCorrect", {
            get: function () {
                return this._isCorrect;
            },
            enumerable: true,
            configurable: true
        });
        return Email;
    }());
    EmailsEditor.Email = Email;
})(EmailsEditor || (EmailsEditor = {}));
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var EmailsEditor;
(function (EmailsEditor) {
    "use strict";
    var KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
        KeyCodes[KeyCodes["Comma"] = 44] = "Comma";
    })(KeyCodes || (KeyCodes = {}));
    var EmailsEditorCtrl = (function () {
        function EmailsEditorCtrl($scope, service) {
            this.$scope = $scope;
            this.service = service;
            $scope.title = EmailsEditorCtrl.id;
            $scope.emails = service.getEmails();
            $scope.frmData = {
                inEmail: ""
            };
            $scope.controller = this;
        }
        Object.defineProperty(EmailsEditorCtrl.prototype, "emails", {
            get: function () {
                return this.$scope.emails;
            },
            enumerable: true,
            configurable: true
        });
        EmailsEditorCtrl.prototype.deleteEmail = function (email) {
            this.service.deleteEmail(email);
        };
        EmailsEditorCtrl.prototype.keyPressHandler = function (event) {
            switch (event.keyCode) {
                case KeyCodes.Comma:
                case KeyCodes.Enter:
                    this.leaveFocusHandler();
                    event.preventDefault();
                    break;
            }
        };
        EmailsEditorCtrl.prototype.leaveFocusHandler = function () {
            this.addEmail(this.$scope.frmData.inEmail);
        };
        EmailsEditorCtrl.prototype.pasteHandler = function (event) {
            var _this = this;
            var email = event.clipboardData.items[0];
            email.getAsString(function (data) {
                _this.addEmail(data);
                _this.$scope.$apply();
            });
        };
        EmailsEditorCtrl.prototype.addEmail = function (email) {
            if (email) {
                this.service.addEmail(email);
            }
            this.$scope.frmData.inEmail = "";
        };
        EmailsEditorCtrl.id = "emailsEditorCtrl";
        EmailsEditorCtrl.$inject = ["$scope", EmailsEditor.EmailsEditorService.id];
        return EmailsEditorCtrl;
    }());
    EmailsEditor.EmailsEditorCtrl = EmailsEditorCtrl;
    angular.module(EmailsEditor.EmailsEditorModule.id).controller(EmailsEditorCtrl.id, EmailsEditorCtrl);
})(EmailsEditor || (EmailsEditor = {}));
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var MainCtrl = (function () {
        function MainCtrl($scope, service) {
            this.$scope = $scope;
            this.service = service;
            $scope.title = "MainCtrl";
            $scope.controller = this;
        }
        MainCtrl.prototype.getEmailsCount = function () {
            alert(this.service.getEmails().length);
        };
        MainCtrl.prototype.addEmails = function () {
            this.service.generateEmail();
        };
        MainCtrl.id = "mainCtrl";
        MainCtrl.$inject = ["$scope", "emailsService"];
        return MainCtrl;
    }());
    angular.module("app").controller(MainCtrl.id, MainCtrl);
})(App || (App = {}));
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var EmailsEditor;
(function (EmailsEditor) {
    "use strict";
    EmailsEditorDirective.$inject = ["$window"];
    function EmailsEditorDirective($window) {
        return {
            restrict: "E",
            templateUrl: "EmailsEditor\\DirectievesTemplates\\EmailsEditorDirectiveTemplate.html",
            controller: EmailsEditor.EmailsEditorCtrl.id,
            link: link
        };
        function link(scope, element, attrs) {
        }
    }
    angular.module(EmailsEditor.EmailsEditorModule.id).directive("emailsEditor", EmailsEditorDirective);
})(EmailsEditor || (EmailsEditor = {}));
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package 
var EmailsEditor;
(function (EmailsEditor) {
    "use strict";
    var EmailsEditorModule = (function () {
        function EmailsEditorModule() {
        }
        EmailsEditorModule.id = "emails-editor";
        return EmailsEditorModule;
    }());
    EmailsEditor.EmailsEditorModule = EmailsEditorModule;
    angular.module(EmailsEditorModule.id, []);
})(EmailsEditor || (EmailsEditor = {}));
// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var EmailsEditor;
(function (EmailsEditor) {
    "use strict";
    var EmailsEditorService = (function () {
        function EmailsEditorService($http) {
            this.$http = $http;
            this._emails = [new EmailsEditor.Email("email@dfdf.rtr"), new EmailsEditor.Email("test@mail.ru")];
        }
        EmailsEditorService.prototype.getEmails = function () {
            return this._emails;
        };
        EmailsEditorService.prototype.findemail = function (email) {
            for (var i = 0, len = this._emails.length; i < len; i++) {
                if (this._emails[i].email === email) {
                    return i;
                }
            }
            return -1;
        };
        EmailsEditorService.prototype.addEmail = function (email) {
            var index = this.findemail(email);
            if (index === -1) {
                this._emails.push(new EmailsEditor.Email(email));
            }
        };
        EmailsEditorService.prototype.deleteEmail = function (email) {
            var index = this.findemail(email);
            if (index > -1) {
                this._emails.splice(index, 1);
            }
        };
        EmailsEditorService.prototype.generateEmail = function () {
            var _this = this;
            this.$http.get("https://randomuser.me/api/", { responseType: "json" }).success(function (data) {
                _this.addEmail(data.results[0].email);
            });
        };
        EmailsEditorService.id = "emailsEditorService";
        EmailsEditorService.$inject = ["$http"];
        return EmailsEditorService;
    }());
    EmailsEditor.EmailsEditorService = EmailsEditorService;
    angular.module(EmailsEditor.EmailsEditorModule.id).service(EmailsEditorService.id, EmailsEditorService);
})(EmailsEditor || (EmailsEditor = {}));
var EmailsEditor;
(function (EmailsEditor) {
    var Helper = (function () {
        function Helper() {
        }
        Helper.checkemail = function (email) {
            return this._emailRegex.test(email);
        };
        Helper._emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return Helper;
    }());
    EmailsEditor.Helper = Helper;
})(EmailsEditor || (EmailsEditor = {}));