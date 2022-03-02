import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight.directive/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight.directive/better-highlight.directive';
import { BetterHighlight2Directive } from './better-highlight2.directive/better-highlight2.directive';
import { BetterHighlight3Directive } from './better-highlight3.directive/better-highlight3.directive';
import { BetterHighlight4Directive } from './better-highlight4.directive/better-highlight4.directive';
import { BetterHighlight5Directive } from './better-highlight5.directive/better-highlight5.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlight2Directive,
    BetterHighlight3Directive,
    BetterHighlight4Directive,
    BetterHighlight5Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
