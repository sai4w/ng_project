import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skin } from '../model/skin.model';
import { Category } from './../model/quality.model';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-update-skin',
  templateUrl: './update-skin.component.html',
  styles: ['./update-skin.component.css'],
})
export class UpdateSkinComponent implements OnInit {
  currentSkin: Skin;
  categorys: Category[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getSkin(this.activatedRoute.snapshot.params['id']).subscribe((skin) => {
        this.currentSkin = skin;
      });
      this.service.getCategorys().subscribe((categorys) => { 
        this.categorys = categorys ;
      });
  }

  updateSkin(skin: Skin) {
    this.service.updateSkin(skin).subscribe();

    this.router.navigate(['inventory']);
  }
}
