import React from 'react';
import { Col, Row } from 'react-bootstrap'

const HourSelector = (props) => {

    const { availableHours } = props

    const renderDayHours = (day) => Object.keys(availableHours[day]).map(hour => {
        if(availableHours[day][hour]) return <div style={styles.available}>{hour}</div>
        else return <div style={styles.notAvailable}>-</div>
    })

    const renderDaysColumns = () => Object.keys(availableHours).map(day => <Col>{renderDayHours(day)}</Col>)

    return (
        <Row style={styles.sectionWrapper}>
            <Col xl={1}></Col>
            {renderDaysColumns()}
            <Col xl={1}></Col>
        </Row>
    )

}

export default HourSelector;

const styles = {
    sectionWrapper: {
        boxShadow: '0px 6px 25px -8px rgba(0,0,0,0.75)',
        margin: '2% 0',
        padding: '2%'
    },
    available: {
        textAlign:'center',
        backgroundColor: 'rgb(226,229,235)',
        margin: '10% 0px',
        padding: '5% 0px',
        fontWeight: '600'
    },
    notAvailable: {
        textAlign:'center',
        margin: '10% 0px',
        padding: '5%'
    }
}