import styled from 'styled-components'
import { sp, bp } from '../../styles/base/variables'

export const StyledContent = styled.main`
	font-size: 1.25rem;
	padding: ${sp.base} 0;

	& p:last-child {
		margin-bottom: 0;

		@media(${bp.l}) {
			max-width: 75%;
		}
	}
`