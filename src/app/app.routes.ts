import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		loadComponent: () => import("./main-page/main-page.component").then((i) => i.MainPageComponent),
	},
	{
		path: "products/::category",
		loadComponent: () => import("./main-page/main-page.component").then((i) => i.MainPageComponent),
	},
	{
		path: "products/::category/::subcategory",
		loadComponent: () => import("./main-page/main-page.component").then((i) => i.MainPageComponent),
	},
	{
		path: "admin",
		canActivate: [authGuard],
		loadComponent: () => import("./admin-panel/admin-panel.component").then((i) => i.AdminPanelComponent),
	},
];
