import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{ pageTitle }}</h1>
    `
})
export class AppComponent {
    pageTitle: string = 'Angular2: Getting Started'
}