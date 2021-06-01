import {EntityRepository, getRepository, Like, Repository} from "typeorm";
import {User} from "../entity/User";
import {reqParamsOptionsInterface} from "../support/reqParamsOptions.Interface";
import {tokenOptions} from "../support/tokenOptions";
import {badRequest, notFound, unauthorized} from "@hapi/boom";
import * as Dayjs from 'dayjs';


@EntityRepository(User)
export class UserRepository extends Repository<User>{


    private repository = getRepository(User);
    private userSelectQueryBuilder = this.repository.createQueryBuilder();

    public get() {
        return this.repository;
    }

    public async listAllUsers(params: reqParamsOptionsInterface) {

        try {
            const [list, total] = await this.repository.findAndCount({
                where: qb => {
                    qb.where({
                        username: Like('%' + params.keyword + '%')
                    })

                    if (params.userType !== null) {
                        qb.andWhere('User__Role.level = :level', {level: params.userType});
                    }

                },
                order: {user_id: params.sort},
                take: params.limit,
                skip: (params.page - 1) * params.limit,
                relations: ['Role']
            });

            return [list, total];

        } catch (error) {
            return [error];
        }


    }

    public async saveUser(user: User) {

        try {
            user.user_id = null;
            return await this.repository.save(user);

        } catch (error) {
            return error;
        }

    }

    public async findAndGenerateToken(options: tokenOptions): Promise<{ user: User, accessToken: string; }> {

        const {username, emailAddress, password, refreshToken} = options;

        if (!emailAddress && !username) {
            throw badRequest("An email address or username is required to generate a token");
        }

        const user = await this.findOne({
            where: emailAddress ? {emailAddress : emailAddress} : {username : username}
        })

        if (!user) {
            throw notFound('User not found');
        } else if (password && await user.passwordMatches(password.toString()) === false) {
            throw unauthorized('Password must match to authorize a token generating');
        } else if (refreshToken && refreshToken.user.emailAddress === emailAddress && Dayjs(refreshToken.expires).isBefore( Dayjs() )) {
            throw unauthorized('Invalid refresh token');
        }

        return {user, accessToken: user.token()};

    }


}