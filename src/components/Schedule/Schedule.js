import React from 'react';
import { Event } from "../Event/Event";
import events from "../../events";

export const Schedule = () => {
    return (
        <div>
            {events.map((event) => {
                return <Event event={event} />
            })}
        </div>
    )
}
