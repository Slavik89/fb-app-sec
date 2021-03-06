import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  courses: any[];

  // todo = this.store.collection('todo').valueChanges({ idField: 'id' })

  items: Observable<any[]>;
  constructor(public crudService: CrudService) {
    // this.items = db.collection('names').snapshotChanges();
  }

  ngOnInit() {
    this.crudService.getAllNAmes().subscribe(data =>{
      this.courses = data.map(e => e.payload.doc.data()['1']);
      // this.courses = data;
      console.log(this.courses);
    });
  }

}
