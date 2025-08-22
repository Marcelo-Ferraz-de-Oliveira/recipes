/* 
Service para substituir o environment padrão do Angular
Ele obtém as variáveis de ambiente do objeto global `window` 
A varíavel é definida estáticamente no arquivo public/env.js no formato:

window['env'] = {
    var1: ${var1},
    var2: ${var2},
}

O arquivo é carregado no index.html no <head>:
<script src="env.js"></script>

O arquivo é definido assim para permitir sua substituição com a aplicação já compilada em SPA,
com o objetivo de especificar as variáveis de cada ambiente 
antes da execução do servidor de arquivos estáticos ou do envio para a CDN.
*/ 

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Env {
  public production: boolean = (window as any).env?.production || false;
  public apiBaseUrl: string = (window as any).env?.apiBaseUrl || '';
}
