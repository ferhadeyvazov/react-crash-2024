import {IJob} from '../utils/types'

export async function addJob(newJob: IJob): Promise<void> {
    //ADD NEW JOB
    const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob)
    });
    return res.json();
};

export async function deleteJob(id:string): Promise<void> {
    //DELETE JOB
    const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE'
    });
    return res.json(); 
};

export async function editJob(job:IJob): Promise<void> {
    //EDIT JOB
    const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    });
    return res.json();
}