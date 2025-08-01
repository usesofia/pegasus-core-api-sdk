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
exports.instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData = instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSONTyped;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSONTyped;
var CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage_1 = require("./CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage");
var CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner_1 = require("./CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner");
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData interface.
 */
function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageData(value) {
    if (!('currentMessage' in value) || value['currentMessage'] === undefined)
        return false;
    if (!('lastMessages' in value) || value['lastMessages'] === undefined)
        return false;
    return true;
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'currentMessage': (0, CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFromJSON)(json['currentMessage']),
        'lastMessages': (json['lastMessages'].map(CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInnerFromJSON)),
    };
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerWhatsappMessageDataToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'currentMessage': (0, CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageToJSON)(value['currentMessage']),
        'lastMessages': (value['lastMessages'].map(CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInnerToJSON)),
    };
}
