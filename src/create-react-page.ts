#!/usr/bin/env node

import fs from 'fs-extra'
import path from 'path'

const args = process.argv.slice(2)
if (args.length !== 1) {
  throw new Error("Need exactly one argument, the page name UpperCamel")
}
const pageName = args[0]


const template = (pageName) => (
`import * as React from 'react'
import ./${pageName}.scss

const ${pageName} = () => {
  return (
    <div>
    </div>
  )
}

export default ${pageName}`
)

const createReactPage = async (pageName, location) => {
  const file = path.resolve(location, pageName)
  await fs.writeFile(`${file}.tsx`, template(pageName))
  await fs.writeFile(`${file}.scss`, template(pageName))
}


async function main() {
  let location = process.cwd()
  const srcDir = path.resolve(process.cwd(), "src")

  if (await fs.exists(srcDir)) {
    location = srcDir
  }
  createReactPage(pageName, process.cwd())
}
main()