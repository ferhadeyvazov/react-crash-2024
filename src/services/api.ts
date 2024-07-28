import { IJobForm } from "../pages/addJob/model";

export async function addJob(newJob: IJobForm): Promise<void> {
    //ADD NEW JOB
    const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob)
    });
    return;
};

export async function deleteJob(id:number|string): Promise<void> {
    //DELETE JOB
    const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
    });
    console.log(`Delete Job: ${id}`);
    return;
    
}