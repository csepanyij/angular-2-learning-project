import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <div>
            <h1>{{ pageTitle }}</h1>
            <pm-products></pm-products>
        </div>
    `,
    providers: [ProductService,
                HttpModule]
})
export class AppComponent {
    pageTitle: string = 'Angular2: Getting Started'  
}
