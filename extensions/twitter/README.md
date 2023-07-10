# Twitter extension
This document defines how to use `twitter` extension in AsyncAPI documents.

## Overview 
This extension allows you to place the twitter account in charge of the team/company of the API

## Extension Definition


### Type: String

Name of the Twitter profile.

## Extension Location 

This extension can be used in the following locations:
- [Info Object](https://www.asyncapi.com/docs/reference/specification/v2.5.0#infoObject)

## Example

```yaml
asyncapi: '2.5.0'
info
  title: Strretlights Kafka API
  version: '1.0.0'
  x-twitter: @StreetLightData
```
