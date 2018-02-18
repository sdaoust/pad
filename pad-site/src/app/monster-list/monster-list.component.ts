import { Component, OnInit } from '@angular/core';

import { Monster } from '../monster';

import { MonsterService } from '../monster.service';

@Component({
	selector: 'app-monster-list',
	templateUrl: './monster-list.component.html',
	styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit 
{

	monsters: Monster[];

	constructor(private monsterService: MonsterService) {}

	ngOnInit() 
	{
		this.setMonsters();
	}

	setMonsters(): void
	{
		this.monsterService.getMonsters()
			.subscribe(
				(monsters: Monster[]) => this.monsters = monsters
			);
	}

}
