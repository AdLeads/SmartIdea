import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { User } from 'src/app/shared/models/user.model';
import { ReferencesService } from 'src/app/core/http/references.service';

@Component({
  selector: 'app-user-in-project',
  templateUrl: './user-in-project.component.html',
  styleUrls: ['./user-in-project.component.css'],
})
export class UserInProjectComponent implements OnInit {
  listuser: User[];
  displayedColumns: string[] = ['User', 'Email', 'Rol', 'Opciones'];
  roles: any[] = ['Owner', 'Member'];
  id = this.activatedRoute.snapshot.params.idproject;
  constructor(
    private referenceServices: ReferencesService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadlistuser();
  }

  loadlistuser() {
    console.log(this.id);
    this.referenceServices.getUserMembers(this.id).subscribe((value) => {
      this.listuser = value;
    });
  }
  rol(rolid: number): string {
    if (rolid === 1) {
      return this.roles[0];
    } else {
      return this.roles[1];
    }
  }
  infouser(userid: number) {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      width: '500px',
      data: {
        userid: userid,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.ngOnInit();
    });
  }
}
