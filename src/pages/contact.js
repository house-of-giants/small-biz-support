import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/Layout'
import Head from '../theme/Head'
import { StyledContent } from '../components/Content/StyledContent'

export default ({ data }) => (
	<Layout>
		<Head title={`${data.site.siteMetadata.city} Small Biz Support`} titleTemplate="%s" />
		<StyledContent>
			<p>Contact us with any question or concern you have. Do you have a business or link we can add? Email us and let us know.</p>
		</StyledContent>
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