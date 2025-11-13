# NormalizedSubcategoriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findAllNormalizedSubcategories**](NormalizedSubcategoriesApi.md#findallnormalizedsubcategories) | **GET** /external/normalized-subcategories | Busca todas as subcategorias normalizadas. |



## findAllNormalizedSubcategories

> NormalizedSubcategoriesPageEntity findAllNormalizedSubcategories(isInternalTransfer, populate, categoryId, pageSize, pageIndex)

Busca todas as subcategorias normalizadas.

### Example

```ts
import {
  Configuration,
  NormalizedSubcategoriesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllNormalizedSubcategoriesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new NormalizedSubcategoriesApi();

  const body = {
    // boolean | Filtrar por subcategorias que são transferências internas. (optional)
    isInternalTransfer: true,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | ID da categoria para filtrar subcategorias. (optional)
    categoryId: categoryId_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllNormalizedSubcategoriesRequest;

  try {
    const data = await api.findAllNormalizedSubcategories(body);
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
| **isInternalTransfer** | `boolean` | Filtrar por subcategorias que são transferências internas. | [Optional] [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` | ID da categoria para filtrar subcategorias. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**NormalizedSubcategoriesPageEntity**](NormalizedSubcategoriesPageEntity.md)

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

