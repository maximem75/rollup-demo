import clear from 'rollup-plugin-clear';
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import obfuscatorPlugin from 'rollup-plugin-javascript-obfuscator';

export default {
  entry: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
  },
  watch: {
    include: ['src/**', 'test/**']
  },
  plugins: [
    clear({ targets: ['dist'] }),
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