import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class CustomIconService {
	constructor(
		private readonly matIconRegistry: MatIconRegistry,
		private readonly domSanitizer: DomSanitizer
	) {}

	/**
	 * Any custom icons go here
	 */
	public initIcons(): void {
		this.matIconRegistry.addSvgIcon(
			"telegram",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/telegram.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"ringing_phone",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/ringing_phone.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"phone",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/phone.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"lips",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/lips.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"search",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/search.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"cart",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/cart.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"chevron_down",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/chevron_down.svg")
		);
		this.matIconRegistry.addSvgIcon(
			"star",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/star.svg")
		);
	}
}
