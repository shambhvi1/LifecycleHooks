import { AfterContentChecked, AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked {
// isChild= false;
  isChild= true;
  myName="";

  constructor(){
    console.log("parent constructor is called");
  }
  ngOnInit(): void {
    console.log("parent onInit is called");
  }
  ngOnChanges(): void{
    console.log("parent onChanges is called");
  }
  toggleChild() {
    this.isChild=!this.isChild;
    }
    ngDoCheck(){
      console.log("parent DoCheck is called");
  
    }
    ngAfterContentInit(): void {
      console.log("Parent AfterContentInit is called");
      
    }
    ngAfterContentChecked(): void {
      console.log("Parent AfterContentChecked is called");
      
    }

}
