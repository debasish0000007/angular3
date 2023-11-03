import { Component } from "@angular/core";

@Component({
    selector:'app-header',
    template:`<p>My Component Works</p><app-main></app-main>`,
    styles:['p{color:red;}'],
})
export class headerComp{

}