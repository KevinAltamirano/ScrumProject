import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoSprintPage } from './nuevo-sprint';

@NgModule({
  declarations: [
    NuevoSprintPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoSprintPage),
  ],
})
export class NuevoSprintPageModule {}
