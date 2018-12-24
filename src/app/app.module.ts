import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ArchiveTodosPage } from '../pages/archive-todos/archive-todos';
import { TodoService } from '../providers/todo-service/todo-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ArchiveTodosPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ArchiveTodosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TodoService
  ]
})
export class AppModule {}
