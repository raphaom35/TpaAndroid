export interface Tariff {
  id: number;
  date_start: string;
  date_end: string;
  description: string;
  urfm: number;
  valor: string;
  valorarredondado: string;
  categorias: string;
  categoria_betha: number;
}

export interface CatAllveiculos {
  tariff: Tariff[];
}
