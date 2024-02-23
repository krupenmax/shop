import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor() {}

	public get isLogged(): boolean {
		return false;
	}
}
