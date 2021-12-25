import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IProjects } from 'src/app/shared/models/projects.model';
import { Media } from 'src/app/shared/models/media.model';
import { Area } from 'src/app/shared/models/area.model';
import { Tag } from 'src/app/shared/models/tag.model';
import { Skill } from 'src/app/shared/models/skill.model';
import { ReferencesService } from 'src/app/core/http/references.service';
import { MediaService } from 'src/app/core/http/media.service';
import { AreaService } from 'src/app/core/http/area.service';
import { SkillService } from 'src/app/core/http/skill.service';
import { TagsService } from 'src/app/core/http/tags.service';
import { ProjectsService } from 'src/app/core/http/projects.service';

@Component({
  selector: 'app-reference-by-id',
  templateUrl: './reference-by-id.component.html',
  styleUrls: ['./reference-by-id.component.css'],
})
export class ReferenceByIdComponent implements OnInit {
  project: IProjects;
  media: Media[];
  conex: number;
  listArea: Area[];
  listTags: Tag[];
  skills: Skill[];
  projectId: number;
  // userId: number = parseInt(localStorage.getItem('userId'));

  constructor(
    private service: ReferencesService,
    private mediaService: MediaService,
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private serviceSkill: SkillService,
    private tagservise: TagsService,
    private Projetservse: ProjectsService,
    public dialog: MatDialog
  ) {
    this.projectId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.loadproject();
    this.loadmedia();
    this.listarea();
    this.loadSkillList();
    this.listag();
    this.conexion();
  }

  listarea(): void {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.areaService.getarea(id).subscribe((data) => {
      console.log(data);
      this.listArea = data;
    });
    /*.subscribe((data) => {
      this.listProjects = data;
    });*/
  }

  afilarse(idproyect: number, proyect: IProjects): void {
    // const iduser = parseInt(localStorage.getItem('userId'));
    // this.Projetservse.afiliarproyect(idproyect, iduser, proyect).subscribe(
    //   (projects) => {
    //     console.log(projects);
    //   }
    // );
    // window.alert('logrado');
  }
  loadproject(): void {
    const id = this.activatedRoute.snapshot.params.id;
    // this.service.getProject(this.userId, id).subscribe(
    //   (data) => {
    //     this.project = data;
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  loadSkillList(): Skill[] {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.serviceSkill.getSkillsproject(id).subscribe((data) => {
      this.skills = data;
    });
    return this.skills;
  }
  loadmedia(): void {
    const idpr = this.activatedRoute.snapshot.params.id;
    this.mediaService.getmedia(idpr).subscribe((data) => {
      this.media = data;
    });
  }
  // debugBase64(base64URL) {
  //   const win = window.open();
  //   win.document.write(
  //     '<img src="' + base64URL + '" width="500" height="500"></img>'
  //   );
  // }
  conexion(): void {
    const idpr = this.activatedRoute.snapshot.params.id;
    // const iduser = parseInt(localStorage.getItem('userId'));
    // this.Projetservse.yaexiste(idpr, iduser).subscribe((data) => {
    //   this.guardardata(data);
    // });
  }
  guardardata(data: number): void {
    console.log(data);
    this.conex = data;
    console.log(this.conex);
  }
  listag() {
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id);
    this.tagservise.gettagproject(id).subscribe((data) => {
      this.listTags = data;
    });
  }
}
