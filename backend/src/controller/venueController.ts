import {getRepository, Like} from "typeorm";
import {NextFunction, Request, Response} from "express";
import StatusCodes from 'http-status-codes';
import {Venue} from "../entity/Venue";
const { BAD_REQUEST, CREATED, OK } = StatusCodes;
import {ApiResultBean} from "../support/ApiResultBean";

export class venueController {
    private venueRepository = getRepository(Venue);


    async all(request: Request, response: Response, next: NextFunction) {


        const limit = request.query.limit || 10
        const page = request.query.page || 1
        const keyword = request.query.keyword || ''
        const sort = request.query.sort || 'ASC'

        const [list, total] = await this.venueRepository.findAndCount({
            where: { venue_name : Like('%' + keyword + '%') },
            order: { venue_id : sort},
            take: limit,
            skip: (page-1) * limit,
            relations: ['Role']
        });


        return ApiResultBean.success({total, list});


    }

    async getVenueInfo(request: Request, response: Response, next: NextFunction){
        return this.venueRepository.findOne(request.params.id, {relations: ['Users']});
    }

    async postVenueInfo(request: Request, response: Response, next: NextFunction) {
        return this.venueRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.venueRepository.findOne(request.params.id);
        await this.venueRepository.remove(userToRemove);
        return ApiResultBean.success();
    }
}
