import { Request, Response } from 'express';

import db from '../database/connection';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async create (req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;
  
    //TRX => DB
    const trx = await db.transaction(); 
  
    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
      const user_id = insertedUsersIds[0];
    
    
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      })
      const class_id = insertedClassesIds[0];
    
    
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      })
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
    
      return res.status(201).send();
  
    } catch(err) {
      await trx.rollback(); //Desfaz qualquer alterações caso haja algum erro
  
      //console.log(err);
      return res.status(400).json({
        error: 'Unexpected error while creating new class'
      })
    }
  
  }
}