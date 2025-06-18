import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Session } from "../../models/Session";
import deleteIcon from "../../assets/delete.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SessionsProps {
  sessions: Session[];
  deleteSession: (id: string) => void;
}

const Sessions: React.FC<SessionsProps> = ({ sessions, deleteSession }) => {
  return (
    <div className="flex flex-col gap-4">
      {sessions.map((session) => (
        <Card key={session.id} className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{session.name}</CardTitle>
          </CardHeader>
          <CardDescription className="text-sm sm:text-base">
            {session.date.toDateString()} at {session.time}
          </CardDescription>
          <CardFooter className="mt-2 sm:mt-0 flex items-center justify-center md:justify-end gap-5">
            <img
              src={deleteIcon}
              alt="Delete"
              className="ml-4 cursor-pointer h-6 w-6"
              onClick={() => {
                console.log(`Deleting session with id: ${session.id}`);
                deleteSession(session.id);
              }}
            />
            <Popover>
              <PopoverTrigger className="text-lg">?</PopoverTrigger>
              <PopoverContent>
                <ul>
                  <li>
                    <strong>Duration: &nbsp;</strong>
                    {session.durationMinutes} minutes
                  </li>
                  <li>
                    <strong>Price: &nbsp;</strong>
                    {session.price}$
                  </li>
                  <li>
                    <strong>Discount: &nbsp;</strong>
                    {session.discount}$
                  </li>
                  <li>
                    <strong>Location: &nbsp;</strong>
                    {session.location}
                  </li>
                  <li>
                    <strong>Payment method: &nbsp;</strong>
                    {session.paymentMethod}
                  </li>
                  <li>
                    <strong>Payment finalization: &nbsp;</strong>
                    {session.paymentFinalization}
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Sessions;
