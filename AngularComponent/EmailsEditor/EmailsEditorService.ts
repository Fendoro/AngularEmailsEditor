module EmailsEditor {
    "use strict";

    export interface IEmailsService {
        getEmails: () => Array<Email>;
        addEmail: (email: string) => void;
        deleteEmail: (email: string) => void;
    }

    export class EmailsEditorService implements IEmailsService {
        static id = "emailsEditorService";
        static $inject: string[] = ["$http"];
        private _emails: Array<Email>;

        constructor(private $http: ng.IHttpService) {
            this._emails = [];
        }

        getEmails(): Email[] {
            return this._emails;
        }

        private findemail(email: string): number {
            for (var i = 0, len = this._emails.length; i < len; i++) {
                if (this._emails[i].email === email) {
                    return i;
                }
            }
            return -1;
        }

        addEmail(email: string): void {
            let index = this.findemail(email);
            if (index === -1) {
                this._emails.push(new Email(email));
            }
        }

        deleteEmail(email: string): void {
            let index = this.findemail(email);
            if (index > -1) {
                this._emails.splice(index, 1);
            }
        }

        generateEmail(): void {
            this.$http.get("https://randomuser.me/api/", { responseType: "json" }).success((data: any) => {
                this.addEmail(data.results[0].email);
            });
        }
    }

    angular.module("emails-editor").service("emailsEditorService", EmailsEditorService);
}