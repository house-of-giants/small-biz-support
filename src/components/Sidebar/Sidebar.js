import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import { StyledSidebar } from './StyledSidebar'
import NavItem from './NavItem'

const Sidebar = ({ submit, navItems }) => (
	<StyledSidebar>
		<ul>
			{navItems.map( navItem => <NavItem key={navItem.name} navItem={navItem} /> )}
		</ul>
		<p>Don't see a business listed?</p>
		<p><a className="btn" href={submit} target="_blank" rel="noopener noreferrer">Add A Business</a></p>
	</StyledSidebar>
)

export default props => (
	<StaticQuery
		query={query}
		render={ data => <Sidebar submit={data.site.siteMetadata.airtableSubmit} navItems={data.site.siteMetadata.nav} {...props} /> }
	/>
)

const query = graphql`
	query NavItemsQuery {
		site {
			siteMetadata {
				airtableSubmit
				nav {
					name
					slug
				}
			}
		}
	}
`