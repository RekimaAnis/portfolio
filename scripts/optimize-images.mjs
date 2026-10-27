import { execFileSync } from 'node:child_process'
import { mkdirSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const directory = fileURLToPath(new URL('../public/image/', import.meta.url))
const outputDirectory = join(directory, 'webp')
const files = readdirSync(directory).filter((name) => /\.png$/i.test(name))
mkdirSync(outputDirectory, { recursive: true })

let originalBytes = 0
let optimizedBytes = 0

for (const file of files) {
  const input = join(directory, file)
  const output = join(outputDirectory, file.replace(/\.png$/i, '.webp'))
  execFileSync('ffmpeg', [
    '-loglevel', 'error', '-y', '-i', input,
    '-c:v', 'libwebp', '-lossless', '1', '-compression_level', '6', output,
  ], { stdio: 'pipe' })
  originalBytes += statSync(input).size
  optimizedBytes += statSync(output).size
}

console.log(JSON.stringify({ images: files.length, originalBytes, optimizedBytes }))
