import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import defualtAvatar from "../../../../assets/images/avatar.png";


const FollowLink:React.FC<Follower> = ({avatarUrl,nick}) => {
    return (
        <Col className="col-4 p-1">
            <Link to={`/user/${nick}`} className=" text-dark profil-follower-link">
                <img src={avatarUrl ? avatarUrl : defualtAvatar} loading="lazy" className="img-fluid rounded" alt={nick}/>
                <p className="pt-1">{nick}</p>
            </Link>    
        </Col>
    )
}

export default FollowLink
