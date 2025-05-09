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
 * Endereço do contato.
 * @export
 * @interface CreateContactRequestBodyDtoAddress
 */
export interface CreateContactRequestBodyDtoAddress {
    /**
     * CEP do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    cep?: string | null;
    /**
     * Rua do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    street?: string | null;
    /**
     * Número do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    number?: string | null;
    /**
     * Complemento do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    complement?: string | null;
    /**
     * Bairro do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    neighborhood?: string | null;
    /**
     * Cidade do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    city?: string | null;
    /**
     * Estado do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    state?: string | null;
    /**
     * País do endereço do contato.
     * @type {string}
     * @memberof CreateContactRequestBodyDtoAddress
     */
    country?: string | null;
}
/**
 * Check if a given object implements the CreateContactRequestBodyDtoAddress interface.
 */
export declare function instanceOfCreateContactRequestBodyDtoAddress(value: object): value is CreateContactRequestBodyDtoAddress;
export declare function CreateContactRequestBodyDtoAddressFromJSON(json: any): CreateContactRequestBodyDtoAddress;
export declare function CreateContactRequestBodyDtoAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateContactRequestBodyDtoAddress;
export declare function CreateContactRequestBodyDtoAddressToJSON(json: any): CreateContactRequestBodyDtoAddress;
export declare function CreateContactRequestBodyDtoAddressToJSONTyped(value?: CreateContactRequestBodyDtoAddress | null, ignoreDiscriminator?: boolean): any;
