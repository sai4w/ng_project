import { Category } from './../model/quality.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skin } from '../model/skin.model';
import { AuthService } from '../services/auth.service';
import { ServiceService } from '../services/service.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  skins: Skin[];
  categorys: Category[];
  faTimes = faTimes;
  faEdit = faEdit;
  link1: string = 'https://cs.money/img/main/slider-items/cs/';
  link2: string = '.png';
  count: number[];

  constructor(
    private service: ServiceService,
    private router: Router,
    public authService: AuthService
  ) {}

  deleteSkin(id: number) {
    if (
      Swal.fire({
        icon: 'question',
        title: 'Delete...',
        text: 'Are you sure about that ?',
      })
    ) {
      this.service.deleteSkin(id).subscribe();
      this.router.navigate(['inventory']).then (() => {
        window.location.reload();
      });
    }
  }

  ngOnInit(): void {
    //this.isAdmin = localStorage.getItem('isAdmin') == 'true';
    this.service.getSkins().subscribe((skins) => {
      this.skins = skins;
    });
    this.service
      .getCategorys()
      .subscribe((catagorys) => (this.categorys = catagorys));
  }
}
