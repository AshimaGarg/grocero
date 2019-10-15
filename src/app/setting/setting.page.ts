import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  check1:boolean = true;
  check2:boolean = false;
  check3:boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
