import React, { Component } from 'react';
import availableHours from '../data/availableHours'
import UserCard from './UserCard'
import selectedUser from '../data/selectedUser'
import DaySelector from './DaySelector'
import HourSelector from './HourSelector'
import { Col, Row } from 'react-bootstrap'

export default class ScheduleCard extends Component {
    state = {
        selectedUser: {},
        selectedHour: '',
        availableHours: {}
    }

    async componentDidMount() {
        try {
            const availableHoursData = availableHours
            const selectedUserData = selectedUser

            let data = await Promise.all([availableHoursData, selectedUserData]) 
            this.setState({
                availableHours: data[0],
                selectedUser: data[1]
            })
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { selectedUser, availableHours } = this.state
        const availableDaysData = Object.keys(availableHours)
        return (
            <Row style={styles.externalWrapper}>
                <Col xl={7} lg={7} md={7} sm={12} xs={12} style={styles.innerCardWrapper}>
                    <UserCard selectedUser={selectedUser} />
                </Col>
                <Col xl={5} lg={5} md={5} sm={12} xs={12} style={styles.innerCardWrapper}>
                    <DaySelector availableDays={availableDaysData} />
                    <HourSelector availableHours={availableHours} />
                </Col>
            </Row>
        );
    }
}

const styles = {
    externalWrapper: {
        padding: '5%'
    },
    innerCardWrapper: {
        padding: '0 3%'
    }
}