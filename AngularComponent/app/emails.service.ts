module App {
    import EmailContainer = EmailsEditor.EmailContainer;
    "use strict";

    export interface IEmailsService {
        generateEmail: (email: EmailContainer) => void;
    }

    export class GenerateEmailsService implements IEmailsService {
        static id = "emailsEditorService";
        static $inject: string[] = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        generateEmail(container: EmailContainer): void {
            this.$http.get("https://randomuser.me/api/", { responseType: "json" }).success((data: any) => {
                container.addEmail(data.results[0].email);
            });
        }
    }

    angular.module("app").service("generateEmailsService", GenerateEmailsService);
}