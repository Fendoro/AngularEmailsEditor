module EmailsEditor {
    "use strict";

    export interface IFormData {
        inEmail: string;
    }

    export interface IEmailsEditorCtrlScope extends IEmailsEditorDirectiveScope {
        frmData: IFormData;
        controller: EmailsEditorCtrl;
    }

    enum KeyCodes {
        Enter = 13,
        Comma = 44
    }

    export class EmailsEditorCtrl {
        static id = "emailsEditorCtrl";
        static $inject: string[] = ["$scope"];

        constructor(private $scope: IEmailsEditorCtrlScope) {
            $scope.frmData = {
                inEmail: ""
            };
            $scope.controller = this;
        }

        get emailContainer() {
            return this.$scope.emailContainer;
        }

        get emails() {
            return this.emailContainer.emails;
        }

        get hasEmails() {
            return this.emails ? this.emails.length > 0 : false;
        }

        deleteEmail(email: string): void {
            this.emailContainer.deleteEmail(email);
        }

        keyPressHandler(event: JQueryKeyEventObject): void {
            switch (event.keyCode) {
                case KeyCodes.Comma:
                case KeyCodes.Enter:
                    this.leaveFocusHandler();
                    event.preventDefault();
                    break;
            }
        }

        leaveFocusHandler(): void {
            this.addEmail(this.$scope.frmData.inEmail);
        }

        pasteHandler(event: any): void {
            let email = event.clipboardData.items[0];
            email.getAsString(data => {
                this.addEmail(data);
                this.$scope.$apply();
            });
        }

        addEmail(email: string): void {
            if (email) {
                this.emailContainer.addEmail(email);
            }
            this.$scope.frmData.inEmail = "";
        }
    }

    angular.module("emails-editor").controller("emailsEditorCtrl", EmailsEditorCtrl);
}