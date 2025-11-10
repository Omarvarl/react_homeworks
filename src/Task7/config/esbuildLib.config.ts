import esbuild from 'esbuild';

const commonConfig = {
    entryPoints: [
        'src/task7/lib/index.tsx',
        'src/task7/lib/math.ts',
        'src/task7/lib/string.ts',
    ],
    external: ['react', 'lodash'],
    bundle: true,
    target: 'es2020',
};

esbuild.build({
    ...commonConfig,
    outdir: 'src/task7/dist/lib/esm',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
});

esbuild.build({
    ...commonConfig,
    outdir: 'src/task7/dist/lib/cjs',
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
});
