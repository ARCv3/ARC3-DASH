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
                    <h1>Application Details</h1>
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
                        {data.about}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit blanditiis numquam molestiae culpa id veritatis nam, assumenda a tempora non, laudantium dolore fuga ab animi voluptates, voluptate placeat deserunt ipsum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, obcaecati earum possimus cum saepe neque, nihil culpa reprehenderit quo rerum quaerat aperiam alias laudantium sit aliquam explicabo quas delectus deleniti!
                    </div>

                    <h4>Why do you want to be staff:</h4>
                   
                    <div className="text-area">
                        {data.message}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consectetur aperiam adipisci distinctio optio eum sint eos aut quo atque. Quia, quisquam numquam! Corporis, facere tempora minus expedita cum laboriosam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero vitae earum quos nesciunt assumenda magnam? Nemo exercitationem quae quas adipisci? Consequatur numquam corrupti quas nulla, aspernatur error velit tempora!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore officiis quos quisquam eius unde odit temporibus, ducimus molestias sint animi cupiditate consectetur reprehenderit nam quidem non neque nisi enim. Deserunt.
                    </div>

                    <h4>Availabilites:</h4>
                   
                   <div className="text-area">
                       {data.avail}
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellat vitae sunt hic at? Blanditiis ipsum possimus est culpa nobis perspiciatis optio eveniet vero nam? Eum assumenda doloribus repellat ducimus.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatum quas, molestias quidem maxime harum et iusto incidunt. Molestias magni doloribus dicta amet debitis nemo numquam inventore eveniet harum quibusdam.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo impedit velit, unde ipsa quos in quis, deserunt dignissimos iusto molestias laudantium esse. Ad, voluptates obcaecati eum distinctio modi ducimus repellendus!
                       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat totam nisi ratione accusantium fugiat commodi, culpa illo similique, at est soluta ipsum, libero suscipit cum nulla esse veritatis sit minus.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui nesciunt dolor autem provident ab nisi ipsa facilis commodi accusamus voluptas et nihil, expedita quia tempore incidunt cum aperiam neque.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam quaerat cupiditate iusto aspernatur, tempora doloremque recusandae voluptatem. Facere mollitia eum laborum inventore fugit cumque officiis illo dolores ut dolore?
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, beatae expedita deleniti quae dicta id animi dignissimos voluptatem dolorem obcaecati ea enim, numquam exercitationem nihil quaerat in praesentium deserunt quia.
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores nam enim corporis doloribus eos. Culpa nisi hic deserunt dolore dolorem non earum alias eligendi praesentium nemo, aliquid adipisci dolor unde!
                   </div>


                </div>
                <div className="content-footer">
                    <p>Application submitted: {timeAgo(data.submitDate)}</p>
                </div>
            </section>
        </div>
    )
}