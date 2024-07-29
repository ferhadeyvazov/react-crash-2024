interface ICompany {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
}

export interface IJob {
    id?: string;
    title: string;
    type: string;
    location: string;
    description: string;
    salary: string;
    company: ICompany;
}

export interface IJobArr {
    jobs: IJob[];
}