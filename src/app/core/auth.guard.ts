import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const authGuard: CanActivateFn = () => {
	const router = inject(Router);
	const authService = inject(AuthService);
	const isLogged = authService.isLogged;
	if (!isLogged) {
		router.navigateByUrl("");
		return false;
	}
	return true;
};
