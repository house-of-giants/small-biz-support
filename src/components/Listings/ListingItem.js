import React from 'react'
import styled from 'styled-components'
import { sp, fs, colors } from '../../styles/base/variables'

const StyledListingItem = styled.div`
	align-items: center;
	display: grid;
	grid-gap: ${sp.base};
	grid-template-columns: 3fr 1fr 2fr;
	margin-bottom: ${sp.base};
	padding-bottom: ${sp.base};

	&:first-child {
		padding-top: ${sp.base};
	}

	&:not(:last-child) {
		border-bottom: 1px solid ${colors.text};
	}

	& .tag {
		border-radius: 4px;
		border: 1px solid ${colors.text};
		display: inline-block;
		padding: ${sp.xs} ${sp.sm};
	}

	& .options {
		display: grid;
		font-size: ${fs.sm};
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		grid-column-gap: ${sp.base};
		grid-row-gap: ${sp.xs};

		& p {
			margin: 0;
		}
	}
`

const ListingItem = ({ data }) => (
	<StyledListingItem>
		<p className="h5"><strong>{data.Business}</strong></p>
		<div>
			<p className="tag">{data.Business_Type}</p>
		</div>
		<div className="options">
			{data.Gift_Card_URL &&
				<p><a href={data.Gift_Card_URL} target="_blank" rel="noopener noreferrer" className="btn">Buy Gift Cards</a></p>
			}
			{data.Online_Ordering_URL &&
				<p><a href={data.Online_Ordering_URL} target="_blank" rel="noopener noreferrer" className="btn">Order Online</a></p>
			}
			{data.Phone_Number &&
				<p>Call For More Info: {data.Phone_Number}</p>
			}
		</div>
	</StyledListingItem>
)

export default ListingItem