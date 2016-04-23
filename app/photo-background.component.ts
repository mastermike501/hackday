import {Component, Input} from 'angular2/core';

@Component({
    selector: 'photo-background',
    template: `
      <div class="photo" id="photo"></div>
    `,
    styles: [`
      .photo {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #c0c0c0;
        z-index: -10;
        margin-top: -20px;
        opacity: 0.3;
        background-size: cover;
      }
    `]
})
export class PhotoBackgroundComponent {
    @Input() backgroundImage:string;
    currentBackgroundImage:string;

    constructor() {
    }

    ngAfterContentInit() {
        setInterval(() => {
            this.setPhoto();
            console.log('Set background image.');
        }, 1e3)
    }
    
    setPhoto() {
        if (this.currentBackgroundImage === this.backgroundImage) {
            return;
        }

        let photo = document.getElementById("photo");
        photo.style.backgroundImage = 'url(' + this.backgroundImage + ')';
        this.currentBackgroundImage = this.backgroundImage;
    }
}