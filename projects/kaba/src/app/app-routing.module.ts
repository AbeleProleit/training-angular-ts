import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskBoardComponent } from './board/task-board/task-board.component';
import { RessourceNotFoundComponent } from './ressource-not-found/ressource-not-found.component';

const routes: Routes = [
  { path: 'board', component: TaskBoardComponent },
  { path: '', redirectTo: '/board', pathMatch: 'full' },
  { path: '404', component: RessourceNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
