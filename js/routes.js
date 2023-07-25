export const title = {
  primary: 'API | documentação para usuários',
  secondary: 'Documentação completa das rotas da api.'
};

export const routes = [
  {
    method: 'get',
    route: '/find/user/{id}',
    comment: 'Rota que encontra um usuário especifico pelo id.'
  },
  {
    method: 'post',
    route: '/create/user',
    comment: 'Rota para cadastrar um novo usuário.'
  },
  {
    method: 'put',
    route: '/update/user/{id}',
    comment: 'Rota que atualiza um usuário especifico pelo id.'
  },
  {
    method: 'delete',
    route: '/delete/user/{id}',
    comment: 'Rota que deleta um usuário especifico pelo id.'
  }
];

