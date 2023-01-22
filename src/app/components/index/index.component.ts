import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	statusMenu$ = this.store.changeActionMenu$;

	constructor(
		private store: StoreService
	) {

	}
	ngOnInit(): void {
		this.store.changeMenu();
	}
}
