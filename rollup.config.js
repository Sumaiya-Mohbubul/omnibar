import path from 'path';
import typescript from 'rollup-plugin-typescript';

export default {
input: path.resolve(**dirname, 'src', 'index.tsx'),
output: {
exports: 'named',
file: path.resolve(**dirname, 'dist', 'index.js'),
format: 'cjs',
},
plugins: [
typescript({
typescript: require('typescript'),
}),
],
external: ['react'],
};
