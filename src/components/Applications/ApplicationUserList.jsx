import ApplicationUser from "./ApplicationUser";
import './ApplicationUserList.css'

export default function ApplicationUserList({applicationUsers, setApplication, filter}) {

    return <> {applicationUsers.map((x, i, a)=> {
        return <ApplicationUser filter={filter} application={x} guildid={applicationUsers[0].guildsnowflake} 
                        setApplication={setApplication} lid={i} key={i} userid={x.userSnowflake} />
    })}</>

}