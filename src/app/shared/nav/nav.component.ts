import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

	constructor(
		private store: StoreService
	) {

	}

	ngOnInit(): void {

	}

	changeStatusMenu() {
		this.store.changeMenu();
	}
}
