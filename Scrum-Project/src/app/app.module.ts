import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { ManejadorProvider } from '../providers/manejador';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProyectoPage } from '../pages/proyecto/proyecto';
import { Login1Page } from '../pages/login1/login1';
import { TareasaAsignarPage } from '../pages/tareasa-asignar/tareasa-asignar';
import { ProyectoNuevoPage } from '../pages/proyecto-nuevo/proyecto-nuevo';
import { HistoriasUsuariosPage } from '../pages/historias-usuarios/historias-usuarios';
import { VerTareasPage } from '../pages/ver-tareas/ver-tareas';
import { SprintsPage} from '../pages/sprints/sprints';
import { NuevoSprintPage} from '../pages/nuevo-sprint/nuevo-sprint';
import { ViewProjectPage } from '../pages/view-project/view-project';
import { ViewHistPage } from '../pages/view-hist/view-hist';
import { TareasDevPage } from '../pages/tareas-dev/tareas-dev';
import { EstatusTareaPage} from '../pages/estatus-tarea/estatus-tarea';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProyectoPage,
    Login1Page,
    ProyectoNuevoPage,
    HistoriasUsuariosPage,
    TareasaAsignarPage,
    VerTareasPage,
    SprintsPage,
    NuevoSprintPage,
    ViewProjectPage,
    ViewHistPage,
    TareasDevPage,
    EstatusTareaPage
  ],
  imports: [
    HttpClientModule,
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
    VerTareasPage,
    SprintsPage,
    NuevoSprintPage,
    ViewProjectPage,
    ViewHistPage,
    TareasDevPage,
    EstatusTareaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ManejadorProvider
  ]
})
export class AppModule {}
