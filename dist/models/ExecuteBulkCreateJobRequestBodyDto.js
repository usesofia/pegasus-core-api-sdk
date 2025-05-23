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
exports.instanceOfExecuteBulkCreateJobRequestBodyDto = instanceOfExecuteBulkCreateJobRequestBodyDto;
exports.ExecuteBulkCreateJobRequestBodyDtoFromJSON = ExecuteBulkCreateJobRequestBodyDtoFromJSON;
exports.ExecuteBulkCreateJobRequestBodyDtoFromJSONTyped = ExecuteBulkCreateJobRequestBodyDtoFromJSONTyped;
exports.ExecuteBulkCreateJobRequestBodyDtoToJSON = ExecuteBulkCreateJobRequestBodyDtoToJSON;
exports.ExecuteBulkCreateJobRequestBodyDtoToJSONTyped = ExecuteBulkCreateJobRequestBodyDtoToJSONTyped;
var ProcessExportResourceJobRequestBodyDtoRequester_1 = require("./ProcessExportResourceJobRequestBodyDtoRequester");
/**
 * Check if a given object implements the ExecuteBulkCreateJobRequestBodyDto interface.
 */
function instanceOfExecuteBulkCreateJobRequestBodyDto(value) {
    if (!('requester' in value) || value['requester'] === undefined)
        return false;
    if (!('bulkCreateJobRequestId' in value) || value['bulkCreateJobRequestId'] === undefined)
        return false;
    return true;
}
function ExecuteBulkCreateJobRequestBodyDtoFromJSON(json) {
    return ExecuteBulkCreateJobRequestBodyDtoFromJSONTyped(json, false);
}
function ExecuteBulkCreateJobRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'requester': (0, ProcessExportResourceJobRequestBodyDtoRequester_1.ProcessExportResourceJobRequestBodyDtoRequesterFromJSON)(json['requester']),
        'bulkCreateJobRequestId': json['bulkCreateJobRequestId'],
    };
}
function ExecuteBulkCreateJobRequestBodyDtoToJSON(json) {
    return ExecuteBulkCreateJobRequestBodyDtoToJSONTyped(json, false);
}
function ExecuteBulkCreateJobRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'requester': (0, ProcessExportResourceJobRequestBodyDtoRequester_1.ProcessExportResourceJobRequestBodyDtoRequesterToJSON)(value['requester']),
        'bulkCreateJobRequestId': value['bulkCreateJobRequestId'],
    };
}
