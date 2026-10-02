import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IprodutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private itensCarrinho: IprodutoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoServise: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoServise.obtemCarrinho();
    this.calcularTotal()
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev,curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  removeProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoServise.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  comprar() {
    alert("Parabéns, você finalizou a sua compra!");
    this.router.navigate(["produto"]);
  }

}
