import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { promise } from 'protractor';
import { __values } from 'tslib';
import { DbService } from '../services/db.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data: any = {};
  idp: any;



  constructor(private route: ActivatedRoute, public dbservice: DbService, private afd: AngularFireDatabase,
  private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.idp = this.route.snapshot.paramMap.get('id');
    this.dbservice.getProduct(this.idp).then(res=>{
      this.data = res;


    });

  }





}
