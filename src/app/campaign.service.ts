import { Injectable } from '@angular/core';
import { Campaign } from './models/campaign.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CampaignService {

  campaigns: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.campaigns = database.list('campaigns'); //this.campaigns: does it have a scope issue with campaign-archive-component.ts > this.campaigns?
  }

  getCampaigns() {
    return this.campaigns;
  }

}
