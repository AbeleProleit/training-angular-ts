import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBoardModule } from './board/task-board/task-board.module';
import { RessourceNotFoundComponent } from './ressource-not-found/ressource-not-found.component';

@NgModule({
  declarations: [AppComponent, RessourceNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, TaskBoardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
