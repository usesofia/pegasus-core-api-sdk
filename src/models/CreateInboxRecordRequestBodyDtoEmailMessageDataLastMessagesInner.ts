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
import type { CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner } from './CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner';
import {
    CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSON,
    CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSONTyped,
    CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSON,
    CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSONTyped,
} from './CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner';

/**
 * 
 * @export
 * @interface CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
 */
export interface CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner {
    /**
     * Timestamp da mensagem.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
     */
    timestamp: string;
    /**
     * Email do remetente.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
     */
    email: string;
    /**
     * Nome do remetente.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
     */
    name?: string | null;
    /**
     * Conteúdo da mensagem.
     * @type {string}
     * @memberof CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
     */
    content?: string;
    /**
     * Arquivos anexados.
     * @type {Array<CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner>}
     * @memberof CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner
     */
    files?: Array<CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner> | null;
}

/**
 * Check if a given object implements the CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner interface.
 */
export function instanceOfCreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner(value: object): value is CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner {
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerFromJSON(json: any): CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner {
    return CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerFromJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'timestamp': json['timestamp'],
        'email': json['email'],
        'name': json['name'] == null ? undefined : json['name'],
        'content': json['content'] == null ? undefined : json['content'],
        'files': json['files'] == null ? undefined : ((json['files'] as Array<any>).map(CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerFromJSON)),
    };
}

export function CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerToJSON(json: any): CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner {
    return CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerToJSONTyped(json, false);
}

export function CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInnerToJSONTyped(value?: CreateInboxRecordRequestBodyDtoEmailMessageDataLastMessagesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'timestamp': value['timestamp'],
        'email': value['email'],
        'name': value['name'],
        'content': value['content'],
        'files': value['files'] == null ? undefined : ((value['files'] as Array<any>).map(CreateInboxRecordRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInnerToJSON)),
    };
}

