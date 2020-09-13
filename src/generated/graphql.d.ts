import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: Date;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: Date;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar:
  | string
  | boolean
  | number
  | Array<string | boolean | number>
  | object;
};

/** The schema queries  */
export type Query = {
  __typename?: 'Query';
  persons?: Maybe<Array<Maybe<PersonType>>>;
  residents?: Maybe<Array<Maybe<ResidentType>>>;
  houses?: Maybe<Array<Maybe<HouseType>>>;
  blocks?: Maybe<Array<Maybe<BlockType>>>;
  employees?: Maybe<Array<Maybe<EmployeeType>>>;
  roleEmployees?: Maybe<Array<Maybe<RoleEmployeeType>>>;
  roles?: Maybe<Array<Maybe<RoleType>>>;
};

/** A person representation  */
export type PersonType = {
  __typename?: 'PersonType';
  personId: Scalars['ID'];
  /** This is field for the numbre of identification card */
  idCard: Scalars['String'];
  /** This is a field for the person name */
  name: Scalars['String'];
  /** This is a field for the date that was born */
  birth: Scalars['Date'];
  /** This is a field for the status of the person */
  status: Scalars['Boolean'];
  /** This is a field for person email */
  email: Scalars['String'];
  /** This is a field for person password */
  password: Scalars['String'];
  /** This is a field specify that date that of the person was created */
  createdAt: Scalars['DateTime'];
  /** This is a field for the person number */
  residentSet: Array<ResidentType>;
  /** This is a field for the person number of the employee */
  employeeSet: Array<EmployeeType>;
};

export type ResidentType = {
  __typename?: 'ResidentType';
  residentId: Scalars['ID'];
  /** This is a field for the person number */
  personId: PersonType;
  /** This is a field for the house number where the resident lives */
  houseId: HouseType;
  /** This is a field that identifies if the resident owns the home */
  landlord: Scalars['Boolean'];
  /** This is a field specify that date that of the resident was created */
  createdAt: Scalars['DateTime'];
};

export type HouseType = {
  __typename?: 'HouseType';
  houseId: Scalars['ID'];
  /** This is a field for block that contains the house */
  blockId: BlockType;
  /** This is a field for the house phone */
  phone: Scalars['String'];
  /** This is a field specify that date that of the house was created */
  createdAt: Scalars['DateTime'];
  /** This is a field for the house number where the resident lives */
  residentSet: Array<ResidentType>;
};

export type BlockType = {
  __typename?: 'BlockType';
  blockId: Scalars['ID'];
  /** This is a field for the block name */
  name: Scalars['String'];
  /** This is a field specify that date that of the block was created */
  createdAt: Scalars['DateTime'];
  /** This is a field for block that contains the house */
  houseSet: Array<HouseType>;
};

export type EmployeeType = {
  __typename?: 'EmployeeType';
  employeeId: Scalars['ID'];
  /** This is a field for the person number of the employee */
  personId: PersonType;
  /** This is a field for the number of the employee */
  phone: Scalars['String'];
  /** This is a field for the ubication where the employee lives */
  homeAddress: Scalars['String'];
  /** This is a field specify that date that of the employee was created */
  createdAt: Scalars['DateTime'];
  /** This is a field for the employee number */
  roleemployeeSet: Array<RoleEmployeeType>;
};

export type RoleEmployeeType = {
  __typename?: 'RoleEmployeeType';
  reId: Scalars['ID'];
  /** This is a field for the employee number */
  employeeId: EmployeeType;
  /** This is a field for the role number */
  roleId: RoleType;
  /** This is a field specify date that of the relation between the role and employee was created */
  createdAt: Scalars['DateTime'];
};

export type RoleType = {
  __typename?: 'RoleType';
  roleId: Scalars['ID'];
  /** This is a field for the house phone */
  name: Scalars['String'];
  /** This is a field specify that date that of the role was created */
  createdAt: Scalars['DateTime'];
  /** This is a field for the role number */
  roleemployeeSet: Array<RoleEmployeeType>;
};

/** The schema mutations  */
export type Mutation = {
  __typename?: 'Mutation';
  /** Obtain JSON Web Token mutation */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
};

/** The schema mutations  */
export type MutationTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};

/** The schema mutations  */
export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

/** The schema mutations  */
export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};

/** Obtain JSON Web Token mutation */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  user: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  tokenAuth?: Maybe<
  { __typename?: 'ObtainJSONWebToken' } & Pick<
  ObtainJsonWebToken,
  'token' | 'payload' | 'refreshExpiresIn'
  >
  >;
};

declare module '*/login.graphql' {
  import { DocumentNode } from 'graphql';

  const defaultDocument: DocumentNode;
  export const login: DocumentNode;

  export default defaultDocument;
}

export const Login = gql`
  mutation login($user: String!, $password: String!) {
    tokenAuth(username: $user, password: $password) {
      token
      payload
      refreshExpiresIn
    }
  }
`;
/**
 * The schema queries
 * @typedef {Object} Query
 * @property {Array<(PersonType|null|undefined)>} [persons]
 * @property {Array<(ResidentType|null|undefined)>} [residents]
 * @property {Array<(HouseType|null|undefined)>} [houses]
 * @property {Array<(BlockType|null|undefined)>} [blocks]
 * @property {Array<(EmployeeType|null|undefined)>} [employees]
 * @property {Array<(RoleEmployeeType|null|undefined)>} [roleEmployees]
 * @property {Array<(RoleType|null|undefined)>} [roles]
 */

/**
 * A person representation
 * @typedef {Object} PersonType
 * @property {string} personId
 * @property {string} idCard - This is field for the numbre of identification card
 * @property {string} name - This is a field for the person name
 * @property {Date} birth - This is a field for the date that was born
 * @property {boolean} status - This is a field for the status of the person
 * @property {string} email - This is a field for person email
 * @property {string} password - This is a field for person password
 * @property {DateTime} createdAt - This is a field specify that date that of the person was created
 * @property {Array<ResidentType>} residentSet - This is a field for the person number
 * @property {Array<EmployeeType>} employeeSet - This is a field for the person number of the employee
 */

/**
 * The `Date` scalar type represents a Date
 * value as specified by
 * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
 * @typedef {*} Date
 */

/**
 * The `DateTime` scalar type represents a DateTime
 * value as specified by
 * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
 * @typedef {*} DateTime
 */

/**
 * @typedef {Object} ResidentType
 * @property {string} residentId
 * @property {PersonType} personId - This is a field for the person number
 * @property {HouseType} houseId - This is a field for the house number where the resident lives
 * @property {boolean} landlord - This is a field that identifies if the resident owns the home
 * @property {DateTime} createdAt - This is a field specify that date that of the resident was created
 */

/**
 * @typedef {Object} HouseType
 * @property {string} houseId
 * @property {BlockType} blockId - This is a field for block that contains the house
 * @property {string} phone - This is a field for the house phone
 * @property {DateTime} createdAt - This is a field specify that date that of the house was created
 * @property {Array<ResidentType>} residentSet - This is a field for the house number where the resident lives
 */

/**
 * @typedef {Object} BlockType
 * @property {string} blockId
 * @property {string} name - This is a field for the block name
 * @property {DateTime} createdAt - This is a field specify that date that of the block was created
 * @property {Array<HouseType>} houseSet - This is a field for block that contains the house
 */

/**
 * @typedef {Object} EmployeeType
 * @property {string} employeeId
 * @property {PersonType} personId - This is a field for the person number of the employee
 * @property {string} phone - This is a field for the number of the employee
 * @property {string} homeAddress - This is a field for the ubication where the employee lives
 * @property {DateTime} createdAt - This is a field specify that date that of the employee was created
 * @property {Array<RoleEmployeeType>} roleemployeeSet - This is a field for the employee number
 */

/**
 * @typedef {Object} RoleEmployeeType
 * @property {string} reId
 * @property {EmployeeType} employeeId - This is a field for the employee number
 * @property {RoleType} roleId - This is a field for the role number
 * @property {DateTime} createdAt - This is a field specify date that of the relation between the role and employee was created
 */

/**
 * @typedef {Object} RoleType
 * @property {string} roleId
 * @property {string} name - This is a field for the house phone
 * @property {DateTime} createdAt - This is a field specify that date that of the role was created
 * @property {Array<RoleEmployeeType>} roleemployeeSet - This is a field for the role number
 */

/**
 * The schema mutations
 * @typedef {Object} Mutation
 * @property {ObtainJSONWebToken} [tokenAuth] - Obtain JSON Web Token mutation
 * @property {Verify} [verifyToken]
 * @property {Refresh} [refreshToken]
 */

/**
 * Obtain JSON Web Token mutation
 * @typedef {Object} ObtainJSONWebToken
 * @property {GenericScalar} payload
 * @property {number} refreshExpiresIn
 * @property {string} token
 */

/**
 * The `GenericScalar` scalar type represents a generic
 * GraphQL scalar value that could be:
 * String, Boolean, Int, Float, List or Object.
 * @typedef {*} GenericScalar
 */

/**
 * @typedef {Object} Verify
 * @property {GenericScalar} payload
 */

/**
 * @typedef {Object} Refresh
 * @property {GenericScalar} payload
 * @property {number} refreshExpiresIn
 * @property {string} token
 */
