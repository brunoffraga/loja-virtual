import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: './produtos/produtos.module#ProdutosModule' },
  { path: 'carrinho', loadChildren: './carrinho/carrinho.module#CarrinhoModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoModule' },
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: "**", component: NaoEncontradoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

