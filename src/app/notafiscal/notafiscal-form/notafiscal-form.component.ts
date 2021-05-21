import { Observable } from 'rxjs';
import { NotafiscalService } from './../../notafiscal.service';
import { Component, OnInit } from '@angular/core';

import { NotaFiscal } from '../notafiscal';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-notafiscal-form',
  templateUrl: './notafiscal-form.component.html',
  styleUrls: ['./notafiscal-form.component.css']
})
export class NotafiscalFormComponent implements OnInit {

  nfe: NotaFiscal;
  success: boolean = false;
  id: number;

  constructor(
    private service: NotafiscalService,
    private activatedRoute: ActivatedRoute
  ) {
    this.nfe = new NotaFiscal();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe(url=> {
      this.id = url['id'];
      if(this.id){
        this.service
        .getNotaFiscalById(this.id)
        .subscribe(res => {
          this.nfe = res;
        })
      }

    })
  }

  onSubmit() {
    if (this.id) {
      this.service
      .update( this.nfe)
      .subscribe(res => {
        this.success = true;
      })
    } else {
      this.service
        .save(this.nfe)
        .subscribe(res => {
          this.success = true;
          this.nfe = res;
          console.log(res);
        }, errorResponse => {
          this.success = false;
        });
    }
  }

}
