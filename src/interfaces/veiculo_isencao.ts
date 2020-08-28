export interface Veiculo_isencao {
  veiculos?: VeiculosEntity[] | null;
}
export interface VeiculosEntity {
  placa: string;
  renavam: string;
  tipo_isencao: number;
  data_inicio: string;
  data_fim: string;
  situacao: number;
  tipo_veiculo: number;
  anexo?: string | null;
}

export enum Situacao_vei_isen {
  "Reprovado" = 1,
  "Aprovado" = 2,
  "Aguardando Documentação" = 3,
  "Pendente" = 4,
  "Aguardando aprovação" = 5,
  "Documentação invalida" = 6,
  "Documentação Incompleta" = 7,
  "Aguardando cancelamento" = 8,
  "Cancelado" = 9,
}
