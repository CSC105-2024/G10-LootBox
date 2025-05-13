
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
 * Model Key
 * 
 */
export type Key = $Result.DefaultSelection<Prisma.$KeyPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model UserKey
 * 
 */
export type UserKey = $Result.DefaultSelection<Prisma.$UserKeyPayload>
/**
 * Model UserItem
 * 
 */
export type UserItem = $Result.DefaultSelection<Prisma.$UserItemPayload>

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
   * `prisma.key`: Exposes CRUD operations for the **Key** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keys
    * const keys = await prisma.key.findMany()
    * ```
    */
  get key(): Prisma.KeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userKey`: Exposes CRUD operations for the **UserKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserKeys
    * const userKeys = await prisma.userKey.findMany()
    * ```
    */
  get userKey(): Prisma.UserKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userItem`: Exposes CRUD operations for the **UserItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserItems
    * const userItems = await prisma.userItem.findMany()
    * ```
    */
  get userItem(): Prisma.UserItemDelegate<ExtArgs, ClientOptions>;
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
    Key: 'Key',
    Item: 'Item',
    UserKey: 'UserKey',
    UserItem: 'UserItem'
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
      modelProps: "user" | "key" | "item" | "userKey" | "userItem"
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
      Key: {
        payload: Prisma.$KeyPayload<ExtArgs>
        fields: Prisma.KeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findFirst: {
            args: Prisma.KeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          findMany: {
            args: Prisma.KeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          create: {
            args: Prisma.KeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          createMany: {
            args: Prisma.KeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          delete: {
            args: Prisma.KeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          update: {
            args: Prisma.KeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          deleteMany: {
            args: Prisma.KeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>[]
          }
          upsert: {
            args: Prisma.KeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeyPayload>
          }
          aggregate: {
            args: Prisma.KeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKey>
          }
          groupBy: {
            args: Prisma.KeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeyCountArgs<ExtArgs>
            result: $Utils.Optional<KeyCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      UserKey: {
        payload: Prisma.$UserKeyPayload<ExtArgs>
        fields: Prisma.UserKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          findFirst: {
            args: Prisma.UserKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          findMany: {
            args: Prisma.UserKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>[]
          }
          create: {
            args: Prisma.UserKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          createMany: {
            args: Prisma.UserKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>[]
          }
          delete: {
            args: Prisma.UserKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          update: {
            args: Prisma.UserKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          deleteMany: {
            args: Prisma.UserKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>[]
          }
          upsert: {
            args: Prisma.UserKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserKeyPayload>
          }
          aggregate: {
            args: Prisma.UserKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserKey>
          }
          groupBy: {
            args: Prisma.UserKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserKeyCountArgs<ExtArgs>
            result: $Utils.Optional<UserKeyCountAggregateOutputType> | number
          }
        }
      }
      UserItem: {
        payload: Prisma.$UserItemPayload<ExtArgs>
        fields: Prisma.UserItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findFirst: {
            args: Prisma.UserItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          findMany: {
            args: Prisma.UserItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>[]
          }
          create: {
            args: Prisma.UserItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          createMany: {
            args: Prisma.UserItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>[]
          }
          delete: {
            args: Prisma.UserItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          update: {
            args: Prisma.UserItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          deleteMany: {
            args: Prisma.UserItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>[]
          }
          upsert: {
            args: Prisma.UserItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserItemPayload>
          }
          aggregate: {
            args: Prisma.UserItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserItem>
          }
          groupBy: {
            args: Prisma.UserItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserItemCountArgs<ExtArgs>
            result: $Utils.Optional<UserItemCountAggregateOutputType> | number
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
    key?: KeyOmit
    item?: ItemOmit
    userKey?: UserKeyOmit
    userItem?: UserItemOmit
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
    keys: number
    items: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keys?: boolean | UserCountOutputTypeCountKeysArgs
    items?: boolean | UserCountOutputTypeCountItemsArgs
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
  export type UserCountOutputTypeCountKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }


  /**
   * Count Type KeyCountOutputType
   */

  export type KeyCountOutputType = {
    userKeys: number
  }

  export type KeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKeys?: boolean | KeyCountOutputTypeCountUserKeysArgs
  }

  // Custom InputTypes
  /**
   * KeyCountOutputType without action
   */
  export type KeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeyCountOutputType
     */
    select?: KeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeyCountOutputType without action
   */
  export type KeyCountOutputTypeCountUserKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKeyWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    userItems: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userItems?: boolean | ItemCountOutputTypeCountUserItemsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountUserItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    coin: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    coin: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    coin: number | null
    profilePic: string | null
    backgroundImage: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    coin: number | null
    profilePic: string | null
    backgroundImage: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    coin: number
    profilePic: number
    backgroundImage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    coin?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    coin?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    coin?: true
    profilePic?: true
    backgroundImage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    coin?: true
    profilePic?: true
    backgroundImage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    coin?: true
    profilePic?: true
    backgroundImage?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    coin: number
    profilePic: string | null
    backgroundImage: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    coin?: boolean
    profilePic?: boolean
    backgroundImage?: boolean
    keys?: boolean | User$keysArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    coin?: boolean
    profilePic?: boolean
    backgroundImage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    coin?: boolean
    profilePic?: boolean
    backgroundImage?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    coin?: boolean
    profilePic?: boolean
    backgroundImage?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "coin" | "profilePic" | "backgroundImage", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keys?: boolean | User$keysArgs<ExtArgs>
    items?: boolean | User$itemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      keys: Prisma.$UserKeyPayload<ExtArgs>[]
      items: Prisma.$UserItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      coin: number
      profilePic: string | null
      backgroundImage: string | null
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
    keys<T extends User$keysArgs<ExtArgs> = {}>(args?: Subset<T, User$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends User$itemsArgs<ExtArgs> = {}>(args?: Subset<T, User$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly coin: FieldRef<"User", 'Int'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly backgroundImage: FieldRef<"User", 'String'>
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
   * User.keys
   */
  export type User$keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    where?: UserKeyWhereInput
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    cursor?: UserKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserKeyScalarFieldEnum | UserKeyScalarFieldEnum[]
  }

  /**
   * User.items
   */
  export type User$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
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
   * Model Key
   */

  export type AggregateKey = {
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  export type KeyAvgAggregateOutputType = {
    id: number | null
  }

  export type KeySumAggregateOutputType = {
    id: number | null
  }

  export type KeyMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type KeyMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type KeyCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type KeyAvgAggregateInputType = {
    id?: true
  }

  export type KeySumAggregateInputType = {
    id?: true
  }

  export type KeyMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type KeyMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type KeyCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type KeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Key to aggregate.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keys
    **/
    _count?: true | KeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeyMaxAggregateInputType
  }

  export type GetKeyAggregateType<T extends KeyAggregateArgs> = {
        [P in keyof T & keyof AggregateKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKey[P]>
      : GetScalarType<T[P], AggregateKey[P]>
  }




  export type KeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeyWhereInput
    orderBy?: KeyOrderByWithAggregationInput | KeyOrderByWithAggregationInput[]
    by: KeyScalarFieldEnum[] | KeyScalarFieldEnum
    having?: KeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeyCountAggregateInputType | true
    _avg?: KeyAvgAggregateInputType
    _sum?: KeySumAggregateInputType
    _min?: KeyMinAggregateInputType
    _max?: KeyMaxAggregateInputType
  }

  export type KeyGroupByOutputType = {
    id: number
    type: string
    _count: KeyCountAggregateOutputType | null
    _avg: KeyAvgAggregateOutputType | null
    _sum: KeySumAggregateOutputType | null
    _min: KeyMinAggregateOutputType | null
    _max: KeyMaxAggregateOutputType | null
  }

  type GetKeyGroupByPayload<T extends KeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeyGroupByOutputType[P]>
            : GetScalarType<T[P], KeyGroupByOutputType[P]>
        }
      >
    >


  export type KeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userKeys?: boolean | Key$userKeysArgs<ExtArgs>
    _count?: boolean | KeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["key"]>

  export type KeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["key"]>

  export type KeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
  }, ExtArgs["result"]["key"]>

  export type KeySelectScalar = {
    id?: boolean
    type?: boolean
  }

  export type KeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type", ExtArgs["result"]["key"]>
  export type KeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userKeys?: boolean | Key$userKeysArgs<ExtArgs>
    _count?: boolean | KeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Key"
    objects: {
      userKeys: Prisma.$UserKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
    }, ExtArgs["result"]["key"]>
    composites: {}
  }

  type KeyGetPayload<S extends boolean | null | undefined | KeyDefaultArgs> = $Result.GetResult<Prisma.$KeyPayload, S>

  type KeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeyCountAggregateInputType | true
    }

  export interface KeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Key'], meta: { name: 'Key' } }
    /**
     * Find zero or one Key that matches the filter.
     * @param {KeyFindUniqueArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeyFindUniqueArgs>(args: SelectSubset<T, KeyFindUniqueArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Key that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeyFindUniqueOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeyFindUniqueOrThrowArgs>(args: SelectSubset<T, KeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Key that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeyFindFirstArgs>(args?: SelectSubset<T, KeyFindFirstArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Key that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindFirstOrThrowArgs} args - Arguments to find a Key
     * @example
     * // Get one Key
     * const key = await prisma.key.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeyFindFirstOrThrowArgs>(args?: SelectSubset<T, KeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keys
     * const keys = await prisma.key.findMany()
     * 
     * // Get first 10 Keys
     * const keys = await prisma.key.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keyWithIdOnly = await prisma.key.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeyFindManyArgs>(args?: SelectSubset<T, KeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Key.
     * @param {KeyCreateArgs} args - Arguments to create a Key.
     * @example
     * // Create one Key
     * const Key = await prisma.key.create({
     *   data: {
     *     // ... data to create a Key
     *   }
     * })
     * 
     */
    create<T extends KeyCreateArgs>(args: SelectSubset<T, KeyCreateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keys.
     * @param {KeyCreateManyArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const key = await prisma.key.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeyCreateManyArgs>(args?: SelectSubset<T, KeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keys and returns the data saved in the database.
     * @param {KeyCreateManyAndReturnArgs} args - Arguments to create many Keys.
     * @example
     * // Create many Keys
     * const key = await prisma.key.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keys and only return the `id`
     * const keyWithIdOnly = await prisma.key.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeyCreateManyAndReturnArgs>(args?: SelectSubset<T, KeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Key.
     * @param {KeyDeleteArgs} args - Arguments to delete one Key.
     * @example
     * // Delete one Key
     * const Key = await prisma.key.delete({
     *   where: {
     *     // ... filter to delete one Key
     *   }
     * })
     * 
     */
    delete<T extends KeyDeleteArgs>(args: SelectSubset<T, KeyDeleteArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Key.
     * @param {KeyUpdateArgs} args - Arguments to update one Key.
     * @example
     * // Update one Key
     * const key = await prisma.key.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeyUpdateArgs>(args: SelectSubset<T, KeyUpdateArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keys.
     * @param {KeyDeleteManyArgs} args - Arguments to filter Keys to delete.
     * @example
     * // Delete a few Keys
     * const { count } = await prisma.key.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeyDeleteManyArgs>(args?: SelectSubset<T, KeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeyUpdateManyArgs>(args: SelectSubset<T, KeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keys and returns the data updated in the database.
     * @param {KeyUpdateManyAndReturnArgs} args - Arguments to update many Keys.
     * @example
     * // Update many Keys
     * const key = await prisma.key.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keys and only return the `id`
     * const keyWithIdOnly = await prisma.key.updateManyAndReturn({
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
    updateManyAndReturn<T extends KeyUpdateManyAndReturnArgs>(args: SelectSubset<T, KeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Key.
     * @param {KeyUpsertArgs} args - Arguments to update or create a Key.
     * @example
     * // Update or create a Key
     * const key = await prisma.key.upsert({
     *   create: {
     *     // ... data to create a Key
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Key we want to update
     *   }
     * })
     */
    upsert<T extends KeyUpsertArgs>(args: SelectSubset<T, KeyUpsertArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyCountArgs} args - Arguments to filter Keys to count.
     * @example
     * // Count the number of Keys
     * const count = await prisma.key.count({
     *   where: {
     *     // ... the filter for the Keys we want to count
     *   }
     * })
    **/
    count<T extends KeyCountArgs>(
      args?: Subset<T, KeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeyAggregateArgs>(args: Subset<T, KeyAggregateArgs>): Prisma.PrismaPromise<GetKeyAggregateType<T>>

    /**
     * Group by Key.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeyGroupByArgs} args - Group by arguments.
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
      T extends KeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeyGroupByArgs['orderBy'] }
        : { orderBy?: KeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Key model
   */
  readonly fields: KeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Key.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userKeys<T extends Key$userKeysArgs<ExtArgs> = {}>(args?: Subset<T, Key$userKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Key model
   */
  interface KeyFieldRefs {
    readonly id: FieldRef<"Key", 'Int'>
    readonly type: FieldRef<"Key", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Key findUnique
   */
  export type KeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findUniqueOrThrow
   */
  export type KeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key findFirst
   */
  export type KeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findFirstOrThrow
   */
  export type KeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Key to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keys.
     */
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key findMany
   */
  export type KeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter, which Keys to fetch.
     */
    where?: KeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keys to fetch.
     */
    orderBy?: KeyOrderByWithRelationInput | KeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keys.
     */
    cursor?: KeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keys.
     */
    skip?: number
    distinct?: KeyScalarFieldEnum | KeyScalarFieldEnum[]
  }

  /**
   * Key create
   */
  export type KeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to create a Key.
     */
    data: XOR<KeyCreateInput, KeyUncheckedCreateInput>
  }

  /**
   * Key createMany
   */
  export type KeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
  }

  /**
   * Key createManyAndReturn
   */
  export type KeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data used to create many Keys.
     */
    data: KeyCreateManyInput | KeyCreateManyInput[]
  }

  /**
   * Key update
   */
  export type KeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The data needed to update a Key.
     */
    data: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
    /**
     * Choose, which Key to update.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key updateMany
   */
  export type KeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Key updateManyAndReturn
   */
  export type KeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * The data used to update Keys.
     */
    data: XOR<KeyUpdateManyMutationInput, KeyUncheckedUpdateManyInput>
    /**
     * Filter which Keys to update
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to update.
     */
    limit?: number
  }

  /**
   * Key upsert
   */
  export type KeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * The filter to search for the Key to update in case it exists.
     */
    where: KeyWhereUniqueInput
    /**
     * In case the Key found by the `where` argument doesn't exist, create a new Key with this data.
     */
    create: XOR<KeyCreateInput, KeyUncheckedCreateInput>
    /**
     * In case the Key was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeyUpdateInput, KeyUncheckedUpdateInput>
  }

  /**
   * Key delete
   */
  export type KeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
    /**
     * Filter which Key to delete.
     */
    where: KeyWhereUniqueInput
  }

  /**
   * Key deleteMany
   */
  export type KeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keys to delete
     */
    where?: KeyWhereInput
    /**
     * Limit how many Keys to delete.
     */
    limit?: number
  }

  /**
   * Key.userKeys
   */
  export type Key$userKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    where?: UserKeyWhereInput
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    cursor?: UserKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserKeyScalarFieldEnum | UserKeyScalarFieldEnum[]
  }

  /**
   * Key without action
   */
  export type KeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Key
     */
    select?: KeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Key
     */
    omit?: KeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeyInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    sellPrice: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    sellPrice: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    rarity: string | null
    sellPrice: number | null
    img: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    rarity: string | null
    sellPrice: number | null
    img: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    type: number
    rarity: number
    sellPrice: number
    img: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    sellPrice?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    sellPrice?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    sellPrice?: true
    img?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    sellPrice?: true
    img?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    sellPrice?: true
    img?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    type: string
    rarity: string
    sellPrice: number
    img: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    sellPrice?: boolean
    img?: boolean
    userItems?: boolean | Item$userItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    sellPrice?: boolean
    img?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    sellPrice?: boolean
    img?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    sellPrice?: boolean
    img?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "rarity" | "sellPrice" | "img", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userItems?: boolean | Item$userItemsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      userItems: Prisma.$UserItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      rarity: string
      sellPrice: number
      img: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
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
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userItems<T extends Item$userItemsArgs<ExtArgs> = {}>(args?: Subset<T, Item$userItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly type: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'String'>
    readonly sellPrice: FieldRef<"Item", 'Int'>
    readonly img: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.userItems
   */
  export type Item$userItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    cursor?: UserItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model UserKey
   */

  export type AggregateUserKey = {
    _count: UserKeyCountAggregateOutputType | null
    _avg: UserKeyAvgAggregateOutputType | null
    _sum: UserKeySumAggregateOutputType | null
    _min: UserKeyMinAggregateOutputType | null
    _max: UserKeyMaxAggregateOutputType | null
  }

  export type UserKeyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    keyId: number | null
    quantity: number | null
  }

  export type UserKeySumAggregateOutputType = {
    id: number | null
    userId: number | null
    keyId: number | null
    quantity: number | null
  }

  export type UserKeyMinAggregateOutputType = {
    id: number | null
    userId: number | null
    keyId: number | null
    quantity: number | null
    updatedAt: Date | null
    lastClaimedAt: Date | null
  }

  export type UserKeyMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    keyId: number | null
    quantity: number | null
    updatedAt: Date | null
    lastClaimedAt: Date | null
  }

  export type UserKeyCountAggregateOutputType = {
    id: number
    userId: number
    keyId: number
    quantity: number
    updatedAt: number
    lastClaimedAt: number
    _all: number
  }


  export type UserKeyAvgAggregateInputType = {
    id?: true
    userId?: true
    keyId?: true
    quantity?: true
  }

  export type UserKeySumAggregateInputType = {
    id?: true
    userId?: true
    keyId?: true
    quantity?: true
  }

  export type UserKeyMinAggregateInputType = {
    id?: true
    userId?: true
    keyId?: true
    quantity?: true
    updatedAt?: true
    lastClaimedAt?: true
  }

  export type UserKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    keyId?: true
    quantity?: true
    updatedAt?: true
    lastClaimedAt?: true
  }

  export type UserKeyCountAggregateInputType = {
    id?: true
    userId?: true
    keyId?: true
    quantity?: true
    updatedAt?: true
    lastClaimedAt?: true
    _all?: true
  }

  export type UserKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKey to aggregate.
     */
    where?: UserKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKeys to fetch.
     */
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserKeys
    **/
    _count?: true | UserKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserKeyMaxAggregateInputType
  }

  export type GetUserKeyAggregateType<T extends UserKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserKey[P]>
      : GetScalarType<T[P], AggregateUserKey[P]>
  }




  export type UserKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserKeyWhereInput
    orderBy?: UserKeyOrderByWithAggregationInput | UserKeyOrderByWithAggregationInput[]
    by: UserKeyScalarFieldEnum[] | UserKeyScalarFieldEnum
    having?: UserKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserKeyCountAggregateInputType | true
    _avg?: UserKeyAvgAggregateInputType
    _sum?: UserKeySumAggregateInputType
    _min?: UserKeyMinAggregateInputType
    _max?: UserKeyMaxAggregateInputType
  }

  export type UserKeyGroupByOutputType = {
    id: number
    userId: number
    keyId: number
    quantity: number
    updatedAt: Date
    lastClaimedAt: Date | null
    _count: UserKeyCountAggregateOutputType | null
    _avg: UserKeyAvgAggregateOutputType | null
    _sum: UserKeySumAggregateOutputType | null
    _min: UserKeyMinAggregateOutputType | null
    _max: UserKeyMaxAggregateOutputType | null
  }

  type GetUserKeyGroupByPayload<T extends UserKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserKeyGroupByOutputType[P]>
            : GetScalarType<T[P], UserKeyGroupByOutputType[P]>
        }
      >
    >


  export type UserKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyId?: boolean
    quantity?: boolean
    updatedAt?: boolean
    lastClaimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKey"]>

  export type UserKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyId?: boolean
    quantity?: boolean
    updatedAt?: boolean
    lastClaimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKey"]>

  export type UserKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    keyId?: boolean
    quantity?: boolean
    updatedAt?: boolean
    lastClaimedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userKey"]>

  export type UserKeySelectScalar = {
    id?: boolean
    userId?: boolean
    keyId?: boolean
    quantity?: boolean
    updatedAt?: boolean
    lastClaimedAt?: boolean
  }

  export type UserKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "keyId" | "quantity" | "updatedAt" | "lastClaimedAt", ExtArgs["result"]["userKey"]>
  export type UserKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }
  export type UserKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }
  export type UserKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    key?: boolean | KeyDefaultArgs<ExtArgs>
  }

  export type $UserKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      key: Prisma.$KeyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      keyId: number
      quantity: number
      updatedAt: Date
      lastClaimedAt: Date | null
    }, ExtArgs["result"]["userKey"]>
    composites: {}
  }

  type UserKeyGetPayload<S extends boolean | null | undefined | UserKeyDefaultArgs> = $Result.GetResult<Prisma.$UserKeyPayload, S>

  type UserKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserKeyCountAggregateInputType | true
    }

  export interface UserKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserKey'], meta: { name: 'UserKey' } }
    /**
     * Find zero or one UserKey that matches the filter.
     * @param {UserKeyFindUniqueArgs} args - Arguments to find a UserKey
     * @example
     * // Get one UserKey
     * const userKey = await prisma.userKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserKeyFindUniqueArgs>(args: SelectSubset<T, UserKeyFindUniqueArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserKeyFindUniqueOrThrowArgs} args - Arguments to find a UserKey
     * @example
     * // Get one UserKey
     * const userKey = await prisma.userKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyFindFirstArgs} args - Arguments to find a UserKey
     * @example
     * // Get one UserKey
     * const userKey = await prisma.userKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserKeyFindFirstArgs>(args?: SelectSubset<T, UserKeyFindFirstArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyFindFirstOrThrowArgs} args - Arguments to find a UserKey
     * @example
     * // Get one UserKey
     * const userKey = await prisma.userKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserKeys
     * const userKeys = await prisma.userKey.findMany()
     * 
     * // Get first 10 UserKeys
     * const userKeys = await prisma.userKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userKeyWithIdOnly = await prisma.userKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserKeyFindManyArgs>(args?: SelectSubset<T, UserKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserKey.
     * @param {UserKeyCreateArgs} args - Arguments to create a UserKey.
     * @example
     * // Create one UserKey
     * const UserKey = await prisma.userKey.create({
     *   data: {
     *     // ... data to create a UserKey
     *   }
     * })
     * 
     */
    create<T extends UserKeyCreateArgs>(args: SelectSubset<T, UserKeyCreateArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserKeys.
     * @param {UserKeyCreateManyArgs} args - Arguments to create many UserKeys.
     * @example
     * // Create many UserKeys
     * const userKey = await prisma.userKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserKeyCreateManyArgs>(args?: SelectSubset<T, UserKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserKeys and returns the data saved in the database.
     * @param {UserKeyCreateManyAndReturnArgs} args - Arguments to create many UserKeys.
     * @example
     * // Create many UserKeys
     * const userKey = await prisma.userKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserKeys and only return the `id`
     * const userKeyWithIdOnly = await prisma.userKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserKey.
     * @param {UserKeyDeleteArgs} args - Arguments to delete one UserKey.
     * @example
     * // Delete one UserKey
     * const UserKey = await prisma.userKey.delete({
     *   where: {
     *     // ... filter to delete one UserKey
     *   }
     * })
     * 
     */
    delete<T extends UserKeyDeleteArgs>(args: SelectSubset<T, UserKeyDeleteArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserKey.
     * @param {UserKeyUpdateArgs} args - Arguments to update one UserKey.
     * @example
     * // Update one UserKey
     * const userKey = await prisma.userKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserKeyUpdateArgs>(args: SelectSubset<T, UserKeyUpdateArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserKeys.
     * @param {UserKeyDeleteManyArgs} args - Arguments to filter UserKeys to delete.
     * @example
     * // Delete a few UserKeys
     * const { count } = await prisma.userKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserKeyDeleteManyArgs>(args?: SelectSubset<T, UserKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserKeys
     * const userKey = await prisma.userKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserKeyUpdateManyArgs>(args: SelectSubset<T, UserKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserKeys and returns the data updated in the database.
     * @param {UserKeyUpdateManyAndReturnArgs} args - Arguments to update many UserKeys.
     * @example
     * // Update many UserKeys
     * const userKey = await prisma.userKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserKeys and only return the `id`
     * const userKeyWithIdOnly = await prisma.userKey.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserKey.
     * @param {UserKeyUpsertArgs} args - Arguments to update or create a UserKey.
     * @example
     * // Update or create a UserKey
     * const userKey = await prisma.userKey.upsert({
     *   create: {
     *     // ... data to create a UserKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserKey we want to update
     *   }
     * })
     */
    upsert<T extends UserKeyUpsertArgs>(args: SelectSubset<T, UserKeyUpsertArgs<ExtArgs>>): Prisma__UserKeyClient<$Result.GetResult<Prisma.$UserKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyCountArgs} args - Arguments to filter UserKeys to count.
     * @example
     * // Count the number of UserKeys
     * const count = await prisma.userKey.count({
     *   where: {
     *     // ... the filter for the UserKeys we want to count
     *   }
     * })
    **/
    count<T extends UserKeyCountArgs>(
      args?: Subset<T, UserKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserKeyAggregateArgs>(args: Subset<T, UserKeyAggregateArgs>): Prisma.PrismaPromise<GetUserKeyAggregateType<T>>

    /**
     * Group by UserKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserKeyGroupByArgs} args - Group by arguments.
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
      T extends UserKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserKeyGroupByArgs['orderBy'] }
        : { orderBy?: UserKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserKey model
   */
  readonly fields: UserKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    key<T extends KeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeyDefaultArgs<ExtArgs>>): Prisma__KeyClient<$Result.GetResult<Prisma.$KeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserKey model
   */
  interface UserKeyFieldRefs {
    readonly id: FieldRef<"UserKey", 'Int'>
    readonly userId: FieldRef<"UserKey", 'Int'>
    readonly keyId: FieldRef<"UserKey", 'Int'>
    readonly quantity: FieldRef<"UserKey", 'Int'>
    readonly updatedAt: FieldRef<"UserKey", 'DateTime'>
    readonly lastClaimedAt: FieldRef<"UserKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserKey findUnique
   */
  export type UserKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserKey to fetch.
     */
    where: UserKeyWhereUniqueInput
  }

  /**
   * UserKey findUniqueOrThrow
   */
  export type UserKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserKey to fetch.
     */
    where: UserKeyWhereUniqueInput
  }

  /**
   * UserKey findFirst
   */
  export type UserKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserKey to fetch.
     */
    where?: UserKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKeys to fetch.
     */
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKeys.
     */
    cursor?: UserKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKeys.
     */
    distinct?: UserKeyScalarFieldEnum | UserKeyScalarFieldEnum[]
  }

  /**
   * UserKey findFirstOrThrow
   */
  export type UserKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserKey to fetch.
     */
    where?: UserKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKeys to fetch.
     */
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserKeys.
     */
    cursor?: UserKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserKeys.
     */
    distinct?: UserKeyScalarFieldEnum | UserKeyScalarFieldEnum[]
  }

  /**
   * UserKey findMany
   */
  export type UserKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserKeys to fetch.
     */
    where?: UserKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserKeys to fetch.
     */
    orderBy?: UserKeyOrderByWithRelationInput | UserKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserKeys.
     */
    cursor?: UserKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserKeys.
     */
    skip?: number
    distinct?: UserKeyScalarFieldEnum | UserKeyScalarFieldEnum[]
  }

  /**
   * UserKey create
   */
  export type UserKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserKey.
     */
    data: XOR<UserKeyCreateInput, UserKeyUncheckedCreateInput>
  }

  /**
   * UserKey createMany
   */
  export type UserKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserKeys.
     */
    data: UserKeyCreateManyInput | UserKeyCreateManyInput[]
  }

  /**
   * UserKey createManyAndReturn
   */
  export type UserKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * The data used to create many UserKeys.
     */
    data: UserKeyCreateManyInput | UserKeyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserKey update
   */
  export type UserKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserKey.
     */
    data: XOR<UserKeyUpdateInput, UserKeyUncheckedUpdateInput>
    /**
     * Choose, which UserKey to update.
     */
    where: UserKeyWhereUniqueInput
  }

  /**
   * UserKey updateMany
   */
  export type UserKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserKeys.
     */
    data: XOR<UserKeyUpdateManyMutationInput, UserKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserKeys to update
     */
    where?: UserKeyWhereInput
    /**
     * Limit how many UserKeys to update.
     */
    limit?: number
  }

  /**
   * UserKey updateManyAndReturn
   */
  export type UserKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * The data used to update UserKeys.
     */
    data: XOR<UserKeyUpdateManyMutationInput, UserKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserKeys to update
     */
    where?: UserKeyWhereInput
    /**
     * Limit how many UserKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserKey upsert
   */
  export type UserKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserKey to update in case it exists.
     */
    where: UserKeyWhereUniqueInput
    /**
     * In case the UserKey found by the `where` argument doesn't exist, create a new UserKey with this data.
     */
    create: XOR<UserKeyCreateInput, UserKeyUncheckedCreateInput>
    /**
     * In case the UserKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserKeyUpdateInput, UserKeyUncheckedUpdateInput>
  }

  /**
   * UserKey delete
   */
  export type UserKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
    /**
     * Filter which UserKey to delete.
     */
    where: UserKeyWhereUniqueInput
  }

  /**
   * UserKey deleteMany
   */
  export type UserKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserKeys to delete
     */
    where?: UserKeyWhereInput
    /**
     * Limit how many UserKeys to delete.
     */
    limit?: number
  }

  /**
   * UserKey without action
   */
  export type UserKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserKey
     */
    select?: UserKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserKey
     */
    omit?: UserKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserKeyInclude<ExtArgs> | null
  }


  /**
   * Model UserItem
   */

  export type AggregateUserItem = {
    _count: UserItemCountAggregateOutputType | null
    _avg: UserItemAvgAggregateOutputType | null
    _sum: UserItemSumAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  export type UserItemAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type UserItemSumAggregateOutputType = {
    id: number | null
    userId: number | null
    itemId: number | null
    quantity: number | null
  }

  export type UserItemMinAggregateOutputType = {
    id: number | null
    userId: number | null
    itemId: number | null
    quantity: number | null
    owned: boolean | null
  }

  export type UserItemMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    itemId: number | null
    quantity: number | null
    owned: boolean | null
  }

  export type UserItemCountAggregateOutputType = {
    id: number
    userId: number
    itemId: number
    quantity: number
    owned: number
    _all: number
  }


  export type UserItemAvgAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    quantity?: true
  }

  export type UserItemSumAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    quantity?: true
  }

  export type UserItemMinAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    quantity?: true
    owned?: true
  }

  export type UserItemMaxAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    quantity?: true
    owned?: true
  }

  export type UserItemCountAggregateInputType = {
    id?: true
    userId?: true
    itemId?: true
    quantity?: true
    owned?: true
    _all?: true
  }

  export type UserItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItem to aggregate.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserItems
    **/
    _count?: true | UserItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserItemMaxAggregateInputType
  }

  export type GetUserItemAggregateType<T extends UserItemAggregateArgs> = {
        [P in keyof T & keyof AggregateUserItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserItem[P]>
      : GetScalarType<T[P], AggregateUserItem[P]>
  }




  export type UserItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserItemWhereInput
    orderBy?: UserItemOrderByWithAggregationInput | UserItemOrderByWithAggregationInput[]
    by: UserItemScalarFieldEnum[] | UserItemScalarFieldEnum
    having?: UserItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserItemCountAggregateInputType | true
    _avg?: UserItemAvgAggregateInputType
    _sum?: UserItemSumAggregateInputType
    _min?: UserItemMinAggregateInputType
    _max?: UserItemMaxAggregateInputType
  }

  export type UserItemGroupByOutputType = {
    id: number
    userId: number
    itemId: number
    quantity: number
    owned: boolean
    _count: UserItemCountAggregateOutputType | null
    _avg: UserItemAvgAggregateOutputType | null
    _sum: UserItemSumAggregateOutputType | null
    _min: UserItemMinAggregateOutputType | null
    _max: UserItemMaxAggregateOutputType | null
  }

  type GetUserItemGroupByPayload<T extends UserItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserItemGroupByOutputType[P]>
            : GetScalarType<T[P], UserItemGroupByOutputType[P]>
        }
      >
    >


  export type UserItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    quantity?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItem"]>

  export type UserItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    quantity?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItem"]>

  export type UserItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    itemId?: boolean
    quantity?: boolean
    owned?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userItem"]>

  export type UserItemSelectScalar = {
    id?: boolean
    userId?: boolean
    itemId?: boolean
    quantity?: boolean
    owned?: boolean
  }

  export type UserItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "itemId" | "quantity" | "owned", ExtArgs["result"]["userItem"]>
  export type UserItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type UserItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type UserItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $UserItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      itemId: number
      quantity: number
      owned: boolean
    }, ExtArgs["result"]["userItem"]>
    composites: {}
  }

  type UserItemGetPayload<S extends boolean | null | undefined | UserItemDefaultArgs> = $Result.GetResult<Prisma.$UserItemPayload, S>

  type UserItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserItemCountAggregateInputType | true
    }

  export interface UserItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserItem'], meta: { name: 'UserItem' } }
    /**
     * Find zero or one UserItem that matches the filter.
     * @param {UserItemFindUniqueArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserItemFindUniqueArgs>(args: SelectSubset<T, UserItemFindUniqueArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserItemFindUniqueOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserItemFindUniqueOrThrowArgs>(args: SelectSubset<T, UserItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserItemFindFirstArgs>(args?: SelectSubset<T, UserItemFindFirstArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindFirstOrThrowArgs} args - Arguments to find a UserItem
     * @example
     * // Get one UserItem
     * const userItem = await prisma.userItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserItemFindFirstOrThrowArgs>(args?: SelectSubset<T, UserItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserItems
     * const userItems = await prisma.userItem.findMany()
     * 
     * // Get first 10 UserItems
     * const userItems = await prisma.userItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userItemWithIdOnly = await prisma.userItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserItemFindManyArgs>(args?: SelectSubset<T, UserItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserItem.
     * @param {UserItemCreateArgs} args - Arguments to create a UserItem.
     * @example
     * // Create one UserItem
     * const UserItem = await prisma.userItem.create({
     *   data: {
     *     // ... data to create a UserItem
     *   }
     * })
     * 
     */
    create<T extends UserItemCreateArgs>(args: SelectSubset<T, UserItemCreateArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserItems.
     * @param {UserItemCreateManyArgs} args - Arguments to create many UserItems.
     * @example
     * // Create many UserItems
     * const userItem = await prisma.userItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserItemCreateManyArgs>(args?: SelectSubset<T, UserItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserItems and returns the data saved in the database.
     * @param {UserItemCreateManyAndReturnArgs} args - Arguments to create many UserItems.
     * @example
     * // Create many UserItems
     * const userItem = await prisma.userItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserItems and only return the `id`
     * const userItemWithIdOnly = await prisma.userItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserItemCreateManyAndReturnArgs>(args?: SelectSubset<T, UserItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserItem.
     * @param {UserItemDeleteArgs} args - Arguments to delete one UserItem.
     * @example
     * // Delete one UserItem
     * const UserItem = await prisma.userItem.delete({
     *   where: {
     *     // ... filter to delete one UserItem
     *   }
     * })
     * 
     */
    delete<T extends UserItemDeleteArgs>(args: SelectSubset<T, UserItemDeleteArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserItem.
     * @param {UserItemUpdateArgs} args - Arguments to update one UserItem.
     * @example
     * // Update one UserItem
     * const userItem = await prisma.userItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserItemUpdateArgs>(args: SelectSubset<T, UserItemUpdateArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserItems.
     * @param {UserItemDeleteManyArgs} args - Arguments to filter UserItems to delete.
     * @example
     * // Delete a few UserItems
     * const { count } = await prisma.userItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserItemDeleteManyArgs>(args?: SelectSubset<T, UserItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserItems
     * const userItem = await prisma.userItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserItemUpdateManyArgs>(args: SelectSubset<T, UserItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserItems and returns the data updated in the database.
     * @param {UserItemUpdateManyAndReturnArgs} args - Arguments to update many UserItems.
     * @example
     * // Update many UserItems
     * const userItem = await prisma.userItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserItems and only return the `id`
     * const userItemWithIdOnly = await prisma.userItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserItemUpdateManyAndReturnArgs>(args: SelectSubset<T, UserItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserItem.
     * @param {UserItemUpsertArgs} args - Arguments to update or create a UserItem.
     * @example
     * // Update or create a UserItem
     * const userItem = await prisma.userItem.upsert({
     *   create: {
     *     // ... data to create a UserItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserItem we want to update
     *   }
     * })
     */
    upsert<T extends UserItemUpsertArgs>(args: SelectSubset<T, UserItemUpsertArgs<ExtArgs>>): Prisma__UserItemClient<$Result.GetResult<Prisma.$UserItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemCountArgs} args - Arguments to filter UserItems to count.
     * @example
     * // Count the number of UserItems
     * const count = await prisma.userItem.count({
     *   where: {
     *     // ... the filter for the UserItems we want to count
     *   }
     * })
    **/
    count<T extends UserItemCountArgs>(
      args?: Subset<T, UserItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserItemAggregateArgs>(args: Subset<T, UserItemAggregateArgs>): Prisma.PrismaPromise<GetUserItemAggregateType<T>>

    /**
     * Group by UserItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserItemGroupByArgs} args - Group by arguments.
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
      T extends UserItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserItemGroupByArgs['orderBy'] }
        : { orderBy?: UserItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserItem model
   */
  readonly fields: UserItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserItem model
   */
  interface UserItemFieldRefs {
    readonly id: FieldRef<"UserItem", 'Int'>
    readonly userId: FieldRef<"UserItem", 'Int'>
    readonly itemId: FieldRef<"UserItem", 'Int'>
    readonly quantity: FieldRef<"UserItem", 'Int'>
    readonly owned: FieldRef<"UserItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UserItem findUnique
   */
  export type UserItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem findUniqueOrThrow
   */
  export type UserItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem findFirst
   */
  export type UserItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem findFirstOrThrow
   */
  export type UserItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItem to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserItems.
     */
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem findMany
   */
  export type UserItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter, which UserItems to fetch.
     */
    where?: UserItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserItems to fetch.
     */
    orderBy?: UserItemOrderByWithRelationInput | UserItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserItems.
     */
    cursor?: UserItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserItems.
     */
    skip?: number
    distinct?: UserItemScalarFieldEnum | UserItemScalarFieldEnum[]
  }

  /**
   * UserItem create
   */
  export type UserItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to create a UserItem.
     */
    data: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
  }

  /**
   * UserItem createMany
   */
  export type UserItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserItems.
     */
    data: UserItemCreateManyInput | UserItemCreateManyInput[]
  }

  /**
   * UserItem createManyAndReturn
   */
  export type UserItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * The data used to create many UserItems.
     */
    data: UserItemCreateManyInput | UserItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserItem update
   */
  export type UserItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The data needed to update a UserItem.
     */
    data: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
    /**
     * Choose, which UserItem to update.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem updateMany
   */
  export type UserItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserItems.
     */
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyInput>
    /**
     * Filter which UserItems to update
     */
    where?: UserItemWhereInput
    /**
     * Limit how many UserItems to update.
     */
    limit?: number
  }

  /**
   * UserItem updateManyAndReturn
   */
  export type UserItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * The data used to update UserItems.
     */
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyInput>
    /**
     * Filter which UserItems to update
     */
    where?: UserItemWhereInput
    /**
     * Limit how many UserItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserItem upsert
   */
  export type UserItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * The filter to search for the UserItem to update in case it exists.
     */
    where: UserItemWhereUniqueInput
    /**
     * In case the UserItem found by the `where` argument doesn't exist, create a new UserItem with this data.
     */
    create: XOR<UserItemCreateInput, UserItemUncheckedCreateInput>
    /**
     * In case the UserItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserItemUpdateInput, UserItemUncheckedUpdateInput>
  }

  /**
   * UserItem delete
   */
  export type UserItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
    /**
     * Filter which UserItem to delete.
     */
    where: UserItemWhereUniqueInput
  }

  /**
   * UserItem deleteMany
   */
  export type UserItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserItems to delete
     */
    where?: UserItemWhereInput
    /**
     * Limit how many UserItems to delete.
     */
    limit?: number
  }

  /**
   * UserItem without action
   */
  export type UserItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserItem
     */
    select?: UserItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserItem
     */
    omit?: UserItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    coin: 'coin',
    profilePic: 'profilePic',
    backgroundImage: 'backgroundImage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KeyScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type KeyScalarFieldEnum = (typeof KeyScalarFieldEnum)[keyof typeof KeyScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    rarity: 'rarity',
    sellPrice: 'sellPrice',
    img: 'img'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const UserKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    keyId: 'keyId',
    quantity: 'quantity',
    updatedAt: 'updatedAt',
    lastClaimedAt: 'lastClaimedAt'
  };

  export type UserKeyScalarFieldEnum = (typeof UserKeyScalarFieldEnum)[keyof typeof UserKeyScalarFieldEnum]


  export const UserItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    itemId: 'itemId',
    quantity: 'quantity',
    owned: 'owned'
  };

  export type UserItemScalarFieldEnum = (typeof UserItemScalarFieldEnum)[keyof typeof UserItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    coin?: IntFilter<"User"> | number
    profilePic?: StringNullableFilter<"User"> | string | null
    backgroundImage?: StringNullableFilter<"User"> | string | null
    keys?: UserKeyListRelationFilter
    items?: UserItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    coin?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    keys?: UserKeyOrderByRelationAggregateInput
    items?: UserItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    coin?: IntFilter<"User"> | number
    profilePic?: StringNullableFilter<"User"> | string | null
    backgroundImage?: StringNullableFilter<"User"> | string | null
    keys?: UserKeyListRelationFilter
    items?: UserItemListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    coin?: SortOrder
    profilePic?: SortOrderInput | SortOrder
    backgroundImage?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    coin?: IntWithAggregatesFilter<"User"> | number
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    backgroundImage?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type KeyWhereInput = {
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    id?: IntFilter<"Key"> | number
    type?: StringFilter<"Key"> | string
    userKeys?: UserKeyListRelationFilter
  }

  export type KeyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userKeys?: UserKeyOrderByRelationAggregateInput
  }

  export type KeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeyWhereInput | KeyWhereInput[]
    OR?: KeyWhereInput[]
    NOT?: KeyWhereInput | KeyWhereInput[]
    type?: StringFilter<"Key"> | string
    userKeys?: UserKeyListRelationFilter
  }, "id">

  export type KeyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: KeyCountOrderByAggregateInput
    _avg?: KeyAvgOrderByAggregateInput
    _max?: KeyMaxOrderByAggregateInput
    _min?: KeyMinOrderByAggregateInput
    _sum?: KeySumOrderByAggregateInput
  }

  export type KeyScalarWhereWithAggregatesInput = {
    AND?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    OR?: KeyScalarWhereWithAggregatesInput[]
    NOT?: KeyScalarWhereWithAggregatesInput | KeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Key"> | number
    type?: StringWithAggregatesFilter<"Key"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    type?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    sellPrice?: IntFilter<"Item"> | number
    img?: StringFilter<"Item"> | string
    userItems?: UserItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    sellPrice?: SortOrder
    img?: SortOrder
    userItems?: UserItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    type?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    sellPrice?: IntFilter<"Item"> | number
    img?: StringFilter<"Item"> | string
    userItems?: UserItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    sellPrice?: SortOrder
    img?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    type?: StringWithAggregatesFilter<"Item"> | string
    rarity?: StringWithAggregatesFilter<"Item"> | string
    sellPrice?: IntWithAggregatesFilter<"Item"> | number
    img?: StringWithAggregatesFilter<"Item"> | string
  }

  export type UserKeyWhereInput = {
    AND?: UserKeyWhereInput | UserKeyWhereInput[]
    OR?: UserKeyWhereInput[]
    NOT?: UserKeyWhereInput | UserKeyWhereInput[]
    id?: IntFilter<"UserKey"> | number
    userId?: IntFilter<"UserKey"> | number
    keyId?: IntFilter<"UserKey"> | number
    quantity?: IntFilter<"UserKey"> | number
    updatedAt?: DateTimeFilter<"UserKey"> | Date | string
    lastClaimedAt?: DateTimeNullableFilter<"UserKey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    key?: XOR<KeyScalarRelationFilter, KeyWhereInput>
  }

  export type UserKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
    updatedAt?: SortOrder
    lastClaimedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    key?: KeyOrderByWithRelationInput
  }

  export type UserKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_keyId?: UserKeyUserIdKeyIdCompoundUniqueInput
    AND?: UserKeyWhereInput | UserKeyWhereInput[]
    OR?: UserKeyWhereInput[]
    NOT?: UserKeyWhereInput | UserKeyWhereInput[]
    userId?: IntFilter<"UserKey"> | number
    keyId?: IntFilter<"UserKey"> | number
    quantity?: IntFilter<"UserKey"> | number
    updatedAt?: DateTimeFilter<"UserKey"> | Date | string
    lastClaimedAt?: DateTimeNullableFilter<"UserKey"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    key?: XOR<KeyScalarRelationFilter, KeyWhereInput>
  }, "id" | "userId_keyId">

  export type UserKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
    updatedAt?: SortOrder
    lastClaimedAt?: SortOrderInput | SortOrder
    _count?: UserKeyCountOrderByAggregateInput
    _avg?: UserKeyAvgOrderByAggregateInput
    _max?: UserKeyMaxOrderByAggregateInput
    _min?: UserKeyMinOrderByAggregateInput
    _sum?: UserKeySumOrderByAggregateInput
  }

  export type UserKeyScalarWhereWithAggregatesInput = {
    AND?: UserKeyScalarWhereWithAggregatesInput | UserKeyScalarWhereWithAggregatesInput[]
    OR?: UserKeyScalarWhereWithAggregatesInput[]
    NOT?: UserKeyScalarWhereWithAggregatesInput | UserKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserKey"> | number
    userId?: IntWithAggregatesFilter<"UserKey"> | number
    keyId?: IntWithAggregatesFilter<"UserKey"> | number
    quantity?: IntWithAggregatesFilter<"UserKey"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"UserKey"> | Date | string
    lastClaimedAt?: DateTimeNullableWithAggregatesFilter<"UserKey"> | Date | string | null
  }

  export type UserItemWhereInput = {
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    id?: IntFilter<"UserItem"> | number
    userId?: IntFilter<"UserItem"> | number
    itemId?: IntFilter<"UserItem"> | number
    quantity?: IntFilter<"UserItem"> | number
    owned?: BoolFilter<"UserItem"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type UserItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    owned?: SortOrder
    user?: UserOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type UserItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_itemId?: UserItemUserIdItemIdCompoundUniqueInput
    AND?: UserItemWhereInput | UserItemWhereInput[]
    OR?: UserItemWhereInput[]
    NOT?: UserItemWhereInput | UserItemWhereInput[]
    userId?: IntFilter<"UserItem"> | number
    itemId?: IntFilter<"UserItem"> | number
    quantity?: IntFilter<"UserItem"> | number
    owned?: BoolFilter<"UserItem"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "userId_itemId">

  export type UserItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    owned?: SortOrder
    _count?: UserItemCountOrderByAggregateInput
    _avg?: UserItemAvgOrderByAggregateInput
    _max?: UserItemMaxOrderByAggregateInput
    _min?: UserItemMinOrderByAggregateInput
    _sum?: UserItemSumOrderByAggregateInput
  }

  export type UserItemScalarWhereWithAggregatesInput = {
    AND?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    OR?: UserItemScalarWhereWithAggregatesInput[]
    NOT?: UserItemScalarWhereWithAggregatesInput | UserItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserItem"> | number
    userId?: IntWithAggregatesFilter<"UserItem"> | number
    itemId?: IntWithAggregatesFilter<"UserItem"> | number
    quantity?: IntWithAggregatesFilter<"UserItem"> | number
    owned?: BoolWithAggregatesFilter<"UserItem"> | boolean
  }

  export type UserCreateInput = {
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    keys?: UserKeyCreateNestedManyWithoutUserInput
    items?: UserItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    keys?: UserKeyUncheckedCreateNestedManyWithoutUserInput
    items?: UserItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: UserKeyUpdateManyWithoutUserNestedInput
    items?: UserItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: UserKeyUncheckedUpdateManyWithoutUserNestedInput
    items?: UserItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeyCreateInput = {
    type: string
    userKeys?: UserKeyCreateNestedManyWithoutKeyInput
  }

  export type KeyUncheckedCreateInput = {
    id?: number
    type: string
    userKeys?: UserKeyUncheckedCreateNestedManyWithoutKeyInput
  }

  export type KeyUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    userKeys?: UserKeyUpdateManyWithoutKeyNestedInput
  }

  export type KeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    userKeys?: UserKeyUncheckedUpdateManyWithoutKeyNestedInput
  }

  export type KeyCreateManyInput = {
    id?: number
    type: string
  }

  export type KeyUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type KeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    name: string
    type: string
    rarity?: string
    sellPrice: number
    img: string
    userItems?: UserItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    rarity?: string
    sellPrice: number
    img: string
    userItems?: UserItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
    userItems?: UserItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
    userItems?: UserItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    type: string
    rarity?: string
    sellPrice: number
    img: string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type UserKeyCreateInput = {
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
    user: UserCreateNestedOneWithoutKeysInput
    key: KeyCreateNestedOneWithoutUserKeysInput
  }

  export type UserKeyUncheckedCreateInput = {
    id?: number
    userId: number
    keyId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserKeyUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutKeysNestedInput
    key?: KeyUpdateOneRequiredWithoutUserKeysNestedInput
  }

  export type UserKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    keyId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserKeyCreateManyInput = {
    id?: number
    userId: number
    keyId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserKeyUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    keyId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserItemCreateInput = {
    quantity?: number
    owned?: boolean
    user: UserCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutUserItemsInput
  }

  export type UserItemUncheckedCreateInput = {
    id?: number
    userId: number
    itemId: number
    quantity?: number
    owned?: boolean
  }

  export type UserItemUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutUserItemsNestedInput
  }

  export type UserItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemCreateManyInput = {
    id?: number
    userId: number
    itemId: number
    quantity?: number
    owned?: boolean
  }

  export type UserItemUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserKeyListRelationFilter = {
    every?: UserKeyWhereInput
    some?: UserKeyWhereInput
    none?: UserKeyWhereInput
  }

  export type UserItemListRelationFilter = {
    every?: UserItemWhereInput
    some?: UserItemWhereInput
    none?: UserItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    coin?: SortOrder
    profilePic?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    coin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    coin?: SortOrder
    profilePic?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    coin?: SortOrder
    profilePic?: SortOrder
    backgroundImage?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    coin?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type KeyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type KeyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type KeyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type KeySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    sellPrice?: SortOrder
    img?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    sellPrice?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    sellPrice?: SortOrder
    img?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    sellPrice?: SortOrder
    img?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    sellPrice?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KeyScalarRelationFilter = {
    is?: KeyWhereInput
    isNot?: KeyWhereInput
  }

  export type UserKeyUserIdKeyIdCompoundUniqueInput = {
    userId: number
    keyId: number
  }

  export type UserKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
    updatedAt?: SortOrder
    lastClaimedAt?: SortOrder
  }

  export type UserKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
  }

  export type UserKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
    updatedAt?: SortOrder
    lastClaimedAt?: SortOrder
  }

  export type UserKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
    updatedAt?: SortOrder
    lastClaimedAt?: SortOrder
  }

  export type UserKeySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    keyId?: SortOrder
    quantity?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type UserItemUserIdItemIdCompoundUniqueInput = {
    userId: number
    itemId: number
  }

  export type UserItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    owned?: SortOrder
  }

  export type UserItemAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type UserItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    owned?: SortOrder
  }

  export type UserItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
    owned?: SortOrder
  }

  export type UserItemSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    quantity?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput> | UserKeyCreateWithoutUserInput[] | UserKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutUserInput | UserKeyCreateOrConnectWithoutUserInput[]
    createMany?: UserKeyCreateManyUserInputEnvelope
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
  }

  export type UserItemCreateNestedManyWithoutUserInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput> | UserKeyCreateWithoutUserInput[] | UserKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutUserInput | UserKeyCreateOrConnectWithoutUserInput[]
    createMany?: UserKeyCreateManyUserInputEnvelope
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput> | UserKeyCreateWithoutUserInput[] | UserKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutUserInput | UserKeyCreateOrConnectWithoutUserInput[]
    upsert?: UserKeyUpsertWithWhereUniqueWithoutUserInput | UserKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserKeyCreateManyUserInputEnvelope
    set?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    disconnect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    delete?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    update?: UserKeyUpdateWithWhereUniqueWithoutUserInput | UserKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserKeyUpdateManyWithWhereWithoutUserInput | UserKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
  }

  export type UserItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserInput | UserItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserInput | UserItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserInput | UserItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput> | UserKeyCreateWithoutUserInput[] | UserKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutUserInput | UserKeyCreateOrConnectWithoutUserInput[]
    upsert?: UserKeyUpsertWithWhereUniqueWithoutUserInput | UserKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserKeyCreateManyUserInputEnvelope
    set?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    disconnect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    delete?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    update?: UserKeyUpdateWithWhereUniqueWithoutUserInput | UserKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserKeyUpdateManyWithWhereWithoutUserInput | UserKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput> | UserItemCreateWithoutUserInput[] | UserItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutUserInput | UserItemCreateOrConnectWithoutUserInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutUserInput | UserItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserItemCreateManyUserInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutUserInput | UserItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutUserInput | UserItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserKeyCreateNestedManyWithoutKeyInput = {
    create?: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput> | UserKeyCreateWithoutKeyInput[] | UserKeyUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutKeyInput | UserKeyCreateOrConnectWithoutKeyInput[]
    createMany?: UserKeyCreateManyKeyInputEnvelope
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
  }

  export type UserKeyUncheckedCreateNestedManyWithoutKeyInput = {
    create?: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput> | UserKeyCreateWithoutKeyInput[] | UserKeyUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutKeyInput | UserKeyCreateOrConnectWithoutKeyInput[]
    createMany?: UserKeyCreateManyKeyInputEnvelope
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
  }

  export type UserKeyUpdateManyWithoutKeyNestedInput = {
    create?: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput> | UserKeyCreateWithoutKeyInput[] | UserKeyUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutKeyInput | UserKeyCreateOrConnectWithoutKeyInput[]
    upsert?: UserKeyUpsertWithWhereUniqueWithoutKeyInput | UserKeyUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: UserKeyCreateManyKeyInputEnvelope
    set?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    disconnect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    delete?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    update?: UserKeyUpdateWithWhereUniqueWithoutKeyInput | UserKeyUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: UserKeyUpdateManyWithWhereWithoutKeyInput | UserKeyUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
  }

  export type UserKeyUncheckedUpdateManyWithoutKeyNestedInput = {
    create?: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput> | UserKeyCreateWithoutKeyInput[] | UserKeyUncheckedCreateWithoutKeyInput[]
    connectOrCreate?: UserKeyCreateOrConnectWithoutKeyInput | UserKeyCreateOrConnectWithoutKeyInput[]
    upsert?: UserKeyUpsertWithWhereUniqueWithoutKeyInput | UserKeyUpsertWithWhereUniqueWithoutKeyInput[]
    createMany?: UserKeyCreateManyKeyInputEnvelope
    set?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    disconnect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    delete?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    connect?: UserKeyWhereUniqueInput | UserKeyWhereUniqueInput[]
    update?: UserKeyUpdateWithWhereUniqueWithoutKeyInput | UserKeyUpdateWithWhereUniqueWithoutKeyInput[]
    updateMany?: UserKeyUpdateManyWithWhereWithoutKeyInput | UserKeyUpdateManyWithWhereWithoutKeyInput[]
    deleteMany?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
  }

  export type UserItemCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
  }

  export type UserItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput> | UserItemCreateWithoutItemInput[] | UserItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: UserItemCreateOrConnectWithoutItemInput | UserItemCreateOrConnectWithoutItemInput[]
    upsert?: UserItemUpsertWithWhereUniqueWithoutItemInput | UserItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: UserItemCreateManyItemInputEnvelope
    set?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    disconnect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    delete?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    connect?: UserItemWhereUniqueInput | UserItemWhereUniqueInput[]
    update?: UserItemUpdateWithWhereUniqueWithoutItemInput | UserItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: UserItemUpdateManyWithWhereWithoutItemInput | UserItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKeysInput = {
    create?: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeysInput
    connect?: UserWhereUniqueInput
  }

  export type KeyCreateNestedOneWithoutUserKeysInput = {
    create?: XOR<KeyCreateWithoutUserKeysInput, KeyUncheckedCreateWithoutUserKeysInput>
    connectOrCreate?: KeyCreateOrConnectWithoutUserKeysInput
    connect?: KeyWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutKeysNestedInput = {
    create?: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutKeysInput
    upsert?: UserUpsertWithoutKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKeysInput, UserUpdateWithoutKeysInput>, UserUncheckedUpdateWithoutKeysInput>
  }

  export type KeyUpdateOneRequiredWithoutUserKeysNestedInput = {
    create?: XOR<KeyCreateWithoutUserKeysInput, KeyUncheckedCreateWithoutUserKeysInput>
    connectOrCreate?: KeyCreateOrConnectWithoutUserKeysInput
    upsert?: KeyUpsertWithoutUserKeysInput
    connect?: KeyWhereUniqueInput
    update?: XOR<XOR<KeyUpdateToOneWithWhereWithoutUserKeysInput, KeyUpdateWithoutUserKeysInput>, KeyUncheckedUpdateWithoutUserKeysInput>
  }

  export type UserCreateNestedOneWithoutItemsInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutUserItemsInput = {
    create?: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemsInput
    connect?: ItemWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutItemsInput
    upsert?: UserUpsertWithoutItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutItemsInput, UserUpdateWithoutItemsInput>, UserUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutUserItemsNestedInput = {
    create?: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutUserItemsInput
    upsert?: ItemUpsertWithoutUserItemsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutUserItemsInput, ItemUpdateWithoutUserItemsInput>, ItemUncheckedUpdateWithoutUserItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserKeyCreateWithoutUserInput = {
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
    key: KeyCreateNestedOneWithoutUserKeysInput
  }

  export type UserKeyUncheckedCreateWithoutUserInput = {
    id?: number
    keyId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserKeyCreateOrConnectWithoutUserInput = {
    where: UserKeyWhereUniqueInput
    create: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput>
  }

  export type UserKeyCreateManyUserInputEnvelope = {
    data: UserKeyCreateManyUserInput | UserKeyCreateManyUserInput[]
  }

  export type UserItemCreateWithoutUserInput = {
    quantity?: number
    owned?: boolean
    item: ItemCreateNestedOneWithoutUserItemsInput
  }

  export type UserItemUncheckedCreateWithoutUserInput = {
    id?: number
    itemId: number
    quantity?: number
    owned?: boolean
  }

  export type UserItemCreateOrConnectWithoutUserInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput>
  }

  export type UserItemCreateManyUserInputEnvelope = {
    data: UserItemCreateManyUserInput | UserItemCreateManyUserInput[]
  }

  export type UserKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserKeyWhereUniqueInput
    update: XOR<UserKeyUpdateWithoutUserInput, UserKeyUncheckedUpdateWithoutUserInput>
    create: XOR<UserKeyCreateWithoutUserInput, UserKeyUncheckedCreateWithoutUserInput>
  }

  export type UserKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserKeyWhereUniqueInput
    data: XOR<UserKeyUpdateWithoutUserInput, UserKeyUncheckedUpdateWithoutUserInput>
  }

  export type UserKeyUpdateManyWithWhereWithoutUserInput = {
    where: UserKeyScalarWhereInput
    data: XOR<UserKeyUpdateManyMutationInput, UserKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type UserKeyScalarWhereInput = {
    AND?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
    OR?: UserKeyScalarWhereInput[]
    NOT?: UserKeyScalarWhereInput | UserKeyScalarWhereInput[]
    id?: IntFilter<"UserKey"> | number
    userId?: IntFilter<"UserKey"> | number
    keyId?: IntFilter<"UserKey"> | number
    quantity?: IntFilter<"UserKey"> | number
    updatedAt?: DateTimeFilter<"UserKey"> | Date | string
    lastClaimedAt?: DateTimeNullableFilter<"UserKey"> | Date | string | null
  }

  export type UserItemUpsertWithWhereUniqueWithoutUserInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutUserInput, UserItemUncheckedUpdateWithoutUserInput>
    create: XOR<UserItemCreateWithoutUserInput, UserItemUncheckedCreateWithoutUserInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutUserInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutUserInput, UserItemUncheckedUpdateWithoutUserInput>
  }

  export type UserItemUpdateManyWithWhereWithoutUserInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutUserInput>
  }

  export type UserItemScalarWhereInput = {
    AND?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    OR?: UserItemScalarWhereInput[]
    NOT?: UserItemScalarWhereInput | UserItemScalarWhereInput[]
    id?: IntFilter<"UserItem"> | number
    userId?: IntFilter<"UserItem"> | number
    itemId?: IntFilter<"UserItem"> | number
    quantity?: IntFilter<"UserItem"> | number
    owned?: BoolFilter<"UserItem"> | boolean
  }

  export type UserKeyCreateWithoutKeyInput = {
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
    user: UserCreateNestedOneWithoutKeysInput
  }

  export type UserKeyUncheckedCreateWithoutKeyInput = {
    id?: number
    userId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserKeyCreateOrConnectWithoutKeyInput = {
    where: UserKeyWhereUniqueInput
    create: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput>
  }

  export type UserKeyCreateManyKeyInputEnvelope = {
    data: UserKeyCreateManyKeyInput | UserKeyCreateManyKeyInput[]
  }

  export type UserKeyUpsertWithWhereUniqueWithoutKeyInput = {
    where: UserKeyWhereUniqueInput
    update: XOR<UserKeyUpdateWithoutKeyInput, UserKeyUncheckedUpdateWithoutKeyInput>
    create: XOR<UserKeyCreateWithoutKeyInput, UserKeyUncheckedCreateWithoutKeyInput>
  }

  export type UserKeyUpdateWithWhereUniqueWithoutKeyInput = {
    where: UserKeyWhereUniqueInput
    data: XOR<UserKeyUpdateWithoutKeyInput, UserKeyUncheckedUpdateWithoutKeyInput>
  }

  export type UserKeyUpdateManyWithWhereWithoutKeyInput = {
    where: UserKeyScalarWhereInput
    data: XOR<UserKeyUpdateManyMutationInput, UserKeyUncheckedUpdateManyWithoutKeyInput>
  }

  export type UserItemCreateWithoutItemInput = {
    quantity?: number
    owned?: boolean
    user: UserCreateNestedOneWithoutItemsInput
  }

  export type UserItemUncheckedCreateWithoutItemInput = {
    id?: number
    userId: number
    quantity?: number
    owned?: boolean
  }

  export type UserItemCreateOrConnectWithoutItemInput = {
    where: UserItemWhereUniqueInput
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemCreateManyItemInputEnvelope = {
    data: UserItemCreateManyItemInput | UserItemCreateManyItemInput[]
  }

  export type UserItemUpsertWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    update: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
    create: XOR<UserItemCreateWithoutItemInput, UserItemUncheckedCreateWithoutItemInput>
  }

  export type UserItemUpdateWithWhereUniqueWithoutItemInput = {
    where: UserItemWhereUniqueInput
    data: XOR<UserItemUpdateWithoutItemInput, UserItemUncheckedUpdateWithoutItemInput>
  }

  export type UserItemUpdateManyWithWhereWithoutItemInput = {
    where: UserItemScalarWhereInput
    data: XOR<UserItemUpdateManyMutationInput, UserItemUncheckedUpdateManyWithoutItemInput>
  }

  export type UserCreateWithoutKeysInput = {
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    items?: UserItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKeysInput = {
    id?: number
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    items?: UserItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
  }

  export type KeyCreateWithoutUserKeysInput = {
    type: string
  }

  export type KeyUncheckedCreateWithoutUserKeysInput = {
    id?: number
    type: string
  }

  export type KeyCreateOrConnectWithoutUserKeysInput = {
    where: KeyWhereUniqueInput
    create: XOR<KeyCreateWithoutUserKeysInput, KeyUncheckedCreateWithoutUserKeysInput>
  }

  export type UserUpsertWithoutKeysInput = {
    update: XOR<UserUpdateWithoutKeysInput, UserUncheckedUpdateWithoutKeysInput>
    create: XOR<UserCreateWithoutKeysInput, UserUncheckedCreateWithoutKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKeysInput, UserUncheckedUpdateWithoutKeysInput>
  }

  export type UserUpdateWithoutKeysInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    items?: UserItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    items?: UserItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KeyUpsertWithoutUserKeysInput = {
    update: XOR<KeyUpdateWithoutUserKeysInput, KeyUncheckedUpdateWithoutUserKeysInput>
    create: XOR<KeyCreateWithoutUserKeysInput, KeyUncheckedCreateWithoutUserKeysInput>
    where?: KeyWhereInput
  }

  export type KeyUpdateToOneWithWhereWithoutUserKeysInput = {
    where?: KeyWhereInput
    data: XOR<KeyUpdateWithoutUserKeysInput, KeyUncheckedUpdateWithoutUserKeysInput>
  }

  export type KeyUpdateWithoutUserKeysInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type KeyUncheckedUpdateWithoutUserKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutItemsInput = {
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    keys?: UserKeyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutItemsInput = {
    id?: number
    username: string
    password: string
    coin?: number
    profilePic?: string | null
    backgroundImage?: string | null
    keys?: UserKeyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutUserItemsInput = {
    name: string
    type: string
    rarity?: string
    sellPrice: number
    img: string
  }

  export type ItemUncheckedCreateWithoutUserItemsInput = {
    id?: number
    name: string
    type: string
    rarity?: string
    sellPrice: number
    img: string
  }

  export type ItemCreateOrConnectWithoutUserItemsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
  }

  export type UserUpsertWithoutItemsInput = {
    update: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
    create: XOR<UserCreateWithoutItemsInput, UserUncheckedCreateWithoutItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutItemsInput, UserUncheckedUpdateWithoutItemsInput>
  }

  export type UserUpdateWithoutItemsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: UserKeyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coin?: IntFieldUpdateOperationsInput | number
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    keys?: UserKeyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ItemUpsertWithoutUserItemsInput = {
    update: XOR<ItemUpdateWithoutUserItemsInput, ItemUncheckedUpdateWithoutUserItemsInput>
    create: XOR<ItemCreateWithoutUserItemsInput, ItemUncheckedCreateWithoutUserItemsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutUserItemsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutUserItemsInput, ItemUncheckedUpdateWithoutUserItemsInput>
  }

  export type ItemUpdateWithoutUserItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateWithoutUserItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    sellPrice?: IntFieldUpdateOperationsInput | number
    img?: StringFieldUpdateOperationsInput | string
  }

  export type UserKeyCreateManyUserInput = {
    id?: number
    keyId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserItemCreateManyUserInput = {
    id?: number
    itemId: number
    quantity?: number
    owned?: boolean
  }

  export type UserKeyUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    key?: KeyUpdateOneRequiredWithoutUserKeysNestedInput
  }

  export type UserKeyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserKeyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserItemUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
    item?: ItemUpdateOneRequiredWithoutUserItemsNestedInput
  }

  export type UserItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserKeyCreateManyKeyInput = {
    id?: number
    userId: number
    quantity?: number
    updatedAt?: Date | string
    lastClaimedAt?: Date | string | null
  }

  export type UserKeyUpdateWithoutKeyInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutKeysNestedInput
  }

  export type UserKeyUncheckedUpdateWithoutKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserKeyUncheckedUpdateManyWithoutKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastClaimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserItemCreateManyItemInput = {
    id?: number
    userId: number
    quantity?: number
    owned?: boolean
  }

  export type UserItemUpdateWithoutItemInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutItemsNestedInput
  }

  export type UserItemUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserItemUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    owned?: BoolFieldUpdateOperationsInput | boolean
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