import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/Layout'
import Head from '../theme/Head'
import { StyledContent } from '../components/Content/StyledContent'

export default ({ data }) => (
	<Layout>
		<Head title={`${data.site.siteMetadata.city} Small Biz Support`} titleTemplate="%s" />
		<StyledContent>
			<p>Please reach out to the owner of this site with any questions, concerns, or if you'd like a business added. Feel free to submit a business through <a href={data.site.siteMetadata.airtableSubmit} target="_blank" rel="noopener noreferrer">this form</a> as well!</p>
		</StyledContent>
	</Layout>
)

export const query = graphql`
	query {
		site {
			siteMetadata {
				airtableSubmit
				city
			}
		}
	}
`