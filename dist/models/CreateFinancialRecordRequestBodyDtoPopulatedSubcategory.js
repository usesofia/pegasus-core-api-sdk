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
exports.instanceOfCreateFinancialRecordRequestBodyDtoPopulatedSubcategory = instanceOfCreateFinancialRecordRequestBodyDtoPopulatedSubcategory;
exports.CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON = CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON;
exports.CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped = CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped;
exports.CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON = CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON;
exports.CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped = CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped;
var NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory_1 = require("./NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory");
var ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory_1 = require("./ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory");
/**
 * Check if a given object implements the CreateFinancialRecordRequestBodyDtoPopulatedSubcategory interface.
 */
function instanceOfCreateFinancialRecordRequestBodyDtoPopulatedSubcategory(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('slug' in value) || value['slug'] === undefined)
        return false;
    if (!('index' in value) || value['index'] === undefined)
        return false;
    if (!('category' in value) || value['category'] === undefined)
        return false;
    if (!('considerInDre' in value) || value['considerInDre'] === undefined)
        return false;
    if (!('isInvoiceRelated' in value) || value['isInvoiceRelated'] === undefined)
        return false;
    if (!('isInternalTransferRelated' in value) || value['isInternalTransferRelated'] === undefined)
        return false;
    if (!('isAutomaticApplicationRelated' in value) || value['isAutomaticApplicationRelated'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSON(json) {
    return CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped(json, false);
}
function CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'name': json['name'],
        'slug': json['slug'],
        'index': json['index'],
        'category': json['category'],
        'populatedCategory': json['populatedCategory'] == null ? undefined : (0, NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory_1.NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryFromJSON)(json['populatedCategory']),
        'normalizedSubcategory': json['normalizedSubcategory'] == null ? undefined : json['normalizedSubcategory'],
        'populatedNormalizedSubcategory': json['populatedNormalizedSubcategory'] == null ? undefined : (0, ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory_1.ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryFromJSON)(json['populatedNormalizedSubcategory']),
        'considerInDre': json['considerInDre'],
        'isInvoiceRelated': json['isInvoiceRelated'],
        'isInternalTransferRelated': json['isInternalTransferRelated'],
        'isAutomaticApplicationRelated': json['isAutomaticApplicationRelated'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}
function CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSON(json) {
    return CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped(json, false);
}
function CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
        'name': value['name'],
        'slug': value['slug'],
        'index': value['index'],
        'category': value['category'],
        'populatedCategory': (0, NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategory_1.NormalizedSubcategoriesPageEntityItemsInnerPopulatedCategoryToJSON)(value['populatedCategory']),
        'normalizedSubcategory': value['normalizedSubcategory'],
        'populatedNormalizedSubcategory': (0, ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategory_1.ExternalCreateSubcategoryRequestBodyDtoPopulatedNormalizedSubcategoryToJSON)(value['populatedNormalizedSubcategory']),
        'considerInDre': value['considerInDre'],
        'isInvoiceRelated': value['isInvoiceRelated'],
        'isInternalTransferRelated': value['isInternalTransferRelated'],
        'isAutomaticApplicationRelated': value['isAutomaticApplicationRelated'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
