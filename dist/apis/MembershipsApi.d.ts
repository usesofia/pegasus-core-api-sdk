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
import * as runtime from '../runtime';
import type { CreateInviteRequestBodyDto, InviteEntity, MemberEntity, PartialUpdateMemberRequestBodyDto, RemoveMemberRequestBodyDto, RevokeInviteRequestBodyDto } from '../models/index';
export interface CreateInviteRequest {
    createInviteRequestBodyDto: CreateInviteRequestBodyDto;
}
export interface PartialUpdateMemberRequest {
    id: string;
    partialUpdateMemberRequestBodyDto: PartialUpdateMemberRequestBodyDto;
}
export interface RemoveMemberRequest {
    id: string;
    removeMemberRequestBodyDto: RemoveMemberRequestBodyDto;
}
export interface RevokeInviteRequest {
    id: string;
    revokeInviteRequestBodyDto: RevokeInviteRequestBodyDto;
}
/**
 * MembershipsApi - interface
 *
 * @export
 * @interface MembershipsApiInterface
 */
export interface MembershipsApiInterface {
    /**
     *
     * @summary Create a new organization invite.
     * @param {CreateInviteRequestBodyDto} createInviteRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    createInviteRaw(requestParameters: CreateInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InviteEntity>>;
    /**
     * Create a new organization invite.
     */
    createInvite(requestParameters: CreateInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InviteEntity>;
    /**
     *
     * @summary List all organization invites.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    findAllInvitesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InviteEntity>>>;
    /**
     * List all organization invites.
     */
    findAllInvites(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InviteEntity>>;
    /**
     *
     * @summary List all organization members.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    findAllMembersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MemberEntity>>>;
    /**
     * List all organization members.
     */
    findAllMembers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MemberEntity>>;
    /**
     *
     * @summary Atualiza parcialmente um membro da organização.
     * @param {string} id Id do usuário membro a ser atualizado.
     * @param {PartialUpdateMemberRequestBodyDto} partialUpdateMemberRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    partialUpdateMemberRaw(requestParameters: PartialUpdateMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberEntity>>;
    /**
     * Atualiza parcialmente um membro da organização.
     */
    partialUpdateMember(requestParameters: PartialUpdateMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberEntity>;
    /**
     *
     * @summary Remove um membro da organização.
     * @param {string} id Id do usuário membro a ser removido.
     * @param {RemoveMemberRequestBodyDto} removeMemberRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    removeMemberRaw(requestParameters: RemoveMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove um membro da organização.
     */
    removeMember(requestParameters: RemoveMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *
     * @summary Revoke an organization invite.
     * @param {string} id Invite ID to revoke
     * @param {RevokeInviteRequestBodyDto} revokeInviteRequestBodyDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MembershipsApiInterface
     */
    revokeInviteRaw(requestParameters: RevokeInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InviteEntity>>;
    /**
     * Revoke an organization invite.
     */
    revokeInvite(requestParameters: RevokeInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InviteEntity>;
}
/**
 *
 */
export declare class MembershipsApi extends runtime.BaseAPI implements MembershipsApiInterface {
    /**
     * Create a new organization invite.
     */
    createInviteRaw(requestParameters: CreateInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InviteEntity>>;
    /**
     * Create a new organization invite.
     */
    createInvite(requestParameters: CreateInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InviteEntity>;
    /**
     * List all organization invites.
     */
    findAllInvitesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InviteEntity>>>;
    /**
     * List all organization invites.
     */
    findAllInvites(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InviteEntity>>;
    /**
     * List all organization members.
     */
    findAllMembersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<MemberEntity>>>;
    /**
     * List all organization members.
     */
    findAllMembers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<MemberEntity>>;
    /**
     * Atualiza parcialmente um membro da organização.
     */
    partialUpdateMemberRaw(requestParameters: PartialUpdateMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MemberEntity>>;
    /**
     * Atualiza parcialmente um membro da organização.
     */
    partialUpdateMember(requestParameters: PartialUpdateMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MemberEntity>;
    /**
     * Remove um membro da organização.
     */
    removeMemberRaw(requestParameters: RemoveMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Remove um membro da organização.
     */
    removeMember(requestParameters: RemoveMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Revoke an organization invite.
     */
    revokeInviteRaw(requestParameters: RevokeInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InviteEntity>>;
    /**
     * Revoke an organization invite.
     */
    revokeInvite(requestParameters: RevokeInviteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InviteEntity>;
}