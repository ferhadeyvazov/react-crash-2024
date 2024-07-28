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

export async function deleteJob(id:number): Promise<void> {
    //DELETE JOB
    console.log(`Delete Job: ${id}`);
    return;
    
}