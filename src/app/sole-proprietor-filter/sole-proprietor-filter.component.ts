import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SoleProprietor } from '../sole-proprietor';
import { SoleProprietorService } from '../sole-proprietor.service';

@Component({
  selector: 'app-sole-proprietor-filter',
  templateUrl: './sole-proprietor-filter.component.html',
  styleUrls: ['./sole-proprietor-filter.component.css']
})
export class SoleProprietorFilterComponent implements OnInit {
  registered: boolean;
  owners: SoleProprietor[];
  constructor(
    private route: ActivatedRoute,
    private soleProprietorService: SoleProprietorService) { }

  ngOnInit() {
    this.filter();
  }

  filter(): void {
    var flag = true;
    if (this.route.snapshot.url.join('') === 'unregistered' ) {
      flag = false;
    }
    this.soleProprietorService.filterOwners(flag)
    .subscribe(owners => this.owners = owners);
    this.registered = flag;
  }

  delete(owner: SoleProprietor): void {
    this.owners = this.owners.filter(o => o !== owner);
    this.soleProprietorService.deleteOwner(owner).subscribe();
  }
}
