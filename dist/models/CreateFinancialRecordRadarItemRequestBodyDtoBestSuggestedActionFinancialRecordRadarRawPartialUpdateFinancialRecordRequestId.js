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
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdTypeEnum = void 0;
exports.instanceOfCreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId = instanceOfCreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId;
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSON = CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSON;
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSONTyped = CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSONTyped;
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSON = CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSON;
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSONTyped = CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSONTyped;
/**
 * @export
 */
exports.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdTypeEnum = {
    SpecificResource: 'SPECIFIC_RESOURCE',
    RadarItem: 'RADAR_ITEM'
};
/**
 * Check if a given object implements the CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId interface.
 */
function instanceOfCreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestId(value) {
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSON(json) {
    return CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSONTyped(json, false);
}
function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'type': json['type'],
        'value': json['value'],
    };
}
function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSON(json) {
    return CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSONTyped(json, false);
}
function CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFinancialRecordRadarRawPartialUpdateFinancialRecordRequestIdToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'type': value['type'],
        'value': value['value'],
    };
}
