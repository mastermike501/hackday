import {Http, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/Rx';

@Injectable()
export class WikipediaService{
    partialApiUrl: string = 'https://en.wikipedia.org/w/api.php?format=json&action=query&redirects=1&prop=extracts&exintro=&explaintext=&titles=';
    headers: Headers;

    constructor(private http: Http) {
        this.headers = new Headers({
            'Origin': 'test',
            'Content-Type': 'application/json; charset=UTF-8'
        });
    }

    getCityExtract(city: string) {
        let apiUrl = this.partialApiUrl + encodeURI(city);

        return this.http.get(apiUrl, {
                    headers: this.headers
                })
                .map(res => res.json())
                .map(res => {
                    let pages = res.query.pages;
                    let keys: string[] = Object.keys(pages);
                    if (keys.length == 1) {
                        let extract: string = pages[keys[0]].extract;
                        return {
                            extract: extract,
                            pageId: keys[0]
                        };
                    } else {
                        return null;
                    }
                });
    }
}