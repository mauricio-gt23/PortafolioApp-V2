import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
   declarations: [ContactComponent],
   imports: [
      CommonModule,
      ReactiveFormsModule,
      ContactRoutingModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule {}
