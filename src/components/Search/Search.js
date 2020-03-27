import React from 'react'
import styled from 'styled-components'
import { sp, colors } from '../../styles/base/variables'

const StyledSearch = styled.div`
	& input {
		background-color: ${colors.bg};
		border: 1px solid ${colors.text};
		border-radius: 3px;
		box-sizing: border-box;
		color: ${colors.text};
		margin: ${sp.base} 0;
		padding: ${sp.sm} ${sp.base};
		width: 100%;
	}
`

const Search = () => {

	const handleSearch = e => {
		const val = e.target.value.toLowerCase()
		const bizEls = document.querySelectorAll('[data-biz]')

		bizEls.forEach( el => {
			const data = el.dataset.biz.toLowerCase()
			if (! data.includes(val)) {
				el.classList.add('hidden')
			} else {
				if( el.classList.contains('hidden') ) {
					el.classList.remove('hidden');
				}
			}
		})
	}

	return (
		<StyledSearch>
			<input type="text" aria-label="Search by business name" placeholder="Search By Business Name" onChange={e => handleSearch(e)} />
		</StyledSearch>
	)
}

export default Search