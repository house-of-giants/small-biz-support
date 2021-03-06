import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/Layout'
import Head from '../theme/Head'
import Listings from '../components/Listings/Listings'

export default ({ data }) => (
	<Layout>
		<Head title={`${data.site.siteMetadata.city} Small Biz Support`} titleTemplate="%s" />
		<Listings />
	</Layout>
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