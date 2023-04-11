import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      { path: 'fullscreen', component: FullScreenPageComponent },
      { path: 'zoom-range', component: ZoomRangePageComponent },
      { path: 'markers', component: MarkersPageComponent },
      { path: 'properties', component: PropertiesPageComponent },
      { path: '**', redirectTo: 'fullscreen' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
