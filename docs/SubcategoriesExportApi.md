# SubcategoriesExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportSubcategories**](SubcategoriesExportApi.md#exportsubcategories) | **POST** /external/subcategories/export | Solicita a exportação das subcategorias. |



## exportSubcategories

> ExportSubcategoriesDto exportSubcategories(sortOrder, sortBy, active, categoryId, direction, format)

Solicita a exportação das subcategorias.

### Example

```ts
import {
  Configuration,
  SubcategoriesExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportSubcategoriesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubcategoriesExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação das subcategorias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | 'index' | Campo para ordenar as subcategorias. (optional)
    sortBy: sortBy_example,
    // boolean | Filtra subcategorias ativas ou inativas. (optional)
    active: true,
    // string | ID da categoria para filtrar subcategorias. (optional)
    categoryId: categoryId_example,
    // string | Direção da subcategoria. (optional)
    direction: direction_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportSubcategoriesRequest;

  try {
    const data = await api.exportSubcategories(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das subcategorias. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt`, `index` | Campo para ordenar as subcategorias. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt, index] |
| **active** | `boolean` | Filtra subcategorias ativas ou inativas. | [Optional] [Defaults to `undefined`] |
| **categoryId** | `string` | ID da categoria para filtrar subcategorias. | [Optional] [Defaults to `undefined`] |
| **direction** | `string` | Direção da subcategoria. | [Optional] [Defaults to `undefined`] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportSubcategoriesDto**](ExportSubcategoriesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The id of the pending resource job. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

