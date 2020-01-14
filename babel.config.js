module.exports = {
  presets: [
    [
      '@babel/env',
      { useBuiltIns: 'usage', corejs: { version: 3, proposal: true } }
    ],
    '@babel/react'
  ],
  plugins: ['@babel/proposal-class-properties']
};
