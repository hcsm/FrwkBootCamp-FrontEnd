import { type } from 'os'

export type CadastroType = {
  nome: string
  senha: string
  confirmarSenha: string
  email: string
  inicioEmail: string
  dominio: string
  cidade: string
  cep: string
  uf: string
  telefone: string
  especialidade: string[]
  stackExperiencia: string[]
  stackAprender: string[]
  foto: any
}

export type CepType = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}
