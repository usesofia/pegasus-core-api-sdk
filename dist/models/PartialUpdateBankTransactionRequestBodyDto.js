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
exports.PartialUpdateBankTransactionRequestBodyDtoChannelEnum = void 0;
exports.instanceOfPartialUpdateBankTransactionRequestBodyDto = instanceOfPartialUpdateBankTransactionRequestBodyDto;
exports.PartialUpdateBankTransactionRequestBodyDtoFromJSON = PartialUpdateBankTransactionRequestBodyDtoFromJSON;
exports.PartialUpdateBankTransactionRequestBodyDtoFromJSONTyped = PartialUpdateBankTransactionRequestBodyDtoFromJSONTyped;
exports.PartialUpdateBankTransactionRequestBodyDtoToJSON = PartialUpdateBankTransactionRequestBodyDtoToJSON;
exports.PartialUpdateBankTransactionRequestBodyDtoToJSONTyped = PartialUpdateBankTransactionRequestBodyDtoToJSONTyped;
/**
 * @export
 */
exports.PartialUpdateBankTransactionRequestBodyDtoChannelEnum = {
    WebApp: 'WEB_APP',
    Whatsapp: 'WHATSAPP',
    System: 'SYSTEM',
    Email: 'EMAIL'
};
/**
 * Check if a given object implements the PartialUpdateBankTransactionRequestBodyDto interface.
 */
function instanceOfPartialUpdateBankTransactionRequestBodyDto(value) {
    if (!('channel' in value) || value['channel'] === undefined)
        return false;
    return true;
}
function PartialUpdateBankTransactionRequestBodyDtoFromJSON(json) {
    return PartialUpdateBankTransactionRequestBodyDtoFromJSONTyped(json, false);
}
function PartialUpdateBankTransactionRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'ignored': json['ignored'] == null ? undefined : json['ignored'],
        'markdownEmbedding': json['markdownEmbedding'] == null ? undefined : json['markdownEmbedding'],
        'markdownEmbeddingUpdatedAt': json['markdownEmbeddingUpdatedAt'] == null ? undefined : json['markdownEmbeddingUpdatedAt'],
        'channel': json['channel'],
    };
}
function PartialUpdateBankTransactionRequestBodyDtoToJSON(json) {
    return PartialUpdateBankTransactionRequestBodyDtoToJSONTyped(json, false);
}
function PartialUpdateBankTransactionRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'ignored': value['ignored'],
        'markdownEmbedding': value['markdownEmbedding'],
        'markdownEmbeddingUpdatedAt': value['markdownEmbeddingUpdatedAt'],
        'channel': value['channel'],
    };
}
