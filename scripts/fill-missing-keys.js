// scripts/fill-missing-keys.js
import { promises as fs } from 'fs'
import path from 'path'

const baseDir     = './locales'               // 语言文件目录
const sourceLang  = 'en'                      // 母版语言
const targetLangs = ['zh', 'ja', 'ru']        // 需要补的语言

function deepMerge(target, source) {
  for (const k in source) {
    if (typeof source[k] === 'object' && source[k] !== null) {
      target[k] = deepMerge(target[k] || {}, source[k])
    } else if (!(k in target)) {
      target[k] = source[k]            // 用英文占位
    }
  }
  return target
}

async function run () {
  const srcObj = JSON.parse(await fs.readFile(path.join(baseDir, `${sourceLang}.json`), 'utf8'))
  for (const lang of targetLangs) {
    const file = path.join(baseDir, `${lang}.json`)
    let tgtObj = {}
    try { tgtObj = JSON.parse(await fs.readFile(file, 'utf8')) } catch {}
    await fs.writeFile(file, JSON.stringify(deepMerge(tgtObj, srcObj), null, 2))
    console.log(`✅  ${lang}.json 已补齐缺失键`)
  }
}
run()
