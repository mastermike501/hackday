System.register(['angular2/core', "angular2/common", "./city-selector.component", "./weather-display.component", './weather.service', './wikipedia.service', './city-image.service', "./photo-background.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, city_selector_component_1, weather_display_component_1, weather_service_1, wikipedia_service_1, city_image_service_1, photo_background_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (city_selector_component_1_1) {
                city_selector_component_1 = city_selector_component_1_1;
            },
            function (weather_display_component_1_1) {
                weather_display_component_1 = weather_display_component_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            },
            function (city_image_service_1_1) {
                city_image_service_1 = city_image_service_1_1;
            },
            function (photo_background_component_1_1) {
                photo_background_component_1 = photo_background_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_weatherService, _wikipediaService, _cityImageService) {
                    this._weatherService = _weatherService;
                    this._wikipediaService = _wikipediaService;
                    this._cityImageService = _cityImageService;
                    this.city = 'Test';
                    this.cityImage = 'http://www.apiainternational.com.au/wp-content/uploads/2013/12/Apia-International_DNSW.jpg';
                    this.weatherData = {
                        status: 'Select a city',
                        ready: false,
                        city: '',
                        temperature: null
                    };
                }
                AppComponent.prototype.onCitySelected = function (city) {
                    this.city = city;
                    console.log(this.city);
                    this.getWeather(city);
                    this.getCityInfo(city);
                    this.cityImage = this._cityImageService.getCityImageUrl(city);
                    console.log(this.cityImage);
                };
                AppComponent.prototype.getWeather = function (city) {
                    var _this = this;
                    if (this.weatherDataProvider) {
                        this.weatherDataProvider.unsubscribe();
                    }
                    this.weatherData.ready = false;
                    this.weatherData.status = 'Loading weather data for ' + city + '...';
                    this.weatherDataProvider = this._weatherService.getWeather(city).subscribe(function (data) {
                        _this.weatherData.city = data.City;
                        _this.weatherData.temperature = data.Temperature;
                        _this.weatherData.ready = true;
                        _this.weatherData.status = null;
                    });
                };
                AppComponent.prototype.getCityInfo = function (city) {
                    var _this = this;
                    this._wikipediaService.getCityExtract(city).subscribe(function (data) {
                        _this.cityInformation = data.extract.substr(0, 500) + '...';
                        _this.wikipediaPageId = data.pageId;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-root',
                        template: "\n      <photo-background [backgroundImage]=\"cityImage\"></photo-background>\n      <div class=\"container\">\n        <h3>Hackday Weather</h3>\n        <div class=\"row\">\n          <div class=\"col s4\">\n            <city-selector (citySelected)=\"onCitySelected($event)\"></city-selector>\n          </div>          \n          <div class=\"col s8\">\n            <div class=\"row\">\n              <weather-display [weatherData]=\"weatherData\"></weather-display>\n            </div>\n            <div class=\"row\" *ngIf=\"weatherData.ready\">\n              <p>{{cityInformation}}</p>\n              <p>\n                <a href=\"http://en.wikipedia.org/?curid={{wikipediaPageId}}\">Wikipedia</a>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    ",
                        directives: [common_1.NgFor, city_selector_component_1.CitySelectorComponent, weather_display_component_1.WeatherDisplayComponent, photo_background_component_1.PhotoBackgroundComponent],
                        providers: [weather_service_1.WeatherService, wikipedia_service_1.WikipediaService, city_image_service_1.CityImageService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService, wikipedia_service_1.WikipediaService, city_image_service_1.CityImageService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map