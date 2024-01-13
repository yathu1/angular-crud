import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  name:string="";
  pendingItems:string[]=[];
  completedItems:string[]=[];
  editIndex:number|null = null;

  save(){
    if(this.editIndex!=null){
  this.pendingItems= this.pendingItems.map((val,i)=>{
          if(this.editIndex==i){
            val=this.name;
          }
          return val;
        })
    }else{
      this.pendingItems.push(this.name);
      
    }
   this.editIndex=null;
   this.name="";
  }

  edit(editIndex:number){
    this.editIndex=editIndex;
   const editData = this.pendingItems.find((val,i)=>{return editIndex==i});
   if(editData)
   this.name=editData;
  }

  delete(deleteIndex:number){
    this.pendingItems= this.pendingItems.filter((val,i)=>{return deleteIndex!=i});
  }

  complete(completeIndex:number){
   
    const completedData = this.pendingItems.find((val,i)=>{return completeIndex==i});
    this.pendingItems= this.pendingItems.filter((val,i)=>{return completeIndex!=i});
    if(completedData)
    this.completedItems.push(completedData);
  }
}
