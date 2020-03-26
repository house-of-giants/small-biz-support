import React from 'react'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const Head = ({ title, titleTemplate }) => (
	<StaticQuery
		query={query}
		render={({
			site: {
				siteMetadata: {
					defaultTitle,
					defaultTitleTemplate
				}
			}
			}) => {
				const meta = {
					title: title || defaultTitle,
					titleTemplate: titleTemplate || defaultTitleTemplate,
				}
				return (
					<Helmet title={meta.title} titleTemplate={meta.titleTemplate}>
						<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@900&family=Merriweather+Sans:wght@400;800&display=swap" rel="stylesheet"></link>
					</Helmet>
				)
			}
		}
	/>
)

const query = graphql`
	query SiteMetaQuery {
		site {
			siteMetadata {
				defaultTitle
				defaultTitleTemplate
			}
		}
	}
`

Head.propTypes = {
	title: PropTypes.string,
}

Head.defaultProps = {
	title: null,
}

export default Head