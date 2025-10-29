# ExportResourceJobRequestsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processExportResourceJobRequest**](ExportResourceJobRequestsApi.md#processexportresourcejobrequest) | **POST** /internal/queues/export-resources | Processa a exportação de um recurso. |



## processExportResourceJobRequest

> processExportResourceJobRequest(processExportResourceJobRequestBodyDto)

Processa a exportação de um recurso.

### Example

```ts
import {
  Configuration,
  ExportResourceJobRequestsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessExportResourceJobRequestRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new ExportResourceJobRequestsApi();

  const body = {
    // ProcessExportResourceJobRequestBodyDto
    processExportResourceJobRequestBodyDto: ...,
  } satisfies ProcessExportResourceJobRequestRequest;

  try {
    const data = await api.processExportResourceJobRequest(body);
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
| **processExportResourceJobRequestBodyDto** | [ProcessExportResourceJobRequestBodyDto](ProcessExportResourceJobRequestBodyDto.md) |  | |

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
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

