export class JwtResponse {
    accessToken: string;
    tokenType = 'Bearer';
    phone: string;
    name: string;
    img: string;
    authorities: string[];

    constructor(phone: string, authorities: string[], name: string, img: string, accessToken: string) {
        this.phone = phone;
        this.name = name;
        this.authorities = authorities;
        this.accessToken = accessToken;
    }
}
