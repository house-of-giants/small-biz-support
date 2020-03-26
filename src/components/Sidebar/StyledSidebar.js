import styled from 'styled-components'
import { colors, headerFont, sp, fs, bp } from '../../styles/base/variables'

export const StyledSidebar = styled.nav`
	border-top: 2px dashed ${colors.highlight};
	box-sizing: border-box;
	min-height: 100%;
	order: 1;

	@media(${bp.m}) {
		border-top: none;
		border-right: 2px dashed ${colors.highlight};
		order: 0;
		padding-right: ${sp.base};
	}

	& ul {
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		padding: ${sp.xl} 0;
	}

	& li:not(:last-child) {
		padding-bottom: ${sp.base};
	}

	& li {
		& a {
			color: ${colors.text};
			font-family: ${headerFont};
			font-size: ${fs.base};
			text-decoration: none;
			transition: 300ms ease box-shadow;

			@media(${bp.l}) and (min-height: 62.5em) {
				font-size: ${fs.xxxl};
			}

			&:hover,
			&:focus,
			&[aria-current] {
				box-shadow: 0 -0.5rem 0 inset ${colors.buttonBg};
				outline: none;
			}
		}
	}
`