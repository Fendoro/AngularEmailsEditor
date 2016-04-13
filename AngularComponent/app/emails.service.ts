module App {
    import EmailContainer = EmailsEditor.EmailsContainer;
    "use strict";

    export interface IEmailsService {
        generateEmail: (email: EmailContainer) => void;
    }

    export class EmailsService implements IEmailsService {
        static id = "emailsService";
        static $inject: string[] = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        generateEmail(container: EmailContainer): void {
            this.$http.get("https://randomuser.me/api/", { responseType: "json" }).success((data: any) => {
                container.addEmail(data.results[0].email);
            });
        }
    }

    angular.module("app").service("emailsService", EmailsService);
}