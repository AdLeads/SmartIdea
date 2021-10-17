import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DonationService } from 'src/app/core/http/donation.service';
import { MediaService } from 'src/app/core/http/media.service';
import { ProjectsService } from 'src/app/core/http/projects.service';
import { TagsService } from 'src/app/core/http/tags.service';
import { Donation } from 'src/app/shared/models/donation.model';
import { Media } from 'src/app/shared/models/media.model';
import { IProjects } from 'src/app/shared/models/projects.model';
import { Tag } from 'src/app/shared/models/tag.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  public events: string[] = [];
  public source: Array<string> = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
  ];
  public data: Array<string>;
  listProjects: IProjects[];
  projectDetails: IProjects[];
  donation: Donation;
  listDonation: Donation[];
  listtag: Tag[];
  clicked = false;
  filterProject = '';
  form: FormGroup;
  busqueda: FormGroup;
  TagControl = new FormControl();
  constructor(
    private service: ProjectsService,
    private mediaService: MediaService,
    private tagservice: TagsService,
    private formbuilder: FormBuilder,
    private donationService: DonationService
  ) {
    this.form = new FormGroup({
      tag: this.TagControl,
    });
  }
  media: Media[];
  ngOnInit(): void {
    this.loadlist();
    this.taglist();
    this.funcxx();
    this.loadDonation();
  }
  loadlist() {
    this.service.getAllProjectsfeed().subscribe((data) => {
      this.listProjects = data;
    });
  }
  taglist() {
    this.tagservice.gettags().subscribe((value) => {
      this.listtag = value;
    });
  }

  viewProject(projectId: number): void {
    const iduser = parseInt(localStorage.getItem('userId'));
    this.projectDetails = this.listProjects.filter(
      (project) => project.projectsId == projectId
    );
    this.service
      .viewProject(iduser, this.projectDetails[0], projectId)
      .subscribe((project) => {
        console.log('View increased in poject with id: ' + projectId);
        console.log(project);
      });
    console.log('VIEW');
  }

  funcxx(): void {
    this.busqueda = this.formbuilder.group({
      search: [''],
    });
  }
  sercher(): void {
    const iduser = parseInt(localStorage.getItem('userId'));
    if (this.busqueda.valid) {
      console.log(this.busqueda.value.search);
      this.service
        .getProjecssherche(this.busqueda.value.search.trim(), iduser)
        .subscribe((data) => {
          console.log(data);
          if (data.length === 0) {
            window.alert('no hay resultados');
            this.ngOnInit();
          } else {
            this.listProjects = data;
          }
        });
    }
  }
  //var valor = document.getElementById("texto").value;
  updatellsit(tagId: number): void {
    const iduser = parseInt(localStorage.getItem('userId'));
    // getProjecttags(id: number, iduser: number)
    this.service.getProjecttags(tagId, iduser).subscribe((data) => {
      console.log(data);
      if (data.length === 0) {
        window.alert('no hay resultados');
        this.ngOnInit();
      } else {
        this.listProjects = data;
      }
    });
  }
  loadDonation() {}
}
