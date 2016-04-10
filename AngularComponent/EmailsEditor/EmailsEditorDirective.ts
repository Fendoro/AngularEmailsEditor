module EmailsEditor {
    "use strict";

    interface IEmailsEditorDirective extends ng.IDirective {
    }

    interface IEmailsEditorDirectiveScope extends ng.IScope {
        title: string;
    }

    interface IEmailsEditorDirectiveAttributes extends ng.IAttributes {
    }

    class EmailsEditorDirective implements IEmailsEditorDirective {
        static $inject = ["$window"];
        restrict = "E";
        templateUrl = "EmailsEditor\\DirectievesTemplates\\EmailsEditorDirectiveTemplate.html";
        controller = "emailsEditorCtrl";
        scope = {
            title: "@myTitle"
        };

        link(scope: IEmailsEditorDirectiveScope, element: ng.IAugmentedJQuery, attrs: IEmailsEditorDirectiveAttributes) {
        }

        static instance($window: ng.IWindowService): IEmailsEditorDirective {
            return new EmailsEditorDirective();
        }
    }

    angular.module("emails-editor").directive("emailsEditor", EmailsEditorDirective.instance);
}