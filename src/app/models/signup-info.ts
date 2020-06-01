export class SignUpInfo {
    name: string;
    phone: string;
    email: string;
    role: string;
    city: string;
    password: string;
    img: string;
    gender: string;
    constructor(name: string, phone: string, email: string, city: string, password: string, img: string, gender: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = 'USER';
        this.city = city;
        this.img = img;
        this.gender = gender;
    }
}
