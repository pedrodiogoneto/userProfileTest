import React from 'react';
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'

const DaySelector = (props) => {

    const { availableDays } = props

    const renderAvailableDays = () => availableDays.map(day => <Col key={day}><p style={styles.resetMargins}>{moment.unix(day).format('ddd')}</p><p>{moment.unix(day).format('MMM D')}</p></Col>)
    
    return (
        <React.Fragment>
        <div style={styles.titleSection}>
            <Row>
               <p style={styles.title}>Schedule your session!</p>
            </Row>
            <Row>
               <p style={styles.subTitle}>Timezone: Lisbon (+1)</p>
            </Row>
            </div>
            <Row style={styles.dateSection}>
                <Col style={{ padding: '0px', marginLeft: '2%' }} xl={1}><i style={styles.arrowIcon} className="fa fa-arrow-circle-left"></i></Col>
                {renderAvailableDays()}
                <Col style={{ padding: '0px', marginRight: '2%' }} xl={1}><i style={styles.arrowIcon} className="fa fa-arrow-circle-right"></i></Col>
            </Row>
        </React.Fragment>
    );
}

export default DaySelector;

const styles = {
    titleSection: {
        backgroundColor: 'rgb(48, 124, 212)',
        padding: '2% 0'
    },
    title: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        fontWeight: '600',
        fontSize: '16pt',
        marginBottom: '0px',
        fontFamily: '"Fira Sans",sans-serif'
    },
    subTitle: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        fontSize: '12pt',
        marginBottom: '0px',
        fontFamily: '"Fira Sans",sans-serif'

    },
    dateSection: {
        boxShadow: '0px 6px 25px -8px rgba(0,0,0,0.75)',
        textAlign: 'center',
        margin: '0px 0px 5%',
    },
    resetMargins: {
        marginTop: '10%',
        marginBottom: '0px'
    },
    arrowIcon: {
        fontSize: '30pt',
        marginTop: '25%',
    }
}