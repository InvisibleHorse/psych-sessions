import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Session } from '../../models/Session';
import deleteIcon from '../../assets/delete.png';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface SessionsProps {
    sessions: Session[];
    deleteSession: (id: string) => void;
}

const Sessions: React.FC<SessionsProps> = ({ sessions, deleteSession }) => {

    return (
        <div className='flex flex-col gap-2.5'>
            {sessions.map(session => (< Card key={session.id}>
                <CardHeader>
                    <CardTitle>{session.name}</CardTitle>
                    <CardDescription>{session.date.toDateString()} at {session.time}</CardDescription>
                    <CardFooter className='cardFooter rightAlign'>
                        <img
                            src={deleteIcon}
                            alt="Delete"
                            className='ml-4 cursor-pointer h-6 w-6'  // Adjust styling as needed
                            onClick={() => {
                                console.log(`Deleting session with id: ${session.id}`); // Debug statement
                                deleteSession(session.id);
                            }}
                        />
                        <Popover>
                            <PopoverTrigger className='text-lg'>?</PopoverTrigger>
                            <PopoverContent>
                                <ul>
                                    <li><strong>Duration: &nbsp;</strong>{session.durationMinutes} minutes</li>
                                    <li><strong>Price: &nbsp;</strong>{session.price}$</li>
                                    <li><strong>Discount: &nbsp;</strong>{session.discount}$</li>
                                    <li><strong>Location: &nbsp;</strong>{session.location}</li>
                                    <li><strong>Payment method: &nbsp;</strong>{session.paymentMethod}</li>
                                    <li><strong>Payment finalization: &nbsp;</strong>{session.paymentFinalization}</li>
                                </ul>
                            </PopoverContent>
                        </Popover>
                    </CardFooter>
                </CardHeader>
            </Card >
            ))}
        </div>
    )
}

export default Sessions;

