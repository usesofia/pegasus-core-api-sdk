# ContactsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createContact**](ContactsApi.md#createcontact) | **POST** /external/contacts | Cria um novo contato. |
| [**findAllContactOrigins**](ContactsApi.md#findallcontactorigins) | **GET** /external/contacts/origins | Busca todas as origens de contato. |
| [**findAllContactTypes**](ContactsApi.md#findallcontacttypes) | **GET** /external/contacts/types | Busca todos os tipos de contato. |
| [**findAllContacts**](ContactsApi.md#findallcontacts) | **GET** /external/contacts | Busca todos os contatos. |
| [**findByIdContact**](ContactsApi.md#findbyidcontact) | **GET** /external/contacts/{id} | Busca um contato pelo identificador. |
| [**findNotIdentifiedContact**](ContactsApi.md#findnotidentifiedcontact) | **GET** /internal/organizations/{organizationId}/contacts/not-identified | Busca o contato não identificado. |
| [**partialUpdateContact**](ContactsApi.md#partialupdatecontact) | **PATCH** /external/contacts/{id} | Atualiza parcialmente um contato. |
| [**removeContact**](ContactsApi.md#removecontact) | **DELETE** /external/contacts/{id} | Remove um contato. |
| [**systemFindAllContacts**](ContactsApi.md#systemfindallcontacts) | **GET** /internal/contacts | Busca todos os contatos pelo sistema. |
| [**systemFindByIdContact**](ContactsApi.md#systemfindbyidcontact) | **GET** /internal/organizations/{organizationId}/contacts/{contactId} | Busca um contato pelo identificador. |



## createContact

> ContactDto createContact(createContactRequestBodyDto, populate)

Cria um novo contato.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // CreateContactRequestBodyDto
    createContactRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateContactRequest;

  try {
    const data = await api.createContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **createContactRequestBodyDto** | [CreateContactRequestBodyDto](CreateContactRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllContactOrigins

> Array&lt;ContactOriginItemEntity&gt; findAllContactOrigins()

Busca todas as origens de contato.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllContactOriginsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  try {
    const data = await api.findAllContactOrigins();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ContactOriginItemEntity&gt;**](ContactOriginItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllContactTypes

> Array&lt;ContactTypeItemEntity&gt; findAllContactTypes()

Busca todos os tipos de contato.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllContactTypesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  try {
    const data = await api.findAllContactTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ContactTypeItemEntity&gt;**](ContactTypeItemEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllContacts

> ContactsPageDto findAllContacts(sortOrder, sortBy, populate, considerNotIdentified, states, country, birthdayTo, birthdayFrom, origins, types, ids, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todos os contatos.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllContactsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação dos contatos. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'document' | 'email' | 'birthDate' | 'createdAt' | Campo para ordenação dos contatos. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // boolean | Considerar ou não o contato não identificado. (optional)
    considerNotIdentified: true,
    // string | Estados a serem buscados. (optional)
    states: states_example,
    // string | País a serem buscados. (optional)
    country: country_example,
    // string | Data de nascimento final a serem buscadas. (optional)
    birthdayTo: birthdayTo_example,
    // string | Data de nascimento inicial a serem buscadas. (optional)
    birthdayFrom: birthdayFrom_example,
    // string | Origens de contato a serem buscadas. (optional)
    origins: origins_example,
    // string | Tipos de contato a serem buscados. (optional)
    types: types_example,
    // string | Lista de IDs de contatos para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Termo para busca semântica. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllContactsRequest;

  try {
    const data = await api.findAllContacts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `document`, `email`, `birthDate`, `createdAt` | Campo para ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: name, document, email, birthDate, createdAt] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **considerNotIdentified** | `boolean` | Considerar ou não o contato não identificado. | [Optional] [Defaults to `true`] |
| **states** | `string` | Estados a serem buscados. | [Optional] [Defaults to `undefined`] |
| **country** | `string` | País a serem buscados. | [Optional] [Defaults to `undefined`] |
| **birthdayTo** | `string` | Data de nascimento final a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **birthdayFrom** | `string` | Data de nascimento inicial a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **origins** | `string` | Origens de contato a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **types** | `string` | Tipos de contato a serem buscados. | [Optional] [Defaults to `undefined`] |
| **ids** | `string` | Lista de IDs de contatos para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactsPageDto**](ContactsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByIdContact

> ContactDto findByIdContact(id, populate)

Busca um contato pelo identificador.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador do contato.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdContactRequest;

  try {
    const data = await api.findByIdContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Identificador do contato. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findNotIdentifiedContact

> ContactDto findNotIdentifiedContact(organizationId)

Busca o contato não identificado.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindNotIdentifiedContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador da organização.
    organizationId: organizationId_example,
  } satisfies FindNotIdentifiedContactRequest;

  try {
    const data = await api.findNotIdentifiedContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | `string` | Identificador da organização. | [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateContact

> ContactDto partialUpdateContact(id, partialUpdateContactRequestBodyDto, populate)

Atualiza parcialmente um contato.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador do contato.
    id: id_example,
    // PartialUpdateContactRequestBodyDto
    partialUpdateContactRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateContactRequest;

  try {
    const data = await api.partialUpdateContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Identificador do contato. | [Defaults to `undefined`] |
| **partialUpdateContactRequestBodyDto** | [PartialUpdateContactRequestBodyDto](PartialUpdateContactRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeContact

> removeContact(id, removeContactRequestBodyDto)

Remove um contato.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador do contato.
    id: id_example,
    // RemoveContactRequestBodyDto
    removeContactRequestBodyDto: ...,
  } satisfies RemoveContactRequest;

  try {
    const data = await api.removeContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | Identificador do contato. | [Defaults to `undefined`] |
| **removeContactRequestBodyDto** | [RemoveContactRequestBodyDto](RemoveContactRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindAllContacts

> ContactsPageDto systemFindAllContacts(ownerOrganizationId, readPreference, sortOrder, sortBy, populate, considerNotIdentified, states, country, birthdayTo, birthdayFrom, origins, types, ids, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todos os contatos pelo sistema.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllContactsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador da organização proprietária dos contatos.
    ownerOrganizationId: ownerOrganizationId_example,
    // 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest' | Preferência de leitura dos contatos. (optional)
    readPreference: readPreference_example,
    // 'asc' | 'desc' | Ordem de ordenação dos contatos. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'document' | 'email' | 'birthDate' | 'createdAt' | Campo para ordenação dos contatos. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // boolean | Considerar ou não o contato não identificado. (optional)
    considerNotIdentified: true,
    // string | Estados a serem buscados. (optional)
    states: states_example,
    // string | País a serem buscados. (optional)
    country: country_example,
    // string | Data de nascimento final a serem buscadas. (optional)
    birthdayTo: birthdayTo_example,
    // string | Data de nascimento inicial a serem buscadas. (optional)
    birthdayFrom: birthdayFrom_example,
    // string | Origens de contato a serem buscadas. (optional)
    origins: origins_example,
    // string | Tipos de contato a serem buscados. (optional)
    types: types_example,
    // string | Lista de IDs de contatos para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Termo para busca semântica. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllContactsRequest;

  try {
    const data = await api.systemFindAllContacts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ownerOrganizationId** | `string` | Identificador da organização proprietária dos contatos. | [Defaults to `undefined`] |
| **readPreference** | `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest` | Preferência de leitura dos contatos. | [Optional] [Defaults to `undefined`] [Enum: primary, primaryPreferred, secondary, secondaryPreferred, nearest] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `document`, `email`, `birthDate`, `createdAt` | Campo para ordenação dos contatos. | [Optional] [Defaults to `undefined`] [Enum: name, document, email, birthDate, createdAt] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **considerNotIdentified** | `boolean` | Considerar ou não o contato não identificado. | [Optional] [Defaults to `true`] |
| **states** | `string` | Estados a serem buscados. | [Optional] [Defaults to `undefined`] |
| **country** | `string` | País a serem buscados. | [Optional] [Defaults to `undefined`] |
| **birthdayTo** | `string` | Data de nascimento final a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **birthdayFrom** | `string` | Data de nascimento inicial a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **origins** | `string` | Origens de contato a serem buscadas. | [Optional] [Defaults to `undefined`] |
| **types** | `string` | Tipos de contato a serem buscados. | [Optional] [Defaults to `undefined`] |
| **ids** | `string` | Lista de IDs de contatos para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactsPageDto**](ContactsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindByIdContact

> ContactDto systemFindByIdContact(organizationId, contactId, populate)

Busca um contato pelo identificador.

### Example

```ts
import {
  Configuration,
  ContactsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdContactRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ContactsApi();

  const body = {
    // string | Identificador da organização.
    organizationId: organizationId_example,
    // string | Identificador do contato.
    contactId: contactId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies SystemFindByIdContactRequest;

  try {
    const data = await api.systemFindByIdContact(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organizationId** | `string` | Identificador da organização. | [Defaults to `undefined`] |
| **contactId** | `string` | Identificador do contato. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**ContactDto**](ContactDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

