# simple_api_doc
 inspired by swagger, but with less functionality. It just documents the end points.


## how to use?
just add one more object to the array of routes objects. 
And change the title and subtitle of the documentation.
```js
export const title = {
  primary: 'API | title',
  secondary: 'sub-title'
};

export const routes = [
  {
    method: 'get',
    route: '/find/user/{id}',
    comment: 'route comment'
  },
  {
    method: 'post',
    route: '/create/user',
    comment: 'route comment'
  },
  {
    method: 'put',
    route: '/create/user/{id}',
    comment: 'route comment'
  },
  {
    method: 'delete',
    route: '/delete/user/{id}',
    comment: 'route comment'
  },
];
```