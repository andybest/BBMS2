import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn({type: "int", width: 10})
    id: number;

    @Column({type: "varchar", length: 255})
    email: string;

    @Column({type: "varchar", length: 255})
    slackUsername: string;

    // TODO: Check this is correct
    @Column({type: "varchar", length: 255})
    name: string;

    @Column({type: "varchar", length: 100})
    givenName: string;

    @Column({type: "varchar", length: 100})
    familyName: string;

    @Column({type: "varchar", length: 50})
    hash: string;

    @Column({type: "tinyint", width: 1})
    active: boolean;

    @Column({type: "tinyint", width: 1})
    keyHolder: boolean;

    @Column({type: "tinyint", width: 1})
    trusted: boolean;

    @Column({type: "tinyint", width: 1})
    banned: boolean;

    @Column({type: "tinyint", width: 1})
    emailVerified: boolean;

    @Column({type: "tinyint", width: 1})
    inductionCompleted: boolean;

    @Column({type: "int", width: 10})
    inductedBy: boolean;

    @Column({type: "int", width: 5})
    paymentDay: number;

    @Column({type: "varchar", length: 20})
    status: string;

    @Column({type: "varchar", length: 20})
    paymentMethod: string;

    @Column({type: "varchar", length: 128})
    subscriptionId: string;

    @Column({type: "timestamp", nullable: true})
    subscriptionExpires: Date;

    @Column({type: "timestamp", nullable: true})
    bannedDate: Date;

    @Column({type: "varchar", length: 20})
    phone: string;

    @Column({type: "int", width: 10})
    storageBoxPaymentId: number;

    @Column({type: "varchar", length: 20, nullable: true})
    secondaryPaymentMethod: string;

    @Column({type: "varchar", length: 128})
    mandateId: string;

    @Column({type: "int", width: 5, nullable: true})
    monthlySubscription: string;

    @Column({type: "varchar", length: 128})
    goCardlessSetupId: string;

    @Column({type: "timestamp", nullable: true, default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
