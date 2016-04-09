// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var KeyCodes;
    (function (KeyCodes) {
        KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
        KeyCodes[KeyCodes["Comma"] = 188] = "Comma";
    })(KeyCodes || (KeyCodes = {}));
    var EmailsEditorCtrl = (function () {
        function EmailsEditorCtrl($scope, service) {
            this.$scope = $scope;
            this.service = service;
            $scope.title = "EmailsEditorCtrl";
            $scope.addEmail = this.addEmail;
            $scope.deleteEmail = this.deleteEmail;
            $scope.emails = service.getEmails();
            $scope.inEmail = "";
            this.activate();
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
        EmailsEditorCtrl.prototype.addEmail = function (event) {
            if (!event.keyCode || event.keyCode === KeyCodes.Comma || event.keyCode === KeyCodes.Enter) {
                var email = this.$scope.inEmail;
                if (email) {
                    this.service.addEmail(email);
                }
                this.$scope.inEmail = "";
                if (event) {
                    event.preventDefault();
                }
            }
        };
        EmailsEditorCtrl.prototype.activate = function () {
        };
        EmailsEditorCtrl.$inject = ["$scope", "EmailsService"];
        return EmailsEditorCtrl;
    }());
    angular.module("emails-editor").controller("EmailsEditorCtrl", EmailsEditorCtrl);
})(App || (App = {}));
//# sourceMappingURL=EmailsEditorCtrl.js.map