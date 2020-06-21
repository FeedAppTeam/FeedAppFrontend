import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { EventComponent } from '../event/event.component';
import { MyModalPage } from '../modals/my-modal/my-modal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  // added MyModalPage to declarations here 
  declarations: [HomePage, EventComponent, MyModalPage],
  // and added MyModalPage to entryComponents
  entryComponents: [MyModalPage]
})
export class HomePageModule {}
