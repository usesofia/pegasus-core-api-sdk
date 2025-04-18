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
exports.instanceOfCreateOrganizationRequestBodyDtoGroupSettings = instanceOfCreateOrganizationRequestBodyDtoGroupSettings;
exports.CreateOrganizationRequestBodyDtoGroupSettingsFromJSON = CreateOrganizationRequestBodyDtoGroupSettingsFromJSON;
exports.CreateOrganizationRequestBodyDtoGroupSettingsFromJSONTyped = CreateOrganizationRequestBodyDtoGroupSettingsFromJSONTyped;
exports.CreateOrganizationRequestBodyDtoGroupSettingsToJSON = CreateOrganizationRequestBodyDtoGroupSettingsToJSON;
exports.CreateOrganizationRequestBodyDtoGroupSettingsToJSONTyped = CreateOrganizationRequestBodyDtoGroupSettingsToJSONTyped;
/**
 * Check if a given object implements the CreateOrganizationRequestBodyDtoGroupSettings interface.
 */
function instanceOfCreateOrganizationRequestBodyDtoGroupSettings(value) {
    if (!('sharedContacts' in value) || value['sharedContacts'] === undefined)
        return false;
    if (!('sharedTags' in value) || value['sharedTags'] === undefined)
        return false;
    if (!('sharedSubcategories' in value) || value['sharedSubcategories'] === undefined)
        return false;
    return true;
}
function CreateOrganizationRequestBodyDtoGroupSettingsFromJSON(json) {
    return CreateOrganizationRequestBodyDtoGroupSettingsFromJSONTyped(json, false);
}
function CreateOrganizationRequestBodyDtoGroupSettingsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'sharedContacts': json['sharedContacts'],
        'sharedTags': json['sharedTags'],
        'sharedSubcategories': json['sharedSubcategories'],
    };
}
function CreateOrganizationRequestBodyDtoGroupSettingsToJSON(json) {
    return CreateOrganizationRequestBodyDtoGroupSettingsToJSONTyped(json, false);
}
function CreateOrganizationRequestBodyDtoGroupSettingsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'sharedContacts': value['sharedContacts'],
        'sharedTags': value['sharedTags'],
        'sharedSubcategories': value['sharedSubcategories'],
    };
}
