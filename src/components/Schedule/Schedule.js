import React from 'react';
import { Event } from "../Event/Event";
import events from "../../events";

export const Schedule = () => {
    return (
        <div>
            {events.map((event, i) => {
                return <Event key={i} event={event} />
            })}
        </div>
    )
}
