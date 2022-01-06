import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skin } from '../model/skin.model';
import { Category } from './../model/quality.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-add-skin',
  templateUrl: './add-skin.component.html',
  styleUrls: ['./add-skin.component.css'],
})
export class AddSkinComponent implements OnInit {
  newSkin = new Skin();
  categorys: Category[];
  categoryId: number;

  constructor(private service: ServiceService, private router: Router) {}

  addSkin() {
    this.newSkin.category = this.categoryId;
    console.log(this.newSkin);
    this.service.addSkin(this.newSkin).subscribe();
    this.router.navigate(['inventory']).then(() => {
      window.location.reload();
    });
  }

  ngOnInit(): void {
    this.service.getCategorys().subscribe((categorys) => {
      this.categorys = categorys;
    });
  }
}
