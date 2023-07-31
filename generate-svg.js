const { transform } = require('@svgr/core')
const path = require('path')
const fs = require('fs-extra')
const Case = require('case')
const chalk = require('chalk')

const options = {
  icon: true,
  native: true,
  typescript: false,
  replaceAttrValues: { '#000': '{props.color}' },
  svgProps: {
    width: '{props.size}',
    height: '{props.size}',
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
}

const svgsDir = path.join(__dirname, 'node_modules/ionicons/dist/svg')

const componentNameMap = {
  Circle: 'CircleIcon',
  Path: 'PathIcon',
  Infinity: 'InfinityIcon',
}

const fileNameMap = {
  Infinity: 'InfinityIcon',
}

const srcDir = path.join(__dirname, 'src')

const generateIcon = (icon) => {
  const filePath = path.join(svgsDir, `${icon}.svg`)

  const svgCode = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  })

  const componentName = Case.pascal(
    filePath.replace(/^.*\//, '').replace(/\.svg$/, '')
  )

  // console.log(componentName)
  // console.log(svgCode)
  transform(svgCode, options, {
    componentName: componentNameMap[componentName] || componentName,
  }).then((tsCode) => {
    // console.log(tsCode)
    tsCode = tsCode
      .replace('SvgProps, ', '')
      .replace('function', "import { IconProps } from '../lib'\n\nfunction")
      .replace('props: SvgProps', 'props: IconProps')
      .replace(' xmlns="http://www.w3.org/2000/svg"', '')

    // fix icons with small dots (#4)
    if (tsCode.match(/<Circle.*? \/>/g)) {
      console.log(' fix icons with small dots' + componentName)

      const circles = tsCode
        .match(/<Circle.*? \/>/g)
        .filter((circle) => !circle.includes('props.color'))

      circles.forEach((circle) => {
        tsCode = tsCode.replace(
          circle,
          circle.replace(/\s\/>$/, ' fill={props.color} />')
        )
      })
    }

    const outDir = path.join(srcDir, 'all')
    const fileName = `${fileNameMap[componentName] || componentName}.tsx`

    fs.ensureDirSync(outDir)

    fs.writeFileSync(
      path.join(outDir, fileName),
      `/* GENERATED FILE */\n${tsCode}`
    )

    console.log(
      `Generated icon ${chalk.blue(icon)} to ${chalk.blue(
        path.join(outDir, fileName).replace(`${process.cwd()}/`, '')
      )}`
    )
  })
}

const getIconList = () => {
  // return ['accessibility']
  const files = fs
    .readdirSync(path.join(svgsDir))
    .filter((file) => file.endsWith('.svg'))
    .map((file) =>
      file
        .replace(/\.svg$/, '')
        .replace('-outline', '')
        .replace('-sharp', '')
    )

  return files
}

const generateMainIconFile = (icon) => {
  const component = Case.pascal(icon)
  const componentFileName = fileNameMap[component] || component
  const componentName = componentNameMap[component] || component
  const componentCode = `import React, { useContext, useMemo } from 'react'
import { IconProps, IconContext } from '../lib'

import IconComponent from '../all/${componentFileName}'

function ${componentName}({ color, size, style, mirrored }: IconProps) {
  const {
    color: contextColor = '#000',
    size: contextSize = 24,
    mirrored: contextMirrored = false,
    style: contextStyle,
  } = useContext(IconContext)

  const mirroredValue = mirrored ?? contextMirrored

  return (
    <IconComponent
      color={color ?? contextColor}
      size={size ?? contextSize}
      style={[
        contextStyle,
        style,
        {
          ...(mirroredValue && {
            transform: [{ scaleX: -1 }],
          }),
        },
      ]}
    />
  )
}

export default ${componentName}
  `

  const filePath = path.join(__dirname, 'src/icons', `${component}.tsx`)

  fs.ensureDirSync(path.join(__dirname, 'src/icons'))

  // console.log(template)
  fs.writeFileSync(filePath, `/* GENERATED FILE */\n${componentCode}`)
}

const cleanFolder = () => {
  try {
    fs.rmSync(srcDir + '/icons', { recursive: true, force: true })
  } catch (error) {}
  try {
    fs.rmSync(srcDir + '/all', { recursive: true, force: true })
  } catch (error) {}
}

const generateAllIcons = () => {
  const icons = getIconList()

  console.log(`There are ${chalk.blue(icons.length)} icons`)

  icons.forEach((icon) => generateIcon(icon))
}

const generateAllIconMainFile = () => {
  const icons = getIconList()

  icons.forEach((icon) => generateMainIconFile(icon))
}

const generateIndexFile = () => {
  const icons = getIconList()
  const iconsExport = icons
    .map(
      (icon) =>
        `export { default as ${Case.pascal(icon)} } from "./icons/${Case.pascal(
          icon
        )}";`
    )
    .join('\n')

  const fileContent = `/* GENERATED FILE */
export { Icon, IconProps, IconContext } from './lib'

${iconsExport}
  `

  fs.writeFileSync(path.join(__dirname, 'src/index.tsx'), fileContent)
}

cleanFolder()
generateAllIcons()
generateAllIconMainFile()
generateIndexFile()
