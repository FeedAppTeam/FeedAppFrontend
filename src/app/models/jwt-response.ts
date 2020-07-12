export class JwtResponse {
    accessToken: string;
    tokenType = 'Bearer';
    phone: string;
    name: string;
    img: string;
    email: string;
    authorities: string;

    constructor(phone: string, authorities: string, name: string, email: string, img: string, accessToken: string) {
        this.phone = phone;
        this.name = name;
        this.email = email;
        this.authorities = authorities;
        this.accessToken = accessToken;
    }
}
