import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../theme/Layout'
import Head from '../theme/Head'
import { StyledContent } from '../components/Content/StyledContent'

export default ({ data }) => (
	<Layout>
		<Head title={`${data.site.siteMetadata.city} Small Biz Support`} titleTemplate="%s" />
		<StyledContent>
			<p>Help support {data.site.siteMetadata.city}'s small businesses by ordering from their online stores, online delivery services, or by calling in an order to take out during these strange times. Doing what we can to help the vibrant community we have thrive, even during times of uncertanty, will help us to maintain what makes our city great. Thank you for your support!</p>
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