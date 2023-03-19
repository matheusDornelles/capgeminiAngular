import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  produtos: IProduto[] = produtos;

  constructor(
    private produtosService: ProdutosService
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnit(): void {
    this.produtos = this.produtosService.getAll();
  }
}
