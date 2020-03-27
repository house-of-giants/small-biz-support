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
		city: 'YOUR_CITY_HERE',
		defaultTitle: `%s Small Biz Support`,
		defaultTitleTemplate: "%s | YOUR_CITY_HERE Small Biz Support",
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
						defaultValues: {
							Added_By: "",
							Business: "",
							Business_Type: "",
							Gift_Card_URL: "",
							Online_Ordering_URL: "",
							Phone_Number: ""
						}
					},
				]
			}
		}
	],
}
