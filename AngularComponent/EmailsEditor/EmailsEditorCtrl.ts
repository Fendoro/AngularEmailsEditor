module EmailsEditor {
    "use strict";

    export interface IFormData {
        inEmail: string;
    }

    export interface IEmailsEditorCtrlScope extends ng.IScope {
        title: string;
        emails: Array<Email>;
        addEmail: (event: JQueryKeyEventObject) => void;
        deleteEmail: (email: string) => void;
        frmData: IFormData;
        controller: EmailsEditorCtrl;
    }

    enum KeyCodes {
        Enter = 13,
        Comma = 44
    }

    export class EmailsEditorCtrl {
        static id = "emailsEditorCtrl";
        static $inject: string[] = ["$scope", "emailsEditorService"];

        constructor(private $scope: IEmailsEditorCtrlScope, private service: EmailsEditorService) {
            $scope.title = "emailsEditorCtrl";
            $scope.emails = service.getEmails();
            $scope.frmData = {
                inEmail: ""
            };
            $scope.controller = this;
        }

        private get emails() {
            return this.$scope.emails;
        }

        deleteEmail(email: string): void {
            this.service.deleteEmail(email);
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
                this.service.addEmail(email);
            }
            this.$scope.frmData.inEmail = "";
        }
    }

    angular.module("emails-editor").controller("emailsEditorCtrl", EmailsEditorCtrl);
}