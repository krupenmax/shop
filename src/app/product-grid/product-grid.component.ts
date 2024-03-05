import { NgFor } from "@angular/common";
import {
	ChangeDetectionStrategy,
	Component,
	DestroyRef,
	OnChanges,
	OnInit,
	SimpleChanges,
	inject,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NavigationEnd, Router } from "@angular/router";
import { ProductFilterRequest } from "../core";
import { BackendService } from "../core/backend.service";

@Component({
	selector: "app-product-grid",
	standalone: true,
	imports: [NgFor, MatPaginatorModule],
	templateUrl: "./product-grid.component.html",
	styleUrl: "./product-grid.component.scss",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGridComponent implements OnInit, OnChanges {
	private readonly router = inject(Router);
	private readonly backendService = inject(BackendService);
	private readonly destroy = inject(DestroyRef);

	public ngOnInit(): void {
		this.getProducts();
		this.router.events.pipe(takeUntilDestroyed(this.destroy)).subscribe((event) => {
			if (event instanceof NavigationEnd) this.getProducts();
		});
	}

	public getProducts(): void {
		const route = this.router.url.split("/");
		const body: ProductFilterRequest = {
			category: this.mapToSnakeCase(route[2]),
			sub_category: this.mapToSnakeCase(route[3]) || "",
		};
		this.backendService.clientProduct
			.get$(body)
			.pipe(takeUntilDestroyed(this.destroy))
			.subscribe((res) => {
				console.log(res);
			});
	}

	public ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}

	private mapToSnakeCase(value: string): string {
		if (!value) return "";
		return value.toLowerCase().replace("-", "_");
	}
}
