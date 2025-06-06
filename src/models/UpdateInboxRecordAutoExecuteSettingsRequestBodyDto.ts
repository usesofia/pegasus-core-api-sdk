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

import { mapValues } from '../runtime';
import type { InboxRecordAutoExecuteSettingEntityEnabledRulesInner } from './InboxRecordAutoExecuteSettingEntityEnabledRulesInner';
import {
    InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSON,
    InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSONTyped,
    InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSON,
    InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSONTyped,
} from './InboxRecordAutoExecuteSettingEntityEnabledRulesInner';

/**
 * 
 * @export
 * @interface UpdateInboxRecordAutoExecuteSettingsRequestBodyDto
 */
export interface UpdateInboxRecordAutoExecuteSettingsRequestBodyDto {
    /**
     * Regras de auto-execute desejadas. Se não estiver listado, está desabilitado.
     * @type {Array<InboxRecordAutoExecuteSettingEntityEnabledRulesInner>}
     * @memberof UpdateInboxRecordAutoExecuteSettingsRequestBodyDto
     */
    desiredEnabledRules?: Array<InboxRecordAutoExecuteSettingEntityEnabledRulesInner>;
    /**
     * Regras de auto-execute desabilitadas. Se não estiver listado, está habilitado.
     * @type {Array<InboxRecordAutoExecuteSettingEntityEnabledRulesInner>}
     * @memberof UpdateInboxRecordAutoExecuteSettingsRequestBodyDto
     */
    desiredDisabledRules?: Array<InboxRecordAutoExecuteSettingEntityEnabledRulesInner>;
}

/**
 * Check if a given object implements the UpdateInboxRecordAutoExecuteSettingsRequestBodyDto interface.
 */
export function instanceOfUpdateInboxRecordAutoExecuteSettingsRequestBodyDto(value: object): value is UpdateInboxRecordAutoExecuteSettingsRequestBodyDto {
    return true;
}

export function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSON(json: any): UpdateInboxRecordAutoExecuteSettingsRequestBodyDto {
    return UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped(json, false);
}

export function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateInboxRecordAutoExecuteSettingsRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'desiredEnabledRules': json['desiredEnabledRules'] == null ? undefined : ((json['desiredEnabledRules'] as Array<any>).map(InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSON)),
        'desiredDisabledRules': json['desiredDisabledRules'] == null ? undefined : ((json['desiredDisabledRules'] as Array<any>).map(InboxRecordAutoExecuteSettingEntityEnabledRulesInnerFromJSON)),
    };
}

export function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSON(json: any): UpdateInboxRecordAutoExecuteSettingsRequestBodyDto {
    return UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped(json, false);
}

export function UpdateInboxRecordAutoExecuteSettingsRequestBodyDtoToJSONTyped(value?: UpdateInboxRecordAutoExecuteSettingsRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'desiredEnabledRules': value['desiredEnabledRules'] == null ? undefined : ((value['desiredEnabledRules'] as Array<any>).map(InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSON)),
        'desiredDisabledRules': value['desiredDisabledRules'] == null ? undefined : ((value['desiredDisabledRules'] as Array<any>).map(InboxRecordAutoExecuteSettingEntityEnabledRulesInnerToJSON)),
    };
}

