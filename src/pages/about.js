import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/Layout'
import Head from '../theme/Head'
import { StyledContent } from '../components/Content/StyledContent'

export default ({ data }) => (
	<Layout>
		<Head title={`${data.site.siteMetadata.city} Small Biz Support`} titleTemplate="%s" />
		<StyledContent>
			<p>Local businesses are vulnerable right now in ways that larger chains are not. To preserve the diversity of small businesses enjoyed in your neighborhood, consider stocking up on gift cards for future purchases if you can. If you can’t, consider writing a glowing Google or Yelp review.</p>
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