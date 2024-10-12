import {timeAgo} from '../../lib/utils.js';
import {TranscriptMemberComponent} from '../Transcripts/TranscriptMemberComponent.jsx';
import MemberLabel from "../Util/MemberLabel";
import {useEffect, useState, useRef, useCallback} from "react";
import axios from "axios";
import "./Application.css"

import ApplicationApproval from './ApplicationApproval';

export default function Application({data, approvals, setApprovals, self}) {

    const [user, setUser] = useState(null)
    const myApprovals = useRef([])

    useEffect(() => {
        
        if (data.userSnowflake)
            axios.get(`/api/discord/users/${data.userSnowflake}/`).then(res => {
                setUser(res.data);
            })
        
        myApprovals.current = approvals.filter((x) => {
            return x.userSnowflake === data.userSnowflake
        })

    }, [approvals, data.userSnowflake])


    const approvalClick = useCallback(() => {
        
        axios.post(`/api/applications/${data.guildSnowflake}/${data._id}/approve`).then(res => {
            if (res.data.status === 'added') {
                let approvalNew = [...approvals, res.data.approval]
                setApprovals(approvalNew)
            } else {
                let approvalNew = [...approvals].filter(x => {
                    return x.guildSnowflake === data.guildSnowflake &&
                    x.authorSnowflake !== self.id
                });

                setApprovals(approvalNew)
            }
        });

    }, [data.guildSnowflake, data._id, approvals, setApprovals, self.id])

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

                    <h4>{myApprovals.current.length} Approvals</h4>
                   <div className="display-area">
                        <button onClick={approvalClick}>Approve</button>
                       {myApprovals.current.map( x => {
                            return <ApplicationApproval userid={x.authorSnowflake}/>
                       })}
                   </div>
                </div>

                <div className="content-footer">
                    <p>Application submitted: {timeAgo(data.submitDate)}</p>
                </div>

            </section>
        </div>
    )
}