import React, { useEffect, useState } from 'react';
import { timeAgo } from 'short-time-ago';

export function TimeAgo({ date: dateString }: { date: string }) {
    const date = new Date(dateString);
    const [description, setDescription] = useState(timeAgo(date));

    useEffect(() => {
        const interval = setInterval(() => {
            setDescription(timeAgo(date));
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    return <span title={date.toUTCString()}>{description}</span>;
}