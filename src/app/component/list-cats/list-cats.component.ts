import { Component } from '@angular/core';
import { CatService } from 'src/app/cat.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.css']
})
export class ListCatsComponent {

  constructor(private catService: CatService){

  }
  
  listCats: any = []
  
  ngOnInit(){
    this.loadCats()
  }

  loadCats(){
    this.catService.getCats().subscribe((data: {}) =>{
      this.listCats = data
    })
}
}
