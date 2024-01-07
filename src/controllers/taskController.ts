import { Request, Response} from 'express';
import * as taskService from '../services/taskService';


export const getAllTasks = (req: Request, res: Response):void => {
    // Call the getAllTasks function from the taskService
    const tasks = taskService.getAllTasks();

    // Send a JSON response containing the tasks array to the client
    res.json(tasks);
} 

export const createTasks = (req: Request, res:Response): void => {
const {title} = req.body;    

if(!title){
    res.status(400).json({error: `No title`});
    return;
}

const newTask = taskService.createTask(title);
res.status(201).json(newTask);
}

export const getTaskByTitle = (req : Request, res: Response): void => {
    const {title} = req.body;
    if(!title){
        res.status(400).json({erro: `No title`});
        return;
    }

    const result = taskService.getTaskByTitle(title);
    res.json(result);
}