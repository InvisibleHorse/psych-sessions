import logo from "../assets/Logo_final_2.png";
import Sessions from "@/components/main/Sessions";
import AddSession from "@/components/main/AddSession";
import { Session } from "../models/Session";
import { sessions as initialSessions } from "../mockData/Session";
import { useState } from "react";

export default function Home() {
  const [sessions, setSessions] = useState<Session[]>(initialSessions);

  const addSession = (newSession: Session) => {
    setSessions([...sessions, newSession]);
  };

  const deleteSession = (id: string) => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 my-8 px-4">
        <img className="h-10" src={logo} alt="Logo" />
        <h1 className="text-2xl sm:text-3xl font-semibold">Sessions</h1>
        <AddSession addSession={addSession} />
      </div>

      <div className="px-4">
        <Sessions sessions={sessions} deleteSession={deleteSession} />
      </div>
    </>
  );
}
