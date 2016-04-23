import {Component, Input} from 'angular2/core';

@Component({
    selector: 'weather-display',
    template: `
        <p *ngIf="weatherData.status">
          {{weatherData.status}}
        </p>
        <div *ngIf="weatherData.ready">
            <h4>
              {{weatherData.city}}        
            </h4>
            <h4>
              {{weatherData.temperature}} &#x2103;
            </h4>
        </div>
    `
})
export class WeatherDisplayComponent {
    @Input() weatherData:string;

    constructor() {
        
    }


}
