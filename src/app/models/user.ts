import {City} from './city';
import {Badge} from './badge';

export class User {
    name: string;
    phone: string;
    email: string;
    role: string;
    gender: string;
    img: string;
    city: City;
    badge: Badge;

    constructor(name: string, phone: string, email: string, role: string, gender: string, img: string, city: City, badge: Badge ) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.role = role;
        this.badge = badge;
        this.city = city;
        this.img = img;
        this.gender = gender;
    }
}
