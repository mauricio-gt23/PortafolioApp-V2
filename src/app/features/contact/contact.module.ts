import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
   declarations: [ContactComponent],
   imports: [CommonModule, ReactiveFormsModule, ContactRoutingModule],
})
export class ContactModule {}
