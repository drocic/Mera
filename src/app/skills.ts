export class Skills 
{
    id : string;
    skillname:string;
    skillyear:string;
    skillrat:string;


    constructor(id: string, skillname: string, skillyear: string, skillrat: string)
    {
        this.id = id;
        this.skillname = skillname;
        this.skillyear = skillyear;
        this.skillrat = skillrat;

    }
}