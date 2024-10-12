import './ApplicationApproval.css'

import { useState, useEffect, useCallback } from "react";
import MemberLabel from "../Util/MemberLabel";
import axios from "axios";

export default function ApplicationApproval({ userid }) {

    const [user, setUser] = useState(null)

    useEffect(() => {

        axios.get(`/api/discord/users/${userid}/`).then(res => {
            setUser(res.data);
        })

    }, [userid])



    return (
      <div className="applicationApproval">
        <MemberLabel placement="right" user={user}/>
      </div>
    )
}