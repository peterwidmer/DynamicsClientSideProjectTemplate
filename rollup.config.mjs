import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/entities/contact/contact.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [typescript()]
};
