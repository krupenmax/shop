export interface ClientProductPayload {
	page_number?: number;
	per_page?: number;
	order?: "ASC" | "DESC";
	field?: string;
	search?: string;
}

export interface ProductFilterRequest {
	category: string;
	sub_category: string;
}

export interface ClientProductResponse {
	name?: string;
	partNumber?: string;
	price?: number;
	category?: string;
	subCategory?: string;
	status?: "AVAILABLE" | "ABSENT" | "EXPECTED";
	files: FileDto;
}

export interface FileDto {
	id?: number;
	file?: File;
	fileName?: string;
}

export interface SortObject {
	empty?: boolean;
	sorted?: boolean;
	unsorted?: boolean;
}

export interface PageableObject {
	offset?: number;
	unpaged?: boolean;
	pageNumber?: number;
	pageSize?: number;
}

export interface PageClientProductResponse {
	totalElements?: number;
	totalPages?: number;
	size?: number;
	content?: ClientProductResponse;
	number?: number;
	sort?: SortObject;
	first?: boolean;
	last?: boolean;
	numberOfElements?: number;
	pageable?: PageableObject;
	empty?: boolean;
}
