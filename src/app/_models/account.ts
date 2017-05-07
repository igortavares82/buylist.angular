export class Account {

    public id: string;
    public name: string;
    public birth: Date;
    public email: string;
    
    getFormatedBirth(): string { return `${this.birth.getDate()}/${this.birth.getMonth()}/${this.birth.getFullYear()}`; }

}