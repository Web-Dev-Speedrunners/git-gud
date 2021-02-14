import React from 'react'
import DonateForm from './form'
import SupportInfo from './supportInfo'

import { makeStyles } from '@material-ui/styles'
import { THEME_COLOR } from '../../constants/theme'
import {
  Container,
  Row,
  Col,
	Card
} from 'react-bootstrap'

const useStyles = makeStyles({
	pageHeader: {
		backgroundColor: THEME_COLOR.Secondary,
		color: THEME_COLOR.Primary,
		marginTop: "24px",
	},
	titles: {
		color: THEME_COLOR.Secondary,
	}
})

const DonatePage = () => {
	const styleClasses = useStyles()

  return (
    <>
		{/* TODO: Add function that will get the current donation amount */}
		<Container className="text-center">
			<h1 className={styleClasses.pageHeader}>Help Save Trees Today</h1>
			<p>Total Donation</p>
			<p>$Donation$</p>
		</Container>
		
		<Container className="mt-4">
			<Row>
				<Col>
					{/* <h3>Donate</h3> */}
					{/* <DonateForm /> */}
					<Card>
						<Card.Header>
							<h3 className={styleClasses.titles}>Donate</h3>
						</Card.Header>
						<Card.Body>
							<DonateForm />
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<h3 className={styleClasses.titles}>Broke? Get Involved!</h3>
					<SupportInfo />
				</Col>
			</Row>
		</Container>
    </>
  )
}

export default DonatePage