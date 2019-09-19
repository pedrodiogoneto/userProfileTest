import React from 'react';
import { Col, Row } from 'react-bootstrap'
import star from '../star.png'

const UserCard = (props) => {
    const { pictureSrc, name, category, location, rating, reviewsNumber, rateValue, rateTime, description } = props.selectedUser

    const renderRating = () => {
        if(!rating) return
        return rating.map(isStar => {
            if(isStar === 1) return <img style={styles.userRating} src={star} alt={'star'}/>
            else return null
        })                      
    }

    return (
        <React.Fragment>
            <Row>
                <Col xl={4} lg={4}>
                    <img src={pictureSrc} alt="user" style={styles.userPhoto}/>
                </Col>
                <Col xl={6} lg={6}>
                    <p style={styles.userName}>{name}</p>
                    <p style={styles.resetMarginBottom}><span style={styles.userCategory}>{category}</span><span style={styles.userLocation}>{`  |  ${location}`}</span></p>
                    <p style={styles.resetMarginBottom}><span>{renderRating()}</span><span style={styles.userReviews}>{`  (${reviewsNumber} reviews)`}</span></p>
                    <p style={styles.resetMarginBottom}><span style={styles.userRateValue}>{rateValue}</span><span style={styles.userRateTime}>{`  /  ${rateTime}`}</span></p>
                </Col>
            </Row>
            <Row>
                <p style={styles.userDescription}>{description}</p>
            </Row>
        </React.Fragment>
    );
}

export default UserCard;

const styles = {
    userPhoto: {
        width: '100%',
        marginBottom: '10%'
    },
    userName: {
        fontFamily: '"Fira Sans",sans-serif',
        fontWeight: '600',
        fontSize: '20pt',
        color: 'rgb(82,92,93)',
        marginBottom: '2%'
    },
    userCategory: {
        fontFamily: '"Fira Sans",sans-serif',
        fontWeight: '600',
        fontSize: '16pt',
        color: 'rgb(85,139,191)',
        marginBottom: '0px'
    },
    userLocation: {
        fontFamily: '"Fira Sans",sans-serif',
        fontSize: '16pt',
        color: 'rgb(147,147,147)',
        marginBottom: '0px'
    },
    userReviews: {
        fontFamily: '"Fira Sans",sans-serif',
        fontSize: '18pt',
        color: 'rgb(147,147,147)',
        marginBottom: '0px'
    },
    userRating: {
        width: '25px',
        marginBottom: '0px'
    },
    userRateValue: {
        fontFamily: '"Fira Sans",sans-serif',
        fontWeight: '600',
        fontSize: '18pt',
        color: 'rgb(82,92,93)',
        marginBottom: '0px'
    },
    userRateTime: {
        fontFamily: '"Fira Sans",sans-serif',
        fontWeight: '600',
        fontSize: '14pt',
        color: 'rgb(82,92,93)',
        marginBottom: '0px'
    },
    userDescription: {
        fontFamily: '"Fira Sans",sans-serif',
        fontSize: '14pt',
        color: 'rgb(117,125,126)'
    },
    resetMarginBottom: {
        marginBottom: '0px'
    }
}