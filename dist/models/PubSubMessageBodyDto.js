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
exports.instanceOfPubSubMessageBodyDto = instanceOfPubSubMessageBodyDto;
exports.PubSubMessageBodyDtoFromJSON = PubSubMessageBodyDtoFromJSON;
exports.PubSubMessageBodyDtoFromJSONTyped = PubSubMessageBodyDtoFromJSONTyped;
exports.PubSubMessageBodyDtoToJSON = PubSubMessageBodyDtoToJSON;
exports.PubSubMessageBodyDtoToJSONTyped = PubSubMessageBodyDtoToJSONTyped;
var PubSubMessageBodyDtoMessage_1 = require("./PubSubMessageBodyDtoMessage");
/**
 * Check if a given object implements the PubSubMessageBodyDto interface.
 */
function instanceOfPubSubMessageBodyDto(value) {
    if (!('message' in value) || value['message'] === undefined)
        return false;
    if (!('subscription' in value) || value['subscription'] === undefined)
        return false;
    return true;
}
function PubSubMessageBodyDtoFromJSON(json) {
    return PubSubMessageBodyDtoFromJSONTyped(json, false);
}
function PubSubMessageBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'message': (0, PubSubMessageBodyDtoMessage_1.PubSubMessageBodyDtoMessageFromJSON)(json['message']),
        'subscription': json['subscription'],
    };
}
function PubSubMessageBodyDtoToJSON(json) {
    return PubSubMessageBodyDtoToJSONTyped(json, false);
}
function PubSubMessageBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'message': (0, PubSubMessageBodyDtoMessage_1.PubSubMessageBodyDtoMessageToJSON)(value['message']),
        'subscription': value['subscription'],
    };
}