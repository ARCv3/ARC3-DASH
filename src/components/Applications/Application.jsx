import {timeAgo} from '../../lib/utils.js';
import {TranscriptMemberComponent} from '../Transcripts/TranscriptMemberComponent.jsx';
import MemberLabel from "../Util/MemberLabel";
import {useEffect, useState} from "react";
import axios from "axios";
import "./Application.css"

export default function Application({data}) {

    const [user, setUser] = useState(null)


    useEffect(() => {
        
        if (data.userSnowflake)
            axios.get(`/api/discord/users/${data.userSnowflake}/`).then(res => {
                setUser(res.data);
            })

    }, [data.userSnowflake])


    return (
        <div className="application"  id={`appliication-${data._id}`}>
            <section className="content-view">
                <div className="content-header">
                    <MemberLabel user={user} placement={"right"}/> 
    
                </div>
                <div className="content-main">
                    <h4>About this user:</h4>
                    <div className="info-data">
                        <div>
                            <p>{data.age} Years Old</p>
                            <p>Joined discord in {data.joindate}</p>
                        </div>

                        <div>
                            <p>Moderation Experience: {data.experience}</p>
                            <p>Bot Experience Level: {data.botexp}</p>
                        </div>

                        <div>
                            <p>Experience in: <a href={(data.server.includes("https://")? data.server : "https://" + data.server)}>{data.server}</a></p>
                            <p>Position: {data.position}</p>
                        </div>

                    </div>

                    <h4>Bio:</h4>

                    <div className="text-area">
                        <p>{data.about}</p>
                    </div>

                    <h4>Why do you want to be staff:</h4>
                   
                    <div className="text-area">
                        {data.message}
                    </div>

                    <h4>Availabilites:</h4>
                   
                   <div className="text-area">
                       {data.avail}
                   </div>


                </div>
                <div className="content-footer">
                    <p>Application submitted: {timeAgo(data.submitDate)}</p>
                </div>
            </section>
        </div>
    )
}