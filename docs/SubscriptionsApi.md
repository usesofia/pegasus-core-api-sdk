# SubscriptionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createSubscription**](SubscriptionsApi.md#createsubscription) | **POST** /external/subscriptions | Create a new subscription. |
| [**partialUpdateSubscription**](SubscriptionsApi.md#partialupdatesubscription) | **PATCH** /external/subscriptions/{id} | Partially update a subscription. |



## createSubscription

> SubscriptionEntity createSubscription(createSubscriptionRequestBodyDto)

Create a new subscription.

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateSubscriptionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubscriptionsApi();

  const body = {
    // CreateSubscriptionRequestBodyDto
    createSubscriptionRequestBodyDto: ...,
  } satisfies CreateSubscriptionRequest;

  try {
    const data = await api.createSubscription(body);
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
| **createSubscriptionRequestBodyDto** | [CreateSubscriptionRequestBodyDto](CreateSubscriptionRequestBodyDto.md) |  | |

### Return type

[**SubscriptionEntity**](SubscriptionEntity.md)

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


## partialUpdateSubscription

> SubscriptionEntity partialUpdateSubscription(id, partialUpdateSubscriptionRequestBodyDto)

Partially update a subscription.

### Example

```ts
import {
  Configuration,
  SubscriptionsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateSubscriptionRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new SubscriptionsApi();

  const body = {
    // string | Subscription ID
    id: id_example,
    // PartialUpdateSubscriptionRequestBodyDto
    partialUpdateSubscriptionRequestBodyDto: ...,
  } satisfies PartialUpdateSubscriptionRequest;

  try {
    const data = await api.partialUpdateSubscription(body);
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
| **id** | `string` | Subscription ID | [Defaults to `undefined`] |
| **partialUpdateSubscriptionRequestBodyDto** | [PartialUpdateSubscriptionRequestBodyDto](PartialUpdateSubscriptionRequestBodyDto.md) |  | |

### Return type

[**SubscriptionEntity**](SubscriptionEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

