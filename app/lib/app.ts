import * as express from "express";
import * as path from "path";
import {Request, Response} from "express";

class App {

    public app: express.Application = express();

    constructor() {
        this.config();
        this.app.get('/', (req: Request, res: Response) => {            
            res.status(200);
            res.json({
                message: 'Test JSON...'
            })
        });   
    }

    private config(): void{
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));
    }

}

export default new App().app;
