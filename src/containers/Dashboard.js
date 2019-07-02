import React, { Component } from 'react';
import Navbar from '../components/navbar';

import UserTable from '../components/UserTable';
import './dashboard.scss'

class Dashboard extends Component {

    state = { list: [] }
    async getUserList() {
       
        const lists = await fetch('http://localhost:3005/api/v1/allUsers');

        const listJson = await lists.json();
        let list = await listJson.data;

        this.setState({ list })
    }
    constructor(props) {
       
        super(props)
       
        this.getUserList();
    }
    
    render() {
        return (
            <React.Fragment>
                <Navbar heading={'CodeMyMobile- Task'}/>
                <div className="container-fluid containers">
                <div className="row users">All Users</div>
                {Array.isArray(this.state.list)&& this.state.list.length>0? <UserTable data={this.state.list}  linking="userTofriends" />:<div className="row friends">No user available</div>}
                </div>
            </React.Fragment>
        );
    }
}

export default Dashboard;
