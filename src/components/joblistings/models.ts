export type IProps = {
    isHome?: boolean;
}

export type ICompany = {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
}
export type JobObject = {
    id: number|string;
    title: string;
    type: string;
    location: string;
    description: string;
    salary: string;
    company: ICompany;
}
export type IJob = {
    job: JobObject
}
