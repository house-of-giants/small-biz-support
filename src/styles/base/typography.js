import { css } from 'styled-components'
import { headerFont, colors, sp, fs, bp } from './variables'

export const Typography = css`
	p {
		color: ${colors.text};
		line-height: 1.5;
		margin-bottom: 1.15rem;
	}

	h1, h2, h3, h4, h5 {
		color: ${colors.headline};
		font-family: ${headerFont};
		font-weight: 900;
		line-height: 0.95;
		margin: 2.75rem 0 1.05rem;

		& span {
			color: ${colors.highlight};
		}
	}

	h1,
	.h1 {
		margin-top: 0;
		font-size: ${fs.fluid};

		@media(${bp.l}) {
			font-size: 7.594rem;
		}
	}

	h2,
	.h2 {
		font-size: 5.063rem;
	}

	h3,
	.h3 {
		font-size: 3.375rem;
	}

	h4,
	.h4 {
		font-size: 2.25rem;
	}

	h5,
	.h5 {
		font-size: 1.5rem;
	}

	small,
	.text_small {
		font-size: 0.667em;
	}

	a {
		color: ${colors.text};
		transition: 300ms ease box-shadow;

		&:hover,
		&:focus {
			outline: none;
		}

		&.btn {
			background-color: ${colors.buttonBg};
			border-radius: 4px;
			box-sizing: border-box;
			color: ${colors.buttonText};
			display: inline-block;
			font-weight: 800;
			padding: ${sp.sm} ${sp.xs};
			text-align: center;
			text-decoration: none;
			transition: color 300ms ease, background-color 300ms ease;
			width: 100%;

			&:hover,
			&:focus {
				background-color: ${colors.buttonText};
				color: ${colors.buttonBg};
			}
		}
	}

	.screen-reader-text {
		clip: rect(1px, 1px, 1px, 1px);
		clip-path: inset(50%);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
`