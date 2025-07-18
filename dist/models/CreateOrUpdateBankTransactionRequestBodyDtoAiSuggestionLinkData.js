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
exports.instanceOfCreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData = instanceOfCreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData;
exports.CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSON = CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSON;
exports.CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSONTyped = CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSONTyped;
exports.CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSON = CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSON;
exports.CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSONTyped = CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSONTyped;
/**
 * Check if a given object implements the CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData interface.
 */
function instanceOfCreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData(value) {
    if (!('financialRecordId' in value) || value['financialRecordId'] === undefined)
        return false;
    return true;
}
function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSON(json) {
    return CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSONTyped(json, false);
}
function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'financialRecordId': json['financialRecordId'],
    };
}
function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSON(json) {
    return CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSONTyped(json, false);
}
function CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'financialRecordId': value['financialRecordId'],
    };
}
