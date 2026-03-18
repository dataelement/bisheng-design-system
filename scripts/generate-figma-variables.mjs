import fs from 'node:fs'

const tokensCssPath = new URL('../src/styles/tokens.css', import.meta.url)
const lightPath = new URL('../public/figma-variables.light.json', import.meta.url)
const darkPath = new URL('../public/figma-variables.dark.json', import.meta.url)
const tokensCss = fs.readFileSync(tokensCssPath, 'utf8')

const semanticAliasMap = {
  surface: {
    base: '{color.gray.0}',
    muted: '{color.gray.50}',
    subtle: '{color.surface.50}',
    hover: '{color.surface.100}',
    selected: '{color.primary.25}',
  },
  text: {
    primary: '{color.gray.800}',
    secondary: '{color.gray.600}',
    tertiary: '{color.gray.400}',
    disabled: '{color.gray.300}',
    inverse: '{color.gray.0}',
    link: '{color.primary.700}',
  },
  border: {
    primary: '{color.gray.200}',
    secondary: '{color.gray.300}',
    focus: '{color.primary.700}',
  },
  fill: {
    primary: '{color.primary.700}',
    hover: '{color.primary.800}',
    active: '{color.primary.900}',
    disabled: '{color.gray.300}',
  },
  action: {
    default: '{color.gray.600}',
    defaultHover: '{color.gray.800}',
    brand: '{color.primary.700}',
    brandHover: '{color.primary.800}',
    disabled: '{color.gray.300}',
  },
}

function hexToDtcgColor(hex) {
  const clean = hex.replace('#', '')
  return {
    colorSpace: 'srgb',
    components: [
      parseInt(clean.slice(0, 2), 16) / 255,
      parseInt(clean.slice(2, 4), 16) / 255,
      parseInt(clean.slice(4, 6), 16) / 255,
    ],
    alpha: 1,
    hex: `#${clean.toUpperCase()}`,
  }
}

function toColorTokens(scale) {
  return Object.fromEntries(
    Object.entries(scale).map(([step, token]) => {
      const entry = {
        $type: 'color',
        $value: hexToDtcgColor(token.value),
      }

      if (token.description) {
        entry.$description = token.description
      }

      return [step, entry]
    })
  )
}

function extractBlock(source, selector) {
  const startIndex = source.indexOf(selector)
  if (startIndex === -1) {
    throw new Error(`Could not find CSS block for ${selector}`)
  }

  const openIndex = source.indexOf('{', startIndex)
  let depth = 0

  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index]
    if (char === '{') depth += 1
    if (char === '}') {
      depth -= 1
      if (depth === 0) {
        return source.slice(openIndex + 1, index)
      }
    }
  }

  throw new Error(`Could not parse CSS block for ${selector}`)
}

function extractColorScales(block) {
  const colors = {}
  const pattern = /--color-([a-z]+)-([0-9]+):\s*(#[0-9a-fA-F]{6})/g
  let match

  while ((match = pattern.exec(block))) {
    const [, palette, step, hex] = match
    if (!colors[palette]) {
      colors[palette] = {}
    }
    colors[palette][step] = {
      value: hex.toLowerCase(),
      type: 'color',
    }
  }

  if (colors.primary?.['700']) {
    colors.primary['700'].description = 'Brand Primary - BISHENG Blue'
  }

  return colors
}

function toSemanticTokens(aliasMap) {
  return Object.fromEntries(
    Object.entries(aliasMap).map(([groupName, group]) => [
      groupName,
      Object.fromEntries(
        Object.entries(group).map(([tokenName, alias]) => [
          tokenName,
          {
            $type: 'color',
            $value: alias,
          },
        ])
      ),
    ])
  )
}

function createVariablesFile(colors) {
  return {
    color: {
      primary: toColorTokens(colors.primary),
      purple: toColorTokens(colors.purple),
      success: toColorTokens(colors.success),
      warning: toColorTokens(colors.warning),
      danger: toColorTokens(colors.danger),
      gray: toColorTokens(colors.gray),
      surface: toColorTokens(colors.surface),
    },
    semantic: toSemanticTokens(semanticAliasMap),
  }
}

const lightColors = extractColorScales(extractBlock(tokensCss, ':root'))
const darkColors = extractColorScales(extractBlock(tokensCss, '.dark'))

fs.writeFileSync(lightPath, JSON.stringify(createVariablesFile(lightColors), null, 2) + '\n')
fs.writeFileSync(darkPath, JSON.stringify(createVariablesFile(darkColors), null, 2) + '\n')
