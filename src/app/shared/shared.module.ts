import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    StarComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    NgbModule,
    MaterialModule,
  ],
})
export class SharedModule { }
