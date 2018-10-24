import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Campaign } from '../models/campaign.model';

@Component({
  selector: 'app-campaign-archive',
  templateUrl: './campaign-archive.component.html',
  styleUrls: ['./campaign-archive.component.css'],
  providers: [CampaignService]
})
export class CampaignArchiveComponent implements OnInit {

  campaigns: FirebaseListObservable<any[]>;

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns(); //this.campaigns: does it have a scope issue with campaign.service.ts > this.campaigns?
  }

  // goToCampaignDetail() {
  //
  // }

}
