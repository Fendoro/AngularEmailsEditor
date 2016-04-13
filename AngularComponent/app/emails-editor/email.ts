module EmailsEditor {
    export class Email {
        private _email: string;
        private _isCorrect: boolean;
        constructor(email: string) {
            this.email = email;
        }

        get email() {
            return this._email;
        }

        set email(value: string) {
            this._email = value;
            this._isCorrect = Helper.checkEmail(value);
        }

        get isCorrect() {
            return this._isCorrect;
        }
    }
}