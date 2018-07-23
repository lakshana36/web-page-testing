

export interface EventInterface{
    createdBy ?: number| null;
    eventEndTime ?: string;
    eventStartTime ?: string;
    eventLocation ?: string;
    eventName ?: string;
    eventDate ?: number;

    slots : [
        {
        startTime? : string | null;
        endTime?:string | null;
        id?:string | null;
        numberOfInterviwersEnrolled:[
            {
                userId?:string | null;
                numberOfInterviewsTaken?:string | null;
            }
        ]
    },
    {
        startTime? : string | null;
        endTime?:string | null;
        id?:string | null;
        numberOfInterviwersEnrolled:[
            {
                userId?:string | null;
                numberOfInterviewsTaken?:string | null;
            }
        ]
    },
    {
        startTime? : string | null;
        endTime?:string | null;
        id?:string | null;
        numberOfInterviwersEnrolled:[
            {
                userId?:string | null;
                numberOfInterviewsTaken?:string | null;
            }
        ]
    },
    {
        startTime? : string | null;
        endTime?:string | null;
        id?:string | null;
        numberOfInterviwersEnrolled:[
            {
                userId?:string| null;
                numberOfInterviewsTaken?:string | null;
            }
        ]
    }

]
    skill ?: any;
}