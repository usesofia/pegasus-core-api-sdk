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
exports.CreateTagRequestBodyDtoChannelEnum = void 0;
exports.instanceOfCreateTagRequestBodyDto = instanceOfCreateTagRequestBodyDto;
exports.CreateTagRequestBodyDtoFromJSON = CreateTagRequestBodyDtoFromJSON;
exports.CreateTagRequestBodyDtoFromJSONTyped = CreateTagRequestBodyDtoFromJSONTyped;
exports.CreateTagRequestBodyDtoToJSON = CreateTagRequestBodyDtoToJSON;
exports.CreateTagRequestBodyDtoToJSONTyped = CreateTagRequestBodyDtoToJSONTyped;
/**
 * @export
 */
exports.CreateTagRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the CreateTagRequestBodyDto interface.
 */
function instanceOfCreateTagRequestBodyDto(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function CreateTagRequestBodyDtoFromJSON(json) {
    return CreateTagRequestBodyDtoFromJSONTyped(json, false);
}
function CreateTagRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'channel': json['channel'],
    };
}
function CreateTagRequestBodyDtoToJSON(json) {
    return CreateTagRequestBodyDtoToJSONTyped(json, false);
}
function CreateTagRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'searchScore': value['searchScore'],
        'channel': value['channel'],
    };
}
