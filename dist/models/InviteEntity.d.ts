/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface InviteEntity
 */
export interface InviteEntity {
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    role: InviteEntityRoleEnum;
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    status: InviteEntityStatusEnum;
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof InviteEntity
     */
    updatedAt: string;
}
/**
 * @export
 */
export declare const InviteEntityRoleEnum: {
    readonly OrgAdmin: "org:admin";
    readonly OrgMember: "org:member";
};
export type InviteEntityRoleEnum = typeof InviteEntityRoleEnum[keyof typeof InviteEntityRoleEnum];
/**
 * @export
 */
export declare const InviteEntityStatusEnum: {
    readonly Pending: "pending";
    readonly Accepted: "accepted";
    readonly Revoked: "revoked";
};
export type InviteEntityStatusEnum = typeof InviteEntityStatusEnum[keyof typeof InviteEntityStatusEnum];
/**
 * Check if a given object implements the InviteEntity interface.
 */
export declare function instanceOfInviteEntity(value: object): value is InviteEntity;
export declare function InviteEntityFromJSON(json: any): InviteEntity;
export declare function InviteEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteEntity;
export declare function InviteEntityToJSON(json: any): InviteEntity;
export declare function InviteEntityToJSONTyped(value?: InviteEntity | null, ignoreDiscriminator?: boolean): any;