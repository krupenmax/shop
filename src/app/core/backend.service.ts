import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { composeParams } from "./core";
import { ClientProductPayload, ClientProductResponse, PageClientProductResponse, ProductFilterRequest } from ".";

@Injectable({
	providedIn: "root",
})
export class BackendService {
	public readonly clientProduct = {
		get$: (body?: ProductFilterRequest, params?: ClientProductPayload): Observable<PageClientProductResponse> => {
			return this.http.post<PageClientProductResponse>(`${this.apiUrl}/product/list`, body, {
				params: params && new HttpParams({ fromObject: composeParams(params) }),
			});
		},

		getById$: (productId: number): Observable<ClientProductResponse> =>
			this.http.get<ClientProductResponse>(`${this.apiUrl}/product/${productId}`, { withCredentials: true }),
	};

	private readonly apiUrl = "/api";
	private readonly http = inject(HttpClient);

	constructor() {}
}
