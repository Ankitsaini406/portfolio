export type Timelinedetial = {
    _id?: string;
    name: string;
    jobtitle: string;
    joinDate: string;
    endDate: string;
    work: string;
    skills?: string[];
};

export type Projectsdetial = {
    id: string;
    name: string;
    image: string;
    link: string;
    appLink?: string;
    description: string;
    tags?: string[];
    github?: string;
};