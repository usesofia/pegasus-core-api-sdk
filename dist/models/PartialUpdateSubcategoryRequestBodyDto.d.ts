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
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory } from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory';
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory } from './CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory';
/**
 *
 * @export
 * @interface PartialUpdateSubcategoryRequestBodyDto
 */
export interface PartialUpdateSubcategoryRequestBodyDto {
    /**
     * Nome da subcategoria.
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    name?: string;
    /**
     * Slug da subcategoria.
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    slug?: string;
    /**
     * Índice da subcategoria.
     * @type {number}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    index?: number;
    /**
     *
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    category?: string;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    populatedCategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory | null;
    /**
     *
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    normalizedSubcategory?: string | null;
    /**
     *
     * @type {CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    populatedNormalizedSubcategory?: CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory | null;
    /**
     * Indica se a subcategoria deve ser exibida no DRE.
     * @type {boolean}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    considerInDre?: boolean;
    /**
     * Descrição da subcategoria.
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    description?: string;
    /**
     * Indica se a subcategoria está ativa.
     * @type {boolean}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    active?: boolean;
    /**
     * Pontuação de busca da subcategoria.
     * @type {number}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    searchScore?: number | null;
    /**
     * Canal de origem da operação
     * @type {string}
     * @memberof PartialUpdateSubcategoryRequestBodyDto
     */
    channel: PartialUpdateSubcategoryRequestBodyDtoChannelEnum;
}
/**
 * @export
 */
export declare const PartialUpdateSubcategoryRequestBodyDtoChannelEnum: {
    readonly WebApp: "WEB_APP";
    readonly Whatsapp: "WHATSAPP";
    readonly System: "SYSTEM";
    readonly Email: "EMAIL";
};
export type PartialUpdateSubcategoryRequestBodyDtoChannelEnum = typeof PartialUpdateSubcategoryRequestBodyDtoChannelEnum[keyof typeof PartialUpdateSubcategoryRequestBodyDtoChannelEnum];
/**
 * Check if a given object implements the PartialUpdateSubcategoryRequestBodyDto interface.
 */
export declare function instanceOfPartialUpdateSubcategoryRequestBodyDto(value: object): value is PartialUpdateSubcategoryRequestBodyDto;
export declare function PartialUpdateSubcategoryRequestBodyDtoFromJSON(json: any): PartialUpdateSubcategoryRequestBodyDto;
export declare function PartialUpdateSubcategoryRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialUpdateSubcategoryRequestBodyDto;
export declare function PartialUpdateSubcategoryRequestBodyDtoToJSON(json: any): PartialUpdateSubcategoryRequestBodyDto;
export declare function PartialUpdateSubcategoryRequestBodyDtoToJSONTyped(value?: PartialUpdateSubcategoryRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
