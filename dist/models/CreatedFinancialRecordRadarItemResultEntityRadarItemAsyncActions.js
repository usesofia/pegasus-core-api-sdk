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
exports.instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions = instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSONTyped;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSONTyped;
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions interface.
 */
function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions(value) {
    if (!('bulkCreateInProgress' in value) || value['bulkCreateInProgress'] === undefined)
        return false;
    return true;
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'bulkCreateInProgress': json['bulkCreateInProgress'],
    };
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'bulkCreateInProgress': value['bulkCreateInProgress'],
    };
}
