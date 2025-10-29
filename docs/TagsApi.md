# TagsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createTag**](TagsApi.md#createtag) | **POST** /external/tags | Cria uma nova tag. |
| [**findAllTags**](TagsApi.md#findalltags) | **GET** /external/tags | Busca todas as tags. |
| [**findByIdTag**](TagsApi.md#findbyidtag) | **GET** /external/tags/{id} | Busca uma tag pelo identificador. |
| [**partialUpdateTag**](TagsApi.md#partialupdatetag) | **PATCH** /external/tags/{id} | Atualiza parcialmente uma tag. |
| [**removeTag**](TagsApi.md#removetag) | **DELETE** /external/tags/{id} | Remove uma tag. |
| [**systemFindAllTags**](TagsApi.md#systemfindalltags) | **GET** /internal/tags | Busca todas as tags pelo sistema. |



## createTag

> TagEntity createTag(createTagRequestBodyDto, populate)

Cria uma nova tag.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateTagRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // CreateTagRequestBodyDto
    createTagRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateTagRequest;

  try {
    const data = await api.createTag(body);
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
| **createTagRequestBodyDto** | [CreateTagRequestBodyDto](CreateTagRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**TagEntity**](TagEntity.md)

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


## findAllTags

> TagsPageEntity findAllTags(populate, sortOrder, sortBy, textSearchTerm, pageSize, pageIndex)

Busca todas as tags.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllTagsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // 'asc' | 'desc' | Ordem de ordenação dos resultados. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | Campo para ordenação dos resultados. (optional)
    sortBy: sortBy_example,
    // string | Termo para busca por nome da tag. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllTagsRequest;

  try {
    const data = await api.findAllTags(body);
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
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt` | Campo para ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt] |
| **textSearchTerm** | `string` | Termo para busca por nome da tag. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**TagsPageEntity**](TagsPageEntity.md)

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


## findByIdTag

> TagEntity findByIdTag(id, populate)

Busca uma tag pelo identificador.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdTagRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // string | Identificador da tag.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdTagRequest;

  try {
    const data = await api.findByIdTag(body);
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
| **id** | `string` | Identificador da tag. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**TagEntity**](TagEntity.md)

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


## partialUpdateTag

> TagEntity partialUpdateTag(id, partialUpdateTagRequestBodyDto, populate)

Atualiza parcialmente uma tag.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateTagRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // string | Identificador da tag.
    id: id_example,
    // PartialUpdateTagRequestBodyDto
    partialUpdateTagRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateTagRequest;

  try {
    const data = await api.partialUpdateTag(body);
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
| **id** | `string` | Identificador da tag. | [Defaults to `undefined`] |
| **partialUpdateTagRequestBodyDto** | [PartialUpdateTagRequestBodyDto](PartialUpdateTagRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**TagEntity**](TagEntity.md)

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


## removeTag

> removeTag(id, removeTagRequestBodyDto)

Remove uma tag.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveTagRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // string | Identificador da tag.
    id: id_example,
    // RemoveTagRequestBodyDto
    removeTagRequestBodyDto: ...,
  } satisfies RemoveTagRequest;

  try {
    const data = await api.removeTag(body);
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
| **id** | `string` | Identificador da tag. | [Defaults to `undefined`] |
| **removeTagRequestBodyDto** | [RemoveTagRequestBodyDto](RemoveTagRequestBodyDto.md) |  | |

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


## systemFindAllTags

> TagsPageEntity systemFindAllTags(ownerOrganizationId, populate, sortOrder, sortBy, textSearchTerm, pageSize, pageIndex)

Busca todas as tags pelo sistema.

### Example

```ts
import {
  Configuration,
  TagsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllTagsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsApi();

  const body = {
    // string | Identificador da organização proprietária das tags.
    ownerOrganizationId: ownerOrganizationId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // 'asc' | 'desc' | Ordem de ordenação dos resultados. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | Campo para ordenação dos resultados. (optional)
    sortBy: sortBy_example,
    // string | Termo para busca por nome da tag. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllTagsRequest;

  try {
    const data = await api.systemFindAllTags(body);
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
| **ownerOrganizationId** | `string` | Identificador da organização proprietária das tags. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt` | Campo para ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt] |
| **textSearchTerm** | `string` | Termo para busca por nome da tag. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**TagsPageEntity**](TagsPageEntity.md)

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

