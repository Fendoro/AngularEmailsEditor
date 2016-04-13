module App {
    "use strict";

    interface IMainCtrlScope extends ng.IScope {
        controller: EmailsCtrl;
        emailContainer: EmailsEditor.EmailsContainer;
    }

    class EmailsCtrl {
        static id = "emailsCtrl";
        static $inject: string[] = ["$scope","emailsService"];
        emailContainer: EmailsEditor.EmailsContainer;
        constructor(private $scope: IMainCtrlScope, private service: EmailsService) {
            this.emailContainer = new EmailsEditor.EmailsContainer();
        }

        getEmailsCount(): void {
            alert(this.emailContainer.emails.length);
        }

        addEmails(): void {
            this.service.generateEmail(this.emailContainer);
        }
    }

    angular.module("app").controller("emailsCtrl", EmailsCtrl);
}