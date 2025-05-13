class Position {
    id: number;
    title: string;
    description: string;
    department: string;
    datePosted: Date;
    status: string;

    constructor(id: number, title: string, description: string, department: string, datePosted: Date, status: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.department = department;
        this.datePosted = datePosted;
        this.status = status;
    }
}

export default Position;