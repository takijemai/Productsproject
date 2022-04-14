import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { DbService } from '../services/db.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  product: any[]=[];


  constructor(private route: ActivatedRoute, public dbservice: DbService, private afs: AngularFirestore, private afAuth: AngularFireAuth) {
this.afs.collectionGroup('products').get().subscribe((querysnapshot)=> {
  querysnapshot.docs.forEach(doc => {
  this.product.push(doc.data());
    console.log(doc.data());



    });
    });


  }





  ngOnInit() {

    }






































}
