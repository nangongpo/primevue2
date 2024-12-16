const fs = require('fs-extra')
const path = require('path')

const entryDir = 'src/components/'
const outputDir = 'lib/'

function copyDependencies(inFolder, outFolder, subFolder) {
  fs.readdirSync(path.resolve(__dirname, inFolder), { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .forEach(({ name: folderName }) => {
      fs.readdirSync(path.resolve(__dirname, inFolder + folderName)).forEach(
        (file) => {
          if (
            file === 'package.json' ||
            file.endsWith('d.ts') ||
            file.endsWith('vue')
          ) {
            fs.copySync(
              path.resolve(__dirname, inFolder + folderName) + '/' + file,
              outFolder + folderName + '/' + file
            )
          }
        }
      )

      if (subFolder) {
        try {
          fs.readdirSync(
            path.resolve(__dirname, inFolder + folderName + subFolder)
          ).forEach((subFile) => {
            fs.copySync(
              path.resolve(__dirname, inFolder + folderName + subFolder) +
                '/' +
                subFile,
              outFolder + folderName + subFolder + '/' + subFile
            )
          })
        // eslint-disable-next-line no-empty
        } catch (err) {}
      }
    })
}

copyDependencies(entryDir, outputDir, '/images')

fs.copySync(path.resolve(__dirname, entryDir, 'ts-helpers.d.ts'), path.resolve(__dirname, outputDir, 'ts-helpers.d.ts'))
fs.copySync(path.resolve(__dirname, './README.md'), path.resolve(__dirname, outputDir, 'README.md'))
fs.copySync(path.resolve(__dirname, './LICENSE.md'), path.resolve(__dirname, outputDir, 'LICENSE.md'))
