import { build } from 'bun'

const output = 'dist'

console.log('Starting a failing build...')

await build({
  entrypoints: ['./missing.ts'],
  outdir: output,
})

console.error('This build will fail!')