export type CadastroType = {
  nome: string;
  email: string;
  inicioEmail: string;
  dominio: string;
  cidade: string;
  cep: string;
  uf: string;
  telefone: string;
  especialidade: string[];
  stacksComExperiencia : string[];
  stacksAprender : string[];
}

export type CepType = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}
