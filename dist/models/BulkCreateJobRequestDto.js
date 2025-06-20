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
exports.BulkCreateJobRequestDtoChannelEnum = exports.BulkCreateJobRequestDtoResourceEnum = void 0;
exports.instanceOfBulkCreateJobRequestDto = instanceOfBulkCreateJobRequestDto;
exports.BulkCreateJobRequestDtoFromJSON = BulkCreateJobRequestDtoFromJSON;
exports.BulkCreateJobRequestDtoFromJSONTyped = BulkCreateJobRequestDtoFromJSONTyped;
exports.BulkCreateJobRequestDtoToJSON = BulkCreateJobRequestDtoToJSON;
exports.BulkCreateJobRequestDtoToJSONTyped = BulkCreateJobRequestDtoToJSONTyped;
/**
 * @export
 */
exports.BulkCreateJobRequestDtoResourceEnum = {
    FinancialRecords: 'FinancialRecords',
    Contacts: 'Contacts',
    BankAccounts: 'BankAccounts',
    BankTransactions: 'BankTransactions',
    InstallmentFinancialRecords: 'InstallmentFinancialRecords',
    RecurringFinancialRecords: 'RecurringFinancialRecords',
    Tags: 'Tags',
    Subcategories: 'Subcategories'
};
/**
 * @export
 */
exports.BulkCreateJobRequestDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the BulkCreateJobRequestDto interface.
 */
function instanceOfBulkCreateJobRequestDto(value) {
    if (!('fileId' in value) || value['fileId'] === undefined)
        return false;
    if (!('resource' in value) || value['resource'] === undefined)
        return false;
    if (!('nRows' in value) || value['nRows'] === undefined)
        return false;
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function BulkCreateJobRequestDtoFromJSON(json) {
    return BulkCreateJobRequestDtoFromJSONTyped(json, false);
}
function BulkCreateJobRequestDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'fileId': json['fileId'],
        'resource': json['resource'],
        'nRows': json['nRows'],
        'channel': json['channel'],
        'radarItem': json['radarItem'] == null ? undefined : json['radarItem'],
    };
}
function BulkCreateJobRequestDtoToJSON(json) {
    return BulkCreateJobRequestDtoToJSONTyped(json, false);
}
function BulkCreateJobRequestDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'fileId': value['fileId'],
        'resource': value['resource'],
        'nRows': value['nRows'],
        'channel': value['channel'],
        'radarItem': value['radarItem'],
    };
}
