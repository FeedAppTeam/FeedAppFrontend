export class SignUpInfo {
    name: string;
    phone: string;
    email: string;
    role: string;
    CityId: number;
    BadgeId: number;
    password: string;
    img: string;
    gender: string;
    constructor(name: string, phone: string, email: string, city: number, password: string, img: string, gender: string) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.role = 'ROLE_USER';
        this.BadgeId = 1;
        this.CityId = city;
        this.img = img;
        this.gender = gender;
    }
}
