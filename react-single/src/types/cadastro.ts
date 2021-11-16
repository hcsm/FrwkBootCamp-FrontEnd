export type CadastroType = {
  professionalId: string
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
  foto: UserFoto
  ativo: boolean
}
export interface UserType extends CadastroType {
  token?: any
  refreshToken?: any
}
export interface StacksType {
  id: string
  label: string
  value: string
  nome: string
}

export interface UserFoto {
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
