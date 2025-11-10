/* eslint-disable no-console */
import esbuild from 'esbuild';

const ctx = await esbuild.context({
    entryPoints: ['src/Task7/app/index.ts'],
    outdir: 'src/Task7/dist/app.js',
    bundle: true,
    sourcemap: true,
    splitting: true,
    format: 'esm',
    minify: false,
    target: 'es2020',
});

await ctx.watch();

const server = await ctx.serve({ servedir: '.', port: 3000 });
console.log(`Server running at http://localhost:${server.port}`);
