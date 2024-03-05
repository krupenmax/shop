import { NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { Router, RouterModule } from "@angular/router";
import { BackendService } from "../core/backend.service";
import { ProductGridComponent } from "../product-grid/product-grid.component";

@Component({
	selector: "app-main-page",
	standalone: true,
	imports: [
		MatIconModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule,
		RouterModule,
		NgIf,
		NgFor,
		ProductGridComponent,
	],
	templateUrl: "./main-page.component.html",
	styleUrl: "./main-page.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {
	public activeTab = "";

	private readonly router = inject(Router);
	private readonly backend = inject(BackendService);

	constructor() {}

	public get isMainPage(): boolean {
		return this.router.url === "/";
	}

	public resetTab(): void {
		this.activeTab = "";
	}
}
