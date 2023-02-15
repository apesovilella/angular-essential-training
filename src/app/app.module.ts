// import ng module & browser module decorator from the core package
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/* 
 * piece of code that will be applied to the class from before
 */

@NgModule({
    // bring in other Angular modules if needed
    imports: [
        BrowserModule
    ],
    // components, declarations & pipes not from the module
    declarations: [
        AppComponent
    ],
    // which components will be the starting point of the bootstrap process (start the app)
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}