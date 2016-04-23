System.register(['angular2/core', './weather.service', "angular2/common"], function(exports_1, context_1) {
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
    var core_1, weather_service_1, common_1;
    var CitySelectorComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CitySelectorComponent = (function () {
                function CitySelectorComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.citySelected = new core_1.EventEmitter();
                    this.getCities();
                }
                CitySelectorComponent.prototype.getCities = function () {
                    var _this = this;
                    this._weatherService.getCities().subscribe(function (data) {
                        _this.cities = data;
                    });
                };
                CitySelectorComponent.prototype.selectCity = function (city) {
                    console.log('Selecting city ' + city);
                    this.citySelected.emit(city);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], CitySelectorComponent.prototype, "citySelected", void 0);
                CitySelectorComponent = __decorate([
                    core_1.Component({
                        selector: 'city-selector',
                        template: "\n      <ul *ngFor=\"#city of cities\">\n        <li><a href=\"#\" (click)=\"selectCity(city)\">{{city}}</a></li>\n      </ul>\n    ",
                        directives: [common_1.NgFor],
                        providers: [weather_service_1.WeatherService]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], CitySelectorComponent);
                return CitySelectorComponent;
            }());
            exports_1("CitySelectorComponent", CitySelectorComponent);
        }
    }
});
//# sourceMappingURL=city-selector.component.js.map