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
exports.RemoveTagRequestBodyDtoChannelEnum = void 0;
exports.instanceOfRemoveTagRequestBodyDto = instanceOfRemoveTagRequestBodyDto;
exports.RemoveTagRequestBodyDtoFromJSON = RemoveTagRequestBodyDtoFromJSON;
exports.RemoveTagRequestBodyDtoFromJSONTyped = RemoveTagRequestBodyDtoFromJSONTyped;
exports.RemoveTagRequestBodyDtoToJSON = RemoveTagRequestBodyDtoToJSON;
exports.RemoveTagRequestBodyDtoToJSONTyped = RemoveTagRequestBodyDtoToJSONTyped;
/**
 * @export
 */
exports.RemoveTagRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the RemoveTagRequestBodyDto interface.
 */
function instanceOfRemoveTagRequestBodyDto(value) {
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function RemoveTagRequestBodyDtoFromJSON(json) {
    return RemoveTagRequestBodyDtoFromJSONTyped(json, false);
}
function RemoveTagRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'channel': json['channel'],
    };
}
function RemoveTagRequestBodyDtoToJSON(json) {
    return RemoveTagRequestBodyDtoToJSONTyped(json, false);
}
function RemoveTagRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'channel': value['channel'],
    };
}
