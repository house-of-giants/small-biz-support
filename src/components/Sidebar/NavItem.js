import React from 'react'
import { Link } from 'gatsby'

const NavItem = ( { navItem } ) => {
	const { name, slug } = navItem

	return (
		<li>
			<Link to={slug}>
				{name}
			</Link>
		</li>
	)
}

export default NavItem