import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { AuthService } from "./core/auth.service";
import { HeaderComponent } from "./header/header.component";
import { CustomIconService } from "./shared/custom-icon.service";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [CommonModule, RouterOutlet, HeaderComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	private readonly authService = inject(AuthService);

	constructor(private readonly customIconService: CustomIconService) {
		this.customIconService.initIcons();
	}

	public get isLogged(): boolean {
		return this.authService.isLogged;
	}
}
