import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiKey from '../apiKey';
import { Donation } from 'src/app/shared/models/donation.model';
import { DonationRequest } from 'src/app/shared/models/donationRequest.model';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  constructor(private http: HttpClient) {}
  getAllDonation(userid: number) {
    return this.http.get<Donation[]>(
      `http://localhost:8080/user/${userid}/donation`
    );
  }
  postnewdonation(
    userid: number,
    projectid: number,
    cardid: number,
    donation: DonationRequest
  ) {
    return this.http.post(
      `http://localhost:8080/user/${userid}/projects/${projectid}/donation/${donation}/${cardid}`,
      donation
    );
  }
  getDonation(userid: number) {
    return this.http.get<Donation>(
      `http://localhost:8080/user/${userid}/donation`
    );
  }
}
