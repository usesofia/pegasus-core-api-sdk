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
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum = exports.CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum = exports.CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum = exports.CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum = void 0;
exports.instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItem = instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItem;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemToJSON = CreatedFinancialRecordRadarItemResultEntityRadarItemToJSON;
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped = CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped;
var CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner");
var CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData_1 = require("./CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData");
var CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction_1 = require("./CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction");
var CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions");
var CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData_1 = require("./CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData");
var CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute");
var CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData");
var CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1 = require("./CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction");
/**
 * @export
 */
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum = {
    WhatsappAgent: 'WHATSAPP_AGENT',
    EmailForwardingIntegration: 'EMAIL_FORWARDING_INTEGRATION'
};
/**
 * @export
 */
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum = {
    WhatsappMessage: 'WHATSAPP_MESSAGE',
    EmailMessage: 'EMAIL_MESSAGE'
};
/**
 * @export
 */
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum = {
    Pending: 'PENDING',
    Linked: 'LINKED',
    Archived: 'ARCHIVED'
};
/**
 * @export
 */
exports.CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum = {
    Main: 'MAIN',
    Spam: 'SPAM'
};
/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItem interface.
 */
function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItem(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined)
        return false;
    if (!('origin' in value) || value['origin'] === undefined)
        return false;
    if (!('nature' in value) || value['nature'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('folder' in value) || value['folder'] === undefined)
        return false;
    if (!('links' in value) || value['links'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'origin': json['origin'],
        'nature': json['nature'],
        'status': json['status'],
        'folder': json['folder'],
        'links': json['links'],
        'bestSuggestedAction': json['bestSuggestedAction'] == null ? undefined : (0, CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction_1.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFromJSON)(json['bestSuggestedAction']),
        'finalBestSuggestedAction': json['finalBestSuggestedAction'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1.CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFromJSON)(json['finalBestSuggestedAction']),
        'extractedFinancialRecordData': json['extractedFinancialRecordData'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData_1.CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataFromJSON)(json['extractedFinancialRecordData']),
        'subsequentRadarItems': json['subsequentRadarItems'] == null ? undefined : (json['subsequentRadarItems'].map(CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner_1.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerFromJSON)),
        'whatsappMessageData': json['whatsappMessageData'] == null ? undefined : (0, CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataFromJSON)(json['whatsappMessageData']),
        'emailMessageData': json['emailMessageData'] == null ? undefined : (0, CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData_1.CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataFromJSON)(json['emailMessageData']),
        'autoExecute': json['autoExecute'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteFromJSON)(json['autoExecute']),
        'asyncActions': json['asyncActions'] == null ? undefined : (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON)(json['asyncActions']),
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemToJSON(json) {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped(json, false);
}
function CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
        'origin': value['origin'],
        'nature': value['nature'],
        'status': value['status'],
        'folder': value['folder'],
        'links': value['links'],
        'bestSuggestedAction': (0, CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction_1.CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionToJSON)(value['bestSuggestedAction']),
        'finalBestSuggestedAction': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction_1.CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionToJSON)(value['finalBestSuggestedAction']),
        'extractedFinancialRecordData': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData_1.CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataToJSON)(value['extractedFinancialRecordData']),
        'subsequentRadarItems': value['subsequentRadarItems'] == null ? undefined : (value['subsequentRadarItems'].map(CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner_1.CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerToJSON)),
        'whatsappMessageData': (0, CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData_1.CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataToJSON)(value['whatsappMessageData']),
        'emailMessageData': (0, CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData_1.CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataToJSON)(value['emailMessageData']),
        'autoExecute': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteToJSON)(value['autoExecute']),
        'asyncActions': (0, CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions_1.CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON)(value['asyncActions']),
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
