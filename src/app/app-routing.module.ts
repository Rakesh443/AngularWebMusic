import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {path: 'songs', component: SongsComponent},
  {path: 'albums', component: AlbumsComponent},
  // {path: '', redirectTo: '/songs', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
