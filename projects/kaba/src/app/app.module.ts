import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskBoardModule } from './board/task-board/task-board.module';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TaskBoardModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi(), withInterceptors([])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
