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
exports.CreateContactRequestBodyDtoChannelEnum = exports.CreateContactRequestBodyDtoOriginEnum = exports.CreateContactRequestBodyDtoDocumentTypeEnum = exports.CreateContactRequestBodyDtoTypesEnum = void 0;
exports.instanceOfCreateContactRequestBodyDto = instanceOfCreateContactRequestBodyDto;
exports.CreateContactRequestBodyDtoFromJSON = CreateContactRequestBodyDtoFromJSON;
exports.CreateContactRequestBodyDtoFromJSONTyped = CreateContactRequestBodyDtoFromJSONTyped;
exports.CreateContactRequestBodyDtoToJSON = CreateContactRequestBodyDtoToJSON;
exports.CreateContactRequestBodyDtoToJSONTyped = CreateContactRequestBodyDtoToJSONTyped;
var CreateContactRequestBodyDtoAddress_1 = require("./CreateContactRequestBodyDtoAddress");
/**
 * @export
 */
exports.CreateContactRequestBodyDtoTypesEnum = {
    Customer: 'CUSTOMER',
    Employee: 'EMPLOYEE',
    Supplier: 'SUPPLIER',
    Partner: 'PARTNER'
};
/**
 * @export
 */
exports.CreateContactRequestBodyDtoDocumentTypeEnum = {
    Cnpj: 'CNPJ',
    Cpf: 'CPF'
};
/**
 * @export
 */
exports.CreateContactRequestBodyDtoOriginEnum = {
    Indication: 'INDICATION',
    Ads: 'ADS',
    OrganicSearch: 'ORGANIC_SEARCH',
    SocialMedia: 'SOCIAL_MEDIA',
    Events: 'EVENTS',
    Partnerships: 'PARTNERSHIPS',
    PhysicalStore: 'PHYSICAL_STORE',
    Other: 'OTHER'
};
/**
 * @export
 */
exports.CreateContactRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the CreateContactRequestBodyDto interface.
 */
function instanceOfCreateContactRequestBodyDto(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('types' in value) || value['types'] === undefined)
        return false;
    if (!('document' in value) || value['document'] === undefined)
        return false;
    if (!('email' in value) || value['email'] === undefined)
        return false;
    if (!('phone' in value) || value['phone'] === undefined)
        return false;
    if (!('pixKeys' in value) || value['pixKeys'] === undefined)
        return false;
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function CreateContactRequestBodyDtoFromJSON(json) {
    return CreateContactRequestBodyDtoFromJSONTyped(json, false);
}
function CreateContactRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'types': json['types'],
        'documentType': json['documentType'] == null ? undefined : json['documentType'],
        'document': json['document'],
        'email': json['email'],
        'phone': json['phone'],
        'pixKeys': json['pixKeys'],
        'birthDate': json['birthDate'] == null ? undefined : json['birthDate'],
        'origin': json['origin'] == null ? undefined : json['origin'],
        'address': json['address'] == null ? undefined : (0, CreateContactRequestBodyDtoAddress_1.CreateContactRequestBodyDtoAddressFromJSON)(json['address']),
        'searchScore': json['searchScore'] == null ? undefined : json['searchScore'],
        'channel': json['channel'],
    };
}
function CreateContactRequestBodyDtoToJSON(json) {
    return CreateContactRequestBodyDtoToJSONTyped(json, false);
}
function CreateContactRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'types': value['types'],
        'documentType': value['documentType'],
        'document': value['document'],
        'email': value['email'],
        'phone': value['phone'],
        'pixKeys': value['pixKeys'],
        'birthDate': value['birthDate'],
        'origin': value['origin'],
        'address': (0, CreateContactRequestBodyDtoAddress_1.CreateContactRequestBodyDtoAddressToJSON)(value['address']),
        'searchScore': value['searchScore'],
        'channel': value['channel'],
    };
}
