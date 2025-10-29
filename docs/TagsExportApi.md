# TagsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportTags**](TagsExportApi.md#exporttags) | **POST** /external/tags/export | Solicita a exportação das tags. |



## exportTags

> ExportTagsDto exportTags(sortOrder, sortBy, format)

Solicita a exportação das tags.

### Example

```ts
import {
  Configuration,
  TagsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportTagsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new TagsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação dos resultados. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | Campo para ordenação dos resultados. (optional)
    sortBy: sortBy_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportTagsRequest;

  try {
    const data = await api.exportTags(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt` | Campo para ordenação dos resultados. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportTagsDto**](ExportTagsDto.md)

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

