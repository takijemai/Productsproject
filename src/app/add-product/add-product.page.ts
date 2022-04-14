import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
formValidation: FormGroup;
  constructor(public router: Router,private formBuilder: FormBuilder,private dbService: DbService,
) { }

  ngOnInit() {
    this.resetFields();
  }
resetFields(){
  this.formValidation = this.formBuilder.group({
  name: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
  image: new FormControl('', Validators.required)
  });
  }
  onSubmit(value){
    const data = {
      name: value.name,
      description: value.description,
      image: value.image
    };
    this.dbService.createProduct(data)
      .then(
        res => {
          this.router.navigate(['/products']);
        }
      );
  }






}
