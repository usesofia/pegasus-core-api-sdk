# FinancialRecordRadarItemAutoExecuteApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getFinancialRecordRadarItemAutoExecuteSettings**](FinancialRecordRadarItemAutoExecuteApi.md#getfinancialrecordradaritemautoexecutesettings) | **GET** /external/financial-records/radar/items/auto-execute/settings | Obter configurações de auto-execute |
| [**updateFinancialRecordRadarItemAutoExecuteSettings**](FinancialRecordRadarItemAutoExecuteApi.md#updatefinancialrecordradaritemautoexecutesettings) | **PUT** /external/financial-records/radar/items/auto-execute/settings | Atualizar configurações de auto-execute |



## getFinancialRecordRadarItemAutoExecuteSettings

> FinancialRecordRadarItemAutoExecuteSettingEntity getFinancialRecordRadarItemAutoExecuteSettings()

Obter configurações de auto-execute

Retorna as configurações de auto-execute do radar para a organização do usuário.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemAutoExecuteApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { GetFinancialRecordRadarItemAutoExecuteSettingsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemAutoExecuteApi();

  try {
    const data = await api.getFinancialRecordRadarItemAutoExecuteSettings();
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

[**FinancialRecordRadarItemAutoExecuteSettingEntity**](FinancialRecordRadarItemAutoExecuteSettingEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | Configurações de auto-execute |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateFinancialRecordRadarItemAutoExecuteSettings

> FinancialRecordRadarItemAutoExecuteSettingEntity updateFinancialRecordRadarItemAutoExecuteSettings(updateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto)

Atualizar configurações de auto-execute

Atualiza as configurações de auto-execute do radar para a organização do usuário.

### Example

```ts
import {
  Configuration,
  FinancialRecordRadarItemAutoExecuteApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { UpdateFinancialRecordRadarItemAutoExecuteSettingsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordRadarItemAutoExecuteApi();

  const body = {
    // UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto
    updateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto: ...,
  } satisfies UpdateFinancialRecordRadarItemAutoExecuteSettingsRequest;

  try {
    const data = await api.updateFinancialRecordRadarItemAutoExecuteSettings(body);
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
| **updateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto** | [UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto](UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto.md) |  | |

### Return type

[**FinancialRecordRadarItemAutoExecuteSettingEntity**](FinancialRecordRadarItemAutoExecuteSettingEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** | Configurações de auto-execute atualizadas |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

