import esbuild from 'esbuild';

const commonConfig = {
    entryPoints: [
        'src/Task7/lib/index.tsx',
        'src/Task7/lib/math.ts',
        'src/Task7/lib/string.ts',
    ],
    external: ['react', 'lodash'],
    bundle: true,
    target: 'es2020',
};

esbuild.build({
    ...commonConfig,
    outdir: 'src/Task7/dist/lib/esm',
    format: 'esm',
    outExtension: { '.js': '.mjs' },
});

esbuild.build({
    ...commonConfig,
    outdir: 'src/Task7/dist/lib/cjs',
    format: 'cjs',
    outExtension: { '.js': '.cjs' },
});
