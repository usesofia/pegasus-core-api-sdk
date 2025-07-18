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
exports.CreateBankAccountRequestBodyDtoChannelEnum = exports.CreateBankAccountRequestBodyDtoProviderEnum = exports.CreateBankAccountRequestBodyDtoTypeEnum = void 0;
exports.instanceOfCreateBankAccountRequestBodyDto = instanceOfCreateBankAccountRequestBodyDto;
exports.CreateBankAccountRequestBodyDtoFromJSON = CreateBankAccountRequestBodyDtoFromJSON;
exports.CreateBankAccountRequestBodyDtoFromJSONTyped = CreateBankAccountRequestBodyDtoFromJSONTyped;
exports.CreateBankAccountRequestBodyDtoToJSON = CreateBankAccountRequestBodyDtoToJSON;
exports.CreateBankAccountRequestBodyDtoToJSONTyped = CreateBankAccountRequestBodyDtoToJSONTyped;
var CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution_1 = require("./CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution");
/**
 * @export
 */
exports.CreateBankAccountRequestBodyDtoTypeEnum = {
    Money: 'MONEY',
    Checking: 'CHECKING',
    Savings: 'SAVINGS',
    CreditCard: 'CREDIT_CARD',
    Application: 'APPLICATION',
    Other: 'OTHER'
};
/**
 * @export
 */
exports.CreateBankAccountRequestBodyDtoProviderEnum = {
    Pluggy: 'PLUGGY',
    Ofx: 'OFX',
    Other: 'OTHER'
};
/**
 * @export
 */
exports.CreateBankAccountRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the CreateBankAccountRequestBodyDto interface.
 */
function instanceOfCreateBankAccountRequestBodyDto(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('number' in value) || value['number'] === undefined)
        return false;
    if (!('isAutomatic' in value) || value['isAutomatic'] === undefined)
        return false;
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function CreateBankAccountRequestBodyDtoFromJSON(json) {
    return CreateBankAccountRequestBodyDtoFromJSONTyped(json, false);
}
function CreateBankAccountRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'type': json['type'],
        'number': json['number'],
        'considerInCashFlow': json['considerInCashFlow'] == null ? undefined : json['considerInCashFlow'],
        'isAutomatic': json['isAutomatic'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
        'initialBalanceDate': json['initialBalanceDate'] == null ? undefined : json['initialBalanceDate'],
        'initialBalanceAmount': json['initialBalanceAmount'] == null ? undefined : json['initialBalanceAmount'],
        'institution': json['institution'] == null ? undefined : json['institution'],
        'institutionName': json['institutionName'] == null ? undefined : json['institutionName'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerAccountId': json['providerAccountId'] == null ? undefined : json['providerAccountId'],
        'providerItemId': json['providerItemId'] == null ? undefined : json['providerItemId'],
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'populatedInstitution': json['populatedInstitution'] == null ? undefined : (0, CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution_1.CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitutionFromJSON)(json['populatedInstitution']),
        'channel': json['channel'],
    };
}
function CreateBankAccountRequestBodyDtoToJSON(json) {
    return CreateBankAccountRequestBodyDtoToJSONTyped(json, false);
}
function CreateBankAccountRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'type': value['type'],
        'number': value['number'],
        'considerInCashFlow': value['considerInCashFlow'],
        'isAutomatic': value['isAutomatic'],
        'isDefault': value['isDefault'],
        'initialBalanceDate': value['initialBalanceDate'],
        'initialBalanceAmount': value['initialBalanceAmount'],
        'institution': value['institution'],
        'institutionName': value['institutionName'],
        'provider': value['provider'],
        'providerAccountId': value['providerAccountId'],
        'providerItemId': value['providerItemId'],
        'searchScore': value['searchScore'],
        'populatedInstitution': (0, CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitution_1.CreateFinancialRecordRequestBodyDtoPopulatedAccountPopulatedInstitutionToJSON)(value['populatedInstitution']),
        'channel': value['channel'],
    };
}
