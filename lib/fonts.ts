/**
 * Font Loader Utility
 *
 * This file loads Google Fonts based on config/fonts.ts
 * It handles all the Next.js font optimization automatically.
 *
 * You should NOT need to modify this file.
 * To change fonts, edit config/fonts.ts instead.
 */

import { fontConfig } from '@/config/fonts'
import {
  Geist,
  Geist_Mono,
  Inter,
  Roboto,
  Poppins,
  Lato,
  Montserrat,
  Playfair_Display,
  Open_Sans,
  Source_Code_Pro,
  JetBrains_Mono,
  Fira_Code,
  Roboto_Mono
} from 'next/font/google'

/**
 * Pre-load all supported fonts at module scope (Next.js requirement)
 * Each font is loaded with a comprehensive range of weights
 */

const geist = Geist({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const openSans = Open_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

const firaCode = Fira_Code({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

/**
 * Font registry - maps font family names to loaded font instances
 */
const fontRegistry = {
  'Geist': geist,
  'Geist Mono': geistMono,
  'Inter': inter,
  'Roboto': roboto,
  'Poppins': poppins,
  'Lato': lato,
  'Montserrat': montserrat,
  'Playfair Display': playfairDisplay,
  'Open Sans': openSans,
  'Source Code Pro': sourceCodePro,
  'JetBrains Mono': jetbrainsMono,
  'Fira Code': firaCode,
  'Roboto Mono': robotoMono,
} as const

type FontFamily = keyof typeof fontRegistry

/**
 * Get the loaded font instance for a given family name
 */
function getFont(family: string) {
  if (family in fontRegistry) {
    return fontRegistry[family as FontFamily]
  }
  throw new Error(
    `Font "${family}" not found in font registry. ` +
    `Available fonts: ${Object.keys(fontRegistry).join(', ')}. ` +
    `To add a new font, update lib/fonts.ts with the import and initialization.`
  )
}

/**
 * Export configured fonts based on config/fonts.ts
 */
export const fonts = {
  heading: getFont(fontConfig.heading.family),
  body: getFont(fontConfig.body.family),
  label: getFont(fontConfig.label.family),
  mono: getFont(fontConfig.mono.family),
}

/**
 * Get combined className string for all font variables
 * Use this in your layout.tsx <body> tag
 */
export function getFontVariables(): string {
  return [
    fonts.heading.variable,
    fonts.body.variable,
    fonts.label.variable,
    fonts.mono.variable,
  ].join(' ')
}

/**
 * CSS fallback stacks for each font variant
 * Used in globals.css
 */
export const fontFallbacks = {
  heading: fontConfig.heading.fallback?.join(', ') || 'system-ui, sans-serif',
  body: fontConfig.body.fallback?.join(', ') || 'system-ui, sans-serif',
  label: fontConfig.label.fallback?.join(', ') || 'system-ui, sans-serif',
  mono: fontConfig.mono.fallback?.join(', ') || 'Courier New, monospace',
}
