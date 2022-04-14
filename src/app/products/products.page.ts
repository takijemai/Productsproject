import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
 items: Array<any>;
  constructor(public loadingCtrl: LoadingController, private authService: AuthService, private router: Router,
    private route: ActivatedRoute, public dbservice: DbService,private alertCtrl: AlertController) { }

  ngOnInit() {
  if (this.route && this.route.data) {
    this.getData();

  }
  }
  async getData(){
  const loading = await this.loadingCtrl.create({
  message: 'Por favor, espere...'
  });
  this.presentLoading(loading);
    this.route.data.subscribe(routeData => {
      routeData['data'].subscribe(data => {
        loading.dismiss();
        this.items = data;
      });
    });
  }
  async presentLoading(loading) {
  return await loading.present();
  }
  logout(){
  this.router.navigate(['/home']);
    this.authService.doLogout().then(res => {
      console.log('User logout');
    }, err => {
      console.log(err);
    });
  }

async delete(id: any){

const alert = await this.alertCtrl.create({
header:'Confirming delete',
mode:'ios',
message:'are you sure to delete',
buttons: [
  {
    text: 'no',
    role:'cancel'
  },
  {
    text: 'yes',
    handler : ()=>{
      console.log('delete product');
      this.dbservice.deleteProduct(id).then(res=>{
        console.log('Porductos eleminado');
      });
      this.items.splice(id,1);
  }


  }
]
});

await alert.present();
}













}
