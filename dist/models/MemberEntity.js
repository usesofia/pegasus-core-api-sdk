"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Sofia Pegasus core-api
 * Api principal do sistema Pegasus para gerenciamento financeiro de pequenas e médias empresas.
 *
 * The version of the OpenAPI document: 1.0.8
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberEntityRoleEnum = void 0;
exports.instanceOfMemberEntity = instanceOfMemberEntity;
exports.MemberEntityFromJSON = MemberEntityFromJSON;
exports.MemberEntityFromJSONTyped = MemberEntityFromJSONTyped;
exports.MemberEntityToJSON = MemberEntityToJSON;
exports.MemberEntityToJSONTyped = MemberEntityToJSONTyped;
/**
 * @export
 */
exports.MemberEntityRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
};
/**
 * Check if a given object implements the MemberEntity interface.
 */
function instanceOfMemberEntity(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('email' in value) || value['email'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function MemberEntityFromJSON(json) {
    return MemberEntityFromJSONTyped(json, false);
}
function MemberEntityFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'user': json['user'],
        'email': json['email'],
        'role': json['role'],
        'firstName': json['firstName'] == null ? undefined : json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'imageUrl': json['imageUrl'] == null ? undefined : json['imageUrl'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}
function MemberEntityToJSON(json) {
    return MemberEntityToJSONTyped(json, false);
}
function MemberEntityToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'user': value['user'],
        'email': value['email'],
        'role': value['role'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'imageUrl': value['imageUrl'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
