import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable,} from "typeorm";
import { Audit } from "./Audit";
import {User} from "./User";

@Entity()

export class Venue extends Audit{

    @PrimaryGeneratedColumn()
    venue_id : number;

    @Column({length: 1000})
    check_in_code : string

    @Column()
    email_address : string;

    @Column()
    venue_name : string;

    @Column()
    shop_address : string;

    @Column()
    is_hotspot : boolean;

    @ManyToMany(()=>User, user=> user.Venue)
    Users : User[];


}