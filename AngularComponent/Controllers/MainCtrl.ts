module App {
    "use strict";
    import EmailsEditorService = EmailsEditor.EmailsEditorService;

    interface IMainCtrlScope extends ng.IScope {
        title: string;
        controller: MainCtrl;
    }

    class MainCtrl {
        static id = "mainCtrl";
        static $inject: string[] = ["$scope","emailsEditorService"];

        constructor(private $scope: IMainCtrlScope, private service: EmailsEditorService) {
            $scope.title = "MainCtrl";
            $scope.controller = this;
        }

        getEmailsCount(): void {
            alert(this.service.getEmails().length);
        }

        addEmails(): void {
            this.service.generateEmail();
        }
    }

    angular.module("app").controller("mainCtrl", MainCtrl);
}