import {Injectable} from "angular2/core";
import {Http} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WeatherService {
    constructor(private _http:Http) {

    }

    getCities() {
        return this._http.get('http://hackdayapi.azurewebsites.net/api/weather/')
                .map(res => {
                    return JSON.parse(res._body).map(c => c.City);
                })
    }

    getWeather(city) {
        city = encodeURI(city);
        console.log(city);
        return Observable.interval(2e3)
                .mergeMap(() => this._http.get('http://hackdayapi.azurewebsites.net/api/weather/city/' + city))
                .map(res => res.json());
    }
}