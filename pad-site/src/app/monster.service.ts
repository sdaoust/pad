import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of         } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

import { Monster } from './monster';

@Injectable()
export class MonsterService 
{
	private url = "http://localhost:7555/monster";

	constructor(private http: HttpClient) {}

	getMonsters(): Observable<Monster[]>
	{
		return this.http.get(this.url)
			.map((response: any) => {
				var monsters: Monster[] = [];
				response.monsters.forEach(function(monsterJson) {
					monsters.push({
						id : monsterJson.id,
						name : monsterJson.name
					});
				});
				return monsters;
			});
	}

}