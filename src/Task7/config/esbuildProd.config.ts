import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['src/Task7/app/index.ts'],
    outdir: 'src/Task7/dist/app.js',
    bundle: true,
    format: 'esm',
    minify: true,
    sourcemap: true,
    splitting: true,
    target: 'es2020',
    treeShaking: true,
});
