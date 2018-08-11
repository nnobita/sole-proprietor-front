import { Component, OnInit } from '@angular/core';
import { SoleProprietor } from '../sole-proprietor';
import { SoleProprietorService } from '../sole-proprietor.service';

@Component({
  selector: 'app-sole-proprietor-mst',
  templateUrl: './sole-proprietor-mst.component.html',
  styleUrls: ['./sole-proprietor-mst.component.css']
})
export class SoleProprietorMstComponent implements OnInit {
  owners: SoleProprietor[];
  constructor(private soleProprietorService: SoleProprietorService) { }

  ngOnInit() {
    this.getOwners();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.soleProprietorService.addOwner({ name } as SoleProprietor)
      .subscribe(owner => {
        this.owners.push(owner);
      });
  }

  getOwners(): void {
    this.soleProprietorService.getOwners()
    .subscribe(owners => this.owners = owners);
  }

  delete(owner: SoleProprietor): void {
    this.owners = this.owners.filter(o => o !== owner);
    this.soleProprietorService.deleteOwner(owner).subscribe();
  }
}
