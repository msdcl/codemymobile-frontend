import React,{ Component } from 'react';
import Navbar from '../components/navbar';

import UserTable from '../components/UserTable';
import './dashboard.scss'

class Friends extends Component {
    state = { 'userId':'', 'friendList':[] }
    async getFriendList(id) {
       let data = {
           'userId':id
       }
        const lists = await fetch('http://localhost:3005/api/v1/allFriends',{
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
    console.log(id)
      }
    render() { 
        return ( 
            <React.Fragment>
                <Navbar heading={'CodeMyMobile- Task'}/>
                <div className="container-fluid containers">
                <div className="row users">All Friends</div>
                <UserTable data={this.state.friendList}   />
                </div>
            </React.Fragment>
         );
    }
}
 
export default Friends;

