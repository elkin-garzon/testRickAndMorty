import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from '../../models/search';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

	public formSearch!: FormGroup;
	public dataSearch: Search = new Search();
	public rows: any[] = [];
	public info: any = {};
	public pages: any[] = [];
	public pageActive: number = 0;


	constructor(
		public formBuilder: FormBuilder,
		public service: RickandmortyService
	) { }

	ngOnInit(): void {
		this.formSearch = this.formBuilder.group({
			name: [this.dataSearch.name, [Validators.required, , Validators.minLength(3)]],
			species: [this.dataSearch.species, [Validators.required, Validators.minLength(3)]],
		});
		this.listDataService(1);
	}

	reset() {
		this.formSearch.reset();
		this.listDataService(1)
	}

	searchResults() {
		this.listDataService(1);
	}

	listDataService(page: number, url?: string) {
		this.pageActive = page;
		this.rows = [];
		this.service.getData(this.formSearch.value, page, url).subscribe((resp: any) => {
			this.rows = resp.results;
			this.info = resp.info;
			this.renderNumber(Number(this.info.next.split('page=')[1]))
		})
	}

	next() {
		this.listDataService(Number(this.info.next.split('page=')[1]))
	}

	prev() {
		this.listDataService(Number(this.info.prev.split('page=')[1]))
	}

	renderNumber(index: number) {
		this.pages = [];
		for (let i = index; i <= index - 1 + 5; i++) {
			this.pages.push(i - 1)
		}
	}

	goPage(page: number) {
		this.listDataService(page);
	}
}
