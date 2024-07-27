import { IJobForm } from "../pages/addJob/model";

export async function addJob(newJob: IJobForm): Promise<void> {
    const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob)
    });
    return;
};