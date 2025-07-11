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
exports.FinancialRecordRadarItemEntityAutoExecuteExecutionStatusEnum = void 0;
exports.instanceOfFinancialRecordRadarItemEntityAutoExecute = instanceOfFinancialRecordRadarItemEntityAutoExecute;
exports.FinancialRecordRadarItemEntityAutoExecuteFromJSON = FinancialRecordRadarItemEntityAutoExecuteFromJSON;
exports.FinancialRecordRadarItemEntityAutoExecuteFromJSONTyped = FinancialRecordRadarItemEntityAutoExecuteFromJSONTyped;
exports.FinancialRecordRadarItemEntityAutoExecuteToJSON = FinancialRecordRadarItemEntityAutoExecuteToJSON;
exports.FinancialRecordRadarItemEntityAutoExecuteToJSONTyped = FinancialRecordRadarItemEntityAutoExecuteToJSONTyped;
var FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord_1 = require("./FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord");
var FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord_1 = require("./FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord");
var CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest");
var FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord_1 = require("./FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord");
var CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction");
/**
 * @export
 */
exports.FinancialRecordRadarItemEntityAutoExecuteExecutionStatusEnum = {
    Success: 'SUCCESS',
    Failed: 'FAILED'
};
/**
 * Check if a given object implements the FinancialRecordRadarItemEntityAutoExecute interface.
 */
function instanceOfFinancialRecordRadarItemEntityAutoExecute(value) {
    if (!('executionStatus' in value) || value['executionStatus'] === undefined)
        return false;
    if (!('executedAt' in value) || value['executedAt'] === undefined)
        return false;
    return true;
}
function FinancialRecordRadarItemEntityAutoExecuteFromJSON(json) {
    return FinancialRecordRadarItemEntityAutoExecuteFromJSONTyped(json, false);
}
function FinancialRecordRadarItemEntityAutoExecuteFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'finalBestSuggestedAction': json['finalBestSuggestedAction'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1.CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFromJSON)(json['finalBestSuggestedAction']),
        'executionStatus': json['executionStatus'],
        'executionErrorMessage': json['executionErrorMessage'] == null ? undefined : json['executionErrorMessage'],
        'executedAt': json['executedAt'],
        'createdFinancialRecord': json['createdFinancialRecord'] == null ? undefined : (0, FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecordFromJSON)(json['createdFinancialRecord']),
        'partialUpdatedFinancialRecord': json['partialUpdatedFinancialRecord'] == null ? undefined : (0, FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecordFromJSON)(json['partialUpdatedFinancialRecord']),
        'bulkCreateJobRequest': json['bulkCreateJobRequest'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequestFromJSON)(json['bulkCreateJobRequest']),
        'linkedFinancialRecord': json['linkedFinancialRecord'] == null ? undefined : (0, FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecordFromJSON)(json['linkedFinancialRecord']),
    };
}
function FinancialRecordRadarItemEntityAutoExecuteToJSON(json) {
    return FinancialRecordRadarItemEntityAutoExecuteToJSONTyped(json, false);
}
function FinancialRecordRadarItemEntityAutoExecuteToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'finalBestSuggestedAction': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1.CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionToJSON)(value['finalBestSuggestedAction']),
        'executionStatus': value['executionStatus'],
        'executionErrorMessage': value['executionErrorMessage'],
        'executedAt': value['executedAt'],
        'createdFinancialRecord': (0, FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecuteCreatedFinancialRecordToJSON)(value['createdFinancialRecord']),
        'partialUpdatedFinancialRecord': (0, FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecutePartialUpdatedFinancialRecordToJSON)(value['partialUpdatedFinancialRecord']),
        'bulkCreateJobRequest': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequestToJSON)(value['bulkCreateJobRequest']),
        'linkedFinancialRecord': (0, FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecord_1.FinancialRecordRadarItemEntityAutoExecuteLinkedFinancialRecordToJSON)(value['linkedFinancialRecord']),
    };
}
