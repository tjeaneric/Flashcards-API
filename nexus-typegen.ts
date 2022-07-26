/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./src/context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CardOrderByInput: { // input type
    createdAt?: NexusGenEnums['Sort'] | null; // Sort
    description?: NexusGenEnums['Sort'] | null; // Sort
    name?: NexusGenEnums['Sort'] | null; // Sort
  }
}

export interface NexusGenEnums {
  Sort: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Card: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    done: boolean; // Boolean!
    id: string; // String!
    name: string; // String!
  }
  Feed: { // root type
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    count: number; // Int!
    id?: string | null; // ID
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    token: string; // String!
    user: NexusGenRootTypes['User']; // User!
  }
  Card: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    createdBy: NexusGenRootTypes['User'] | null; // User
    description: string; // String!
    done: boolean; // Boolean!
    id: string; // String!
    name: string; // String!
  }
  Feed: { // field return type
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    count: number; // Int!
    id: string | null; // ID
  }
  Mutation: { // field return type
    deleteCard: NexusGenRootTypes['Card'] | null; // Card
    login: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    postCard: NexusGenRootTypes['Card']; // Card!
    signup: NexusGenRootTypes['AuthPayload']; // AuthPayload!
    updateCard: NexusGenRootTypes['Card'] | null; // Card
  }
  Query: { // field return type
    card: NexusGenRootTypes['Card'] | null; // Card
    cards: NexusGenRootTypes['Feed']; // Feed!
  }
  User: { // field return type
    cards: NexusGenRootTypes['Card'][]; // [Card!]!
    email: string; // String!
    firstName: string; // String!
    id: string; // String!
    lastName: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    token: 'String'
    user: 'User'
  }
  Card: { // field return type name
    createdAt: 'DateTime'
    createdBy: 'User'
    description: 'String'
    done: 'Boolean'
    id: 'String'
    name: 'String'
  }
  Feed: { // field return type name
    cards: 'Card'
    count: 'Int'
    id: 'ID'
  }
  Mutation: { // field return type name
    deleteCard: 'Card'
    login: 'AuthPayload'
    postCard: 'Card'
    signup: 'AuthPayload'
    updateCard: 'Card'
  }
  Query: { // field return type name
    card: 'Card'
    cards: 'Feed'
  }
  User: { // field return type name
    cards: 'Card'
    email: 'String'
    firstName: 'String'
    id: 'String'
    lastName: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    deleteCard: { // args
      id: string; // String!
    }
    login: { // args
      email: string; // String!
      password: string; // String!
    }
    postCard: { // args
      description: string; // String!
      name: string; // String!
    }
    signup: { // args
      email: string; // String!
      firstName: string; // String!
      lastName: string; // String!
      password: string; // String!
    }
    updateCard: { // args
      description?: string | null; // String
      done?: boolean | null; // Boolean
      id: string; // String!
      name?: string | null; // String
    }
  }
  Query: {
    card: { // args
      id: string; // String!
    }
    cards: { // args
      filter?: string | null; // String
      orderBy?: NexusGenInputs['CardOrderByInput'][] | null; // [CardOrderByInput!]
      skip?: number | null; // Int
      take?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}