export type Produto = {
  id: string;
  nome: string;
  descricao: string;
  imagemUrl: string;
  preco: number;
  disponivel: boolean;
};

export type Categoria = {
  id: string;
  nome: string;
  descricao: string;
  ordemExibicao: number;
  imagemUrl: string;
  ativo: boolean;
  produtos: Produto[];
};

export type Menu = {
  id: string;
  nome: string;
  descricao: string;
  ativo: boolean;
  categorias: Categoria[];
};

export type Usuario = {
  id: string;
  nome: string;
  email: string;
  senha: string;
  cargo: string;
  dataCadastro: string;
};

export type LojaResponse = {
  id: string;
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  imagemUrl: string;
  dataCadastro: string;
  menu: Menu;
  usuarios: Usuario[];
};
