import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StoreService {

	private viewMenu: boolean = true;
	private changeActionMenu = new BehaviorSubject<Boolean>(false);
	changeActionMenu$ = this.changeActionMenu.asObservable();

	constructor() { }

	changeMenu() {
		this.viewMenu = !this.viewMenu;
		this.changeActionMenu.next(this.viewMenu);
	}
}
