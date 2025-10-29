# BulkUpdateApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processBulkUpdate**](BulkUpdateApi.md#processbulkupdate) | **POST** /internal/queues/bulk-update | Processes bulk update tasks |
| [**scheduleBulkUpdate**](BulkUpdateApi.md#schedulebulkupdate) | **POST** /external/bulk/update | Schedules updating of multiple resources |



## processBulkUpdate

> processBulkUpdate(executeBulkUpdateJobRequestBodyDto)

Processes bulk update tasks

### Example

```ts
import {
  Configuration,
  BulkUpdateApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessBulkUpdateRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkUpdateApi();

  const body = {
    // ExecuteBulkUpdateJobRequestBodyDto
    executeBulkUpdateJobRequestBodyDto: ...,
  } satisfies ProcessBulkUpdateRequest;

  try {
    const data = await api.processBulkUpdate(body);
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
| **executeBulkUpdateJobRequestBodyDto** | [ExecuteBulkUpdateJobRequestBodyDto](ExecuteBulkUpdateJobRequestBodyDto.md) |  | |

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


## scheduleBulkUpdate

> BulkUpdateJobRequestEntity scheduleBulkUpdate(bulkUpdateJobRequestDto)

Schedules updating of multiple resources

### Example

```ts
import {
  Configuration,
  BulkUpdateApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ScheduleBulkUpdateRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkUpdateApi();

  const body = {
    // BulkUpdateJobRequestDto
    bulkUpdateJobRequestDto: ...,
  } satisfies ScheduleBulkUpdateRequest;

  try {
    const data = await api.scheduleBulkUpdate(body);
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
| **bulkUpdateJobRequestDto** | [BulkUpdateJobRequestDto](BulkUpdateJobRequestDto.md) |  | |

### Return type

[**BulkUpdateJobRequestEntity**](BulkUpdateJobRequestEntity.md)

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

