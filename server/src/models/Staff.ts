export class Staff {
    id: number;
    name: string;
    position: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, position: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.email = email;
        this.phone = phone;
    }
}