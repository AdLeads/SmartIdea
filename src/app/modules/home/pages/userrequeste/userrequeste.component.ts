import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/core/services/user_services/projects.service';
import { UserService } from 'src/app/core/services/user_services/user.service';
import { IProjects } from 'src/app/shared/models/projects.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-userrequeste',
  templateUrl: './userrequeste.component.html',
  styleUrls: ['./userrequeste.component.css'],
})
export class UserrequesteComponent implements OnInit {
  listuser: User[];
  displayedColumns: string[] = ['Nombre', 'Numero', 'Expiracion', 'id_card'];

  constructor(
    private service: UserService,
    private activatedRoute: ActivatedRoute,
    private servi: ProjectsService
  ) {}

  ngOnInit(): void {
    this.loadlist();
  }
  loadlist() {
    const id = this.activatedRoute.snapshot.params.id;
    this.service.getAlluserrequest(id).subscribe((data) => {
      this.listuser = data;
    });
  }
  aceptar(iduser: number, proyect: IProjects): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.servi.aceptuser(id, iduser, proyect).subscribe((projects) => {
      console.log(projects);
    });
    window.alert('logrado');
    this.ngOnInit();
  }
  reject(iduser: number, proyect: IProjects): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.servi.rejectuser(id, iduser, proyect).subscribe((projects) => {
      console.log(projects);
    });
    window.alert('logrado');
  }
}
