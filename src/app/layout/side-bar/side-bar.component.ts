import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { NotificationService } from 'src/app/core/http/notification.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/app/core/http/user.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  user: User;
  intervalId: any;
  notifications: Notification[] = [];
  notificationCount: number = 0;
  showNotification: boolean;
  iduser: string;
  logo: string = 'assets/images/logo.JPG';

  constructor(
    private notificationService: NotificationService,
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getimage();
    // this.iduser = localStorage.getItem('userId');
    if (this.iduser != null) {
      this.intervalId = setInterval(() => this.fecthNotifications(), 20000);
      this.fecthNotifications();
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  viewNotification(id: number): void {
    if (this.iduser != null) {
      this.notificationService
        .markSeenNotification(parseInt(this.iduser), id)
        .subscribe((notification) => {
          console.log(notification);
        });
    }
  }
  getNotificationDetails(id: number): void {
    if (this.iduser != null) {
      this.openDialog(id);
      console.log('Notify id clicked: ' + id.toString());
    }
  }
  openDialog(id: number): void {
    // const dialogRef = this.dialog.open(NotificationDetailsComponent, {
    //   width: '700px',
    //   data: {
    //     notificationId: id,
    //   },
    // });
    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('The dialog was closed');
    //   this.viewNotification(id);
    //   this.ngOnInit();
    // });
  }
  fecthNotifications(): void {
    // var iduser = parseInt(localStorage.getItem('userId'));
    // this.notificationCount = 0;
    // this.notificationService
    //   .getUserNotifications(iduser)
    //   .subscribe((notifications) => {
    //     this.notifications = notifications;
    //     this.notifications.forEach((notif) => {
    //       // if (notif.status === 2) {
    //       //   this.notificationCount++;
    //       // }
    //     });
    //   });

    console.log('Notifications fetched');
  }
  getimage() {
    // var iduser = parseInt(localStorage.getItem('userId'));
    // this.userService.getUserDeatails(iduser).subscribe((data) => {
    //   this.user = data;
    // });
  }
  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    alert('Logout');
    console.log(localStorage);
    location.replace('/user/feed');
    this.ngOnInit();
  }
  login() {
    const dialogref = this.dialog.open(LoginComponent, {
      width: '700px',
    });
    dialogref.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
