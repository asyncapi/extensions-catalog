# Topic Extension

This document defines how to use the `topic` extension in AsyncAPI documents.

## Overview

Identifies the topic a channel serves when several channels share one address.

Channels sharing an address are common on multiplexed transports: a single WebSocket
connection carries many logical streams, and each message names the stream it belongs
to. AsyncAPI models this as several channels with the same `address`, but there is no
way to say *which* stream a channel is, or how a client addresses it. This extension
supplies that.

`parameters` cannot be used for this, because the specification allows it only when
the address itself contains Channel Address Expressions - and here the address is the
connection, not the topic.

## Version

Current version is `0.1.0`.

## Extension Definition

### Type: Object

| Field | Type | Description |
|---|---|---|
| `name` | string | Identifier for the topic, unique within the document |
| `pattern` | string | The topic's address template, e.g. `room:{room_name}` |
| `parameters` | [string] | Names of the parameters appearing in `pattern` |

A channel without this extension is reached by its address alone, as usual.

## Extension Location

This extension can be used in the following locations:

- [Channel Object](https://www.asyncapi.com/docs/reference/specification/v3.0.0#channelObject)

## Example

Two topics served over one WebSocket connection. Both channels share the connection's
address; the extension is what tells a client how to address each one.

```yaml
asyncapi: '3.0.0'
info:
  title: Topic Example
  version: '1.0.0'
servers:
  production:
    host: example.com
    protocol: ws
channels:
  hub:
    address: /ws/topics
    title: hub
    messages:
      ping:
        $ref: '#/components/messages/ping'
  hubRoomTopic:
    address: /ws/topics
    title: hub_room_topic
    x-topic:
      name: room_topic
      pattern: 'room:{room_name}'
      parameters:
        - room_name
    messages:
      post:
        $ref: '#/components/messages/post'
  hubPresenceTopic:
    address: /ws/topics
    title: hub_presence_topic
    x-topic:
      name: presence_topic
      pattern: 'presence:{user}'
      parameters:
        - user
    messages:
      presenceChanged:
        $ref: '#/components/messages/presenceChanged'
```

A client connects once to `/ws/topics` and addresses a topic per message:

```json
{"topic": "room:lobby", "action": "post", "payload": {"body": "hi"}}
```
