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
import type { FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest } from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest';
import {
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestFromJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestFromJSONTyped,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestToJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestToJSONTyped,
} from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest';
import type { FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest } from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest';
import {
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSONTyped,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSONTyped,
} from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest';
import type { FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest } from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest';
import {
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSONTyped,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSONTyped,
} from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest';
import type { FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest } from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest';
import {
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestFromJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestFromJSONTyped,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestToJSON,
    FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestToJSONTyped,
} from './FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest';

/**
 * Ação sugerida final processada.
 * @export
 * @interface FinancialRecordRadarItemEntityFinalBestSuggestedAction
 */
export interface FinancialRecordRadarItemEntityFinalBestSuggestedAction {
    /**
     * Operação sugerida.
     * @type {string}
     * @memberof FinancialRecordRadarItemEntityFinalBestSuggestedAction
     */
    operation: FinancialRecordRadarItemEntityFinalBestSuggestedActionOperationEnum;
    /**
     * 
     * @type {FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest}
     * @memberof FinancialRecordRadarItemEntityFinalBestSuggestedAction
     */
    financialRecordRadarProcessedCreateFinancialRecordRequest?: FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequest | null;
    /**
     * 
     * @type {FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest}
     * @memberof FinancialRecordRadarItemEntityFinalBestSuggestedAction
     */
    financialRecordRadarProcessedCreateManyFinancialRecordsRequest?: FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequest | null;
    /**
     * 
     * @type {FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest}
     * @memberof FinancialRecordRadarItemEntityFinalBestSuggestedAction
     */
    financialRecordRadarProcessedPartialUpdateFinancialRecordRequest?: FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequest | null;
    /**
     * 
     * @type {FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest}
     * @memberof FinancialRecordRadarItemEntityFinalBestSuggestedAction
     */
    financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest?: FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest | null;
}


/**
 * @export
 */
export const FinancialRecordRadarItemEntityFinalBestSuggestedActionOperationEnum = {
    Create: 'CREATE',
    CreateMany: 'CREATE_MANY',
    LinkToThisRadarItem: 'LINK_TO_THIS_RADAR_ITEM',
    PartialUpdate: 'PARTIAL_UPDATE'
} as const;
export type FinancialRecordRadarItemEntityFinalBestSuggestedActionOperationEnum = typeof FinancialRecordRadarItemEntityFinalBestSuggestedActionOperationEnum[keyof typeof FinancialRecordRadarItemEntityFinalBestSuggestedActionOperationEnum];


/**
 * Check if a given object implements the FinancialRecordRadarItemEntityFinalBestSuggestedAction interface.
 */
export function instanceOfFinancialRecordRadarItemEntityFinalBestSuggestedAction(value: object): value is FinancialRecordRadarItemEntityFinalBestSuggestedAction {
    if (!('operation' in value) || value['operation'] === undefined) return false;
    return true;
}

export function FinancialRecordRadarItemEntityFinalBestSuggestedActionFromJSON(json: any): FinancialRecordRadarItemEntityFinalBestSuggestedAction {
    return FinancialRecordRadarItemEntityFinalBestSuggestedActionFromJSONTyped(json, false);
}

export function FinancialRecordRadarItemEntityFinalBestSuggestedActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialRecordRadarItemEntityFinalBestSuggestedAction {
    if (json == null) {
        return json;
    }
    return {
        
        'operation': json['operation'],
        'financialRecordRadarProcessedCreateFinancialRecordRequest': json['financialRecordRadarProcessedCreateFinancialRecordRequest'] == null ? undefined : FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestFromJSON(json['financialRecordRadarProcessedCreateFinancialRecordRequest']),
        'financialRecordRadarProcessedCreateManyFinancialRecordsRequest': json['financialRecordRadarProcessedCreateManyFinancialRecordsRequest'] == null ? undefined : FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestFromJSON(json['financialRecordRadarProcessedCreateManyFinancialRecordsRequest']),
        'financialRecordRadarProcessedPartialUpdateFinancialRecordRequest': json['financialRecordRadarProcessedPartialUpdateFinancialRecordRequest'] == null ? undefined : FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestFromJSON(json['financialRecordRadarProcessedPartialUpdateFinancialRecordRequest']),
        'financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest': json['financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest'] == null ? undefined : FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestFromJSON(json['financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest']),
    };
}

export function FinancialRecordRadarItemEntityFinalBestSuggestedActionToJSON(json: any): FinancialRecordRadarItemEntityFinalBestSuggestedAction {
    return FinancialRecordRadarItemEntityFinalBestSuggestedActionToJSONTyped(json, false);
}

export function FinancialRecordRadarItemEntityFinalBestSuggestedActionToJSONTyped(value?: FinancialRecordRadarItemEntityFinalBestSuggestedAction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'operation': value['operation'],
        'financialRecordRadarProcessedCreateFinancialRecordRequest': FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateFinancialRecordRequestToJSON(value['financialRecordRadarProcessedCreateFinancialRecordRequest']),
        'financialRecordRadarProcessedCreateManyFinancialRecordsRequest': FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedCreateManyFinancialRecordsRequestToJSON(value['financialRecordRadarProcessedCreateManyFinancialRecordsRequest']),
        'financialRecordRadarProcessedPartialUpdateFinancialRecordRequest': FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedPartialUpdateFinancialRecordRequestToJSON(value['financialRecordRadarProcessedPartialUpdateFinancialRecordRequest']),
        'financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest': FinancialRecordRadarItemEntityFinalBestSuggestedActionFinancialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequestToJSON(value['financialRecordRadarProcessedLinkFinancialRecordToThisRadarItemRequest']),
    };
}

