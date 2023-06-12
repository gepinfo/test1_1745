import { Request, Response } from 'express';
import {testDao} from '../dao/testDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test = new testDao();

export class testService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpCreate')
     let  testData = req.body;
     test.GpCreate(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into testService.ts: GpGetNounCreatedBy')
     let  testData = { created_by: req.query.createdby };
     test.GpGetNounCreatedBy(testData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from testService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}