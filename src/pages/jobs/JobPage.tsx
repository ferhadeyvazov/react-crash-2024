import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { JobObject } from '../../components/joblistings/models'


const JobPage: React.FC = (props) => {
    const job = useLoaderData() as any;

    // const [job, setJob] = useState <null|JobObject>(null)
    // const [loading, setLoading] = useState(true)

    // useEffect(()=>{
    //     const fetchJob = async ()=>{
    //         try {
    //             const res = await fetch(`/api/jobs/${id}`);
    //             const data = await res.json();
    //             data ? setJob(data): "";

    //         } catch (error) {
    //             console.log("Fetch Error is ", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchJob();
    // },[])

    return <h1>salam</h1>
};

export async function jobLoader() {
    const response = await fetch('/api/jobs');
    const data = await response.json();
    return data
}

console.log(jobLoader());



export default JobPage;