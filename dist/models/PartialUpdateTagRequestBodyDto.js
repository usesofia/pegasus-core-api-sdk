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
exports.PartialUpdateTagRequestBodyDtoChannelEnum = void 0;
exports.instanceOfPartialUpdateTagRequestBodyDto = instanceOfPartialUpdateTagRequestBodyDto;
exports.PartialUpdateTagRequestBodyDtoFromJSON = PartialUpdateTagRequestBodyDtoFromJSON;
exports.PartialUpdateTagRequestBodyDtoFromJSONTyped = PartialUpdateTagRequestBodyDtoFromJSONTyped;
exports.PartialUpdateTagRequestBodyDtoToJSON = PartialUpdateTagRequestBodyDtoToJSON;
exports.PartialUpdateTagRequestBodyDtoToJSONTyped = PartialUpdateTagRequestBodyDtoToJSONTyped;
/**
 * @export
 */
exports.PartialUpdateTagRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP'
};
/**
 * Check if a given object implements the PartialUpdateTagRequestBodyDto interface.
 */
function instanceOfPartialUpdateTagRequestBodyDto(value) {
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function PartialUpdateTagRequestBodyDtoFromJSON(json) {
    return PartialUpdateTagRequestBodyDtoFromJSONTyped(json, false);
}
function PartialUpdateTagRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'channel': json['channel'],
    };
}
function PartialUpdateTagRequestBodyDtoToJSON(json) {
    return PartialUpdateTagRequestBodyDtoToJSONTyped(json, false);
}
function PartialUpdateTagRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'channel': value['channel'],
    };
}