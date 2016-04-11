module App {
    "use strict";

    interface IMainCtrlScope extends ng.IScope {
        controller: MainCtrl;
        emailContainer: EmailsEditor.EmailContainer;
    }

    class MainCtrl {
        static id = "mainCtrl";
        static $inject: string[] = ["$scope","generateEmailsService"];
        emailContainer: EmailsEditor.EmailContainer;
        constructor(private $scope: IMainCtrlScope, private service: GenerateEmailsService) {
            this.emailContainer = new EmailsEditor.EmailContainer();
        }

        getEmailsCount(): void {
            alert(this.emailContainer.emails.length);
        }

        addEmails(): void {
            this.service.generateEmail(this.emailContainer);
        }
    }

    angular.module("app").controller("mainCtrl", MainCtrl);
}