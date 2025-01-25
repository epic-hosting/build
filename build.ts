import { build } from 'bun'

const output = 'dist'

await build({
  entrypoints: ['./index.ts'],
  outdir: output,
})

console.log(`Built assets found in /${output}`)