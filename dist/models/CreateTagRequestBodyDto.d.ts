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
/**
 *
 * @export
 * @interface CreateTagRequestBodyDto
 */
export interface CreateTagRequestBodyDto {
    /**
     * Nome da tag.
     * @type {string}
     * @memberof CreateTagRequestBodyDto
     */
    name: string;
    /**
     * Score da busca textual.
     * @type {number}
     * @memberof CreateTagRequestBodyDto
     */
    searchScore?: number;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof CreateTagRequestBodyDto
     */
    channel: CreateTagRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const CreateTagRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type CreateTagRequestBodyDtoChannelEnum = typeof CreateTagRequestBodyDtoChannelEnum[keyof typeof CreateTagRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the CreateTagRequestBodyDto interface.
 */
export declare function instanceOfCreateTagRequestBodyDto(value: object): value is CreateTagRequestBodyDto;
export declare function CreateTagRequestBodyDtoFromJSON(json: any): CreateTagRequestBodyDto;
export declare function CreateTagRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTagRequestBodyDto;
export declare function CreateTagRequestBodyDtoToJSON(json: any): CreateTagRequestBodyDto;
export declare function CreateTagRequestBodyDtoToJSONTyped(value?: CreateTagRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
