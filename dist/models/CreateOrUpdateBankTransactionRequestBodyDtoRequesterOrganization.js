"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum = exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum = void 0;
exports.instanceOfCreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization = instanceOfCreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization;
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSON = CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSON;
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped = CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped;
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSON = CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSON;
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped = CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped;
var CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner_1 = require("./CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner");
var CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent_1 = require("./CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent");
/**
 * @export
 */
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
};
/**
 * @export
 */
exports.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationTypeEnum = {
    Leaf: 'LEAF',
    Group: 'GROUP'
};
/**
 * Check if a given object implements the CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization interface.
 */
function instanceOfCreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganization(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSON(json) {
    return CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped(json, false);
}
function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'role': json['role'],
        'type': json['type'],
        'parent': json['parent'] == null ? undefined : (0, CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent_1.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentFromJSON)(json['parent']),
        'children': json['children'] == null ? undefined : (json['children'].map(CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner_1.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON)),
    };
}
function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSON(json) {
    return CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped(json, false);
}
function CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'role': value['role'],
        'type': value['type'],
        'parent': (0, CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParent_1.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationParentToJSON)(value['parent']),
        'children': value['children'] == null ? undefined : (value['children'].map(CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInner_1.CreateOrUpdateBankTransactionRequestBodyDtoRequesterOrganizationChildrenInnerToJSON)),
    };
}
