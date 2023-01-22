import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

	public active:number = 0;

	constructor(
		private store: StoreService
	) {

	}

	activeLink(index:number){
		if(this.active !== index){
			this.active = index;
		}else{
			this.active = 0;
		}
	}

	changeStatusMenu() {
		this.store.changeMenu();
	}
}
