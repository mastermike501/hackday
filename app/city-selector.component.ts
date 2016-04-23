import {Component, Output, EventEmitter} from 'angular2/core';
import {WeatherService} from './weather.service';
import {NgFor} from "angular2/common";

@Component({
    selector: 'city-selector',
    template: `
      <ul *ngFor="#city of cities">
        <li><a href="#" (click)="selectCity(city)">{{city}}</a></li>
      </ul>
    `,
    directives: [NgFor],
    providers: [WeatherService]
})
export class CitySelectorComponent {
    @Output() citySelected = new EventEmitter();
    cities;

    constructor(private _weatherService:WeatherService) {
        this.getCities();
    }

    getCities() {
        this._weatherService.getCities().subscribe(data => {
            this.cities = data;
        });
    }

    selectCity(city) {
        console.log('Selecting city ' + city);
        this.citySelected.emit(city);
    }
}
