import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './landing/landing.component';
import { PlatformComponent } from './platform/platform.component';
import { DashboardComponent } from './platform/dashboard/dashboard.component';
import { IssuesComponent } from './platform/issues/issues.component';
import { ProjectsComponent } from './platform/projects/projects.component';
import { SolutionsComponent } from './platform/solutions/solutions.component';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatListModule, MatSidenavModule,
  MatToolbarModule, MatExpansionModule, MatSelectModule,
} from '@angular/material';
import { SolutionDetailComponent } from './platform/solutions/solution-detail/solution-detail.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ProjectDetailComponent } from './platform/projects/project-detail/project-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PlatformComponent,
    DashboardComponent,
    IssuesComponent,
    ProjectsComponent,
    SolutionsComponent,
    SolutionDetailComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
