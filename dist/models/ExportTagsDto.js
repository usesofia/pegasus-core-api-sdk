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
exports.instanceOfExportTagsDto = instanceOfExportTagsDto;
exports.ExportTagsDtoFromJSON = ExportTagsDtoFromJSON;
exports.ExportTagsDtoFromJSONTyped = ExportTagsDtoFromJSONTyped;
exports.ExportTagsDtoToJSON = ExportTagsDtoToJSON;
exports.ExportTagsDtoToJSONTyped = ExportTagsDtoToJSONTyped;
/**
 * Check if a given object implements the ExportTagsDto interface.
 */
function instanceOfExportTagsDto(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    return true;
}
function ExportTagsDtoFromJSON(json) {
    return ExportTagsDtoFromJSONTyped(json, false);
}
function ExportTagsDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
    };
}
function ExportTagsDtoToJSON(json) {
    return ExportTagsDtoToJSONTyped(json, false);
}
function ExportTagsDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
    };
}
