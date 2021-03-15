import { NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSliderModule} from '@angular/material/slider';

const MaterialComponents = [MatButtonModule,
                            MatTabsModule,
                            MatToolbarModule,
                            MatIconModule,
                            MatListModule,
                            MatSidenavModule,
                            MatProgressBarModule,
                            MatSliderModule
                          ];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
