import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { AlertComponent } from "./alert/alert.component";

NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        // AlertComponent,
        // LoadingSpinnerComponent,
        // PlaceholderDirective,
        // DropdownDirective,
        // CommonModule
    ],
   
})
export class SharedModule{}