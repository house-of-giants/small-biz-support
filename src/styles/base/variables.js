export const solitare = '#fef6e4'
export const blue = '#001858'
export const biscay = '#172c66'
export const pink = '#f15691'

export const bg = solitare
export const headline = blue
export const text = biscay
export const buttonBg = pink
export const highlight = pink
export const buttonText = blue

export const colors = {
	bg,
	headline,
	text,
	buttonBg,
	highlight,
	buttonText
}

export const headerFont = 'Catamaran, sans-serif;'
export const bodyFont = '"Merriweather Sans", sans-serif'

export const typography = {
	headerFont,
	bodyFont,
}

export const sp = {
	xs: '0.667rem',
	sm: '1rem',
	base: '1.5rem',
	lg: '2.25rem',
	xl: '3.375rem',
	xxl: '5.063rem',
	xxxl: '7.594rem',
}

export const fs = {
	...sp,
	fluid: `calc(${sp.lg} + 6vw)`,
}

export const containerWidth = '85.333em' /* 1024px */

export const container = {
	width: containerWidth,
}

export const bp = {
	xs: 'min-width: 25em' /* 400px */,
	s: 'min-width: 40.625em' /* 650px */,
	m: 'min-width: 53.125em' /* 850px */,
	l: 'min-width: 62.5em' /* 1000px */,
	xl: 'min-width: 72.5em' /* 1160 */,
	xxl: 'min-width: 90em' /* 1440px */,
}