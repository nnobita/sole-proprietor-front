import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SoleProprietor }  from '../sole-proprietor';
import { SoleProprietorService }  from '../sole-proprietor.service';
import { NoticeService }  from '../notice.service';
import { Notice } from '../notice';

@Component({
  selector: 'app-sole-proprietor-detail',
  templateUrl: './sole-proprietor-detail.component.html',
  styleUrls: ['./sole-proprietor-detail.component.css']
})
export class SoleProprietorDetailComponent implements OnInit {
  owner: SoleProprietor;
  notices: Notice[];

  constructor(
    private route: ActivatedRoute,
    private soleProprietorService: SoleProprietorService,
    private noticeService: NoticeService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOwner();
  }

  getOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.soleProprietorService.getOwner(id)
      .subscribe(owner => this.owner = owner);
    this.getNotices(id);
  }

  getNotices(id: number): void {
    this.noticeService.getNotices(id)
    .subscribe(notices => this.notices = notices);
  }

  save(): void {
    this.owner.status = this.owner.status ? 1 : 0;
    this.soleProprietorService.updateOwner(this.owner)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  addNoticeRecord(msg: string): void {
    msg = msg.trim();
    if (!msg) { return; }
    var notice = new Notice();
    notice.content = msg;
    notice.ownerId = this.owner.id;
    notice.lastUpdate = new Date();
    notice.updatedBy = 'test_user';
    
    this.noticeService.addNotice(notice)
      .subscribe(owner => {
        this.notices.push(notice);
      });
  }

}
