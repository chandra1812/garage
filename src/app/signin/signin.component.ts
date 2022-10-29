import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
document:any
  constructor(@Inject(DOCUMENT) document:Document) {this.document=document}

  ngOnInit(): void {}
  typww(){
    if(this.document.getElementById('name').value==''&& this.document.getElementById('password').value==''){
      alert('error')
    }else{
      alert('login sucess')
    }
  }
}
