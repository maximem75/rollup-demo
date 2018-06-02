import clear from 'rollup-plugin-clear';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';

export default {
  entry: 'src/index.js',
  output: {
    name: 'index',
    file: 'dist/index.js',
    format: 'iife',
  },
  watch: {
    include: ['src/**', 'test/**']
  },
  plugins: [
    clear({ targets: ['dist'] }),
    css({ output: 'dist/style.css' }),
    cjs(),
    resolve(),
    babel({
      presets: [['env', { modules: false } ]],
      plugins: ['external-helpers']
    }),
    obfuscatorPlugin({
      compact: true
    })
  ]
}