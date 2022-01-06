import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skin } from '../model/skin.model';
import { Category } from './../model/quality.model';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    categorys: Category[];
    skins: Skin[];
    count: number;
  constructor(private service: ServiceService, private router: Router) {}
    ngOnInit(): void {
        this.service.getCategorys().subscribe((categorys) => this.categorys = categorys);
        this.service.getSkins().subscribe((skins) => this.count = skins.length);
    
    }
}