import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit, AfterContentChecked {
  @Input() myName='';

  @ContentChild('contentProjection') projectedContent: any;
  counter= 0;
  interval: any;
  
  constructor(){
    console.log(" child constructor is called");
   
  }
  
 
  ngOnInit(): void {
    console.log("child onInit is called");
    console.log("on init:" ,this.projectedContent);
    // this.interval=setInterval(() => {
    //   this.counter=this.counter+1;
    //   console.log(this.counter);
    // },1000);
  }
  ngOnDestroy(): void {
    // clearInterval(this.interval);
     console.log("child onDestroy is called");
    
  }
  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes);
    console.log("child onChanges is called");
    console.log("child on changes:" ,this.projectedContent);
  }

  ngDoCheck(){
    console.log("child DoCheck is called");
    console.log(" child Docheck:" ,this.projectedContent);

  }
  ngAfterContentInit(): void {
    console.log("child AfterContentInit is called");
    console.log(" child AfterContentInit:" ,this.projectedContent);
  }
  ngAfterContentChecked(): void {
    console.log("child AfterContentChecked is called");
    console.log(" Child AfterContentChecked:" ,this.projectedContent);
  }
}
