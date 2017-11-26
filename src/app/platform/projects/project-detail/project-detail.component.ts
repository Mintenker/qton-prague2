import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  constructor(private router: Router) {

  }


  redirectToList(): void {
    this.router.navigateByUrl('platform/projects');
  }
}