type ICompany = {
    name:string;
    description:string;
    contactEmail:string;
    contactPhone:string;

}

export type IJobForm = {
    title: string;
    type: string;
    location: string;
    description: string;
    salary: string;
    company: ICompany;
}