import logo from '../assets/Logo_final_2.png';
import Sessions from '@/components/main/Sessions';
import AddSession from '@/components/main/AddSession';
import { Session } from '../models/Session';
import {sessions as initialSessions } from '../mockData/Session';
import { useState } from 'react';



export default function Home() {

    const [sessions, setSessions] = useState<Session[]>(initialSessions);

    const addSession = (newSession: Session) => {
      setSessions([...sessions, newSession]);
    };
    return (
        <>
            <div className='grid grid-cols-3 gap-0 my-12'>
                <img className='h-10' src={logo}></img>
                <h1 className='text-3xl'>Sessions</h1>
                <AddSession  addSession={addSession}/>
            </div>
            <div>
                <Sessions sessions={sessions} />
            </div>
        </>
    )
}   