import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Search } from '../models/search';

@Injectable({
	providedIn: 'root'
})
export class RickandmortyService {

	constructor(
		private HttpClient: HttpClient
	) {
	}

	getData(dataSearch: Search, page: number, url?: any) {
		let urlAPi = environment.character;
		let params = new HttpParams();
		
		if (dataSearch.name != null) {
			params = params.append('name', dataSearch.name);

		}
		if (dataSearch.species != null) {
			params = params.append('species', dataSearch.species);
		}

		if (url !== null && url !== undefined) {
			urlAPi = url;
		}else{
			params = params.append('page', page);
		}


		return this.HttpClient.get<any>(`${urlAPi}`, { params });
	}
}
