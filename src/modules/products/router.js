export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('./Module.vue'),
    children: [
        {
            path: '',
            component: () => import('./pages/Products.vue')
        },
        {
            path: ':id',
            component: () => import('./pages/ProductDetail.vue')
        }
    ]
  },
]