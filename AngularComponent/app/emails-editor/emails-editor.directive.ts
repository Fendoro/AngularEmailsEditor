module EmailsEditor {
    "use strict";

    interface IEmailsEditorDirective extends ng.IDirective {
    }

    export interface IEmailsEditorDirectiveScope extends ng.IScope {
        title: string;
        emailContainer: EmailContainer;
    }

    interface IEmailsEditorDirectiveAttributes extends ng.IAttributes {
    }

    class EmailsEditorDirective implements IEmailsEditorDirective {
        static $inject = ["$window"];
        transclude = true;
        replace = true;
        restrict = "E";
        templateUrl = "app\\emails-editor\\emails-editor.html";
        controller = "emailsEditorCtrl";
        scope = {
            title: "@header", 
            emailContainer: "="
        };

        link(scope: IEmailsEditorDirectiveScope, element: ng.IAugmentedJQuery, attrs: IEmailsEditorDirectiveAttributes) {
        }

        static instance($window: ng.IWindowService): IEmailsEditorDirective {
            return new EmailsEditorDirective();
        }
    }

    angular.module("emails-editor").directive("emailsEditor", EmailsEditorDirective.instance);
}