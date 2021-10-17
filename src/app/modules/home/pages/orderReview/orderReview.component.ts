import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bill } from 'src/app/shared/models/bill.model';
import { PaymentPlan } from 'src/app/shared/models/paymentPlan.model';
import { Card } from 'src/app/shared/models/card.model';
import { IProjects } from 'src/app/shared/models/projects.model';
import { CardService } from 'src/app/core/services/user_services/card.service';
import { ProjectsService } from 'src/app/core/services/user_services/projects.service';
import { PaymentPlanService } from 'src/app/core/services/user_services/paymentPlan.service';
import { BillService } from 'src/app/core/services/user_services/bill.service';

@Component({
  selector: 'app-orderReview',
  templateUrl: './orderReview.component.html',
  styleUrls: ['./orderReview.component.css'],
})
export class OrderReviewComponent implements OnInit {
  bill: Bill;
  paymentplan: PaymentPlan;
  card: Card;
  project: IProjects;
  userId: number = parseInt(localStorage.getItem('userId'));
  projectid = this.activatedRoute.snapshot.params.id;
  paymentid = this.activatedRoute.snapshot.params.pid;
  cardid = this.activatedRoute.snapshot.params.cid;
  billid = this.activatedRoute.snapshot.params.bid;
  constructor(
    private service: CardService,
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService,
    private paymentPlanService: PaymentPlanService,
    private billService: BillService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log(this.projectid);
    console.log(this.paymentid);
    console.log(this.cardid);
    console.log(this.billid);
    this.loadcard();
    this.loadpaymentplan();
    this.loadproject();
  }

  loadcard() {
    this.service.getCard(this.userId, this.cardid).subscribe(
      (data) => {
        this.card = data;
        console.log('CARD: ' + this.card);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  loadpaymentplan() {
    const id = this.activatedRoute.snapshot.params.id;
    this.paymentPlanService.getPaymentPlan(this.paymentid).subscribe((data) => {
      this.paymentplan = data;
      console.log('PLAN: ' + this.paymentplan);
    });
  }
  loadproject() {
    this.projectsService
      .getProject(this.projectid, this.userId)
      .subscribe((data) => {
        this.project = data;
        console.log('PROJECT: ' + this.project);
      });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      panelClass: 'color-snackbar',
      duration: 5000,
      //  horizontalPosition: this.horizontalPosition,
      //  verticalPosition: this.verticalPosition,
    });
  }
}
