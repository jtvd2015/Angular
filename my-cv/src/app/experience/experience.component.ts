import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

jobs: any[] = [
  {
	company: 'CDK GLOBAL, NORWOOD, OH',
	title: 'SERVICE CLIENT TECHNICAL ANALYST II',
	dates: 'JULY 2016-JANUARY 2018',
  description: '	Diagnosed and resolved a range of software issues in the CDK Drive Application, hardware issues regarding CDK-Installed printers, and DNS Server connectivity issues to the Application. Excelled in asking probing questions to researching, analyzing, and rectifying problems.'  
  },
  {
  company: 'TRIBAL VIBE DEVELOPMENT, WALTON, KY',
  title: 'WEB DEVELOPER',
  dates: 'JUNE 2015-JANUARY 2017',
  description: 'Portfolio: https://tribalvibedev.com/portfolio/'
  },
  {
  company: 'CENGAGE LEARNING, INDEPENDENCE, KY',
  title: 'CUSTOMER TECHNICAL SUPPORT REPRESENTATIVE',
  dates: 'JUNE 2014-JULY 2016',
  description: '	Provided Tier II and Tier III level end user support for Gale and National Geographic digital products. Support included informing Instructors of various product features, as well as, analyzing issues regarding software functionality and rectifying problems.'
  }
]

  constructor() { }

  ngOnInit() {
  }

}
