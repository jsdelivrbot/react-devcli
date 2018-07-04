import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import shebang from 'rollup-plugin-shebang';
import tslint from 'rollup-plugin-tslint';

export default {
    input: 'src/index.ts',
    external: ['path', 'fs', 'yargs', 'chalk', 'find', 'dotenv'],
    output: {
        file: 'bin/react-devcli.js',
        format: 'cjs',
        name: 'react-devcli'
    },
    plugins: [
        shebang(),
        tslint(),
        typescript(),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify()
    ]
};
