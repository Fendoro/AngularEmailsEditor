module EmailsEditor {
    export class Helper {
        private static _emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        static checkEmail(email: string): boolean {
            return this._emailRegex.test(email);
        }
    }
}