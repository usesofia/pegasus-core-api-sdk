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
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner } from './CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner';
import {
    CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerFromJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerFromJSONTyped,
    CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerToJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerToJSONTyped,
} from './CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner';
import type { CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData } from './CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData';
import {
    CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataFromJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataFromJSONTyped,
    CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataToJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataToJSONTyped,
} from './CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData';
import type { CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction } from './CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction';
import {
    CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFromJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFromJSONTyped,
    CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionToJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionToJSONTyped,
} from './CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction';
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions } from './CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions';
import {
    CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSONTyped,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSONTyped,
} from './CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions';
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData } from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData';
import {
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataFromJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataFromJSONTyped,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataToJSON,
    CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataToJSONTyped,
} from './CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData';
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute } from './CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute';
import {
    CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteFromJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteFromJSONTyped,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteToJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteToJSONTyped,
} from './CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute';
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData } from './CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData';
import {
    CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataFromJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataFromJSONTyped,
    CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataToJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataToJSONTyped,
} from './CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData';
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction } from './CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction';
import {
    CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFromJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFromJSONTyped,
    CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionToJSON,
    CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionToJSONTyped,
} from './CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction';

/**
 * 
 * @export
 * @interface CreatedFinancialRecordRadarItemResultEntityRadarItem
 */
export interface CreatedFinancialRecordRadarItemResultEntityRadarItem {
    /**
     * Identificador do registro do radar.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    id: string;
    /**
     * Identificador da organização dona do registro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    ownerOrganization: string;
    /**
     * Origem do registro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    origin: CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum;
    /**
     * Natureza do registro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    nature: CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum;
    /**
     * Status do registro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    status: CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum;
    /**
     * Pasta do registro.
     * @type {string}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    folder: CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum;
    /**
     * Ids dos registros financeiros vinculados.
     * @type {Array<string>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    links: Array<string>;
    /**
     * 
     * @type {CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    bestSuggestedAction?: CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction;
    /**
     * 
     * @type {CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    finalBestSuggestedAction?: CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction;
    /**
     * 
     * @type {CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    extractedFinancialRecordData?: CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData;
    /**
     * Registros subsequentes relacionados.
     * @type {Array<CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner>}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    subsequentRadarItems?: Array<CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner>;
    /**
     * 
     * @type {CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    whatsappMessageData?: CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData;
    /**
     * 
     * @type {CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    emailMessageData?: CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData;
    /**
     * 
     * @type {CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    autoExecute?: CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecute;
    /**
     * 
     * @type {CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    asyncActions?: CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions;
    /**
     * Data de criação do registro.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    createdAt: any | null;
    /**
     * Data de atualização do registro.
     * @type {any}
     * @memberof CreatedFinancialRecordRadarItemResultEntityRadarItem
     */
    updatedAt: any | null;
}


/**
 * @export
 */
export const CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum = {
    WhatsappAgent: 'WHATSAPP_AGENT',
    EmailForwardingIntegration: 'EMAIL_FORWARDING_INTEGRATION'
} as const;
export type CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum = typeof CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityRadarItemOriginEnum];

/**
 * @export
 */
export const CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum = {
    WhatsappMessage: 'WHATSAPP_MESSAGE',
    EmailMessage: 'EMAIL_MESSAGE'
} as const;
export type CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum = typeof CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityRadarItemNatureEnum];

/**
 * @export
 */
export const CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum = {
    Pending: 'PENDING',
    Linked: 'LINKED',
    Archived: 'ARCHIVED'
} as const;
export type CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum = typeof CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityRadarItemStatusEnum];

/**
 * @export
 */
export const CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum = {
    Main: 'MAIN',
    Spam: 'SPAM'
} as const;
export type CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum = typeof CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum[keyof typeof CreatedFinancialRecordRadarItemResultEntityRadarItemFolderEnum];


/**
 * Check if a given object implements the CreatedFinancialRecordRadarItemResultEntityRadarItem interface.
 */
export function instanceOfCreatedFinancialRecordRadarItemResultEntityRadarItem(value: object): value is CreatedFinancialRecordRadarItemResultEntityRadarItem {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined) return false;
    if (!('origin' in value) || value['origin'] === undefined) return false;
    if (!('nature' in value) || value['nature'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('folder' in value) || value['folder'] === undefined) return false;
    if (!('links' in value) || value['links'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItem {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreatedFinancialRecordRadarItemResultEntityRadarItem {
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
        'bestSuggestedAction': json['bestSuggestedAction'] == null ? undefined : CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionFromJSON(json['bestSuggestedAction']),
        'finalBestSuggestedAction': json['finalBestSuggestedAction'] == null ? undefined : CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionFromJSON(json['finalBestSuggestedAction']),
        'extractedFinancialRecordData': json['extractedFinancialRecordData'] == null ? undefined : CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataFromJSON(json['extractedFinancialRecordData']),
        'subsequentRadarItems': json['subsequentRadarItems'] == null ? undefined : ((json['subsequentRadarItems'] as Array<any>).map(CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerFromJSON)),
        'whatsappMessageData': json['whatsappMessageData'] == null ? undefined : CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataFromJSON(json['whatsappMessageData']),
        'emailMessageData': json['emailMessageData'] == null ? undefined : CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataFromJSON(json['emailMessageData']),
        'autoExecute': json['autoExecute'] == null ? undefined : CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteFromJSON(json['autoExecute']),
        'asyncActions': json['asyncActions'] == null ? undefined : CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsFromJSON(json['asyncActions']),
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemToJSON(json: any): CreatedFinancialRecordRadarItemResultEntityRadarItem {
    return CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped(json, false);
}

export function CreatedFinancialRecordRadarItemResultEntityRadarItemToJSONTyped(value?: CreatedFinancialRecordRadarItemResultEntityRadarItem | null, ignoreDiscriminator: boolean = false): any {
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
        'bestSuggestedAction': CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedActionToJSON(value['bestSuggestedAction']),
        'finalBestSuggestedAction': CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedActionToJSON(value['finalBestSuggestedAction']),
        'extractedFinancialRecordData': CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordDataToJSON(value['extractedFinancialRecordData']),
        'subsequentRadarItems': value['subsequentRadarItems'] == null ? undefined : ((value['subsequentRadarItems'] as Array<any>).map(CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerToJSON)),
        'whatsappMessageData': CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataToJSON(value['whatsappMessageData']),
        'emailMessageData': CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataToJSON(value['emailMessageData']),
        'autoExecute': CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteToJSON(value['autoExecute']),
        'asyncActions': CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActionsToJSON(value['asyncActions']),
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

