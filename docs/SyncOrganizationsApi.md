# SyncOrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**syncOrganizations**](SyncOrganizationsApi.md#syncorganizations) | **POST** /internal/sync-organizations | Sincroniza todas as organizações. |



## syncOrganizations

> syncOrganizations()

Sincroniza todas as organizações.

### Example

```ts
import {
  Configuration,
  SyncOrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SyncOrganizationsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SyncOrganizationsApi();

  try {
    const data = await api.syncOrganizations();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

