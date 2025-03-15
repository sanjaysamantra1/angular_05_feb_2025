
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/aboutus"
  },
  {
    "renderMode": 2,
    "route": "/careers"
  },
  {
    "renderMode": 2,
    "route": "/employees"
  },
  {
    "renderMode": 2,
    "route": "/products"
  },
  {
    "renderMode": 2,
    "route": "/users"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5014, hash: 'bd69ae0abff4f94e4123b6bf3f3706907435c40fd5eddca8072a78641942e4dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1069, hash: 'df61b20b28bac090dfd1f9564e0109835bbcdd515c270a75b4fa95e83d0c793f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 12434, hash: '797353fb12e4eab7ba5b1fbae02f86b72c41a8dff25118fdf5b2f7a4d38de010', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'aboutus/index.html': {size: 12445, hash: 'f932a88e06860f21150cc46f2472c1a8bc378b9e8a3b1653fc4bb5d55de7b998', text: () => import('./assets-chunks/aboutus_index_html.mjs').then(m => m.default)},
    'careers/index.html': {size: 12443, hash: '42986e63d464b3e5a0d176b4821275e9d5850bd10f81d8c301aa65c902d7998f', text: () => import('./assets-chunks/careers_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 26476, hash: '10109d7d53da33816c294d2ff6c46a767075fad22cf7f807fd949ac83cb7b351', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12422, hash: 'e956d3827dcf100ee0d170c07e9b7dc45aa24770e0a3750af07e20ad0c939aa7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'users/index.html': {size: 27460, hash: '4fb84974880158697059f996c8f7a23e325de01c23641ef2ff138b75d5b41b7b', text: () => import('./assets-chunks/users_index_html.mjs').then(m => m.default)},
    'employees/index.html': {size: 14567, hash: 'fba5a2db8e13eea6a5971c3352023c54d8ab893575da5656c7f053a7c9fcdcb5', text: () => import('./assets-chunks/employees_index_html.mjs').then(m => m.default)},
    'styles-VQYNWS6H.css': {size: 233071, hash: 'VBDaSHp5Ho0', text: () => import('./assets-chunks/styles-VQYNWS6H_css.mjs').then(m => m.default)}
  },
};
