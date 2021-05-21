import { NotafiscalService } from './../../notafiscal.service';
import { NotaFiscal } from './../notafiscal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notafiscal-lista',
  templateUrl: './notafiscal-lista.component.html',
  styleUrls: ['./notafiscal-lista.component.css']
})
export class NotafiscalListaComponent implements OnInit {

  nfes: NotaFiscal[] = [];
  nfeselecionada: NotaFiscal;
  mensagemSucesso: String;

  constructor(
    private service: NotafiscalService
    ) { }

  ngOnInit(): void {
    this.service
        .getNotasFiscais()
        .subscribe(res => {
          this.nfes = res;
        });
  }

  preDelet(nfe: NotaFiscal){
    this.nfeselecionada = nfe;
  }

  deleteNfe() {
    this.service.delete(this.nfeselecionada)
                .subscribe(res => {
                  this.mensagemSucesso = 'Nota excluída com cucesso!';
                  this.ngOnInit();
                });
  }

}
