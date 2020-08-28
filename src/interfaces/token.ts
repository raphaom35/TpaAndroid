export interface Usuario {
  id: number;
  nome: string;
  email: string;
  cpf: string;
  cnpj: string;
  razao_social: string;
  telefone: string;
  ativo: boolean;
}

export interface Token {
  token: string;
  expire: Date;
  usuario: Usuario[];
}
