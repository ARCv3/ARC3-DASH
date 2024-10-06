
import { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import "./Applications.css"

import Application from '../components/Applications/Application.jsx';
import ApplicationUserList from '../components/Applications/ApplicationUserList.jsx';


export default function Applications() {

  const {guildid} = useParams();
  const [applicationUsers, setApplicationUsers] = useState([]);

  const [application, setApplication] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(`/api/applications/${guildid}`).then(res => {
      setApplicationUsers(res.data);
    })

  }, [guildid])


  return (
      <div className="applications">
          <section className="right">
              <h2>Users</h2>
              <input onChange={(e) => {
                  setFilter(e.target.value)
              }}/>
              <section className="notes-user-list">
                <ApplicationUserList filter={filter} setApplication={setApplication} applicationUsers={applicationUsers}/>
              </section>
          </section>
          <section className="left">
              <h2>Application</h2>
              {application !== null && <Application data={application} /> }  
          </section>
      </div>

  )

}


