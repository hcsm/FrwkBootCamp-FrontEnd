export type CadastroType = {
  id: number
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
  especialidade: StacksType | {}
  stackExperiencia: StacksType[] | []
  stackAprender: StacksType[] | []
  foto: userFoto
  ativo: boolean
}

export interface StacksType {
  id?: number
  label: string
  value: string
}

export interface userFoto {
  id: number
  value?: string
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
