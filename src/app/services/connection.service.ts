import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  //public url = 'http://localhost:3000'


  async checkServerConnection(): Promise<void> {
    try {
      const response = await fetch('https://backend-plataforma-frances.onrender.com/'); //link do deploy do Back-end na plataforma render
      if (!response.ok) {
        throw new Error('Erro ao conectar ao servidor');
      }
    } catch (error) {
      console.error('Erro ao verificar conexão com o servidor:', error);
      // Você pode lidar com o erro aqui, como exibir uma mensagem para o usuário
    }
  }
}
