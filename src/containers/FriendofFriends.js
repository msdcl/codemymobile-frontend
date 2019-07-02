import React, { Component } from 'react';
import Navbar from '../components/navbar';

import UserTable from '../components/UserTable';
import './dashboard.scss'


class FriendsofFriends extends Component {
    state = { 'userId':'', 'friendList':[] }
    async getFriendList(id) {
       let data = {
           'userId':id
       }
        const lists = await fetch('http://localhost:3005/api/v1/friendsOfFriends',{
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const listJson = await lists.json();
        let list = await listJson.data;
         console.log(list)
        this.setState({'friendList': list })
    }
    componentDidMount () {
        const { id } = this.props.match.params
        this.getFriendList(id);
      }
    render() { 
        return ( 
            <React.Fragment>
            <Navbar heading={'CodeMyMobile- Task'}/>
            <div className="container-fluid containers">
            <div className="row users">All Friends of friends</div>
           {Array.isArray(this.state.friendList)&& this.state.friendList.length>0? <UserTable data={this.state.friendList}   />:<div className="row friends">No Friends</div>}
            </div>
        </React.Fragment>
         );
    }
}
 
export default FriendsofFriends;