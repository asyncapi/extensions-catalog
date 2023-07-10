# Twitter extension
This document defines how to use `twitter` extension in AsyncAPI documents.

## Overview 
This extension allows you to place the twitter account in charge of the team/company of the API.

## Extension Definition
Extensions are the mechanism AsyncAPI has to allow you use custom or protocol-specific features. Extensions follow a separate release cycle and everyone can create their own. This repository is meant to contain a list of official and community supported extensions.

> Both, JSON or YAML, are supported formats. Please, take into account that only the subset of YAML that can be translated to JSON is allowed. 
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
  x-twitter: StreetLightData
```
