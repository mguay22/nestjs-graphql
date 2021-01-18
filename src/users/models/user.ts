import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field()
    userId: string;

    @Field()
    email: string;

    @Field(() => Int)
    age: number;

    @Field({ nullable: true })
    isSubscribed?: boolean;

    @Field({ nullable: true })
    password?: string
}