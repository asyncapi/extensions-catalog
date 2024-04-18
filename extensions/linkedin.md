# Linkedin Extension
This document defines how to use `linkedin` extension in AsyncAPI documents.

## Overview 
This extension allows you to provide the Linkedin username of the account representing the team/company of the API.

## Version
Current version is `0.1.0`.

## Extension Definition

### Type: String

Name of the Linkedin username.

## Extension Location 

This extension can be used in the following locations:
- [Info Object](https://www.asyncapi.com/docs/reference/specification/v2.6.0#infoObject)

## Example

```yaml
asyncapi: '2.6.0'
info
  title: Strretlights Kafka API
  version: '1.0.0'
  x-linkedin: StreetLightData
```