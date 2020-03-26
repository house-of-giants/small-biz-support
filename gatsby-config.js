/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		city: 'Denver',
		defaultTitle: `%s Small Biz Support`,
		defaultTitleTemplate: "%s | Denver Small Biz Support",
		airtableSubmit: "https://airtable.com/shrnYhzKkorYu4OKm",
		nav: [
			{
				name: 'Listings',
				slug: '/',
			},
			{
				name: 'About',
				slug: '/about',
			},
			{
				name: 'Contact',
				slug: '/contact',
			},
		],
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: true,
				pure: true,
			},
		},
		{
			resolve: `gatsby-source-airtable`,
			options: {
				apiKey: process.env.AIRTABLE_API_KEY,
				concurrency: 5,
				tables: [
					{
						baseId: process.env.AIRTABLE_BASE,
						tableName: `Business List`,
					},
				]
			}
		}
	],
}
