# BulkRemoveApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processBulkRemove**](BulkRemoveApi.md#processbulkremove) | **POST** /internal/queues/bulk-remove | Processes bulk remove tasks |
| [**scheduleBulkRemove**](BulkRemoveApi.md#schedulebulkremove) | **POST** /external/bulk/remove | Schedules removal of multiple resources |



## processBulkRemove

> processBulkRemove(executeBulkRemoveJobRequestBodyDto)

Processes bulk remove tasks

### Example

```ts
import {
  Configuration,
  BulkRemoveApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessBulkRemoveRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkRemoveApi();

  const body = {
    // ExecuteBulkRemoveJobRequestBodyDto
    executeBulkRemoveJobRequestBodyDto: ...,
  } satisfies ProcessBulkRemoveRequest;

  try {
    const data = await api.processBulkRemove(body);
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
| **executeBulkRemoveJobRequestBodyDto** | [ExecuteBulkRemoveJobRequestBodyDto](ExecuteBulkRemoveJobRequestBodyDto.md) |  | |

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


## scheduleBulkRemove

> BulkRemoveJobRequestEntity scheduleBulkRemove(bulkRemoveJobRequestDto)

Schedules removal of multiple resources

### Example

```ts
import {
  Configuration,
  BulkRemoveApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ScheduleBulkRemoveRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkRemoveApi();

  const body = {
    // BulkRemoveJobRequestDto
    bulkRemoveJobRequestDto: ...,
  } satisfies ScheduleBulkRemoveRequest;

  try {
    const data = await api.scheduleBulkRemove(body);
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
| **bulkRemoveJobRequestDto** | [BulkRemoveJobRequestDto](BulkRemoveJobRequestDto.md) |  | |

### Return type

[**BulkRemoveJobRequestEntity**](BulkRemoveJobRequestEntity.md)

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

