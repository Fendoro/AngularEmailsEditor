module EmailsEditor {
    export class EmailsContainer {
        private _emails: Email[];

        constructor() {
            this._emails = [];
        }

        get emails(): Email[] {
            return this._emails;
        }

        private findEmail(email: string): number {
            for (var i = 0, len = this._emails.length; i < len; i++) {
                if (this._emails[i].email === email) {
                    return i;
                }
            }
            return -1;
        }

        addEmail(email: string): void {
            let index = this.findEmail(email);
            if (index === -1) {
                this._emails.push(new Email(email));
            }
        }

        deleteEmail(email: string): void {
            let index = this.findEmail(email);
            if (index > -1) {
                this._emails.splice(index, 1);
            }
        }
    }
}