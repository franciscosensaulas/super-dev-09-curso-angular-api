import { inject, Injectable } from '@angular/core';
import { TarefaModel } from '../models/tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Como gerar service: ng g s services\tarefa.service
// Service é responsável pela comunicação com a API de tarefas
@Injectable({
  providedIn: 'root',
})
export class TarefaService {

  // Cliente responsável por fazer a requisição para o back-end (API)
  private readonly http = inject(HttpClient);

  listar(): Observable<TarefaModel[]> {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    // fazer requisição para carregar a lista de tarefas
    return this.http.get<TarefaModel[]>(url);
  }

  cadastrar(tarefa: TarefaModel): Observable<TarefaModel> {
    const url = "https://api.franciscosensaulas.com/api/v1/trabalho/tarefas";

    return this.http.post<TarefaModel>(url, tarefa);
  }

  apagar(id: string): Observable<void>{
    const url = `https://api.franciscosensaulas.com/api/v1/trabalho/tarefas/${id}`;
    // Aqui é void pois o status code da request é 204 No Content
    // (back-end não retorna dados quando é 204)
    return this.http.delete<void>(url);
  }
}
