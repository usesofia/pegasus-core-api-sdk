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
exports.instanceOfUpdateInboxRecordAutoExecuteSettingsRequestBodyDto = instanceOfUpdateInboxRecordAutoExecuteSettingsRequestBodyDto;
exports.UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSON = UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSON;
exports.UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped = UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped;
exports.UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSON = UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSON;
exports.UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped = UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped;
var InboxRecordAutoExecuteSettingEntityEnabledRulesInner_1 = require("./InboxRecordAutoExecuteSettingEntityEnabledRulesInner");
/**
 * Check if a given object implements the UpdateInboxRecordAutoExecuteSettingsRequestBodyDto interface.
 */
function instanceOfUpdateInboxRecordAutoExecuteSettingsRequestBodyDto(value) {
    return true;
}
function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSON(json) {
    return UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped(json, false);
}
function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'desiredEnabledRules': json['desiredEnabledRules'] == null ? undefined : (json['desiredEnabledRules'].map(InboxRecordAutoExecuteSettingEntityEnabledRulesInner_1.InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSON)),
        'desiredDisabledRules': json['desiredDisabledRules'] == null ? undefined : (json['desiredDisabledRules'].map(InboxRecordAutoExecuteSettingEntityEnabledRulesInner_1.InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSON)),
    };
}
function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSON(json) {
    return UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped(json, false);
}
function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'desiredEnabledRules': value['desiredEnabledRules'] == null ? undefined : (value['desiredEnabledRules'].map(InboxRecordAutoExecuteSettingEntityEnabledRulesInner_1.InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSON)),
        'desiredDisabledRules': value['desiredDisabledRules'] == null ? undefined : (value['desiredDisabledRules'].map(InboxRecordAutoExecuteSettingEntityEnabledRulesInner_1.InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSON)),
    };
}
