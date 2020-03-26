import { css } from 'styled-components'

import { colors, bodyFont } from './variables'

export const SiteResets = css`
	body{
		background-color: ${colors.bg};
		color: ${colors.text};
		margin: 0;
		overflow-x: hidden;
		font-family: ${bodyFont};
	}

	html {
		font-size: 87.5%;
	}
`