import { useState, useEffect, useCallback } from "react";
import MemberLabel from "../Util/MemberLabel";
import axios from "axios";

import "./ApplicationUser.css"
import {isEmptyOrSpaces} from "../../lib/utils";

export default function ApplicationUser({ userid, application, guildid, lid, setApplication, filter}) {

    const [user, setUser] = useState(null)

    const noteClick = useCallback(() => {

        setApplication(application)
        
    }, [application, setApplication])

    useEffect(() => {

        axios.get(`/api/discord/users/${userid}/`).then(res => {
            setUser(res.data);
        })

    }, [userid])



    return (
        <>
        { !isEmptyOrSpaces(filter) && user && user.username.toLowerCase().includes(filter.toLowerCase()) &&
        <div onClick={noteClick} id={`note-user-${lid}`} className="note-user">
            <MemberLabel placement="right" user={user}/>
        </div>
        }
        </>

    )
}