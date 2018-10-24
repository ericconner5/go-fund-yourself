export class Campaign {
  public goalMet: boolean = false;

  constructor(public campaignName: string,
              public creatorName: string,
              public overview: string,
              public goal: number,
              public pledgedFunds: number,
              public creatorStory: string,
              public backers: number,
              public campaignStory: string,
              public daysToGo: number = 30
  ){}
}
