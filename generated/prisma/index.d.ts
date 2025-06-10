
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SteamUser
 * 
 */
export type SteamUser = $Result.DefaultSelection<Prisma.$SteamUserPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model JwtToken
 * 
 */
export type JwtToken = $Result.DefaultSelection<Prisma.$JwtTokenPayload>
/**
 * Model ReportUser
 * 
 */
export type ReportUser = $Result.DefaultSelection<Prisma.$ReportUserPayload>
/**
 * Model Verdict
 * 
 */
export type Verdict = $Result.DefaultSelection<Prisma.$VerdictPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  REGISTERED: 'REGISTERED',
  VERIFIED_EMAIL: 'VERIFIED_EMAIL',
  VERIFIED_STEAM: 'VERIFIED_STEAM',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN',
  CREATOR: 'CREATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.steamUser`: Exposes CRUD operations for the **SteamUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SteamUsers
    * const steamUsers = await prisma.steamUser.findMany()
    * ```
    */
  get steamUser(): Prisma.SteamUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jwtToken`: Exposes CRUD operations for the **JwtToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JwtTokens
    * const jwtTokens = await prisma.jwtToken.findMany()
    * ```
    */
  get jwtToken(): Prisma.JwtTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reportUser`: Exposes CRUD operations for the **ReportUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReportUsers
    * const reportUsers = await prisma.reportUser.findMany()
    * ```
    */
  get reportUser(): Prisma.ReportUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verdict`: Exposes CRUD operations for the **Verdict** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verdicts
    * const verdicts = await prisma.verdict.findMany()
    * ```
    */
  get verdict(): Prisma.VerdictDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SteamUser: 'SteamUser',
    Comment: 'Comment',
    JwtToken: 'JwtToken',
    ReportUser: 'ReportUser',
    Verdict: 'Verdict'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "steamUser" | "comment" | "jwtToken" | "reportUser" | "verdict"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SteamUser: {
        payload: Prisma.$SteamUserPayload<ExtArgs>
        fields: Prisma.SteamUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SteamUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SteamUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          findFirst: {
            args: Prisma.SteamUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SteamUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          findMany: {
            args: Prisma.SteamUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>[]
          }
          create: {
            args: Prisma.SteamUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          createMany: {
            args: Prisma.SteamUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SteamUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>[]
          }
          delete: {
            args: Prisma.SteamUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          update: {
            args: Prisma.SteamUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          deleteMany: {
            args: Prisma.SteamUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SteamUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SteamUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>[]
          }
          upsert: {
            args: Prisma.SteamUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SteamUserPayload>
          }
          aggregate: {
            args: Prisma.SteamUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSteamUser>
          }
          groupBy: {
            args: Prisma.SteamUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SteamUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SteamUserCountArgs<ExtArgs>
            result: $Utils.Optional<SteamUserCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      JwtToken: {
        payload: Prisma.$JwtTokenPayload<ExtArgs>
        fields: Prisma.JwtTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JwtTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JwtTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findFirst: {
            args: Prisma.JwtTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JwtTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          findMany: {
            args: Prisma.JwtTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          create: {
            args: Prisma.JwtTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          createMany: {
            args: Prisma.JwtTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JwtTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          delete: {
            args: Prisma.JwtTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          update: {
            args: Prisma.JwtTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          deleteMany: {
            args: Prisma.JwtTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JwtTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JwtTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>[]
          }
          upsert: {
            args: Prisma.JwtTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JwtTokenPayload>
          }
          aggregate: {
            args: Prisma.JwtTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJwtToken>
          }
          groupBy: {
            args: Prisma.JwtTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.JwtTokenCountArgs<ExtArgs>
            result: $Utils.Optional<JwtTokenCountAggregateOutputType> | number
          }
        }
      }
      ReportUser: {
        payload: Prisma.$ReportUserPayload<ExtArgs>
        fields: Prisma.ReportUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          findFirst: {
            args: Prisma.ReportUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          findMany: {
            args: Prisma.ReportUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>[]
          }
          create: {
            args: Prisma.ReportUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          createMany: {
            args: Prisma.ReportUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>[]
          }
          delete: {
            args: Prisma.ReportUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          update: {
            args: Prisma.ReportUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          deleteMany: {
            args: Prisma.ReportUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>[]
          }
          upsert: {
            args: Prisma.ReportUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportUserPayload>
          }
          aggregate: {
            args: Prisma.ReportUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReportUser>
          }
          groupBy: {
            args: Prisma.ReportUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportUserCountArgs<ExtArgs>
            result: $Utils.Optional<ReportUserCountAggregateOutputType> | number
          }
        }
      }
      Verdict: {
        payload: Prisma.$VerdictPayload<ExtArgs>
        fields: Prisma.VerdictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerdictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerdictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          findFirst: {
            args: Prisma.VerdictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerdictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          findMany: {
            args: Prisma.VerdictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>[]
          }
          create: {
            args: Prisma.VerdictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          createMany: {
            args: Prisma.VerdictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerdictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>[]
          }
          delete: {
            args: Prisma.VerdictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          update: {
            args: Prisma.VerdictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          deleteMany: {
            args: Prisma.VerdictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerdictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerdictUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>[]
          }
          upsert: {
            args: Prisma.VerdictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerdictPayload>
          }
          aggregate: {
            args: Prisma.VerdictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerdict>
          }
          groupBy: {
            args: Prisma.VerdictGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerdictGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerdictCountArgs<ExtArgs>
            result: $Utils.Optional<VerdictCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    steamUser?: SteamUserOmit
    comment?: CommentOmit
    jwtToken?: JwtTokenOmit
    reportUser?: ReportUserOmit
    verdict?: VerdictOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    commentsAsAuthor: number
    jwtTokens: number
    reportUsers: number
    verdicts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentsAsAuthor?: boolean | UserCountOutputTypeCountCommentsAsAuthorArgs
    jwtTokens?: boolean | UserCountOutputTypeCountJwtTokensArgs
    reportUsers?: boolean | UserCountOutputTypeCountReportUsersArgs
    verdicts?: boolean | UserCountOutputTypeCountVerdictsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsAsAuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJwtTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReportUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerdictWhereInput
  }


  /**
   * Count Type SteamUserCountOutputType
   */

  export type SteamUserCountOutputType = {
    commentsAsRecipient: number
    reportsAsRecipient: number
  }

  export type SteamUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commentsAsRecipient?: boolean | SteamUserCountOutputTypeCountCommentsAsRecipientArgs
    reportsAsRecipient?: boolean | SteamUserCountOutputTypeCountReportsAsRecipientArgs
  }

  // Custom InputTypes
  /**
   * SteamUserCountOutputType without action
   */
  export type SteamUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUserCountOutputType
     */
    select?: SteamUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SteamUserCountOutputType without action
   */
  export type SteamUserCountOutputTypeCountCommentsAsRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * SteamUserCountOutputType without action
   */
  export type SteamUserCountOutputTypeCountReportsAsRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportUserWhereInput
  }


  /**
   * Count Type ReportUserCountOutputType
   */

  export type ReportUserCountOutputType = {
    verdicts: number
  }

  export type ReportUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verdicts?: boolean | ReportUserCountOutputTypeCountVerdictsArgs
  }

  // Custom InputTypes
  /**
   * ReportUserCountOutputType without action
   */
  export type ReportUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUserCountOutputType
     */
    select?: ReportUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportUserCountOutputType without action
   */
  export type ReportUserCountOutputTypeCountVerdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerdictWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    username: string | null
    password: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    username: number
    password: number
    avatar: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    username?: true
    password?: true
    avatar?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    username: string
    password: string
    avatar: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    steamUser?: boolean | User$steamUserArgs<ExtArgs>
    commentsAsAuthor?: boolean | User$commentsAsAuthorArgs<ExtArgs>
    jwtTokens?: boolean | User$jwtTokensArgs<ExtArgs>
    reportUsers?: boolean | User$reportUsersArgs<ExtArgs>
    verdicts?: boolean | User$verdictsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    avatar?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "username" | "password" | "avatar" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steamUser?: boolean | User$steamUserArgs<ExtArgs>
    commentsAsAuthor?: boolean | User$commentsAsAuthorArgs<ExtArgs>
    jwtTokens?: boolean | User$jwtTokensArgs<ExtArgs>
    reportUsers?: boolean | User$reportUsersArgs<ExtArgs>
    verdicts?: boolean | User$verdictsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      steamUser: Prisma.$SteamUserPayload<ExtArgs> | null
      commentsAsAuthor: Prisma.$CommentPayload<ExtArgs>[]
      jwtTokens: Prisma.$JwtTokenPayload<ExtArgs>[]
      reportUsers: Prisma.$ReportUserPayload<ExtArgs>[]
      verdicts: Prisma.$VerdictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      username: string
      password: string
      avatar: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steamUser<T extends User$steamUserArgs<ExtArgs> = {}>(args?: Subset<T, User$steamUserArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commentsAsAuthor<T extends User$commentsAsAuthorArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsAsAuthorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jwtTokens<T extends User$jwtTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$jwtTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportUsers<T extends User$reportUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$reportUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verdicts<T extends User$verdictsArgs<ExtArgs> = {}>(args?: Subset<T, User$verdictsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.steamUser
   */
  export type User$steamUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    where?: SteamUserWhereInput
  }

  /**
   * User.commentsAsAuthor
   */
  export type User$commentsAsAuthorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.jwtTokens
   */
  export type User$jwtTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    cursor?: JwtTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * User.reportUsers
   */
  export type User$reportUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    where?: ReportUserWhereInput
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    cursor?: ReportUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportUserScalarFieldEnum | ReportUserScalarFieldEnum[]
  }

  /**
   * User.verdicts
   */
  export type User$verdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    where?: VerdictWhereInput
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    cursor?: VerdictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerdictScalarFieldEnum | VerdictScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SteamUser
   */

  export type AggregateSteamUser = {
    _count: SteamUserCountAggregateOutputType | null
    _min: SteamUserMinAggregateOutputType | null
    _max: SteamUserMaxAggregateOutputType | null
  }

  export type SteamUserMinAggregateOutputType = {
    id: string | null
    personaName: string | null
    profileUrl: string | null
    avatar: string | null
    realname: string | null
    timeCreated: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SteamUserMaxAggregateOutputType = {
    id: string | null
    personaName: string | null
    profileUrl: string | null
    avatar: string | null
    realname: string | null
    timeCreated: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SteamUserCountAggregateOutputType = {
    id: number
    personaName: number
    profileUrl: number
    avatar: number
    realname: number
    timeCreated: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SteamUserMinAggregateInputType = {
    id?: true
    personaName?: true
    profileUrl?: true
    avatar?: true
    realname?: true
    timeCreated?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SteamUserMaxAggregateInputType = {
    id?: true
    personaName?: true
    profileUrl?: true
    avatar?: true
    realname?: true
    timeCreated?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SteamUserCountAggregateInputType = {
    id?: true
    personaName?: true
    profileUrl?: true
    avatar?: true
    realname?: true
    timeCreated?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SteamUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SteamUser to aggregate.
     */
    where?: SteamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamUsers to fetch.
     */
    orderBy?: SteamUserOrderByWithRelationInput | SteamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SteamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SteamUsers
    **/
    _count?: true | SteamUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SteamUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SteamUserMaxAggregateInputType
  }

  export type GetSteamUserAggregateType<T extends SteamUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSteamUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSteamUser[P]>
      : GetScalarType<T[P], AggregateSteamUser[P]>
  }




  export type SteamUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SteamUserWhereInput
    orderBy?: SteamUserOrderByWithAggregationInput | SteamUserOrderByWithAggregationInput[]
    by: SteamUserScalarFieldEnum[] | SteamUserScalarFieldEnum
    having?: SteamUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SteamUserCountAggregateInputType | true
    _min?: SteamUserMinAggregateInputType
    _max?: SteamUserMaxAggregateInputType
  }

  export type SteamUserGroupByOutputType = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname: string | null
    timeCreated: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SteamUserCountAggregateOutputType | null
    _min: SteamUserMinAggregateOutputType | null
    _max: SteamUserMaxAggregateOutputType | null
  }

  type GetSteamUserGroupByPayload<T extends SteamUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SteamUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SteamUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SteamUserGroupByOutputType[P]>
            : GetScalarType<T[P], SteamUserGroupByOutputType[P]>
        }
      >
    >


  export type SteamUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaName?: boolean
    profileUrl?: boolean
    avatar?: boolean
    realname?: boolean
    timeCreated?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SteamUser$userArgs<ExtArgs>
    commentsAsRecipient?: boolean | SteamUser$commentsAsRecipientArgs<ExtArgs>
    reportsAsRecipient?: boolean | SteamUser$reportsAsRecipientArgs<ExtArgs>
    _count?: boolean | SteamUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["steamUser"]>

  export type SteamUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaName?: boolean
    profileUrl?: boolean
    avatar?: boolean
    realname?: boolean
    timeCreated?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SteamUser$userArgs<ExtArgs>
  }, ExtArgs["result"]["steamUser"]>

  export type SteamUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personaName?: boolean
    profileUrl?: boolean
    avatar?: boolean
    realname?: boolean
    timeCreated?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | SteamUser$userArgs<ExtArgs>
  }, ExtArgs["result"]["steamUser"]>

  export type SteamUserSelectScalar = {
    id?: boolean
    personaName?: boolean
    profileUrl?: boolean
    avatar?: boolean
    realname?: boolean
    timeCreated?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SteamUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personaName" | "profileUrl" | "avatar" | "realname" | "timeCreated" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["steamUser"]>
  export type SteamUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SteamUser$userArgs<ExtArgs>
    commentsAsRecipient?: boolean | SteamUser$commentsAsRecipientArgs<ExtArgs>
    reportsAsRecipient?: boolean | SteamUser$reportsAsRecipientArgs<ExtArgs>
    _count?: boolean | SteamUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SteamUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SteamUser$userArgs<ExtArgs>
  }
  export type SteamUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SteamUser$userArgs<ExtArgs>
  }

  export type $SteamUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SteamUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      commentsAsRecipient: Prisma.$CommentPayload<ExtArgs>[]
      reportsAsRecipient: Prisma.$ReportUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personaName: string
      profileUrl: string
      avatar: string
      realname: string | null
      timeCreated: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["steamUser"]>
    composites: {}
  }

  type SteamUserGetPayload<S extends boolean | null | undefined | SteamUserDefaultArgs> = $Result.GetResult<Prisma.$SteamUserPayload, S>

  type SteamUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SteamUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SteamUserCountAggregateInputType | true
    }

  export interface SteamUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SteamUser'], meta: { name: 'SteamUser' } }
    /**
     * Find zero or one SteamUser that matches the filter.
     * @param {SteamUserFindUniqueArgs} args - Arguments to find a SteamUser
     * @example
     * // Get one SteamUser
     * const steamUser = await prisma.steamUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SteamUserFindUniqueArgs>(args: SelectSubset<T, SteamUserFindUniqueArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SteamUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SteamUserFindUniqueOrThrowArgs} args - Arguments to find a SteamUser
     * @example
     * // Get one SteamUser
     * const steamUser = await prisma.steamUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SteamUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SteamUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SteamUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserFindFirstArgs} args - Arguments to find a SteamUser
     * @example
     * // Get one SteamUser
     * const steamUser = await prisma.steamUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SteamUserFindFirstArgs>(args?: SelectSubset<T, SteamUserFindFirstArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SteamUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserFindFirstOrThrowArgs} args - Arguments to find a SteamUser
     * @example
     * // Get one SteamUser
     * const steamUser = await prisma.steamUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SteamUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SteamUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SteamUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SteamUsers
     * const steamUsers = await prisma.steamUser.findMany()
     * 
     * // Get first 10 SteamUsers
     * const steamUsers = await prisma.steamUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const steamUserWithIdOnly = await prisma.steamUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SteamUserFindManyArgs>(args?: SelectSubset<T, SteamUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SteamUser.
     * @param {SteamUserCreateArgs} args - Arguments to create a SteamUser.
     * @example
     * // Create one SteamUser
     * const SteamUser = await prisma.steamUser.create({
     *   data: {
     *     // ... data to create a SteamUser
     *   }
     * })
     * 
     */
    create<T extends SteamUserCreateArgs>(args: SelectSubset<T, SteamUserCreateArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SteamUsers.
     * @param {SteamUserCreateManyArgs} args - Arguments to create many SteamUsers.
     * @example
     * // Create many SteamUsers
     * const steamUser = await prisma.steamUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SteamUserCreateManyArgs>(args?: SelectSubset<T, SteamUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SteamUsers and returns the data saved in the database.
     * @param {SteamUserCreateManyAndReturnArgs} args - Arguments to create many SteamUsers.
     * @example
     * // Create many SteamUsers
     * const steamUser = await prisma.steamUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SteamUsers and only return the `id`
     * const steamUserWithIdOnly = await prisma.steamUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SteamUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SteamUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SteamUser.
     * @param {SteamUserDeleteArgs} args - Arguments to delete one SteamUser.
     * @example
     * // Delete one SteamUser
     * const SteamUser = await prisma.steamUser.delete({
     *   where: {
     *     // ... filter to delete one SteamUser
     *   }
     * })
     * 
     */
    delete<T extends SteamUserDeleteArgs>(args: SelectSubset<T, SteamUserDeleteArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SteamUser.
     * @param {SteamUserUpdateArgs} args - Arguments to update one SteamUser.
     * @example
     * // Update one SteamUser
     * const steamUser = await prisma.steamUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SteamUserUpdateArgs>(args: SelectSubset<T, SteamUserUpdateArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SteamUsers.
     * @param {SteamUserDeleteManyArgs} args - Arguments to filter SteamUsers to delete.
     * @example
     * // Delete a few SteamUsers
     * const { count } = await prisma.steamUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SteamUserDeleteManyArgs>(args?: SelectSubset<T, SteamUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SteamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SteamUsers
     * const steamUser = await prisma.steamUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SteamUserUpdateManyArgs>(args: SelectSubset<T, SteamUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SteamUsers and returns the data updated in the database.
     * @param {SteamUserUpdateManyAndReturnArgs} args - Arguments to update many SteamUsers.
     * @example
     * // Update many SteamUsers
     * const steamUser = await prisma.steamUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SteamUsers and only return the `id`
     * const steamUserWithIdOnly = await prisma.steamUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SteamUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SteamUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SteamUser.
     * @param {SteamUserUpsertArgs} args - Arguments to update or create a SteamUser.
     * @example
     * // Update or create a SteamUser
     * const steamUser = await prisma.steamUser.upsert({
     *   create: {
     *     // ... data to create a SteamUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SteamUser we want to update
     *   }
     * })
     */
    upsert<T extends SteamUserUpsertArgs>(args: SelectSubset<T, SteamUserUpsertArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SteamUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserCountArgs} args - Arguments to filter SteamUsers to count.
     * @example
     * // Count the number of SteamUsers
     * const count = await prisma.steamUser.count({
     *   where: {
     *     // ... the filter for the SteamUsers we want to count
     *   }
     * })
    **/
    count<T extends SteamUserCountArgs>(
      args?: Subset<T, SteamUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SteamUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SteamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SteamUserAggregateArgs>(args: Subset<T, SteamUserAggregateArgs>): Prisma.PrismaPromise<GetSteamUserAggregateType<T>>

    /**
     * Group by SteamUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SteamUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SteamUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SteamUserGroupByArgs['orderBy'] }
        : { orderBy?: SteamUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SteamUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSteamUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SteamUser model
   */
  readonly fields: SteamUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SteamUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SteamUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SteamUser$userArgs<ExtArgs> = {}>(args?: Subset<T, SteamUser$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    commentsAsRecipient<T extends SteamUser$commentsAsRecipientArgs<ExtArgs> = {}>(args?: Subset<T, SteamUser$commentsAsRecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reportsAsRecipient<T extends SteamUser$reportsAsRecipientArgs<ExtArgs> = {}>(args?: Subset<T, SteamUser$reportsAsRecipientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SteamUser model
   */
  interface SteamUserFieldRefs {
    readonly id: FieldRef<"SteamUser", 'String'>
    readonly personaName: FieldRef<"SteamUser", 'String'>
    readonly profileUrl: FieldRef<"SteamUser", 'String'>
    readonly avatar: FieldRef<"SteamUser", 'String'>
    readonly realname: FieldRef<"SteamUser", 'String'>
    readonly timeCreated: FieldRef<"SteamUser", 'String'>
    readonly userId: FieldRef<"SteamUser", 'String'>
    readonly createdAt: FieldRef<"SteamUser", 'DateTime'>
    readonly updatedAt: FieldRef<"SteamUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SteamUser findUnique
   */
  export type SteamUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter, which SteamUser to fetch.
     */
    where: SteamUserWhereUniqueInput
  }

  /**
   * SteamUser findUniqueOrThrow
   */
  export type SteamUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter, which SteamUser to fetch.
     */
    where: SteamUserWhereUniqueInput
  }

  /**
   * SteamUser findFirst
   */
  export type SteamUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter, which SteamUser to fetch.
     */
    where?: SteamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamUsers to fetch.
     */
    orderBy?: SteamUserOrderByWithRelationInput | SteamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SteamUsers.
     */
    cursor?: SteamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SteamUsers.
     */
    distinct?: SteamUserScalarFieldEnum | SteamUserScalarFieldEnum[]
  }

  /**
   * SteamUser findFirstOrThrow
   */
  export type SteamUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter, which SteamUser to fetch.
     */
    where?: SteamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamUsers to fetch.
     */
    orderBy?: SteamUserOrderByWithRelationInput | SteamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SteamUsers.
     */
    cursor?: SteamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SteamUsers.
     */
    distinct?: SteamUserScalarFieldEnum | SteamUserScalarFieldEnum[]
  }

  /**
   * SteamUser findMany
   */
  export type SteamUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter, which SteamUsers to fetch.
     */
    where?: SteamUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SteamUsers to fetch.
     */
    orderBy?: SteamUserOrderByWithRelationInput | SteamUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SteamUsers.
     */
    cursor?: SteamUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SteamUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SteamUsers.
     */
    skip?: number
    distinct?: SteamUserScalarFieldEnum | SteamUserScalarFieldEnum[]
  }

  /**
   * SteamUser create
   */
  export type SteamUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SteamUser.
     */
    data: XOR<SteamUserCreateInput, SteamUserUncheckedCreateInput>
  }

  /**
   * SteamUser createMany
   */
  export type SteamUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SteamUsers.
     */
    data: SteamUserCreateManyInput | SteamUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SteamUser createManyAndReturn
   */
  export type SteamUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * The data used to create many SteamUsers.
     */
    data: SteamUserCreateManyInput | SteamUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SteamUser update
   */
  export type SteamUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SteamUser.
     */
    data: XOR<SteamUserUpdateInput, SteamUserUncheckedUpdateInput>
    /**
     * Choose, which SteamUser to update.
     */
    where: SteamUserWhereUniqueInput
  }

  /**
   * SteamUser updateMany
   */
  export type SteamUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SteamUsers.
     */
    data: XOR<SteamUserUpdateManyMutationInput, SteamUserUncheckedUpdateManyInput>
    /**
     * Filter which SteamUsers to update
     */
    where?: SteamUserWhereInput
    /**
     * Limit how many SteamUsers to update.
     */
    limit?: number
  }

  /**
   * SteamUser updateManyAndReturn
   */
  export type SteamUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * The data used to update SteamUsers.
     */
    data: XOR<SteamUserUpdateManyMutationInput, SteamUserUncheckedUpdateManyInput>
    /**
     * Filter which SteamUsers to update
     */
    where?: SteamUserWhereInput
    /**
     * Limit how many SteamUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SteamUser upsert
   */
  export type SteamUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SteamUser to update in case it exists.
     */
    where: SteamUserWhereUniqueInput
    /**
     * In case the SteamUser found by the `where` argument doesn't exist, create a new SteamUser with this data.
     */
    create: XOR<SteamUserCreateInput, SteamUserUncheckedCreateInput>
    /**
     * In case the SteamUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SteamUserUpdateInput, SteamUserUncheckedUpdateInput>
  }

  /**
   * SteamUser delete
   */
  export type SteamUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
    /**
     * Filter which SteamUser to delete.
     */
    where: SteamUserWhereUniqueInput
  }

  /**
   * SteamUser deleteMany
   */
  export type SteamUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SteamUsers to delete
     */
    where?: SteamUserWhereInput
    /**
     * Limit how many SteamUsers to delete.
     */
    limit?: number
  }

  /**
   * SteamUser.user
   */
  export type SteamUser$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SteamUser.commentsAsRecipient
   */
  export type SteamUser$commentsAsRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * SteamUser.reportsAsRecipient
   */
  export type SteamUser$reportsAsRecipientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    where?: ReportUserWhereInput
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    cursor?: ReportUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportUserScalarFieldEnum | ReportUserScalarFieldEnum[]
  }

  /**
   * SteamUser without action
   */
  export type SteamUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SteamUser
     */
    select?: SteamUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SteamUser
     */
    omit?: SteamUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SteamUserInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    pictureUrl: string | null
    authorId: string | null
    recipientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    pictureUrl: string | null
    authorId: string | null
    recipientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    pictureUrl: number
    authorId: number
    recipientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    pictureUrl?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    pictureUrl?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    pictureUrl?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    pictureUrl: string | null
    authorId: string
    recipientId: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pictureUrl?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pictureUrl?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    pictureUrl?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    pictureUrl?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "pictureUrl" | "authorId" | "recipientId" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$SteamUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      pictureUrl: string | null
      authorId: string
      recipientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends SteamUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SteamUserDefaultArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly pictureUrl: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly recipientId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model JwtToken
   */

  export type AggregateJwtToken = {
    _count: JwtTokenCountAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  export type JwtTokenMinAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JwtTokenMaxAggregateOutputType = {
    id: string | null
    refreshToken: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JwtTokenCountAggregateOutputType = {
    id: number
    refreshToken: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JwtTokenMinAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JwtTokenMaxAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JwtTokenCountAggregateInputType = {
    id?: true
    refreshToken?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JwtTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtToken to aggregate.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JwtTokens
    **/
    _count?: true | JwtTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JwtTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JwtTokenMaxAggregateInputType
  }

  export type GetJwtTokenAggregateType<T extends JwtTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateJwtToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJwtToken[P]>
      : GetScalarType<T[P], AggregateJwtToken[P]>
  }




  export type JwtTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JwtTokenWhereInput
    orderBy?: JwtTokenOrderByWithAggregationInput | JwtTokenOrderByWithAggregationInput[]
    by: JwtTokenScalarFieldEnum[] | JwtTokenScalarFieldEnum
    having?: JwtTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JwtTokenCountAggregateInputType | true
    _min?: JwtTokenMinAggregateInputType
    _max?: JwtTokenMaxAggregateInputType
  }

  export type JwtTokenGroupByOutputType = {
    id: string
    refreshToken: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: JwtTokenCountAggregateOutputType | null
    _min: JwtTokenMinAggregateOutputType | null
    _max: JwtTokenMaxAggregateOutputType | null
  }

  type GetJwtTokenGroupByPayload<T extends JwtTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JwtTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JwtTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
            : GetScalarType<T[P], JwtTokenGroupByOutputType[P]>
        }
      >
    >


  export type JwtTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jwtToken"]>

  export type JwtTokenSelectScalar = {
    id?: boolean
    refreshToken?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JwtTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "refreshToken" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["jwtToken"]>
  export type JwtTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JwtTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JwtTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JwtTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JwtToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      refreshToken: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jwtToken"]>
    composites: {}
  }

  type JwtTokenGetPayload<S extends boolean | null | undefined | JwtTokenDefaultArgs> = $Result.GetResult<Prisma.$JwtTokenPayload, S>

  type JwtTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JwtTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JwtTokenCountAggregateInputType | true
    }

  export interface JwtTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JwtToken'], meta: { name: 'JwtToken' } }
    /**
     * Find zero or one JwtToken that matches the filter.
     * @param {JwtTokenFindUniqueArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JwtTokenFindUniqueArgs>(args: SelectSubset<T, JwtTokenFindUniqueArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JwtToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JwtTokenFindUniqueOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JwtTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, JwtTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JwtTokenFindFirstArgs>(args?: SelectSubset<T, JwtTokenFindFirstArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JwtToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindFirstOrThrowArgs} args - Arguments to find a JwtToken
     * @example
     * // Get one JwtToken
     * const jwtToken = await prisma.jwtToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JwtTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, JwtTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JwtTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany()
     * 
     * // Get first 10 JwtTokens
     * const jwtTokens = await prisma.jwtToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JwtTokenFindManyArgs>(args?: SelectSubset<T, JwtTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JwtToken.
     * @param {JwtTokenCreateArgs} args - Arguments to create a JwtToken.
     * @example
     * // Create one JwtToken
     * const JwtToken = await prisma.jwtToken.create({
     *   data: {
     *     // ... data to create a JwtToken
     *   }
     * })
     * 
     */
    create<T extends JwtTokenCreateArgs>(args: SelectSubset<T, JwtTokenCreateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JwtTokens.
     * @param {JwtTokenCreateManyArgs} args - Arguments to create many JwtTokens.
     * @example
     * // Create many JwtTokens
     * const jwtToken = await prisma.jwtToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JwtTokenCreateManyArgs>(args?: SelectSubset<T, JwtTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JwtTokens and returns the data saved in the database.
     * @param {JwtTokenCreateManyAndReturnArgs} args - Arguments to create many JwtTokens.
     * @example
     * // Create many JwtTokens
     * const jwtToken = await prisma.jwtToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JwtTokens and only return the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JwtTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, JwtTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JwtToken.
     * @param {JwtTokenDeleteArgs} args - Arguments to delete one JwtToken.
     * @example
     * // Delete one JwtToken
     * const JwtToken = await prisma.jwtToken.delete({
     *   where: {
     *     // ... filter to delete one JwtToken
     *   }
     * })
     * 
     */
    delete<T extends JwtTokenDeleteArgs>(args: SelectSubset<T, JwtTokenDeleteArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JwtToken.
     * @param {JwtTokenUpdateArgs} args - Arguments to update one JwtToken.
     * @example
     * // Update one JwtToken
     * const jwtToken = await prisma.jwtToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JwtTokenUpdateArgs>(args: SelectSubset<T, JwtTokenUpdateArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JwtTokens.
     * @param {JwtTokenDeleteManyArgs} args - Arguments to filter JwtTokens to delete.
     * @example
     * // Delete a few JwtTokens
     * const { count } = await prisma.jwtToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JwtTokenDeleteManyArgs>(args?: SelectSubset<T, JwtTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JwtTokens
     * const jwtToken = await prisma.jwtToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JwtTokenUpdateManyArgs>(args: SelectSubset<T, JwtTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JwtTokens and returns the data updated in the database.
     * @param {JwtTokenUpdateManyAndReturnArgs} args - Arguments to update many JwtTokens.
     * @example
     * // Update many JwtTokens
     * const jwtToken = await prisma.jwtToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JwtTokens and only return the `id`
     * const jwtTokenWithIdOnly = await prisma.jwtToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JwtTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, JwtTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JwtToken.
     * @param {JwtTokenUpsertArgs} args - Arguments to update or create a JwtToken.
     * @example
     * // Update or create a JwtToken
     * const jwtToken = await prisma.jwtToken.upsert({
     *   create: {
     *     // ... data to create a JwtToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JwtToken we want to update
     *   }
     * })
     */
    upsert<T extends JwtTokenUpsertArgs>(args: SelectSubset<T, JwtTokenUpsertArgs<ExtArgs>>): Prisma__JwtTokenClient<$Result.GetResult<Prisma.$JwtTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JwtTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenCountArgs} args - Arguments to filter JwtTokens to count.
     * @example
     * // Count the number of JwtTokens
     * const count = await prisma.jwtToken.count({
     *   where: {
     *     // ... the filter for the JwtTokens we want to count
     *   }
     * })
    **/
    count<T extends JwtTokenCountArgs>(
      args?: Subset<T, JwtTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JwtTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JwtTokenAggregateArgs>(args: Subset<T, JwtTokenAggregateArgs>): Prisma.PrismaPromise<GetJwtTokenAggregateType<T>>

    /**
     * Group by JwtToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JwtTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JwtTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JwtTokenGroupByArgs['orderBy'] }
        : { orderBy?: JwtTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JwtTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJwtTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JwtToken model
   */
  readonly fields: JwtTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JwtToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JwtTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JwtToken model
   */
  interface JwtTokenFieldRefs {
    readonly id: FieldRef<"JwtToken", 'String'>
    readonly refreshToken: FieldRef<"JwtToken", 'String'>
    readonly userId: FieldRef<"JwtToken", 'String'>
    readonly createdAt: FieldRef<"JwtToken", 'DateTime'>
    readonly updatedAt: FieldRef<"JwtToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JwtToken findUnique
   */
  export type JwtTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findUniqueOrThrow
   */
  export type JwtTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken findFirst
   */
  export type JwtTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findFirstOrThrow
   */
  export type JwtTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtToken to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JwtTokens.
     */
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken findMany
   */
  export type JwtTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter, which JwtTokens to fetch.
     */
    where?: JwtTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JwtTokens to fetch.
     */
    orderBy?: JwtTokenOrderByWithRelationInput | JwtTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JwtTokens.
     */
    cursor?: JwtTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JwtTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JwtTokens.
     */
    skip?: number
    distinct?: JwtTokenScalarFieldEnum | JwtTokenScalarFieldEnum[]
  }

  /**
   * JwtToken create
   */
  export type JwtTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a JwtToken.
     */
    data: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
  }

  /**
   * JwtToken createMany
   */
  export type JwtTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JwtTokens.
     */
    data: JwtTokenCreateManyInput | JwtTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JwtToken createManyAndReturn
   */
  export type JwtTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * The data used to create many JwtTokens.
     */
    data: JwtTokenCreateManyInput | JwtTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtToken update
   */
  export type JwtTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a JwtToken.
     */
    data: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
    /**
     * Choose, which JwtToken to update.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken updateMany
   */
  export type JwtTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JwtTokens.
     */
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyInput>
    /**
     * Filter which JwtTokens to update
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to update.
     */
    limit?: number
  }

  /**
   * JwtToken updateManyAndReturn
   */
  export type JwtTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * The data used to update JwtTokens.
     */
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyInput>
    /**
     * Filter which JwtTokens to update
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JwtToken upsert
   */
  export type JwtTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the JwtToken to update in case it exists.
     */
    where: JwtTokenWhereUniqueInput
    /**
     * In case the JwtToken found by the `where` argument doesn't exist, create a new JwtToken with this data.
     */
    create: XOR<JwtTokenCreateInput, JwtTokenUncheckedCreateInput>
    /**
     * In case the JwtToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JwtTokenUpdateInput, JwtTokenUncheckedUpdateInput>
  }

  /**
   * JwtToken delete
   */
  export type JwtTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
    /**
     * Filter which JwtToken to delete.
     */
    where: JwtTokenWhereUniqueInput
  }

  /**
   * JwtToken deleteMany
   */
  export type JwtTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JwtTokens to delete
     */
    where?: JwtTokenWhereInput
    /**
     * Limit how many JwtTokens to delete.
     */
    limit?: number
  }

  /**
   * JwtToken without action
   */
  export type JwtTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JwtToken
     */
    select?: JwtTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JwtToken
     */
    omit?: JwtTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JwtTokenInclude<ExtArgs> | null
  }


  /**
   * Model ReportUser
   */

  export type AggregateReportUser = {
    _count: ReportUserCountAggregateOutputType | null
    _min: ReportUserMinAggregateOutputType | null
    _max: ReportUserMaxAggregateOutputType | null
  }

  export type ReportUserMinAggregateOutputType = {
    id: string | null
    youtubeLink: string | null
    demoLink: string | null
    comment: string | null
    authorId: string | null
    recipientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportUserMaxAggregateOutputType = {
    id: string | null
    youtubeLink: string | null
    demoLink: string | null
    comment: string | null
    authorId: string | null
    recipientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportUserCountAggregateOutputType = {
    id: number
    youtubeLink: number
    demoLink: number
    comment: number
    authorId: number
    recipientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportUserMinAggregateInputType = {
    id?: true
    youtubeLink?: true
    demoLink?: true
    comment?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportUserMaxAggregateInputType = {
    id?: true
    youtubeLink?: true
    demoLink?: true
    comment?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportUserCountAggregateInputType = {
    id?: true
    youtubeLink?: true
    demoLink?: true
    comment?: true
    authorId?: true
    recipientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportUser to aggregate.
     */
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     */
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReportUsers
    **/
    _count?: true | ReportUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportUserMaxAggregateInputType
  }

  export type GetReportUserAggregateType<T extends ReportUserAggregateArgs> = {
        [P in keyof T & keyof AggregateReportUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReportUser[P]>
      : GetScalarType<T[P], AggregateReportUser[P]>
  }




  export type ReportUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportUserWhereInput
    orderBy?: ReportUserOrderByWithAggregationInput | ReportUserOrderByWithAggregationInput[]
    by: ReportUserScalarFieldEnum[] | ReportUserScalarFieldEnum
    having?: ReportUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportUserCountAggregateInputType | true
    _min?: ReportUserMinAggregateInputType
    _max?: ReportUserMaxAggregateInputType
  }

  export type ReportUserGroupByOutputType = {
    id: string
    youtubeLink: string
    demoLink: string | null
    comment: string | null
    authorId: string
    recipientId: string
    createdAt: Date
    updatedAt: Date
    _count: ReportUserCountAggregateOutputType | null
    _min: ReportUserMinAggregateOutputType | null
    _max: ReportUserMaxAggregateOutputType | null
  }

  type GetReportUserGroupByPayload<T extends ReportUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportUserGroupByOutputType[P]>
            : GetScalarType<T[P], ReportUserGroupByOutputType[P]>
        }
      >
    >


  export type ReportUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeLink?: boolean
    demoLink?: boolean
    comment?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
    verdicts?: boolean | ReportUser$verdictsArgs<ExtArgs>
    _count?: boolean | ReportUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUser"]>

  export type ReportUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeLink?: boolean
    demoLink?: boolean
    comment?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUser"]>

  export type ReportUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    youtubeLink?: boolean
    demoLink?: boolean
    comment?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reportUser"]>

  export type ReportUserSelectScalar = {
    id?: boolean
    youtubeLink?: boolean
    demoLink?: boolean
    comment?: boolean
    authorId?: boolean
    recipientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "youtubeLink" | "demoLink" | "comment" | "authorId" | "recipientId" | "createdAt" | "updatedAt", ExtArgs["result"]["reportUser"]>
  export type ReportUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
    verdicts?: boolean | ReportUser$verdictsArgs<ExtArgs>
    _count?: boolean | ReportUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }
  export type ReportUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | SteamUserDefaultArgs<ExtArgs>
  }

  export type $ReportUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReportUser"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$SteamUserPayload<ExtArgs>
      verdicts: Prisma.$VerdictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      youtubeLink: string
      demoLink: string | null
      comment: string | null
      authorId: string
      recipientId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reportUser"]>
    composites: {}
  }

  type ReportUserGetPayload<S extends boolean | null | undefined | ReportUserDefaultArgs> = $Result.GetResult<Prisma.$ReportUserPayload, S>

  type ReportUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportUserCountAggregateInputType | true
    }

  export interface ReportUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReportUser'], meta: { name: 'ReportUser' } }
    /**
     * Find zero or one ReportUser that matches the filter.
     * @param {ReportUserFindUniqueArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportUserFindUniqueArgs>(args: SelectSubset<T, ReportUserFindUniqueArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReportUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportUserFindUniqueOrThrowArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindFirstArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportUserFindFirstArgs>(args?: SelectSubset<T, ReportUserFindFirstArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReportUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindFirstOrThrowArgs} args - Arguments to find a ReportUser
     * @example
     * // Get one ReportUser
     * const reportUser = await prisma.reportUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReportUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReportUsers
     * const reportUsers = await prisma.reportUser.findMany()
     * 
     * // Get first 10 ReportUsers
     * const reportUsers = await prisma.reportUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportUserWithIdOnly = await prisma.reportUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportUserFindManyArgs>(args?: SelectSubset<T, ReportUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReportUser.
     * @param {ReportUserCreateArgs} args - Arguments to create a ReportUser.
     * @example
     * // Create one ReportUser
     * const ReportUser = await prisma.reportUser.create({
     *   data: {
     *     // ... data to create a ReportUser
     *   }
     * })
     * 
     */
    create<T extends ReportUserCreateArgs>(args: SelectSubset<T, ReportUserCreateArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReportUsers.
     * @param {ReportUserCreateManyArgs} args - Arguments to create many ReportUsers.
     * @example
     * // Create many ReportUsers
     * const reportUser = await prisma.reportUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportUserCreateManyArgs>(args?: SelectSubset<T, ReportUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReportUsers and returns the data saved in the database.
     * @param {ReportUserCreateManyAndReturnArgs} args - Arguments to create many ReportUsers.
     * @example
     * // Create many ReportUsers
     * const reportUser = await prisma.reportUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReportUsers and only return the `id`
     * const reportUserWithIdOnly = await prisma.reportUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReportUser.
     * @param {ReportUserDeleteArgs} args - Arguments to delete one ReportUser.
     * @example
     * // Delete one ReportUser
     * const ReportUser = await prisma.reportUser.delete({
     *   where: {
     *     // ... filter to delete one ReportUser
     *   }
     * })
     * 
     */
    delete<T extends ReportUserDeleteArgs>(args: SelectSubset<T, ReportUserDeleteArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReportUser.
     * @param {ReportUserUpdateArgs} args - Arguments to update one ReportUser.
     * @example
     * // Update one ReportUser
     * const reportUser = await prisma.reportUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUserUpdateArgs>(args: SelectSubset<T, ReportUserUpdateArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReportUsers.
     * @param {ReportUserDeleteManyArgs} args - Arguments to filter ReportUsers to delete.
     * @example
     * // Delete a few ReportUsers
     * const { count } = await prisma.reportUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportUserDeleteManyArgs>(args?: SelectSubset<T, ReportUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReportUsers
     * const reportUser = await prisma.reportUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUserUpdateManyArgs>(args: SelectSubset<T, ReportUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReportUsers and returns the data updated in the database.
     * @param {ReportUserUpdateManyAndReturnArgs} args - Arguments to update many ReportUsers.
     * @example
     * // Update many ReportUsers
     * const reportUser = await prisma.reportUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReportUsers and only return the `id`
     * const reportUserWithIdOnly = await prisma.reportUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReportUser.
     * @param {ReportUserUpsertArgs} args - Arguments to update or create a ReportUser.
     * @example
     * // Update or create a ReportUser
     * const reportUser = await prisma.reportUser.upsert({
     *   create: {
     *     // ... data to create a ReportUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReportUser we want to update
     *   }
     * })
     */
    upsert<T extends ReportUserUpsertArgs>(args: SelectSubset<T, ReportUserUpsertArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReportUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserCountArgs} args - Arguments to filter ReportUsers to count.
     * @example
     * // Count the number of ReportUsers
     * const count = await prisma.reportUser.count({
     *   where: {
     *     // ... the filter for the ReportUsers we want to count
     *   }
     * })
    **/
    count<T extends ReportUserCountArgs>(
      args?: Subset<T, ReportUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReportUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportUserAggregateArgs>(args: Subset<T, ReportUserAggregateArgs>): Prisma.PrismaPromise<GetReportUserAggregateType<T>>

    /**
     * Group by ReportUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportUserGroupByArgs['orderBy'] }
        : { orderBy?: ReportUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReportUser model
   */
  readonly fields: ReportUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReportUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends SteamUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SteamUserDefaultArgs<ExtArgs>>): Prisma__SteamUserClient<$Result.GetResult<Prisma.$SteamUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verdicts<T extends ReportUser$verdictsArgs<ExtArgs> = {}>(args?: Subset<T, ReportUser$verdictsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReportUser model
   */
  interface ReportUserFieldRefs {
    readonly id: FieldRef<"ReportUser", 'String'>
    readonly youtubeLink: FieldRef<"ReportUser", 'String'>
    readonly demoLink: FieldRef<"ReportUser", 'String'>
    readonly comment: FieldRef<"ReportUser", 'String'>
    readonly authorId: FieldRef<"ReportUser", 'String'>
    readonly recipientId: FieldRef<"ReportUser", 'String'>
    readonly createdAt: FieldRef<"ReportUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ReportUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReportUser findUnique
   */
  export type ReportUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter, which ReportUser to fetch.
     */
    where: ReportUserWhereUniqueInput
  }

  /**
   * ReportUser findUniqueOrThrow
   */
  export type ReportUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter, which ReportUser to fetch.
     */
    where: ReportUserWhereUniqueInput
  }

  /**
   * ReportUser findFirst
   */
  export type ReportUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter, which ReportUser to fetch.
     */
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     */
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportUsers.
     */
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportUsers.
     */
    distinct?: ReportUserScalarFieldEnum | ReportUserScalarFieldEnum[]
  }

  /**
   * ReportUser findFirstOrThrow
   */
  export type ReportUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter, which ReportUser to fetch.
     */
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     */
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReportUsers.
     */
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReportUsers.
     */
    distinct?: ReportUserScalarFieldEnum | ReportUserScalarFieldEnum[]
  }

  /**
   * ReportUser findMany
   */
  export type ReportUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter, which ReportUsers to fetch.
     */
    where?: ReportUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReportUsers to fetch.
     */
    orderBy?: ReportUserOrderByWithRelationInput | ReportUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReportUsers.
     */
    cursor?: ReportUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReportUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReportUsers.
     */
    skip?: number
    distinct?: ReportUserScalarFieldEnum | ReportUserScalarFieldEnum[]
  }

  /**
   * ReportUser create
   */
  export type ReportUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ReportUser.
     */
    data: XOR<ReportUserCreateInput, ReportUserUncheckedCreateInput>
  }

  /**
   * ReportUser createMany
   */
  export type ReportUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReportUsers.
     */
    data: ReportUserCreateManyInput | ReportUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReportUser createManyAndReturn
   */
  export type ReportUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * The data used to create many ReportUsers.
     */
    data: ReportUserCreateManyInput | ReportUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportUser update
   */
  export type ReportUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ReportUser.
     */
    data: XOR<ReportUserUpdateInput, ReportUserUncheckedUpdateInput>
    /**
     * Choose, which ReportUser to update.
     */
    where: ReportUserWhereUniqueInput
  }

  /**
   * ReportUser updateMany
   */
  export type ReportUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReportUsers.
     */
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyInput>
    /**
     * Filter which ReportUsers to update
     */
    where?: ReportUserWhereInput
    /**
     * Limit how many ReportUsers to update.
     */
    limit?: number
  }

  /**
   * ReportUser updateManyAndReturn
   */
  export type ReportUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * The data used to update ReportUsers.
     */
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyInput>
    /**
     * Filter which ReportUsers to update
     */
    where?: ReportUserWhereInput
    /**
     * Limit how many ReportUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReportUser upsert
   */
  export type ReportUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ReportUser to update in case it exists.
     */
    where: ReportUserWhereUniqueInput
    /**
     * In case the ReportUser found by the `where` argument doesn't exist, create a new ReportUser with this data.
     */
    create: XOR<ReportUserCreateInput, ReportUserUncheckedCreateInput>
    /**
     * In case the ReportUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUserUpdateInput, ReportUserUncheckedUpdateInput>
  }

  /**
   * ReportUser delete
   */
  export type ReportUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
    /**
     * Filter which ReportUser to delete.
     */
    where: ReportUserWhereUniqueInput
  }

  /**
   * ReportUser deleteMany
   */
  export type ReportUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReportUsers to delete
     */
    where?: ReportUserWhereInput
    /**
     * Limit how many ReportUsers to delete.
     */
    limit?: number
  }

  /**
   * ReportUser.verdicts
   */
  export type ReportUser$verdictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    where?: VerdictWhereInput
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    cursor?: VerdictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerdictScalarFieldEnum | VerdictScalarFieldEnum[]
  }

  /**
   * ReportUser without action
   */
  export type ReportUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportUser
     */
    select?: ReportUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReportUser
     */
    omit?: ReportUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportUserInclude<ExtArgs> | null
  }


  /**
   * Model Verdict
   */

  export type AggregateVerdict = {
    _count: VerdictCountAggregateOutputType | null
    _min: VerdictMinAggregateOutputType | null
    _max: VerdictMaxAggregateOutputType | null
  }

  export type VerdictMinAggregateOutputType = {
    id: string | null
    userId: string | null
    reportId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerdictMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    reportId: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerdictCountAggregateOutputType = {
    id: number
    userId: number
    reportId: number
    verdicts: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerdictMinAggregateInputType = {
    id?: true
    userId?: true
    reportId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerdictMaxAggregateInputType = {
    id?: true
    userId?: true
    reportId?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerdictCountAggregateInputType = {
    id?: true
    userId?: true
    reportId?: true
    verdicts?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerdictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verdict to aggregate.
     */
    where?: VerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verdicts to fetch.
     */
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verdicts
    **/
    _count?: true | VerdictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerdictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerdictMaxAggregateInputType
  }

  export type GetVerdictAggregateType<T extends VerdictAggregateArgs> = {
        [P in keyof T & keyof AggregateVerdict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerdict[P]>
      : GetScalarType<T[P], AggregateVerdict[P]>
  }




  export type VerdictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerdictWhereInput
    orderBy?: VerdictOrderByWithAggregationInput | VerdictOrderByWithAggregationInput[]
    by: VerdictScalarFieldEnum[] | VerdictScalarFieldEnum
    having?: VerdictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerdictCountAggregateInputType | true
    _min?: VerdictMinAggregateInputType
    _max?: VerdictMaxAggregateInputType
  }

  export type VerdictGroupByOutputType = {
    id: string
    userId: string
    reportId: string
    verdicts: string[]
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: VerdictCountAggregateOutputType | null
    _min: VerdictMinAggregateOutputType | null
    _max: VerdictMaxAggregateOutputType | null
  }

  type GetVerdictGroupByPayload<T extends VerdictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerdictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerdictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerdictGroupByOutputType[P]>
            : GetScalarType<T[P], VerdictGroupByOutputType[P]>
        }
      >
    >


  export type VerdictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportId?: boolean
    verdicts?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verdict"]>

  export type VerdictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportId?: boolean
    verdicts?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verdict"]>

  export type VerdictSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reportId?: boolean
    verdicts?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verdict"]>

  export type VerdictSelectScalar = {
    id?: boolean
    userId?: boolean
    reportId?: boolean
    verdicts?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerdictOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reportId" | "verdicts" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["verdict"]>
  export type VerdictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }
  export type VerdictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }
  export type VerdictIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    report?: boolean | ReportUserDefaultArgs<ExtArgs>
  }

  export type $VerdictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verdict"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      report: Prisma.$ReportUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      reportId: string
      verdicts: string[]
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verdict"]>
    composites: {}
  }

  type VerdictGetPayload<S extends boolean | null | undefined | VerdictDefaultArgs> = $Result.GetResult<Prisma.$VerdictPayload, S>

  type VerdictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerdictFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerdictCountAggregateInputType | true
    }

  export interface VerdictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verdict'], meta: { name: 'Verdict' } }
    /**
     * Find zero or one Verdict that matches the filter.
     * @param {VerdictFindUniqueArgs} args - Arguments to find a Verdict
     * @example
     * // Get one Verdict
     * const verdict = await prisma.verdict.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerdictFindUniqueArgs>(args: SelectSubset<T, VerdictFindUniqueArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verdict that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerdictFindUniqueOrThrowArgs} args - Arguments to find a Verdict
     * @example
     * // Get one Verdict
     * const verdict = await prisma.verdict.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerdictFindUniqueOrThrowArgs>(args: SelectSubset<T, VerdictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verdict that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictFindFirstArgs} args - Arguments to find a Verdict
     * @example
     * // Get one Verdict
     * const verdict = await prisma.verdict.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerdictFindFirstArgs>(args?: SelectSubset<T, VerdictFindFirstArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verdict that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictFindFirstOrThrowArgs} args - Arguments to find a Verdict
     * @example
     * // Get one Verdict
     * const verdict = await prisma.verdict.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerdictFindFirstOrThrowArgs>(args?: SelectSubset<T, VerdictFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verdicts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verdicts
     * const verdicts = await prisma.verdict.findMany()
     * 
     * // Get first 10 Verdicts
     * const verdicts = await prisma.verdict.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verdictWithIdOnly = await prisma.verdict.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerdictFindManyArgs>(args?: SelectSubset<T, VerdictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verdict.
     * @param {VerdictCreateArgs} args - Arguments to create a Verdict.
     * @example
     * // Create one Verdict
     * const Verdict = await prisma.verdict.create({
     *   data: {
     *     // ... data to create a Verdict
     *   }
     * })
     * 
     */
    create<T extends VerdictCreateArgs>(args: SelectSubset<T, VerdictCreateArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verdicts.
     * @param {VerdictCreateManyArgs} args - Arguments to create many Verdicts.
     * @example
     * // Create many Verdicts
     * const verdict = await prisma.verdict.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerdictCreateManyArgs>(args?: SelectSubset<T, VerdictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verdicts and returns the data saved in the database.
     * @param {VerdictCreateManyAndReturnArgs} args - Arguments to create many Verdicts.
     * @example
     * // Create many Verdicts
     * const verdict = await prisma.verdict.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verdicts and only return the `id`
     * const verdictWithIdOnly = await prisma.verdict.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerdictCreateManyAndReturnArgs>(args?: SelectSubset<T, VerdictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verdict.
     * @param {VerdictDeleteArgs} args - Arguments to delete one Verdict.
     * @example
     * // Delete one Verdict
     * const Verdict = await prisma.verdict.delete({
     *   where: {
     *     // ... filter to delete one Verdict
     *   }
     * })
     * 
     */
    delete<T extends VerdictDeleteArgs>(args: SelectSubset<T, VerdictDeleteArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verdict.
     * @param {VerdictUpdateArgs} args - Arguments to update one Verdict.
     * @example
     * // Update one Verdict
     * const verdict = await prisma.verdict.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerdictUpdateArgs>(args: SelectSubset<T, VerdictUpdateArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verdicts.
     * @param {VerdictDeleteManyArgs} args - Arguments to filter Verdicts to delete.
     * @example
     * // Delete a few Verdicts
     * const { count } = await prisma.verdict.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerdictDeleteManyArgs>(args?: SelectSubset<T, VerdictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verdicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verdicts
     * const verdict = await prisma.verdict.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerdictUpdateManyArgs>(args: SelectSubset<T, VerdictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verdicts and returns the data updated in the database.
     * @param {VerdictUpdateManyAndReturnArgs} args - Arguments to update many Verdicts.
     * @example
     * // Update many Verdicts
     * const verdict = await prisma.verdict.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verdicts and only return the `id`
     * const verdictWithIdOnly = await prisma.verdict.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerdictUpdateManyAndReturnArgs>(args: SelectSubset<T, VerdictUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verdict.
     * @param {VerdictUpsertArgs} args - Arguments to update or create a Verdict.
     * @example
     * // Update or create a Verdict
     * const verdict = await prisma.verdict.upsert({
     *   create: {
     *     // ... data to create a Verdict
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verdict we want to update
     *   }
     * })
     */
    upsert<T extends VerdictUpsertArgs>(args: SelectSubset<T, VerdictUpsertArgs<ExtArgs>>): Prisma__VerdictClient<$Result.GetResult<Prisma.$VerdictPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verdicts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictCountArgs} args - Arguments to filter Verdicts to count.
     * @example
     * // Count the number of Verdicts
     * const count = await prisma.verdict.count({
     *   where: {
     *     // ... the filter for the Verdicts we want to count
     *   }
     * })
    **/
    count<T extends VerdictCountArgs>(
      args?: Subset<T, VerdictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerdictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verdict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerdictAggregateArgs>(args: Subset<T, VerdictAggregateArgs>): Prisma.PrismaPromise<GetVerdictAggregateType<T>>

    /**
     * Group by Verdict.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerdictGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerdictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerdictGroupByArgs['orderBy'] }
        : { orderBy?: VerdictGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerdictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerdictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verdict model
   */
  readonly fields: VerdictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verdict.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerdictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    report<T extends ReportUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportUserDefaultArgs<ExtArgs>>): Prisma__ReportUserClient<$Result.GetResult<Prisma.$ReportUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verdict model
   */
  interface VerdictFieldRefs {
    readonly id: FieldRef<"Verdict", 'String'>
    readonly userId: FieldRef<"Verdict", 'String'>
    readonly reportId: FieldRef<"Verdict", 'String'>
    readonly verdicts: FieldRef<"Verdict", 'String[]'>
    readonly comment: FieldRef<"Verdict", 'String'>
    readonly createdAt: FieldRef<"Verdict", 'DateTime'>
    readonly updatedAt: FieldRef<"Verdict", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verdict findUnique
   */
  export type VerdictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter, which Verdict to fetch.
     */
    where: VerdictWhereUniqueInput
  }

  /**
   * Verdict findUniqueOrThrow
   */
  export type VerdictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter, which Verdict to fetch.
     */
    where: VerdictWhereUniqueInput
  }

  /**
   * Verdict findFirst
   */
  export type VerdictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter, which Verdict to fetch.
     */
    where?: VerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verdicts to fetch.
     */
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verdicts.
     */
    cursor?: VerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verdicts.
     */
    distinct?: VerdictScalarFieldEnum | VerdictScalarFieldEnum[]
  }

  /**
   * Verdict findFirstOrThrow
   */
  export type VerdictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter, which Verdict to fetch.
     */
    where?: VerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verdicts to fetch.
     */
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verdicts.
     */
    cursor?: VerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verdicts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verdicts.
     */
    distinct?: VerdictScalarFieldEnum | VerdictScalarFieldEnum[]
  }

  /**
   * Verdict findMany
   */
  export type VerdictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter, which Verdicts to fetch.
     */
    where?: VerdictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verdicts to fetch.
     */
    orderBy?: VerdictOrderByWithRelationInput | VerdictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verdicts.
     */
    cursor?: VerdictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verdicts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verdicts.
     */
    skip?: number
    distinct?: VerdictScalarFieldEnum | VerdictScalarFieldEnum[]
  }

  /**
   * Verdict create
   */
  export type VerdictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * The data needed to create a Verdict.
     */
    data: XOR<VerdictCreateInput, VerdictUncheckedCreateInput>
  }

  /**
   * Verdict createMany
   */
  export type VerdictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verdicts.
     */
    data: VerdictCreateManyInput | VerdictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verdict createManyAndReturn
   */
  export type VerdictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * The data used to create many Verdicts.
     */
    data: VerdictCreateManyInput | VerdictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verdict update
   */
  export type VerdictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * The data needed to update a Verdict.
     */
    data: XOR<VerdictUpdateInput, VerdictUncheckedUpdateInput>
    /**
     * Choose, which Verdict to update.
     */
    where: VerdictWhereUniqueInput
  }

  /**
   * Verdict updateMany
   */
  export type VerdictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verdicts.
     */
    data: XOR<VerdictUpdateManyMutationInput, VerdictUncheckedUpdateManyInput>
    /**
     * Filter which Verdicts to update
     */
    where?: VerdictWhereInput
    /**
     * Limit how many Verdicts to update.
     */
    limit?: number
  }

  /**
   * Verdict updateManyAndReturn
   */
  export type VerdictUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * The data used to update Verdicts.
     */
    data: XOR<VerdictUpdateManyMutationInput, VerdictUncheckedUpdateManyInput>
    /**
     * Filter which Verdicts to update
     */
    where?: VerdictWhereInput
    /**
     * Limit how many Verdicts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verdict upsert
   */
  export type VerdictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * The filter to search for the Verdict to update in case it exists.
     */
    where: VerdictWhereUniqueInput
    /**
     * In case the Verdict found by the `where` argument doesn't exist, create a new Verdict with this data.
     */
    create: XOR<VerdictCreateInput, VerdictUncheckedCreateInput>
    /**
     * In case the Verdict was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerdictUpdateInput, VerdictUncheckedUpdateInput>
  }

  /**
   * Verdict delete
   */
  export type VerdictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
    /**
     * Filter which Verdict to delete.
     */
    where: VerdictWhereUniqueInput
  }

  /**
   * Verdict deleteMany
   */
  export type VerdictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verdicts to delete
     */
    where?: VerdictWhereInput
    /**
     * Limit how many Verdicts to delete.
     */
    limit?: number
  }

  /**
   * Verdict without action
   */
  export type VerdictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verdict
     */
    select?: VerdictSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verdict
     */
    omit?: VerdictOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerdictInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SteamUserScalarFieldEnum: {
    id: 'id',
    personaName: 'personaName',
    profileUrl: 'profileUrl',
    avatar: 'avatar',
    realname: 'realname',
    timeCreated: 'timeCreated',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SteamUserScalarFieldEnum = (typeof SteamUserScalarFieldEnum)[keyof typeof SteamUserScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    pictureUrl: 'pictureUrl',
    authorId: 'authorId',
    recipientId: 'recipientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const JwtTokenScalarFieldEnum: {
    id: 'id',
    refreshToken: 'refreshToken',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JwtTokenScalarFieldEnum = (typeof JwtTokenScalarFieldEnum)[keyof typeof JwtTokenScalarFieldEnum]


  export const ReportUserScalarFieldEnum: {
    id: 'id',
    youtubeLink: 'youtubeLink',
    demoLink: 'demoLink',
    comment: 'comment',
    authorId: 'authorId',
    recipientId: 'recipientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportUserScalarFieldEnum = (typeof ReportUserScalarFieldEnum)[keyof typeof ReportUserScalarFieldEnum]


  export const VerdictScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reportId: 'reportId',
    verdicts: 'verdicts',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerdictScalarFieldEnum = (typeof VerdictScalarFieldEnum)[keyof typeof VerdictScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    steamUser?: XOR<SteamUserNullableScalarRelationFilter, SteamUserWhereInput> | null
    commentsAsAuthor?: CommentListRelationFilter
    jwtTokens?: JwtTokenListRelationFilter
    reportUsers?: ReportUserListRelationFilter
    verdicts?: VerdictListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    steamUser?: SteamUserOrderByWithRelationInput
    commentsAsAuthor?: CommentOrderByRelationAggregateInput
    jwtTokens?: JwtTokenOrderByRelationAggregateInput
    reportUsers?: ReportUserOrderByRelationAggregateInput
    verdicts?: VerdictOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    steamUser?: XOR<SteamUserNullableScalarRelationFilter, SteamUserWhereInput> | null
    commentsAsAuthor?: CommentListRelationFilter
    jwtTokens?: JwtTokenListRelationFilter
    reportUsers?: ReportUserListRelationFilter
    verdicts?: VerdictListRelationFilter
  }, "id" | "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SteamUserWhereInput = {
    AND?: SteamUserWhereInput | SteamUserWhereInput[]
    OR?: SteamUserWhereInput[]
    NOT?: SteamUserWhereInput | SteamUserWhereInput[]
    id?: StringFilter<"SteamUser"> | string
    personaName?: StringFilter<"SteamUser"> | string
    profileUrl?: StringFilter<"SteamUser"> | string
    avatar?: StringFilter<"SteamUser"> | string
    realname?: StringNullableFilter<"SteamUser"> | string | null
    timeCreated?: StringFilter<"SteamUser"> | string
    userId?: StringNullableFilter<"SteamUser"> | string | null
    createdAt?: DateTimeFilter<"SteamUser"> | Date | string
    updatedAt?: DateTimeFilter<"SteamUser"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    commentsAsRecipient?: CommentListRelationFilter
    reportsAsRecipient?: ReportUserListRelationFilter
  }

  export type SteamUserOrderByWithRelationInput = {
    id?: SortOrder
    personaName?: SortOrder
    profileUrl?: SortOrder
    avatar?: SortOrder
    realname?: SortOrderInput | SortOrder
    timeCreated?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    commentsAsRecipient?: CommentOrderByRelationAggregateInput
    reportsAsRecipient?: ReportUserOrderByRelationAggregateInput
  }

  export type SteamUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SteamUserWhereInput | SteamUserWhereInput[]
    OR?: SteamUserWhereInput[]
    NOT?: SteamUserWhereInput | SteamUserWhereInput[]
    personaName?: StringFilter<"SteamUser"> | string
    profileUrl?: StringFilter<"SteamUser"> | string
    avatar?: StringFilter<"SteamUser"> | string
    realname?: StringNullableFilter<"SteamUser"> | string | null
    timeCreated?: StringFilter<"SteamUser"> | string
    createdAt?: DateTimeFilter<"SteamUser"> | Date | string
    updatedAt?: DateTimeFilter<"SteamUser"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    commentsAsRecipient?: CommentListRelationFilter
    reportsAsRecipient?: ReportUserListRelationFilter
  }, "id" | "id" | "userId">

  export type SteamUserOrderByWithAggregationInput = {
    id?: SortOrder
    personaName?: SortOrder
    profileUrl?: SortOrder
    avatar?: SortOrder
    realname?: SortOrderInput | SortOrder
    timeCreated?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SteamUserCountOrderByAggregateInput
    _max?: SteamUserMaxOrderByAggregateInput
    _min?: SteamUserMinOrderByAggregateInput
  }

  export type SteamUserScalarWhereWithAggregatesInput = {
    AND?: SteamUserScalarWhereWithAggregatesInput | SteamUserScalarWhereWithAggregatesInput[]
    OR?: SteamUserScalarWhereWithAggregatesInput[]
    NOT?: SteamUserScalarWhereWithAggregatesInput | SteamUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SteamUser"> | string
    personaName?: StringWithAggregatesFilter<"SteamUser"> | string
    profileUrl?: StringWithAggregatesFilter<"SteamUser"> | string
    avatar?: StringWithAggregatesFilter<"SteamUser"> | string
    realname?: StringNullableWithAggregatesFilter<"SteamUser"> | string | null
    timeCreated?: StringWithAggregatesFilter<"SteamUser"> | string
    userId?: StringNullableWithAggregatesFilter<"SteamUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SteamUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SteamUser"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    authorId?: StringFilter<"Comment"> | string
    recipientId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<SteamUserScalarRelationFilter, SteamUserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    recipient?: SteamUserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authorId_recipientId?: CommentAuthorIdRecipientIdCompoundUniqueInput
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    authorId?: StringFilter<"Comment"> | string
    recipientId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<SteamUserScalarRelationFilter, SteamUserWhereInput>
  }, "id" | "id" | "authorId_recipientId">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    recipientId?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type JwtTokenWhereInput = {
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    id?: StringFilter<"JwtToken"> | string
    refreshToken?: StringFilter<"JwtToken"> | string
    userId?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    updatedAt?: DateTimeFilter<"JwtToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JwtTokenOrderByWithRelationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JwtTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JwtTokenWhereInput | JwtTokenWhereInput[]
    OR?: JwtTokenWhereInput[]
    NOT?: JwtTokenWhereInput | JwtTokenWhereInput[]
    refreshToken?: StringFilter<"JwtToken"> | string
    userId?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    updatedAt?: DateTimeFilter<"JwtToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "id">

  export type JwtTokenOrderByWithAggregationInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JwtTokenCountOrderByAggregateInput
    _max?: JwtTokenMaxOrderByAggregateInput
    _min?: JwtTokenMinOrderByAggregateInput
  }

  export type JwtTokenScalarWhereWithAggregatesInput = {
    AND?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    OR?: JwtTokenScalarWhereWithAggregatesInput[]
    NOT?: JwtTokenScalarWhereWithAggregatesInput | JwtTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JwtToken"> | string
    refreshToken?: StringWithAggregatesFilter<"JwtToken"> | string
    userId?: StringWithAggregatesFilter<"JwtToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JwtToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JwtToken"> | Date | string
  }

  export type ReportUserWhereInput = {
    AND?: ReportUserWhereInput | ReportUserWhereInput[]
    OR?: ReportUserWhereInput[]
    NOT?: ReportUserWhereInput | ReportUserWhereInput[]
    id?: StringFilter<"ReportUser"> | string
    youtubeLink?: StringFilter<"ReportUser"> | string
    demoLink?: StringNullableFilter<"ReportUser"> | string | null
    comment?: StringNullableFilter<"ReportUser"> | string | null
    authorId?: StringFilter<"ReportUser"> | string
    recipientId?: StringFilter<"ReportUser"> | string
    createdAt?: DateTimeFilter<"ReportUser"> | Date | string
    updatedAt?: DateTimeFilter<"ReportUser"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<SteamUserScalarRelationFilter, SteamUserWhereInput>
    verdicts?: VerdictListRelationFilter
  }

  export type ReportUserOrderByWithRelationInput = {
    id?: SortOrder
    youtubeLink?: SortOrder
    demoLink?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    recipient?: SteamUserOrderByWithRelationInput
    verdicts?: VerdictOrderByRelationAggregateInput
  }

  export type ReportUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    youtubeLink?: string
    authorId_recipientId?: ReportUserAuthorIdRecipientIdCompoundUniqueInput
    AND?: ReportUserWhereInput | ReportUserWhereInput[]
    OR?: ReportUserWhereInput[]
    NOT?: ReportUserWhereInput | ReportUserWhereInput[]
    demoLink?: StringNullableFilter<"ReportUser"> | string | null
    comment?: StringNullableFilter<"ReportUser"> | string | null
    authorId?: StringFilter<"ReportUser"> | string
    recipientId?: StringFilter<"ReportUser"> | string
    createdAt?: DateTimeFilter<"ReportUser"> | Date | string
    updatedAt?: DateTimeFilter<"ReportUser"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<SteamUserScalarRelationFilter, SteamUserWhereInput>
    verdicts?: VerdictListRelationFilter
  }, "id" | "id" | "youtubeLink" | "authorId_recipientId">

  export type ReportUserOrderByWithAggregationInput = {
    id?: SortOrder
    youtubeLink?: SortOrder
    demoLink?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportUserCountOrderByAggregateInput
    _max?: ReportUserMaxOrderByAggregateInput
    _min?: ReportUserMinOrderByAggregateInput
  }

  export type ReportUserScalarWhereWithAggregatesInput = {
    AND?: ReportUserScalarWhereWithAggregatesInput | ReportUserScalarWhereWithAggregatesInput[]
    OR?: ReportUserScalarWhereWithAggregatesInput[]
    NOT?: ReportUserScalarWhereWithAggregatesInput | ReportUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReportUser"> | string
    youtubeLink?: StringWithAggregatesFilter<"ReportUser"> | string
    demoLink?: StringNullableWithAggregatesFilter<"ReportUser"> | string | null
    comment?: StringNullableWithAggregatesFilter<"ReportUser"> | string | null
    authorId?: StringWithAggregatesFilter<"ReportUser"> | string
    recipientId?: StringWithAggregatesFilter<"ReportUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReportUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReportUser"> | Date | string
  }

  export type VerdictWhereInput = {
    AND?: VerdictWhereInput | VerdictWhereInput[]
    OR?: VerdictWhereInput[]
    NOT?: VerdictWhereInput | VerdictWhereInput[]
    id?: StringFilter<"Verdict"> | string
    userId?: StringFilter<"Verdict"> | string
    reportId?: StringFilter<"Verdict"> | string
    verdicts?: StringNullableListFilter<"Verdict">
    comment?: StringNullableFilter<"Verdict"> | string | null
    createdAt?: DateTimeFilter<"Verdict"> | Date | string
    updatedAt?: DateTimeFilter<"Verdict"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    report?: XOR<ReportUserScalarRelationFilter, ReportUserWhereInput>
  }

  export type VerdictOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportId?: SortOrder
    verdicts?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    report?: ReportUserOrderByWithRelationInput
  }

  export type VerdictWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerdictWhereInput | VerdictWhereInput[]
    OR?: VerdictWhereInput[]
    NOT?: VerdictWhereInput | VerdictWhereInput[]
    userId?: StringFilter<"Verdict"> | string
    reportId?: StringFilter<"Verdict"> | string
    verdicts?: StringNullableListFilter<"Verdict">
    comment?: StringNullableFilter<"Verdict"> | string | null
    createdAt?: DateTimeFilter<"Verdict"> | Date | string
    updatedAt?: DateTimeFilter<"Verdict"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    report?: XOR<ReportUserScalarRelationFilter, ReportUserWhereInput>
  }, "id" | "id">

  export type VerdictOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reportId?: SortOrder
    verdicts?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerdictCountOrderByAggregateInput
    _max?: VerdictMaxOrderByAggregateInput
    _min?: VerdictMinOrderByAggregateInput
  }

  export type VerdictScalarWhereWithAggregatesInput = {
    AND?: VerdictScalarWhereWithAggregatesInput | VerdictScalarWhereWithAggregatesInput[]
    OR?: VerdictScalarWhereWithAggregatesInput[]
    NOT?: VerdictScalarWhereWithAggregatesInput | VerdictScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verdict"> | string
    userId?: StringWithAggregatesFilter<"Verdict"> | string
    reportId?: StringWithAggregatesFilter<"Verdict"> | string
    verdicts?: StringNullableListFilter<"Verdict">
    comment?: StringNullableWithAggregatesFilter<"Verdict"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Verdict"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verdict"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserUncheckedCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUncheckedUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUncheckedUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SteamUserCreateInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSteamUserInput
    commentsAsRecipient?: CommentCreateNestedManyWithoutRecipientInput
    reportsAsRecipient?: ReportUserCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserUncheckedCreateInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsRecipient?: CommentUncheckedCreateNestedManyWithoutRecipientInput
    reportsAsRecipient?: ReportUserUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSteamUserNestedInput
    commentsAsRecipient?: CommentUpdateManyWithoutRecipientNestedInput
    reportsAsRecipient?: ReportUserUpdateManyWithoutRecipientNestedInput
  }

  export type SteamUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsRecipient?: CommentUncheckedUpdateManyWithoutRecipientNestedInput
    reportsAsRecipient?: ReportUserUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type SteamUserCreateManyInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SteamUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SteamUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsAsAuthorInput
    recipient: SteamUserCreateNestedOneWithoutCommentsAsRecipientInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    authorId: string
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsAsAuthorNestedInput
    recipient?: SteamUserUpdateOneRequiredWithoutCommentsAsRecipientNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    authorId: string
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenCreateInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJwtTokensInput
  }

  export type JwtTokenUncheckedCreateInput = {
    id?: string
    refreshToken: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JwtTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJwtTokensNestedInput
  }

  export type JwtTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenCreateManyInput = {
    id?: string
    refreshToken: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JwtTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserCreateInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutReportUsersInput
    recipient: SteamUserCreateNestedOneWithoutReportsAsRecipientInput
    verdicts?: VerdictCreateNestedManyWithoutReportInput
  }

  export type ReportUserUncheckedCreateInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    authorId: string
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verdicts?: VerdictUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportUsersNestedInput
    recipient?: SteamUserUpdateOneRequiredWithoutReportsAsRecipientNestedInput
    verdicts?: VerdictUpdateManyWithoutReportNestedInput
  }

  export type ReportUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verdicts?: VerdictUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUserCreateManyInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    authorId: string
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictCreateInput = {
    id?: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVerdictsInput
    report: ReportUserCreateNestedOneWithoutVerdictsInput
  }

  export type VerdictUncheckedCreateInput = {
    id?: string
    userId: string
    reportId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerdictsNestedInput
    report?: ReportUserUpdateOneRequiredWithoutVerdictsNestedInput
  }

  export type VerdictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictCreateManyInput = {
    id?: string
    userId: string
    reportId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SteamUserNullableScalarRelationFilter = {
    is?: SteamUserWhereInput | null
    isNot?: SteamUserWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type JwtTokenListRelationFilter = {
    every?: JwtTokenWhereInput
    some?: JwtTokenWhereInput
    none?: JwtTokenWhereInput
  }

  export type ReportUserListRelationFilter = {
    every?: ReportUserWhereInput
    some?: ReportUserWhereInput
    none?: ReportUserWhereInput
  }

  export type VerdictListRelationFilter = {
    every?: VerdictWhereInput
    some?: VerdictWhereInput
    none?: VerdictWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JwtTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerdictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SteamUserCountOrderByAggregateInput = {
    id?: SortOrder
    personaName?: SortOrder
    profileUrl?: SortOrder
    avatar?: SortOrder
    realname?: SortOrder
    timeCreated?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SteamUserMaxOrderByAggregateInput = {
    id?: SortOrder
    personaName?: SortOrder
    profileUrl?: SortOrder
    avatar?: SortOrder
    realname?: SortOrder
    timeCreated?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SteamUserMinOrderByAggregateInput = {
    id?: SortOrder
    personaName?: SortOrder
    profileUrl?: SortOrder
    avatar?: SortOrder
    realname?: SortOrder
    timeCreated?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SteamUserScalarRelationFilter = {
    is?: SteamUserWhereInput
    isNot?: SteamUserWhereInput
  }

  export type CommentAuthorIdRecipientIdCompoundUniqueInput = {
    authorId: string
    recipientId: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pictureUrl?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pictureUrl?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    pictureUrl?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JwtTokenCountOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JwtTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JwtTokenMinOrderByAggregateInput = {
    id?: SortOrder
    refreshToken?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportUserAuthorIdRecipientIdCompoundUniqueInput = {
    authorId: string
    recipientId: string
  }

  export type ReportUserCountOrderByAggregateInput = {
    id?: SortOrder
    youtubeLink?: SortOrder
    demoLink?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportUserMaxOrderByAggregateInput = {
    id?: SortOrder
    youtubeLink?: SortOrder
    demoLink?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportUserMinOrderByAggregateInput = {
    id?: SortOrder
    youtubeLink?: SortOrder
    demoLink?: SortOrder
    comment?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ReportUserScalarRelationFilter = {
    is?: ReportUserWhereInput
    isNot?: ReportUserWhereInput
  }

  export type VerdictCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportId?: SortOrder
    verdicts?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerdictMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerdictMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reportId?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SteamUserCreateNestedOneWithoutUserInput = {
    create?: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutUserInput
    connect?: SteamUserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type JwtTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type ReportUserCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput> | ReportUserCreateWithoutAuthorInput[] | ReportUserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutAuthorInput | ReportUserCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportUserCreateManyAuthorInputEnvelope
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
  }

  export type VerdictCreateNestedManyWithoutUserInput = {
    create?: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput> | VerdictCreateWithoutUserInput[] | VerdictUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutUserInput | VerdictCreateOrConnectWithoutUserInput[]
    createMany?: VerdictCreateManyUserInputEnvelope
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
  }

  export type SteamUserUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutUserInput
    connect?: SteamUserWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type JwtTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
  }

  export type ReportUserUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput> | ReportUserCreateWithoutAuthorInput[] | ReportUserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutAuthorInput | ReportUserCreateOrConnectWithoutAuthorInput[]
    createMany?: ReportUserCreateManyAuthorInputEnvelope
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
  }

  export type VerdictUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput> | VerdictCreateWithoutUserInput[] | VerdictUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutUserInput | VerdictCreateOrConnectWithoutUserInput[]
    createMany?: VerdictCreateManyUserInputEnvelope
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SteamUserUpdateOneWithoutUserNestedInput = {
    create?: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutUserInput
    upsert?: SteamUserUpsertWithoutUserInput
    disconnect?: SteamUserWhereInput | boolean
    delete?: SteamUserWhereInput | boolean
    connect?: SteamUserWhereUniqueInput
    update?: XOR<XOR<SteamUserUpdateToOneWithWhereWithoutUserInput, SteamUserUpdateWithoutUserInput>, SteamUserUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type JwtTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutUserInput | JwtTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutUserInput | JwtTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutUserInput | JwtTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type ReportUserUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput> | ReportUserCreateWithoutAuthorInput[] | ReportUserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutAuthorInput | ReportUserCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUserUpsertWithWhereUniqueWithoutAuthorInput | ReportUserUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportUserCreateManyAuthorInputEnvelope
    set?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    disconnect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    delete?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    update?: ReportUserUpdateWithWhereUniqueWithoutAuthorInput | ReportUserUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUserUpdateManyWithWhereWithoutAuthorInput | ReportUserUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
  }

  export type VerdictUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput> | VerdictCreateWithoutUserInput[] | VerdictUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutUserInput | VerdictCreateOrConnectWithoutUserInput[]
    upsert?: VerdictUpsertWithWhereUniqueWithoutUserInput | VerdictUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerdictCreateManyUserInputEnvelope
    set?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    disconnect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    delete?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    update?: VerdictUpdateWithWhereUniqueWithoutUserInput | VerdictUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerdictUpdateManyWithWhereWithoutUserInput | VerdictUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
  }

  export type SteamUserUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutUserInput
    upsert?: SteamUserUpsertWithoutUserInput
    disconnect?: SteamUserWhereInput | boolean
    delete?: SteamUserWhereInput | boolean
    connect?: SteamUserWhereUniqueInput
    update?: XOR<XOR<SteamUserUpdateToOneWithWhereWithoutUserInput, SteamUserUpdateWithoutUserInput>, SteamUserUncheckedUpdateWithoutUserInput>
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type JwtTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput> | JwtTokenCreateWithoutUserInput[] | JwtTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JwtTokenCreateOrConnectWithoutUserInput | JwtTokenCreateOrConnectWithoutUserInput[]
    upsert?: JwtTokenUpsertWithWhereUniqueWithoutUserInput | JwtTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JwtTokenCreateManyUserInputEnvelope
    set?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    disconnect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    delete?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    connect?: JwtTokenWhereUniqueInput | JwtTokenWhereUniqueInput[]
    update?: JwtTokenUpdateWithWhereUniqueWithoutUserInput | JwtTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JwtTokenUpdateManyWithWhereWithoutUserInput | JwtTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
  }

  export type ReportUserUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput> | ReportUserCreateWithoutAuthorInput[] | ReportUserUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutAuthorInput | ReportUserCreateOrConnectWithoutAuthorInput[]
    upsert?: ReportUserUpsertWithWhereUniqueWithoutAuthorInput | ReportUserUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReportUserCreateManyAuthorInputEnvelope
    set?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    disconnect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    delete?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    update?: ReportUserUpdateWithWhereUniqueWithoutAuthorInput | ReportUserUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReportUserUpdateManyWithWhereWithoutAuthorInput | ReportUserUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
  }

  export type VerdictUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput> | VerdictCreateWithoutUserInput[] | VerdictUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutUserInput | VerdictCreateOrConnectWithoutUserInput[]
    upsert?: VerdictUpsertWithWhereUniqueWithoutUserInput | VerdictUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VerdictCreateManyUserInputEnvelope
    set?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    disconnect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    delete?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    update?: VerdictUpdateWithWhereUniqueWithoutUserInput | VerdictUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VerdictUpdateManyWithWhereWithoutUserInput | VerdictUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSteamUserInput = {
    create?: XOR<UserCreateWithoutSteamUserInput, UserUncheckedCreateWithoutSteamUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSteamUserInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput> | CommentCreateWithoutRecipientInput[] | CommentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipientInput | CommentCreateOrConnectWithoutRecipientInput[]
    createMany?: CommentCreateManyRecipientInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReportUserCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput> | ReportUserCreateWithoutRecipientInput[] | ReportUserUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutRecipientInput | ReportUserCreateOrConnectWithoutRecipientInput[]
    createMany?: ReportUserCreateManyRecipientInputEnvelope
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput> | CommentCreateWithoutRecipientInput[] | CommentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipientInput | CommentCreateOrConnectWithoutRecipientInput[]
    createMany?: CommentCreateManyRecipientInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReportUserUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput> | ReportUserCreateWithoutRecipientInput[] | ReportUserUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutRecipientInput | ReportUserCreateOrConnectWithoutRecipientInput[]
    createMany?: ReportUserCreateManyRecipientInputEnvelope
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutSteamUserNestedInput = {
    create?: XOR<UserCreateWithoutSteamUserInput, UserUncheckedCreateWithoutSteamUserInput>
    connectOrCreate?: UserCreateOrConnectWithoutSteamUserInput
    upsert?: UserUpsertWithoutSteamUserInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSteamUserInput, UserUpdateWithoutSteamUserInput>, UserUncheckedUpdateWithoutSteamUserInput>
  }

  export type CommentUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput> | CommentCreateWithoutRecipientInput[] | CommentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipientInput | CommentCreateOrConnectWithoutRecipientInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRecipientInput | CommentUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CommentCreateManyRecipientInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRecipientInput | CommentUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRecipientInput | CommentUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReportUserUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput> | ReportUserCreateWithoutRecipientInput[] | ReportUserUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutRecipientInput | ReportUserCreateOrConnectWithoutRecipientInput[]
    upsert?: ReportUserUpsertWithWhereUniqueWithoutRecipientInput | ReportUserUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ReportUserCreateManyRecipientInputEnvelope
    set?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    disconnect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    delete?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    update?: ReportUserUpdateWithWhereUniqueWithoutRecipientInput | ReportUserUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ReportUserUpdateManyWithWhereWithoutRecipientInput | ReportUserUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput> | CommentCreateWithoutRecipientInput[] | CommentUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutRecipientInput | CommentCreateOrConnectWithoutRecipientInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutRecipientInput | CommentUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: CommentCreateManyRecipientInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutRecipientInput | CommentUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutRecipientInput | CommentUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReportUserUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput> | ReportUserCreateWithoutRecipientInput[] | ReportUserUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: ReportUserCreateOrConnectWithoutRecipientInput | ReportUserCreateOrConnectWithoutRecipientInput[]
    upsert?: ReportUserUpsertWithWhereUniqueWithoutRecipientInput | ReportUserUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: ReportUserCreateManyRecipientInputEnvelope
    set?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    disconnect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    delete?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    connect?: ReportUserWhereUniqueInput | ReportUserWhereUniqueInput[]
    update?: ReportUserUpdateWithWhereUniqueWithoutRecipientInput | ReportUserUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: ReportUserUpdateManyWithWhereWithoutRecipientInput | ReportUserUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentsAsAuthorInput = {
    create?: XOR<UserCreateWithoutCommentsAsAuthorInput, UserUncheckedCreateWithoutCommentsAsAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsAsAuthorInput
    connect?: UserWhereUniqueInput
  }

  export type SteamUserCreateNestedOneWithoutCommentsAsRecipientInput = {
    create?: XOR<SteamUserCreateWithoutCommentsAsRecipientInput, SteamUserUncheckedCreateWithoutCommentsAsRecipientInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutCommentsAsRecipientInput
    connect?: SteamUserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCommentsAsAuthorNestedInput = {
    create?: XOR<UserCreateWithoutCommentsAsAuthorInput, UserUncheckedCreateWithoutCommentsAsAuthorInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsAsAuthorInput
    upsert?: UserUpsertWithoutCommentsAsAuthorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsAsAuthorInput, UserUpdateWithoutCommentsAsAuthorInput>, UserUncheckedUpdateWithoutCommentsAsAuthorInput>
  }

  export type SteamUserUpdateOneRequiredWithoutCommentsAsRecipientNestedInput = {
    create?: XOR<SteamUserCreateWithoutCommentsAsRecipientInput, SteamUserUncheckedCreateWithoutCommentsAsRecipientInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutCommentsAsRecipientInput
    upsert?: SteamUserUpsertWithoutCommentsAsRecipientInput
    connect?: SteamUserWhereUniqueInput
    update?: XOR<XOR<SteamUserUpdateToOneWithWhereWithoutCommentsAsRecipientInput, SteamUserUpdateWithoutCommentsAsRecipientInput>, SteamUserUncheckedUpdateWithoutCommentsAsRecipientInput>
  }

  export type UserCreateNestedOneWithoutJwtTokensInput = {
    create?: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutJwtTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJwtTokensNestedInput = {
    create?: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutJwtTokensInput
    upsert?: UserUpsertWithoutJwtTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJwtTokensInput, UserUpdateWithoutJwtTokensInput>, UserUncheckedUpdateWithoutJwtTokensInput>
  }

  export type UserCreateNestedOneWithoutReportUsersInput = {
    create?: XOR<UserCreateWithoutReportUsersInput, UserUncheckedCreateWithoutReportUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportUsersInput
    connect?: UserWhereUniqueInput
  }

  export type SteamUserCreateNestedOneWithoutReportsAsRecipientInput = {
    create?: XOR<SteamUserCreateWithoutReportsAsRecipientInput, SteamUserUncheckedCreateWithoutReportsAsRecipientInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutReportsAsRecipientInput
    connect?: SteamUserWhereUniqueInput
  }

  export type VerdictCreateNestedManyWithoutReportInput = {
    create?: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput> | VerdictCreateWithoutReportInput[] | VerdictUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutReportInput | VerdictCreateOrConnectWithoutReportInput[]
    createMany?: VerdictCreateManyReportInputEnvelope
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
  }

  export type VerdictUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput> | VerdictCreateWithoutReportInput[] | VerdictUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutReportInput | VerdictCreateOrConnectWithoutReportInput[]
    createMany?: VerdictCreateManyReportInputEnvelope
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReportUsersNestedInput = {
    create?: XOR<UserCreateWithoutReportUsersInput, UserUncheckedCreateWithoutReportUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReportUsersInput
    upsert?: UserUpsertWithoutReportUsersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReportUsersInput, UserUpdateWithoutReportUsersInput>, UserUncheckedUpdateWithoutReportUsersInput>
  }

  export type SteamUserUpdateOneRequiredWithoutReportsAsRecipientNestedInput = {
    create?: XOR<SteamUserCreateWithoutReportsAsRecipientInput, SteamUserUncheckedCreateWithoutReportsAsRecipientInput>
    connectOrCreate?: SteamUserCreateOrConnectWithoutReportsAsRecipientInput
    upsert?: SteamUserUpsertWithoutReportsAsRecipientInput
    connect?: SteamUserWhereUniqueInput
    update?: XOR<XOR<SteamUserUpdateToOneWithWhereWithoutReportsAsRecipientInput, SteamUserUpdateWithoutReportsAsRecipientInput>, SteamUserUncheckedUpdateWithoutReportsAsRecipientInput>
  }

  export type VerdictUpdateManyWithoutReportNestedInput = {
    create?: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput> | VerdictCreateWithoutReportInput[] | VerdictUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutReportInput | VerdictCreateOrConnectWithoutReportInput[]
    upsert?: VerdictUpsertWithWhereUniqueWithoutReportInput | VerdictUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: VerdictCreateManyReportInputEnvelope
    set?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    disconnect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    delete?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    update?: VerdictUpdateWithWhereUniqueWithoutReportInput | VerdictUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: VerdictUpdateManyWithWhereWithoutReportInput | VerdictUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
  }

  export type VerdictUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput> | VerdictCreateWithoutReportInput[] | VerdictUncheckedCreateWithoutReportInput[]
    connectOrCreate?: VerdictCreateOrConnectWithoutReportInput | VerdictCreateOrConnectWithoutReportInput[]
    upsert?: VerdictUpsertWithWhereUniqueWithoutReportInput | VerdictUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: VerdictCreateManyReportInputEnvelope
    set?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    disconnect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    delete?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    connect?: VerdictWhereUniqueInput | VerdictWhereUniqueInput[]
    update?: VerdictUpdateWithWhereUniqueWithoutReportInput | VerdictUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: VerdictUpdateManyWithWhereWithoutReportInput | VerdictUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
  }

  export type VerdictCreateverdictsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVerdictsInput = {
    create?: XOR<UserCreateWithoutVerdictsInput, UserUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerdictsInput
    connect?: UserWhereUniqueInput
  }

  export type ReportUserCreateNestedOneWithoutVerdictsInput = {
    create?: XOR<ReportUserCreateWithoutVerdictsInput, ReportUserUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: ReportUserCreateOrConnectWithoutVerdictsInput
    connect?: ReportUserWhereUniqueInput
  }

  export type VerdictUpdateverdictsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutVerdictsNestedInput = {
    create?: XOR<UserCreateWithoutVerdictsInput, UserUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerdictsInput
    upsert?: UserUpsertWithoutVerdictsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerdictsInput, UserUpdateWithoutVerdictsInput>, UserUncheckedUpdateWithoutVerdictsInput>
  }

  export type ReportUserUpdateOneRequiredWithoutVerdictsNestedInput = {
    create?: XOR<ReportUserCreateWithoutVerdictsInput, ReportUserUncheckedCreateWithoutVerdictsInput>
    connectOrCreate?: ReportUserCreateOrConnectWithoutVerdictsInput
    upsert?: ReportUserUpsertWithoutVerdictsInput
    connect?: ReportUserWhereUniqueInput
    update?: XOR<XOR<ReportUserUpdateToOneWithWhereWithoutVerdictsInput, ReportUserUpdateWithoutVerdictsInput>, ReportUserUncheckedUpdateWithoutVerdictsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SteamUserCreateWithoutUserInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsRecipient?: CommentCreateNestedManyWithoutRecipientInput
    reportsAsRecipient?: ReportUserCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserUncheckedCreateWithoutUserInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsRecipient?: CommentUncheckedCreateNestedManyWithoutRecipientInput
    reportsAsRecipient?: ReportUserUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserCreateOrConnectWithoutUserInput = {
    where: SteamUserWhereUniqueInput
    create: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipient: SteamUserCreateNestedOneWithoutCommentsAsRecipientInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type JwtTokenCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JwtTokenUncheckedCreateWithoutUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JwtTokenCreateOrConnectWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    create: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput>
  }

  export type JwtTokenCreateManyUserInputEnvelope = {
    data: JwtTokenCreateManyUserInput | JwtTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReportUserCreateWithoutAuthorInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    recipient: SteamUserCreateNestedOneWithoutReportsAsRecipientInput
    verdicts?: VerdictCreateNestedManyWithoutReportInput
  }

  export type ReportUserUncheckedCreateWithoutAuthorInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verdicts?: VerdictUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUserCreateOrConnectWithoutAuthorInput = {
    where: ReportUserWhereUniqueInput
    create: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput>
  }

  export type ReportUserCreateManyAuthorInputEnvelope = {
    data: ReportUserCreateManyAuthorInput | ReportUserCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type VerdictCreateWithoutUserInput = {
    id?: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    report: ReportUserCreateNestedOneWithoutVerdictsInput
  }

  export type VerdictUncheckedCreateWithoutUserInput = {
    id?: string
    reportId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictCreateOrConnectWithoutUserInput = {
    where: VerdictWhereUniqueInput
    create: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput>
  }

  export type VerdictCreateManyUserInputEnvelope = {
    data: VerdictCreateManyUserInput | VerdictCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SteamUserUpsertWithoutUserInput = {
    update: XOR<SteamUserUpdateWithoutUserInput, SteamUserUncheckedUpdateWithoutUserInput>
    create: XOR<SteamUserCreateWithoutUserInput, SteamUserUncheckedCreateWithoutUserInput>
    where?: SteamUserWhereInput
  }

  export type SteamUserUpdateToOneWithWhereWithoutUserInput = {
    where?: SteamUserWhereInput
    data: XOR<SteamUserUpdateWithoutUserInput, SteamUserUncheckedUpdateWithoutUserInput>
  }

  export type SteamUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsRecipient?: CommentUpdateManyWithoutRecipientNestedInput
    reportsAsRecipient?: ReportUserUpdateManyWithoutRecipientNestedInput
  }

  export type SteamUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsRecipient?: CommentUncheckedUpdateManyWithoutRecipientNestedInput
    reportsAsRecipient?: ReportUserUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    pictureUrl?: StringNullableFilter<"Comment"> | string | null
    authorId?: StringFilter<"Comment"> | string
    recipientId?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type JwtTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    update: XOR<JwtTokenUpdateWithoutUserInput, JwtTokenUncheckedUpdateWithoutUserInput>
    create: XOR<JwtTokenCreateWithoutUserInput, JwtTokenUncheckedCreateWithoutUserInput>
  }

  export type JwtTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: JwtTokenWhereUniqueInput
    data: XOR<JwtTokenUpdateWithoutUserInput, JwtTokenUncheckedUpdateWithoutUserInput>
  }

  export type JwtTokenUpdateManyWithWhereWithoutUserInput = {
    where: JwtTokenScalarWhereInput
    data: XOR<JwtTokenUpdateManyMutationInput, JwtTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type JwtTokenScalarWhereInput = {
    AND?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    OR?: JwtTokenScalarWhereInput[]
    NOT?: JwtTokenScalarWhereInput | JwtTokenScalarWhereInput[]
    id?: StringFilter<"JwtToken"> | string
    refreshToken?: StringFilter<"JwtToken"> | string
    userId?: StringFilter<"JwtToken"> | string
    createdAt?: DateTimeFilter<"JwtToken"> | Date | string
    updatedAt?: DateTimeFilter<"JwtToken"> | Date | string
  }

  export type ReportUserUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReportUserWhereUniqueInput
    update: XOR<ReportUserUpdateWithoutAuthorInput, ReportUserUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReportUserCreateWithoutAuthorInput, ReportUserUncheckedCreateWithoutAuthorInput>
  }

  export type ReportUserUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReportUserWhereUniqueInput
    data: XOR<ReportUserUpdateWithoutAuthorInput, ReportUserUncheckedUpdateWithoutAuthorInput>
  }

  export type ReportUserUpdateManyWithWhereWithoutAuthorInput = {
    where: ReportUserScalarWhereInput
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReportUserScalarWhereInput = {
    AND?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
    OR?: ReportUserScalarWhereInput[]
    NOT?: ReportUserScalarWhereInput | ReportUserScalarWhereInput[]
    id?: StringFilter<"ReportUser"> | string
    youtubeLink?: StringFilter<"ReportUser"> | string
    demoLink?: StringNullableFilter<"ReportUser"> | string | null
    comment?: StringNullableFilter<"ReportUser"> | string | null
    authorId?: StringFilter<"ReportUser"> | string
    recipientId?: StringFilter<"ReportUser"> | string
    createdAt?: DateTimeFilter<"ReportUser"> | Date | string
    updatedAt?: DateTimeFilter<"ReportUser"> | Date | string
  }

  export type VerdictUpsertWithWhereUniqueWithoutUserInput = {
    where: VerdictWhereUniqueInput
    update: XOR<VerdictUpdateWithoutUserInput, VerdictUncheckedUpdateWithoutUserInput>
    create: XOR<VerdictCreateWithoutUserInput, VerdictUncheckedCreateWithoutUserInput>
  }

  export type VerdictUpdateWithWhereUniqueWithoutUserInput = {
    where: VerdictWhereUniqueInput
    data: XOR<VerdictUpdateWithoutUserInput, VerdictUncheckedUpdateWithoutUserInput>
  }

  export type VerdictUpdateManyWithWhereWithoutUserInput = {
    where: VerdictScalarWhereInput
    data: XOR<VerdictUpdateManyMutationInput, VerdictUncheckedUpdateManyWithoutUserInput>
  }

  export type VerdictScalarWhereInput = {
    AND?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
    OR?: VerdictScalarWhereInput[]
    NOT?: VerdictScalarWhereInput | VerdictScalarWhereInput[]
    id?: StringFilter<"Verdict"> | string
    userId?: StringFilter<"Verdict"> | string
    reportId?: StringFilter<"Verdict"> | string
    verdicts?: StringNullableListFilter<"Verdict">
    comment?: StringNullableFilter<"Verdict"> | string | null
    createdAt?: DateTimeFilter<"Verdict"> | Date | string
    updatedAt?: DateTimeFilter<"Verdict"> | Date | string
  }

  export type UserCreateWithoutSteamUserInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsAuthor?: CommentCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSteamUserInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsAuthor?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSteamUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSteamUserInput, UserUncheckedCreateWithoutSteamUserInput>
  }

  export type CommentCreateWithoutRecipientInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsAsAuthorInput
  }

  export type CommentUncheckedCreateWithoutRecipientInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRecipientInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput>
  }

  export type CommentCreateManyRecipientInputEnvelope = {
    data: CommentCreateManyRecipientInput | CommentCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type ReportUserCreateWithoutRecipientInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutReportUsersInput
    verdicts?: VerdictCreateNestedManyWithoutReportInput
  }

  export type ReportUserUncheckedCreateWithoutRecipientInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    verdicts?: VerdictUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUserCreateOrConnectWithoutRecipientInput = {
    where: ReportUserWhereUniqueInput
    create: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput>
  }

  export type ReportUserCreateManyRecipientInputEnvelope = {
    data: ReportUserCreateManyRecipientInput | ReportUserCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSteamUserInput = {
    update: XOR<UserUpdateWithoutSteamUserInput, UserUncheckedUpdateWithoutSteamUserInput>
    create: XOR<UserCreateWithoutSteamUserInput, UserUncheckedCreateWithoutSteamUserInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSteamUserInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSteamUserInput, UserUncheckedUpdateWithoutSteamUserInput>
  }

  export type UserUpdateWithoutSteamUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsAuthor?: CommentUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSteamUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsAuthor?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUncheckedUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutRecipientInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutRecipientInput, CommentUncheckedUpdateWithoutRecipientInput>
    create: XOR<CommentCreateWithoutRecipientInput, CommentUncheckedCreateWithoutRecipientInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutRecipientInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutRecipientInput, CommentUncheckedUpdateWithoutRecipientInput>
  }

  export type CommentUpdateManyWithWhereWithoutRecipientInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutRecipientInput>
  }

  export type ReportUserUpsertWithWhereUniqueWithoutRecipientInput = {
    where: ReportUserWhereUniqueInput
    update: XOR<ReportUserUpdateWithoutRecipientInput, ReportUserUncheckedUpdateWithoutRecipientInput>
    create: XOR<ReportUserCreateWithoutRecipientInput, ReportUserUncheckedCreateWithoutRecipientInput>
  }

  export type ReportUserUpdateWithWhereUniqueWithoutRecipientInput = {
    where: ReportUserWhereUniqueInput
    data: XOR<ReportUserUpdateWithoutRecipientInput, ReportUserUncheckedUpdateWithoutRecipientInput>
  }

  export type ReportUserUpdateManyWithWhereWithoutRecipientInput = {
    where: ReportUserScalarWhereInput
    data: XOR<ReportUserUpdateManyMutationInput, ReportUserUncheckedUpdateManyWithoutRecipientInput>
  }

  export type UserCreateWithoutCommentsAsAuthorInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserCreateNestedOneWithoutUserInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsAsAuthorInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserUncheckedCreateNestedOneWithoutUserInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsAsAuthorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsAsAuthorInput, UserUncheckedCreateWithoutCommentsAsAuthorInput>
  }

  export type SteamUserCreateWithoutCommentsAsRecipientInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSteamUserInput
    reportsAsRecipient?: ReportUserCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserUncheckedCreateWithoutCommentsAsRecipientInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reportsAsRecipient?: ReportUserUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserCreateOrConnectWithoutCommentsAsRecipientInput = {
    where: SteamUserWhereUniqueInput
    create: XOR<SteamUserCreateWithoutCommentsAsRecipientInput, SteamUserUncheckedCreateWithoutCommentsAsRecipientInput>
  }

  export type UserUpsertWithoutCommentsAsAuthorInput = {
    update: XOR<UserUpdateWithoutCommentsAsAuthorInput, UserUncheckedUpdateWithoutCommentsAsAuthorInput>
    create: XOR<UserCreateWithoutCommentsAsAuthorInput, UserUncheckedCreateWithoutCommentsAsAuthorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsAsAuthorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsAsAuthorInput, UserUncheckedUpdateWithoutCommentsAsAuthorInput>
  }

  export type UserUpdateWithoutCommentsAsAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUpdateOneWithoutUserNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsAsAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUncheckedUpdateOneWithoutUserNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUncheckedUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SteamUserUpsertWithoutCommentsAsRecipientInput = {
    update: XOR<SteamUserUpdateWithoutCommentsAsRecipientInput, SteamUserUncheckedUpdateWithoutCommentsAsRecipientInput>
    create: XOR<SteamUserCreateWithoutCommentsAsRecipientInput, SteamUserUncheckedCreateWithoutCommentsAsRecipientInput>
    where?: SteamUserWhereInput
  }

  export type SteamUserUpdateToOneWithWhereWithoutCommentsAsRecipientInput = {
    where?: SteamUserWhereInput
    data: XOR<SteamUserUpdateWithoutCommentsAsRecipientInput, SteamUserUncheckedUpdateWithoutCommentsAsRecipientInput>
  }

  export type SteamUserUpdateWithoutCommentsAsRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSteamUserNestedInput
    reportsAsRecipient?: ReportUserUpdateManyWithoutRecipientNestedInput
  }

  export type SteamUserUncheckedUpdateWithoutCommentsAsRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportsAsRecipient?: ReportUserUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateWithoutJwtTokensInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentCreateNestedManyWithoutAuthorInput
    reportUsers?: ReportUserCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJwtTokensInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserUncheckedCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutAuthorInput
    verdicts?: VerdictUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJwtTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
  }

  export type UserUpsertWithoutJwtTokensInput = {
    update: XOR<UserUpdateWithoutJwtTokensInput, UserUncheckedUpdateWithoutJwtTokensInput>
    create: XOR<UserCreateWithoutJwtTokensInput, UserUncheckedCreateWithoutJwtTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJwtTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJwtTokensInput, UserUncheckedUpdateWithoutJwtTokensInput>
  }

  export type UserUpdateWithoutJwtTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUpdateManyWithoutAuthorNestedInput
    reportUsers?: ReportUserUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJwtTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUncheckedUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    reportUsers?: ReportUserUncheckedUpdateManyWithoutAuthorNestedInput
    verdicts?: VerdictUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReportUsersInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
    verdicts?: VerdictCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReportUsersInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserUncheckedCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
    verdicts?: VerdictUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReportUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReportUsersInput, UserUncheckedCreateWithoutReportUsersInput>
  }

  export type SteamUserCreateWithoutReportsAsRecipientInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutSteamUserInput
    commentsAsRecipient?: CommentCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserUncheckedCreateWithoutReportsAsRecipientInput = {
    id: string
    personaName: string
    profileUrl: string
    avatar: string
    realname?: string | null
    timeCreated: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    commentsAsRecipient?: CommentUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type SteamUserCreateOrConnectWithoutReportsAsRecipientInput = {
    where: SteamUserWhereUniqueInput
    create: XOR<SteamUserCreateWithoutReportsAsRecipientInput, SteamUserUncheckedCreateWithoutReportsAsRecipientInput>
  }

  export type VerdictCreateWithoutReportInput = {
    id?: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutVerdictsInput
  }

  export type VerdictUncheckedCreateWithoutReportInput = {
    id?: string
    userId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictCreateOrConnectWithoutReportInput = {
    where: VerdictWhereUniqueInput
    create: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput>
  }

  export type VerdictCreateManyReportInputEnvelope = {
    data: VerdictCreateManyReportInput | VerdictCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReportUsersInput = {
    update: XOR<UserUpdateWithoutReportUsersInput, UserUncheckedUpdateWithoutReportUsersInput>
    create: XOR<UserCreateWithoutReportUsersInput, UserUncheckedCreateWithoutReportUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReportUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReportUsersInput, UserUncheckedUpdateWithoutReportUsersInput>
  }

  export type UserUpdateWithoutReportUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
    verdicts?: VerdictUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReportUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUncheckedUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
    verdicts?: VerdictUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SteamUserUpsertWithoutReportsAsRecipientInput = {
    update: XOR<SteamUserUpdateWithoutReportsAsRecipientInput, SteamUserUncheckedUpdateWithoutReportsAsRecipientInput>
    create: XOR<SteamUserCreateWithoutReportsAsRecipientInput, SteamUserUncheckedCreateWithoutReportsAsRecipientInput>
    where?: SteamUserWhereInput
  }

  export type SteamUserUpdateToOneWithWhereWithoutReportsAsRecipientInput = {
    where?: SteamUserWhereInput
    data: XOR<SteamUserUpdateWithoutReportsAsRecipientInput, SteamUserUncheckedUpdateWithoutReportsAsRecipientInput>
  }

  export type SteamUserUpdateWithoutReportsAsRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSteamUserNestedInput
    commentsAsRecipient?: CommentUpdateManyWithoutRecipientNestedInput
  }

  export type SteamUserUncheckedUpdateWithoutReportsAsRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaName?: StringFieldUpdateOperationsInput | string
    profileUrl?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    timeCreated?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commentsAsRecipient?: CommentUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type VerdictUpsertWithWhereUniqueWithoutReportInput = {
    where: VerdictWhereUniqueInput
    update: XOR<VerdictUpdateWithoutReportInput, VerdictUncheckedUpdateWithoutReportInput>
    create: XOR<VerdictCreateWithoutReportInput, VerdictUncheckedCreateWithoutReportInput>
  }

  export type VerdictUpdateWithWhereUniqueWithoutReportInput = {
    where: VerdictWhereUniqueInput
    data: XOR<VerdictUpdateWithoutReportInput, VerdictUncheckedUpdateWithoutReportInput>
  }

  export type VerdictUpdateManyWithWhereWithoutReportInput = {
    where: VerdictScalarWhereInput
    data: XOR<VerdictUpdateManyMutationInput, VerdictUncheckedUpdateManyWithoutReportInput>
  }

  export type UserCreateWithoutVerdictsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutVerdictsInput = {
    id?: string
    email: string
    username: string
    password: string
    avatar?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    steamUser?: SteamUserUncheckedCreateNestedOneWithoutUserInput
    commentsAsAuthor?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    jwtTokens?: JwtTokenUncheckedCreateNestedManyWithoutUserInput
    reportUsers?: ReportUserUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutVerdictsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerdictsInput, UserUncheckedCreateWithoutVerdictsInput>
  }

  export type ReportUserCreateWithoutVerdictsInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutReportUsersInput
    recipient: SteamUserCreateNestedOneWithoutReportsAsRecipientInput
  }

  export type ReportUserUncheckedCreateWithoutVerdictsInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    authorId: string
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUserCreateOrConnectWithoutVerdictsInput = {
    where: ReportUserWhereUniqueInput
    create: XOR<ReportUserCreateWithoutVerdictsInput, ReportUserUncheckedCreateWithoutVerdictsInput>
  }

  export type UserUpsertWithoutVerdictsInput = {
    update: XOR<UserUpdateWithoutVerdictsInput, UserUncheckedUpdateWithoutVerdictsInput>
    create: XOR<UserCreateWithoutVerdictsInput, UserUncheckedCreateWithoutVerdictsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerdictsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerdictsInput, UserUncheckedUpdateWithoutVerdictsInput>
  }

  export type UserUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steamUser?: SteamUserUncheckedUpdateOneWithoutUserNestedInput
    commentsAsAuthor?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    jwtTokens?: JwtTokenUncheckedUpdateManyWithoutUserNestedInput
    reportUsers?: ReportUserUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReportUserUpsertWithoutVerdictsInput = {
    update: XOR<ReportUserUpdateWithoutVerdictsInput, ReportUserUncheckedUpdateWithoutVerdictsInput>
    create: XOR<ReportUserCreateWithoutVerdictsInput, ReportUserUncheckedCreateWithoutVerdictsInput>
    where?: ReportUserWhereInput
  }

  export type ReportUserUpdateToOneWithWhereWithoutVerdictsInput = {
    where?: ReportUserWhereInput
    data: XOR<ReportUserUpdateWithoutVerdictsInput, ReportUserUncheckedUpdateWithoutVerdictsInput>
  }

  export type ReportUserUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportUsersNestedInput
    recipient?: SteamUserUpdateOneRequiredWithoutReportsAsRecipientNestedInput
  }

  export type ReportUserUncheckedUpdateWithoutVerdictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JwtTokenCreateManyUserInput = {
    id?: string
    refreshToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUserCreateManyAuthorInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    recipientId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictCreateManyUserInput = {
    id?: string
    reportId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: SteamUserUpdateOneRequiredWithoutCommentsAsRecipientNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JwtTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipient?: SteamUserUpdateOneRequiredWithoutReportsAsRecipientNestedInput
    verdicts?: VerdictUpdateManyWithoutReportNestedInput
  }

  export type ReportUserUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verdicts?: VerdictUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUserUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    recipientId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report?: ReportUserUpdateOneRequiredWithoutVerdictsNestedInput
  }

  export type VerdictUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyRecipientInput = {
    id?: string
    content: string
    pictureUrl?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportUserCreateManyRecipientInput = {
    id?: string
    youtubeLink: string
    demoLink?: string | null
    comment?: string | null
    authorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsAsAuthorNestedInput
  }

  export type CommentUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUserUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutReportUsersNestedInput
    verdicts?: VerdictUpdateManyWithoutReportNestedInput
  }

  export type ReportUserUncheckedUpdateWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verdicts?: VerdictUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUserUncheckedUpdateManyWithoutRecipientInput = {
    id?: StringFieldUpdateOperationsInput | string
    youtubeLink?: StringFieldUpdateOperationsInput | string
    demoLink?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictCreateManyReportInput = {
    id?: string
    userId: string
    verdicts?: VerdictCreateverdictsInput | string[]
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerdictUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVerdictsNestedInput
  }

  export type VerdictUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerdictUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    verdicts?: VerdictUpdateverdictsInput | string[]
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}