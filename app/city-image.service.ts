import {Injectable} from 'angular2/core';
import {MOCK_IMAGES} from './mock-city-images';

@Injectable()
export class CityImageService{
    getCityImageUrl(city: string) {

        if (MOCK_IMAGES.hasOwnProperty(city)) {
            return MOCK_IMAGES[city];
        } else {
            return 'Image for ${city} has not been implemented.'
        }

    }
}