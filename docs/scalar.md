---
title: Simplifying GraphQL Scalars
description: Explore GraphQL's core and Tailcall's custom scalars, including `Int`, `Float`, `String`, `Boolean`, `ID`, `Email`, and more, in our guide that simplifies data handling with clear definitions and examples. Enhance your applications with our comprehensive scalar support, designed for precise data validation and efficiency.
slug: graphql-scalars-guide
sidebar_label: GraphQL Scalars
---

The GraphQL specification includes default scalar types `Int`, `Float`, `String`, `Boolean`, and `ID`. Although these scalars cover the majority of use cases, some applications need to support other atomic data types such as `Date` or an `Email`.
Tailcall provides these predefined scalars, with built-in validations, eliminating the need for you to do so.

## Default Scalars

Here is a list of default scalars that are built into the GraphQL Spec:

|    Scalar | Description                                                                                     | Specification                                                                         |
| --------: | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|     `Int` | A type representing non-fractional signed whole numbers. Values can range up to \(2^{31} - 1\). | [GraphQL Specification for Int](https://spec.graphql.org/June2018/#sec-Int)           |
|   `Float` | A type for signed double-precision floating-point numbers.                                      | [GraphQL Specification for Float](https://spec.graphql.org/June2018/#sec-Float)       |
|  `String` | A sequence of UTF-8 characters, representing textual data.                                      | [GraphQL Specification for String](https://graphql.org/learn/schema/#scalar-String)   |
| `Boolean` | A boolean type that represents `true` or `false`.                                               | [GraphQL Specification for Boolean](https://graphql.org/learn/schema/#scalar-Boolean) |
|      `ID` | A unique identifier, typically used to refetch an object or as a cache key.                     | [GraphQL Specification for ID](https://graphql.org/learn/schema/#scalar-ID)           |

## GraphQL Scalars

These are the current set of custom scalars supported by Tailcall:

|        Scalar | Description                                                                                                                                                                           | Specification                                                                                                           |
| ------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
|       `Email` | A string that conforms to the email format as defined in the HTML specification, utilizing the Unicode character set.                                                                 | [HTML Specification for Valid Email Addresses](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address)  |
| `PhoneNumber` | A string format adhering to the E.164 international standard, which outlines the numbering plan for the worldwide public switched telephone network (PSTN) and certain data networks. | [E.164 International Numbering Plan](https://en.wikipedia.org/wiki/E.164)                                               |
|        `Date` | A string that represents dates and times in the Internet protocols, following the ISO 8601 standard via the Gregorian calendar.                                                       | [RFC 3339 Date and Time Internet Formats](https://datatracker.ietf.org/doc/html/rfc3339)                                |
|         `Url` | A standardized format for Uniform Resource Identifiers (URI) that includes both the generic URI syntax and guidelines for resolving URI references, which may be in relative form.    | [RFC 3986 Uniform Resource Identifier](https://www.ietf.org/rfc/rfc3986.txt)                                            |
|        `JSON` | A lightweight data interchange format based on the ECMAScript Programming Language Standard, designed for human-readable data representation.                                         | [RFC 7159 The JavaScript Object Notation (JSON) Data Interchange Format](https://datatracker.ietf.org/doc/html/rfc7159) |
|       `Empty` | A type that represents no value or is used as a placeholder in contexts where no other data is expected or returned. It's equivalent to unit or void in other programming languages.  |                                                                                                                         |

If none of the scalars make sense for your use case, consider opening an issue on the Tailcall [github repository](https://github.com/tailcallhq/tailcall).

## Custom Scalars

Apart from the pre-defined list of scalars, you can define your own custom scalars in your GraphQL schema like in the example below.

```graphql
scalar AnyScalar

schema @server(port: 8000, hostname: "localhost") {
  query: Query
}

type Query {
  any(value: AnyScalar!): AnyScalar!
    @expr(body: "{{.args.value}}")
}
```

:::important
Be aware that custom scalars don't have any validation and can be mapped to any data structure when using it.
:::

## Example Usage

Let's try using these custom scalars in our GraphQL schema.

```graphql
schema @server(port: 8000, hostname: "localhost") {
  query: Query
}

type Query {
  email(value: Email!): Email!
    @expr(body: "{{.args.value}}")
}
```

### Valid Query Example

Here is an example of a valid query that passes the custom scalar validations:
![Valid Query](/images/docs/valid.png)

### Invalid Query Example

And here is an example of an invalid query that fails the custom scalar validations as expected:
![Invalid Query](/images/docs/invalid.png)
