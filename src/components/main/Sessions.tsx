import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Session } from '../../models/Session';

interface SessionsProps {
    sessions: Session[];
  }

  const Sessions: React.FC<SessionsProps> = ({ sessions }) => {

    return (
        <div className='flex flex-col gap-2.5'>
          {sessions.map( session => (< Card  key={session.id}>
            <CardHeader>
                <CardTitle>{session.name}</CardTitle>
                <CardDescription>{session.date.toDateString()}</CardDescription>
            </CardHeader>
        </Card >
        ))}
        </div>
    )
}

export default Sessions;

