import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, MatSidenavModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{

  constructor() {
    inject(ActivatedRoute).data.subscribe(({hero}) => {
      console.log(hero);
    })
    inject(ActivatedRoute).params.subscribe((value: any) => console.log(value))
  }

  ngOnInit() {

  }

}
