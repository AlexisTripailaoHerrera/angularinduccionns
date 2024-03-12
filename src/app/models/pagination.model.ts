import { User } from "./user.model";

export class Pagination {
    data: User[];

    //pagina cargada
    page: number;

    //usuarios por pagina
    per_page: number;

    //total de usuarios
    total: number;
    total_pages: number;

    constructor(obj?:any){
        this.data = obj && obj.id || [];
        this.page = obj && obj.page || 1;
        this.per_page = obj && obj.per_page || 6;
        this.total = obj && obj.total || 0;
        this.total_pages = obj && obj.total_pages || 0;
    }
}
