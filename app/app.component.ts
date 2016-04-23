import {Component} from 'angular2/core';
import {NgFor} from "angular2/common";
import {CitySelectorComponent} from "./city-selector.component";
import {WeatherDisplayComponent} from "./weather-display.component";
import {WeatherService} from './weather.service';
import {WikipediaService} from './wikipedia.service';
import {CityImageService} from './city-image.service';
import {PhotoBackgroundComponent} from "./photo-background.component";


@Component({
    selector: 'app-root',
    template: `
      <photo-background [backgroundImage]="cityImage"></photo-background>
      <div class="container">
        <h3>Hackday Weather</h3>
        <div class="row">
          <div class="col s4">
            <city-selector (citySelected)="onCitySelected($event)"></city-selector>
          </div>          
          <div class="col s8">
            <div class="row">
              <weather-display [weatherData]="weatherData"></weather-display>
            </div>
            <div class="row" *ngIf="weatherData.ready">
              <p>{{cityInformation}}</p>
              <p>
                <a href="http://en.wikipedia.org/?curid={{wikipediaPageId}}">Wikipedia</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `,
    directives: [NgFor, CitySelectorComponent, WeatherDisplayComponent, PhotoBackgroundComponent],
    providers: [WeatherService, WikipediaService, CityImageService]
})
export class AppComponent {
    city:string = 'Test';
    cityImage:string = 'http://www.apiainternational.com.au/wp-content/uploads/2013/12/Apia-International_DNSW.jpg';
    cityInformation;
    wikipediaPageId;
    weatherDataProvider;
    weatherData = {
        status: 'Select a city',
        ready: false,
        city: '',
        temperature: null
    };

    constructor(private _weatherService:WeatherService, private _wikipediaService:WikipediaService, private _cityImageService: CityImageService) {

    }

    onCitySelected(city:string) {
        this.city = city;
        console.log(this.city);
        this.getWeather(city);
        this.getCityInfo(city);
        this.cityImage = this._cityImageService.getCityImageUrl(city);
        console.log(this.cityImage);

    }

    getWeather(city) {
        if (this.weatherDataProvider) {
            this.weatherDataProvider.unsubscribe();
        }

        this.weatherData.ready = false;
        this.weatherData.status = 'Loading weather data for ' + city + '...';
        this.weatherDataProvider = this._weatherService.getWeather(city).subscribe(data => {
            this.weatherData.city = data.City;
            this.weatherData.temperature = data.Temperature;
            this.weatherData.ready = true;
            this.weatherData.status = null;
        });
    }

    getCityInfo(city) {
        this._wikipediaService.getCityExtract(city).subscribe(data => {
            this.cityInformation = data.extract.substr(0, 500) + '...';
            this.wikipediaPageId = data.pageId;
        });
    }
}
