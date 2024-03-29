module.exports = {
  presets: ['next/babel', '@babel/preset-typescript'],
  plugins: [
    'babel-plugin-macros',
    [
      'babel-plugin-styled-components',
      {
        'ssr': true,
        'displayName': true
      }
    ]
  ],
  env: {
    test: {
      plugins: [
        'babel-plugin-macros',
        [
          'babel-plugin-styled-components',
          {
            'ssr': false,
            'displayName': false
          }
        ]
      ]
    }
  }
}
