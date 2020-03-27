import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar/Sidebar'

import { StyledContainer } from '../styles/global/layout'
import { colors, sp, bp } from '../styles/base/variables'
import { createGlobalStyle } from 'styled-components'
import { PrefersReducedMotion, SiteResets, Typography } from '../styles/base'

const GlobalStyle = createGlobalStyle`
	${PrefersReducedMotion}
	${SiteResets}
	${Typography}
`

const StyledHr = styled.hr`
	border-top: 2px dashed ${colors.highlight};
	margin: ${sp.xl} 0 0;
`

const StyledContentArea = styled.main`
	display: grid;
	grid-gap: ${sp.base};

	@media(${bp.m}) {
		grid-template-columns: 1fr 3fr;
	}
`

const Layout = ({ data, children }) => (
	<div className='app'>
		<GlobalStyle />
		<StyledContainer>
			<h1>Let's Help Support <span>{data.city}</span> Small Businesses</h1>
			<StyledHr />
			<StyledContentArea>
				<Sidebar />
				{children}
			</StyledContentArea>
		</StyledContainer>
	</div>
)

export default props => (
	<StaticQuery
		query={query}
		render={ data => <Layout data={data.site.siteMetadata} {...props} /> }
	/>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				city
			}
		}
	}
`
