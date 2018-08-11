import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SoleProprietor }  from '../sole-proprietor';
import { SoleProprietorService }  from '../sole-proprietor.service';

@Component({
  selector: 'app-sole-proprietor-detail',
  templateUrl: './sole-proprietor-detail.component.html',
  styleUrls: ['./sole-proprietor-detail.component.css']
})
export class SoleProprietorDetailComponent implements OnInit {
  owner: SoleProprietor;

  constructor(
    private route: ActivatedRoute,
    private soleProprietorService: SoleProprietorService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOwner();
  }

  getOwner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.soleProprietorService.getOwner(id)
      .subscribe(owner => this.owner = owner);
  }

  save(): void {
    this.soleProprietorService.updateOwner(this.owner)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
