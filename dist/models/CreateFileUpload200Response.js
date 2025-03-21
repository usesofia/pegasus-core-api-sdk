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
exports.instanceOfCreateFileUpload200Response = instanceOfCreateFileUpload200Response;
exports.CreateFileUpload200ResponseFromJSON = CreateFileUpload200ResponseFromJSON;
exports.CreateFileUpload200ResponseFromJSONTyped = CreateFileUpload200ResponseFromJSONTyped;
exports.CreateFileUpload200ResponseToJSON = CreateFileUpload200ResponseToJSON;
exports.CreateFileUpload200ResponseToJSONTyped = CreateFileUpload200ResponseToJSONTyped;
/**
 * Check if a given object implements the CreateFileUpload200Response interface.
 */
function instanceOfCreateFileUpload200Response(value) {
    return true;
}
function CreateFileUpload200ResponseFromJSON(json) {
    return CreateFileUpload200ResponseFromJSONTyped(json, false);
}
function CreateFileUpload200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fileId': json['fileId'] == null ? undefined : json['fileId'],
        'uploadUrl': json['uploadUrl'] == null ? undefined : json['uploadUrl'],
    };
}
function CreateFileUpload200ResponseToJSON(json) {
    return CreateFileUpload200ResponseToJSONTyped(json, false);
}
function CreateFileUpload200ResponseToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'fileId': value['fileId'],
        'uploadUrl': value['uploadUrl'],
    };
}
