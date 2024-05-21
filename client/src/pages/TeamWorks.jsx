import React from 'react'
import TeamWorksVideo from '../components/TeamWorks/TeamWorksVideo'
import TeamWorksImage from '../components/TeamWorks/TeamWorksImage'
import { useState } from 'react'

const TeamWorks = () => {
    const [teamWorks, setTeamWorks] = useState();
    const fetchTeamWorks = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/client/teamworks`
        );
        const json = await response.json();
        if (response.ok) {
            setTeamWorks(json);
        }
    };

    useState(() => {
        fetchTeamWorks();
    })

    return (
        <div className='container mx-auto'>
            <TeamWorksVideo />
            <TeamWorksImage teamWorks={teamWorks} />
        </div>
    )
}

export default TeamWorks