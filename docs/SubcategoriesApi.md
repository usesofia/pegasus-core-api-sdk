# SubcategoriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubcategory**](SubcategoriesApi.md#createsubcategory) | **POST** /external/subcategories | Cria uma nova subcategoria. |
| [**findAllSubcategories**](SubcategoriesApi.md#findallsubcategories) | **GET** /external/subcategories | Busca todas as subcategorias. |
| [**findByIdSubcategory**](SubcategoriesApi.md#findbyidsubcategory) | **GET** /external/subcategories/{id} | Busca uma subcategoria pelo identificador. |
| [**findBySlugSubcategory**](SubcategoriesApi.md#findbyslugsubcategory) | **GET** /external/subcategories/slug/{slug} | Busca uma subcategoria pelo slug. |
| [**partialUpdateSubcategory**](SubcategoriesApi.md#partialupdatesubcategory) | **PATCH** /external/subcategories/{id} | Atualiza parcialmente uma subcategoria. |
| [**removeSubcategory**](SubcategoriesApi.md#removesubcategory) | **DELETE** /external/subcategories/{id} | Remove uma subcategoria. |
| [**systemFindAllSubcategories**](SubcategoriesApi.md#systemfindallsubcategories) | **GET** /internal/subcategories | Busca todas as subcategorias pelo sistema. |
| [**systemFindByIdSubcategory**](SubcategoriesApi.md#systemfindbyidsubcategory) | **GET** /internal/organizations/{organizationId}/subcategories/{subcategoryId} | Busca uma subcategoria pelo identificador. |



## createSubcategory

> SubcategoryEntity createSubcategory(externalCreateSubcategoryRequestBodyDto, populate)

Cria uma nova subcategoria.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // ExternalCreateSubcategoryRequestBodyDto
    externalCreateSubcategoryRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateSubcategoryRequest;

  try {
    const data = await api.createSubcategory(body);
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
| **externalCreateSubcategoryRequestBodyDto** | [ExternalCreateSubcategoryRequestBodyDto](ExternalCreateSubcategoryRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoryEntity**](SubcategoryEntity.md)

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


## findAllSubcategories

> SubcategoriesPageEntity findAllSubcategories(active, sortOrder, sortBy, populate, categoryId, direction, ids, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as subcategorias.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllSubcategoriesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // boolean | Filtra subcategorias ativas ou inativas. (optional)
    active: true,
    // 'asc' | 'desc' | Ordem de ordenação das subcategorias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | 'index' | Campo para ordenar as subcategorias. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | ID da categoria para filtrar subcategorias. (optional)
    categoryId: categoryId_example,
    // 'IN' | 'OUT' | Direção da subcategoria. (optional)
    direction: direction_example,
    // string | Lista de IDs de subcategorias para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Termo para busca semântica codificado em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual por nome, descrição ou slug da subcategoria. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllSubcategoriesRequest;

  try {
    const data = await api.findAllSubcategories(body);
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
| **active** | `boolean` | Filtra subcategorias ativas ou inativas. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das subcategorias. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt`, `index` | Campo para ordenar as subcategorias. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt, index] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` | ID da categoria para filtrar subcategorias. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção da subcategoria. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **ids** | `string` | Lista de IDs de subcategorias para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica codificado em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual por nome, descrição ou slug da subcategoria. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoriesPageEntity**](SubcategoriesPageEntity.md)

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


## findByIdSubcategory

> SubcategoryEntity findByIdSubcategory(id, populate)

Busca uma subcategoria pelo identificador.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Identificador da subcategoria.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdSubcategoryRequest;

  try {
    const data = await api.findByIdSubcategory(body);
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
| **id** | `string` | Identificador da subcategoria. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoryEntity**](SubcategoryEntity.md)

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


## findBySlugSubcategory

> SubcategoryEntity findBySlugSubcategory(slug, populate)

Busca uma subcategoria pelo slug.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindBySlugSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Slug da subcategoria.
    slug: slug_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindBySlugSubcategoryRequest;

  try {
    const data = await api.findBySlugSubcategory(body);
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
| **slug** | `string` | Slug da subcategoria. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoryEntity**](SubcategoryEntity.md)

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


## partialUpdateSubcategory

> SubcategoryEntity partialUpdateSubcategory(id, partialUpdateSubcategoryRequestBodyDto, populate)

Atualiza parcialmente uma subcategoria.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Identificador da subcategoria.
    id: id_example,
    // PartialUpdateSubcategoryRequestBodyDto
    partialUpdateSubcategoryRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateSubcategoryRequest;

  try {
    const data = await api.partialUpdateSubcategory(body);
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
| **id** | `string` | Identificador da subcategoria. | [Defaults to `undefined`] |
| **partialUpdateSubcategoryRequestBodyDto** | [PartialUpdateSubcategoryRequestBodyDto](PartialUpdateSubcategoryRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoryEntity**](SubcategoryEntity.md)

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


## removeSubcategory

> removeSubcategory(id, removeSubcategoryRequestBodyDto)

Remove uma subcategoria.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Identificador da subcategoria.
    id: id_example,
    // RemoveSubcategoryRequestBodyDto
    removeSubcategoryRequestBodyDto: ...,
  } satisfies RemoveSubcategoryRequest;

  try {
    const data = await api.removeSubcategory(body);
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
| **id** | `string` | Identificador da subcategoria. | [Defaults to `undefined`] |
| **removeSubcategoryRequestBodyDto** | [RemoveSubcategoryRequestBodyDto](RemoveSubcategoryRequestBodyDto.md) |  | |

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


## systemFindAllSubcategories

> SubcategoriesPageEntity systemFindAllSubcategories(ownerOrganizationId, readPreference, direction, active, sortOrder, sortBy, populate, categoryId, ids, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as subcategorias pelo sistema.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllSubcategoriesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Identificador da organização proprietária das subcategorias.
    ownerOrganizationId: ownerOrganizationId_example,
    // 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest' | Preferência de leitura das subcategorias. (optional)
    readPreference: readPreference_example,
    // 'IN' | 'OUT' | Direção da subcategoria. (optional)
    direction: direction_example,
    // boolean | Filtra subcategorias ativas ou inativas. (optional)
    active: true,
    // 'asc' | 'desc' | Ordem de ordenação das subcategorias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | 'index' | Campo para ordenar as subcategorias. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | ID da categoria para filtrar subcategorias. (optional)
    categoryId: categoryId_example,
    // string | Lista de IDs de subcategorias para filtrar separados por vírgula. (optional)
    ids: ids_example,
    // string | Termo para busca semântica codificado em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual por nome, descrição ou slug da subcategoria. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllSubcategoriesRequest;

  try {
    const data = await api.systemFindAllSubcategories(body);
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
| **ownerOrganizationId** | `string` | Identificador da organização proprietária das subcategorias. | [Defaults to `undefined`] |
| **readPreference** | `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest` | Preferência de leitura das subcategorias. | [Optional] [Defaults to `undefined`] [Enum: primary, primaryPreferred, secondary, secondaryPreferred, nearest] |
| **direction** | `IN`, `OUT` | Direção da subcategoria. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **active** | `boolean` | Filtra subcategorias ativas ou inativas. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das subcategorias. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt`, `index` | Campo para ordenar as subcategorias. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt, index] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` | ID da categoria para filtrar subcategorias. | [Optional] [Defaults to `undefined`] |
| **ids** | `string` | Lista de IDs de subcategorias para filtrar separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica codificado em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual por nome, descrição ou slug da subcategoria. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoriesPageEntity**](SubcategoriesPageEntity.md)

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


## systemFindByIdSubcategory

> SubcategoryEntity systemFindByIdSubcategory(organizationId, subcategoryId, populate)

Busca uma subcategoria pelo identificador.

### Example

```ts
import {
  Configuration,
  SubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdSubcategoryRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesApi();

  const body = {
    // string | Identificador da organização.
    organizationId: organizationId_example,
    // string | Identificador da subcategoria.
    subcategoryId: subcategoryId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies SystemFindByIdSubcategoryRequest;

  try {
    const data = await api.systemFindByIdSubcategory(body);
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
| **subcategoryId** | `string` | Identificador da subcategoria. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**SubcategoryEntity**](SubcategoryEntity.md)

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

