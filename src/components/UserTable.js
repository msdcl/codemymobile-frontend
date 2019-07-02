import React from 'react';
import Faker from 'faker'
import { Link } from 'react-router-dom'

const UserTable = (props) => {
    const list = props.data.map((obj) => {
        let { userId, firstNaame, lastName } = obj;
        return (<div className="row row1" key={userId}>
            <div className="col col-sm-2 offset-sm-3 col1">
                <img src={`${Faker.image.avatar()}`} alt="Avatar" className="avatar" />
            </div>
            <div className="col col-sm-4 col2">

                {`${firstNaame} ${lastName}`}

                {props.linking === 'userTofriends' ? <Link to={`friends/${userId}`} >Friends</Link> : ''}
                {props.linking === 'userTofriends' ? <Link to={`friendsOfFriends/${userId}`} >Friends of friends</Link> : ''}
                </div>
                
        </div>)
    })
    return (
        <div className="data">{list}</div>
    )
}
export default UserTable;