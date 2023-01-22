import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

	public active:number = 0;

	activeLink(index:number){
		if(this.active !== index){
			this.active = index;
		}else{
			this.active = 0;
		}
	}
}
