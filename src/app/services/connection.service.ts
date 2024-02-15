import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  async checkServerConnection(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000');
      if (!response.ok) {
        throw new Error('Erro ao conectar ao servidor');
      }
    } catch (error) {
      console.error('Erro ao verificar conexão com o servidor:', error);
      // Você pode lidar com o erro aqui, como exibir uma mensagem para o usuário
    }
  }
}
