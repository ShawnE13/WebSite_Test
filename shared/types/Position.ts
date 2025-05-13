export interface Position {
    id: number;
    title: string;
    description: string;
    department: string;
    location: string;
    datePosted: Date;
    employmentType: string; // e.g., Full-time, Part-time, Contract
    status: string; // e.g., Open, Closed
}