import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import shebang from 'rollup-plugin-shebang';

export default {
    input: 'src/index.ts',
    external: ['path', 'fs', 'util', 'yargs', 'chalk', 'find', 'dotenv', 'babel-polyfill'],
    output: {
        file: 'bin/react-devcli.js',
        format: 'cjs',
        name: 'react-devcli'
    },
    plugins: [
        shebang(),
        typescript(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ],
    onwarn(warning) {
        if (warning.code === 'THIS_IS_UNDEFINED') {
            return;
        }

        console.warn(warning.message);
    }
};
