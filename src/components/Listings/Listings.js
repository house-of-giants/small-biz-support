import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import ListingItem from './ListingItem'

const Listings = ({ data }) => (
	<div>
		{data.map( listing => <ListingItem key={listing.node.data.Business} data={listing.node.data} />)}
	</div>
)

export default props => (
	<StaticQuery
		query={query}
		render={ data => <Listings data={data.allAirtable.edges} {...props} /> }
	/>
)

export const query = graphql`
	query AirtableDataQuery {
		allAirtable {
			edges {
				node {
					data {
						Added_By
						Business
						Business_Type
						Gift_Card_URL
						Online_Ordering_URL
						Phone_Number
					}
				}
			}
		}
	}
`