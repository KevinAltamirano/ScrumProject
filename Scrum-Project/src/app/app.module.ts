import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProyectoPage } from '../pages/proyecto/proyecto';
import { Login1Page } from '../pages/login1/login1';
import { TareasaAsignarPage } from '../pages/tareasa-asignar/tareasa-asignar';
import { ProyectoNuevoPage } from '../pages/proyecto-nuevo/proyecto-nuevo';
import { HistoriasUsuariosPage } from '../pages/historias-usuarios/historias-usuarios';
import { CrearTareasPage } from '../pages/crear-tareas/crear-tareas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProyectoPage,
    Login1Page,
    ProyectoNuevoPage,
    HistoriasUsuariosPage,
    TareasaAsignarPage,
    CrearTareasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProyectoPage,
    Login1Page,
    ProyectoNuevoPage,
    HistoriasUsuariosPage,
    TareasaAsignarPage,
    CrearTareasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
