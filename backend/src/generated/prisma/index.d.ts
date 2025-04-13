
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
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model MealItem
 * 
 */
export type MealItem = $Result.DefaultSelection<Prisma.$MealItemPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model DailyStats
 * 
 */
export type DailyStats = $Result.DefaultSelection<Prisma.$DailyStatsPayload>
/**
 * Model UserGoal
 * 
 */
export type UserGoal = $Result.DefaultSelection<Prisma.$UserGoalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const ActivityLevel: {
  SEDENTARY: 'SEDENTARY',
  LIGHTLY_ACTIVE: 'LIGHTLY_ACTIVE',
  MODERATELY_ACTIVE: 'MODERATELY_ACTIVE',
  VERY_ACTIVE: 'VERY_ACTIVE',
  EXTRA_ACTIVE: 'EXTRA_ACTIVE'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const Goal: {
  LOSE_WEIGHT: 'LOSE_WEIGHT',
  MAINTAIN_WEIGHT: 'MAINTAIN_WEIGHT',
  GAIN_WEIGHT: 'GAIN_WEIGHT'
};

export type Goal = (typeof Goal)[keyof typeof Goal]


export const MealType: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  SNACK: 'SNACK'
};

export type MealType = (typeof MealType)[keyof typeof MealType]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type Goal = $Enums.Goal

export const Goal: typeof $Enums.Goal

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

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
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealItem`: Exposes CRUD operations for the **MealItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealItems
    * const mealItems = await prisma.mealItem.findMany()
    * ```
    */
  get mealItem(): Prisma.MealItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyStats`: Exposes CRUD operations for the **DailyStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyStats
    * const dailyStats = await prisma.dailyStats.findMany()
    * ```
    */
  get dailyStats(): Prisma.DailyStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userGoal`: Exposes CRUD operations for the **UserGoal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserGoals
    * const userGoals = await prisma.userGoal.findMany()
    * ```
    */
  get userGoal(): Prisma.UserGoalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    FoodItem: 'FoodItem',
    MealItem: 'MealItem',
    Meal: 'Meal',
    DailyStats: 'DailyStats',
    UserGoal: 'UserGoal'
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
      modelProps: "user" | "foodItem" | "mealItem" | "meal" | "dailyStats" | "userGoal"
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
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      MealItem: {
        payload: Prisma.$MealItemPayload<ExtArgs>
        fields: Prisma.MealItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          findFirst: {
            args: Prisma.MealItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          findMany: {
            args: Prisma.MealItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>[]
          }
          create: {
            args: Prisma.MealItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          createMany: {
            args: Prisma.MealItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>[]
          }
          delete: {
            args: Prisma.MealItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          update: {
            args: Prisma.MealItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          deleteMany: {
            args: Prisma.MealItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>[]
          }
          upsert: {
            args: Prisma.MealItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealItemPayload>
          }
          aggregate: {
            args: Prisma.MealItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealItem>
          }
          groupBy: {
            args: Prisma.MealItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealItemCountArgs<ExtArgs>
            result: $Utils.Optional<MealItemCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      DailyStats: {
        payload: Prisma.$DailyStatsPayload<ExtArgs>
        fields: Prisma.DailyStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          findFirst: {
            args: Prisma.DailyStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          findMany: {
            args: Prisma.DailyStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          create: {
            args: Prisma.DailyStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          createMany: {
            args: Prisma.DailyStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          delete: {
            args: Prisma.DailyStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          update: {
            args: Prisma.DailyStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          deleteMany: {
            args: Prisma.DailyStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>[]
          }
          upsert: {
            args: Prisma.DailyStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyStatsPayload>
          }
          aggregate: {
            args: Prisma.DailyStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyStats>
          }
          groupBy: {
            args: Prisma.DailyStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyStatsCountArgs<ExtArgs>
            result: $Utils.Optional<DailyStatsCountAggregateOutputType> | number
          }
        }
      }
      UserGoal: {
        payload: Prisma.$UserGoalPayload<ExtArgs>
        fields: Prisma.UserGoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserGoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserGoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          findFirst: {
            args: Prisma.UserGoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserGoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          findMany: {
            args: Prisma.UserGoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>[]
          }
          create: {
            args: Prisma.UserGoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          createMany: {
            args: Prisma.UserGoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserGoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>[]
          }
          delete: {
            args: Prisma.UserGoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          update: {
            args: Prisma.UserGoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          deleteMany: {
            args: Prisma.UserGoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserGoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserGoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>[]
          }
          upsert: {
            args: Prisma.UserGoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserGoalPayload>
          }
          aggregate: {
            args: Prisma.UserGoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserGoal>
          }
          groupBy: {
            args: Prisma.UserGoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserGoalCountArgs<ExtArgs>
            result: $Utils.Optional<UserGoalCountAggregateOutputType> | number
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
    foodItem?: FoodItemOmit
    mealItem?: MealItemOmit
    meal?: MealOmit
    dailyStats?: DailyStatsOmit
    userGoal?: UserGoalOmit
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
    meals: number
    dailyStats: number
    userGoals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | UserCountOutputTypeCountMealsArgs
    dailyStats?: boolean | UserCountOutputTypeCountDailyStatsArgs
    userGoals?: boolean | UserCountOutputTypeCountUserGoalsArgs
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
  export type UserCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStatsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGoalWhereInput
  }


  /**
   * Count Type FoodItemCountOutputType
   */

  export type FoodItemCountOutputType = {
    mealItems: number
  }

  export type FoodItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealItems?: boolean | FoodItemCountOutputTypeCountMealItemsArgs
  }

  // Custom InputTypes
  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItemCountOutputType
     */
    select?: FoodItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodItemCountOutputType without action
   */
  export type FoodItemCountOutputTypeCountMealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    mealItems: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealItems?: boolean | MealCountOutputTypeCountMealItemsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountMealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
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
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    weight: number | null
    height: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    weight: number | null
    height: number | null
    activityLevel: $Enums.ActivityLevel | null
    goal: $Enums.Goal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    weight: number | null
    height: number | null
    activityLevel: $Enums.ActivityLevel | null
    goal: $Enums.Goal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    age: number
    gender: number
    weight: number
    height: number
    activityLevel: number
    goal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    weight?: true
    height?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    activityLevel?: true
    goal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    activityLevel?: true
    goal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    age?: true
    gender?: true
    weight?: true
    height?: true
    activityLevel?: true
    goal?: true
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
    email: string
    password: string
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    weight: number | null
    height: number | null
    activityLevel: $Enums.ActivityLevel | null
    goal: $Enums.Goal | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    activityLevel?: boolean
    goal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meals?: boolean | User$mealsArgs<ExtArgs>
    dailyStats?: boolean | User$dailyStatsArgs<ExtArgs>
    userGoals?: boolean | User$userGoalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    activityLevel?: boolean
    goal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    activityLevel?: boolean
    goal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    weight?: boolean
    height?: boolean
    activityLevel?: boolean
    goal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "age" | "gender" | "weight" | "height" | "activityLevel" | "goal" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | User$mealsArgs<ExtArgs>
    dailyStats?: boolean | User$dailyStatsArgs<ExtArgs>
    userGoals?: boolean | User$userGoalsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      meals: Prisma.$MealPayload<ExtArgs>[]
      dailyStats: Prisma.$DailyStatsPayload<ExtArgs>[]
      userGoals: Prisma.$UserGoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      age: number | null
      gender: $Enums.Gender | null
      weight: number | null
      height: number | null
      activityLevel: $Enums.ActivityLevel | null
      goal: $Enums.Goal | null
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
    meals<T extends User$mealsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dailyStats<T extends User$dailyStatsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userGoals<T extends User$userGoalsArgs<ExtArgs> = {}>(args?: Subset<T, User$userGoalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly height: FieldRef<"User", 'Float'>
    readonly activityLevel: FieldRef<"User", 'ActivityLevel'>
    readonly goal: FieldRef<"User", 'Goal'>
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
   * User.meals
   */
  export type User$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * User.dailyStats
   */
  export type User$dailyStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    where?: DailyStatsWhereInput
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    cursor?: DailyStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * User.userGoals
   */
  export type User$userGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    where?: UserGoalWhereInput
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    cursor?: UserGoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
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
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    id: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    servingUnit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    servingSize: number | null
    servingUnit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
  }

  export type FoodItemSumAggregateInputType = {
    id?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    servingUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    servingUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    servingSize?: true
    servingUnit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: number
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt: Date
    updatedAt: Date
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealItems?: boolean | FoodItem$mealItemsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    servingSize?: boolean
    servingUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "calories" | "protein" | "carbs" | "fat" | "servingSize" | "servingUnit" | "createdAt" | "updatedAt", ExtArgs["result"]["foodItem"]>
  export type FoodItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mealItems?: boolean | FoodItem$mealItemsArgs<ExtArgs>
    _count?: boolean | FoodItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FoodItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {
      mealItems: Prisma.$MealItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      calories: number
      protein: number
      carbs: number
      fat: number
      servingSize: number
      servingUnit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems and returns the data updated in the database.
     * @param {FoodItemUpdateManyAndReturnArgs} args - Arguments to update many FoodItems.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends FoodItemUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mealItems<T extends FoodItem$mealItemsArgs<ExtArgs> = {}>(args?: Subset<T, FoodItem$mealItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodItem model
   */
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'Int'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly calories: FieldRef<"FoodItem", 'Float'>
    readonly protein: FieldRef<"FoodItem", 'Float'>
    readonly carbs: FieldRef<"FoodItem", 'Float'>
    readonly fat: FieldRef<"FoodItem", 'Float'>
    readonly servingSize: FieldRef<"FoodItem", 'Float'>
    readonly servingUnit: FieldRef<"FoodItem", 'String'>
    readonly createdAt: FieldRef<"FoodItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem updateManyAndReturn
   */
  export type FoodItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to update.
     */
    limit?: number
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
    /**
     * Limit how many FoodItems to delete.
     */
    limit?: number
  }

  /**
   * FoodItem.mealItems
   */
  export type FoodItem$mealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    cursor?: MealItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodItem
     */
    omit?: FoodItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodItemInclude<ExtArgs> | null
  }


  /**
   * Model MealItem
   */

  export type AggregateMealItem = {
    _count: MealItemCountAggregateOutputType | null
    _avg: MealItemAvgAggregateOutputType | null
    _sum: MealItemSumAggregateOutputType | null
    _min: MealItemMinAggregateOutputType | null
    _max: MealItemMaxAggregateOutputType | null
  }

  export type MealItemAvgAggregateOutputType = {
    id: number | null
    mealId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type MealItemSumAggregateOutputType = {
    id: number | null
    mealId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type MealItemMinAggregateOutputType = {
    id: number | null
    mealId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type MealItemMaxAggregateOutputType = {
    id: number | null
    mealId: number | null
    foodItemId: number | null
    quantity: number | null
  }

  export type MealItemCountAggregateOutputType = {
    id: number
    mealId: number
    foodItemId: number
    quantity: number
    _all: number
  }


  export type MealItemAvgAggregateInputType = {
    id?: true
    mealId?: true
    foodItemId?: true
    quantity?: true
  }

  export type MealItemSumAggregateInputType = {
    id?: true
    mealId?: true
    foodItemId?: true
    quantity?: true
  }

  export type MealItemMinAggregateInputType = {
    id?: true
    mealId?: true
    foodItemId?: true
    quantity?: true
  }

  export type MealItemMaxAggregateInputType = {
    id?: true
    mealId?: true
    foodItemId?: true
    quantity?: true
  }

  export type MealItemCountAggregateInputType = {
    id?: true
    mealId?: true
    foodItemId?: true
    quantity?: true
    _all?: true
  }

  export type MealItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealItem to aggregate.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealItems
    **/
    _count?: true | MealItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealItemMaxAggregateInputType
  }

  export type GetMealItemAggregateType<T extends MealItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMealItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealItem[P]>
      : GetScalarType<T[P], AggregateMealItem[P]>
  }




  export type MealItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithAggregationInput | MealItemOrderByWithAggregationInput[]
    by: MealItemScalarFieldEnum[] | MealItemScalarFieldEnum
    having?: MealItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealItemCountAggregateInputType | true
    _avg?: MealItemAvgAggregateInputType
    _sum?: MealItemSumAggregateInputType
    _min?: MealItemMinAggregateInputType
    _max?: MealItemMaxAggregateInputType
  }

  export type MealItemGroupByOutputType = {
    id: number
    mealId: number
    foodItemId: number
    quantity: number
    _count: MealItemCountAggregateOutputType | null
    _avg: MealItemAvgAggregateOutputType | null
    _sum: MealItemSumAggregateOutputType | null
    _min: MealItemMinAggregateOutputType | null
    _max: MealItemMaxAggregateOutputType | null
  }

  type GetMealItemGroupByPayload<T extends MealItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealItemGroupByOutputType[P]>
            : GetScalarType<T[P], MealItemGroupByOutputType[P]>
        }
      >
    >


  export type MealItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealItem"]>

  export type MealItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealItem"]>

  export type MealItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    foodItemId?: boolean
    quantity?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealItem"]>

  export type MealItemSelectScalar = {
    id?: boolean
    mealId?: boolean
    foodItemId?: boolean
    quantity?: boolean
  }

  export type MealItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "foodItemId" | "quantity", ExtArgs["result"]["mealItem"]>
  export type MealItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type MealItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }
  export type MealItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    foodItem?: boolean | FoodItemDefaultArgs<ExtArgs>
  }

  export type $MealItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealItem"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
      foodItem: Prisma.$FoodItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mealId: number
      foodItemId: number
      quantity: number
    }, ExtArgs["result"]["mealItem"]>
    composites: {}
  }

  type MealItemGetPayload<S extends boolean | null | undefined | MealItemDefaultArgs> = $Result.GetResult<Prisma.$MealItemPayload, S>

  type MealItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealItemCountAggregateInputType | true
    }

  export interface MealItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealItem'], meta: { name: 'MealItem' } }
    /**
     * Find zero or one MealItem that matches the filter.
     * @param {MealItemFindUniqueArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealItemFindUniqueArgs>(args: SelectSubset<T, MealItemFindUniqueArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealItemFindUniqueOrThrowArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MealItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindFirstArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealItemFindFirstArgs>(args?: SelectSubset<T, MealItemFindFirstArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindFirstOrThrowArgs} args - Arguments to find a MealItem
     * @example
     * // Get one MealItem
     * const mealItem = await prisma.mealItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MealItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealItems
     * const mealItems = await prisma.mealItem.findMany()
     * 
     * // Get first 10 MealItems
     * const mealItems = await prisma.mealItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealItemWithIdOnly = await prisma.mealItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealItemFindManyArgs>(args?: SelectSubset<T, MealItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealItem.
     * @param {MealItemCreateArgs} args - Arguments to create a MealItem.
     * @example
     * // Create one MealItem
     * const MealItem = await prisma.mealItem.create({
     *   data: {
     *     // ... data to create a MealItem
     *   }
     * })
     * 
     */
    create<T extends MealItemCreateArgs>(args: SelectSubset<T, MealItemCreateArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealItems.
     * @param {MealItemCreateManyArgs} args - Arguments to create many MealItems.
     * @example
     * // Create many MealItems
     * const mealItem = await prisma.mealItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealItemCreateManyArgs>(args?: SelectSubset<T, MealItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealItems and returns the data saved in the database.
     * @param {MealItemCreateManyAndReturnArgs} args - Arguments to create many MealItems.
     * @example
     * // Create many MealItems
     * const mealItem = await prisma.mealItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealItems and only return the `id`
     * const mealItemWithIdOnly = await prisma.mealItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MealItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealItem.
     * @param {MealItemDeleteArgs} args - Arguments to delete one MealItem.
     * @example
     * // Delete one MealItem
     * const MealItem = await prisma.mealItem.delete({
     *   where: {
     *     // ... filter to delete one MealItem
     *   }
     * })
     * 
     */
    delete<T extends MealItemDeleteArgs>(args: SelectSubset<T, MealItemDeleteArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealItem.
     * @param {MealItemUpdateArgs} args - Arguments to update one MealItem.
     * @example
     * // Update one MealItem
     * const mealItem = await prisma.mealItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealItemUpdateArgs>(args: SelectSubset<T, MealItemUpdateArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealItems.
     * @param {MealItemDeleteManyArgs} args - Arguments to filter MealItems to delete.
     * @example
     * // Delete a few MealItems
     * const { count } = await prisma.mealItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealItemDeleteManyArgs>(args?: SelectSubset<T, MealItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealItems
     * const mealItem = await prisma.mealItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealItemUpdateManyArgs>(args: SelectSubset<T, MealItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealItems and returns the data updated in the database.
     * @param {MealItemUpdateManyAndReturnArgs} args - Arguments to update many MealItems.
     * @example
     * // Update many MealItems
     * const mealItem = await prisma.mealItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealItems and only return the `id`
     * const mealItemWithIdOnly = await prisma.mealItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MealItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealItem.
     * @param {MealItemUpsertArgs} args - Arguments to update or create a MealItem.
     * @example
     * // Update or create a MealItem
     * const mealItem = await prisma.mealItem.upsert({
     *   create: {
     *     // ... data to create a MealItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealItem we want to update
     *   }
     * })
     */
    upsert<T extends MealItemUpsertArgs>(args: SelectSubset<T, MealItemUpsertArgs<ExtArgs>>): Prisma__MealItemClient<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemCountArgs} args - Arguments to filter MealItems to count.
     * @example
     * // Count the number of MealItems
     * const count = await prisma.mealItem.count({
     *   where: {
     *     // ... the filter for the MealItems we want to count
     *   }
     * })
    **/
    count<T extends MealItemCountArgs>(
      args?: Subset<T, MealItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealItemAggregateArgs>(args: Subset<T, MealItemAggregateArgs>): Prisma.PrismaPromise<GetMealItemAggregateType<T>>

    /**
     * Group by MealItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealItemGroupByArgs} args - Group by arguments.
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
      T extends MealItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealItemGroupByArgs['orderBy'] }
        : { orderBy?: MealItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealItem model
   */
  readonly fields: MealItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodItem<T extends FoodItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodItemDefaultArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MealItem model
   */
  interface MealItemFieldRefs {
    readonly id: FieldRef<"MealItem", 'Int'>
    readonly mealId: FieldRef<"MealItem", 'Int'>
    readonly foodItemId: FieldRef<"MealItem", 'Int'>
    readonly quantity: FieldRef<"MealItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * MealItem findUnique
   */
  export type MealItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem findUniqueOrThrow
   */
  export type MealItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem findFirst
   */
  export type MealItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealItems.
     */
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem findFirstOrThrow
   */
  export type MealItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItem to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealItems.
     */
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem findMany
   */
  export type MealItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter, which MealItems to fetch.
     */
    where?: MealItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealItems to fetch.
     */
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealItems.
     */
    cursor?: MealItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealItems.
     */
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * MealItem create
   */
  export type MealItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MealItem.
     */
    data: XOR<MealItemCreateInput, MealItemUncheckedCreateInput>
  }

  /**
   * MealItem createMany
   */
  export type MealItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealItems.
     */
    data: MealItemCreateManyInput | MealItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealItem createManyAndReturn
   */
  export type MealItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * The data used to create many MealItems.
     */
    data: MealItemCreateManyInput | MealItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealItem update
   */
  export type MealItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MealItem.
     */
    data: XOR<MealItemUpdateInput, MealItemUncheckedUpdateInput>
    /**
     * Choose, which MealItem to update.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem updateMany
   */
  export type MealItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealItems.
     */
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyInput>
    /**
     * Filter which MealItems to update
     */
    where?: MealItemWhereInput
    /**
     * Limit how many MealItems to update.
     */
    limit?: number
  }

  /**
   * MealItem updateManyAndReturn
   */
  export type MealItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * The data used to update MealItems.
     */
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyInput>
    /**
     * Filter which MealItems to update
     */
    where?: MealItemWhereInput
    /**
     * Limit how many MealItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealItem upsert
   */
  export type MealItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MealItem to update in case it exists.
     */
    where: MealItemWhereUniqueInput
    /**
     * In case the MealItem found by the `where` argument doesn't exist, create a new MealItem with this data.
     */
    create: XOR<MealItemCreateInput, MealItemUncheckedCreateInput>
    /**
     * In case the MealItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealItemUpdateInput, MealItemUncheckedUpdateInput>
  }

  /**
   * MealItem delete
   */
  export type MealItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    /**
     * Filter which MealItem to delete.
     */
    where: MealItemWhereUniqueInput
  }

  /**
   * MealItem deleteMany
   */
  export type MealItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealItems to delete
     */
    where?: MealItemWhereInput
    /**
     * Limit how many MealItems to delete.
     */
    limit?: number
  }

  /**
   * MealItem without action
   */
  export type MealItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.MealType | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.MealType | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.MealType
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealItems?: boolean | Meal$mealItemsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mealItems?: boolean | Meal$mealItemsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mealItems: Prisma.$MealItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.MealType
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
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
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mealItems<T extends Meal$mealItemsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$mealItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly userId: FieldRef<"Meal", 'Int'>
    readonly type: FieldRef<"Meal", 'MealType'>
    readonly date: FieldRef<"Meal", 'DateTime'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
    readonly updatedAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.mealItems
   */
  export type Meal$mealItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealItem
     */
    select?: MealItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealItem
     */
    omit?: MealItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealItemInclude<ExtArgs> | null
    where?: MealItemWhereInput
    orderBy?: MealItemOrderByWithRelationInput | MealItemOrderByWithRelationInput[]
    cursor?: MealItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealItemScalarFieldEnum | MealItemScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model DailyStats
   */

  export type AggregateDailyStats = {
    _count: DailyStatsCountAggregateOutputType | null
    _avg: DailyStatsAvgAggregateOutputType | null
    _sum: DailyStatsSumAggregateOutputType | null
    _min: DailyStatsMinAggregateOutputType | null
    _max: DailyStatsMaxAggregateOutputType | null
  }

  export type DailyStatsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weight: number | null
    calorieGoal: number | null
    proteinGoal: number | null
    carbsGoal: number | null
    fatGoal: number | null
  }

  export type DailyStatsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weight: number | null
    calorieGoal: number | null
    proteinGoal: number | null
    carbsGoal: number | null
    fatGoal: number | null
  }

  export type DailyStatsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weight: number | null
    calorieGoal: number | null
    proteinGoal: number | null
    carbsGoal: number | null
    fatGoal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyStatsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    date: Date | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    weight: number | null
    calorieGoal: number | null
    proteinGoal: number | null
    carbsGoal: number | null
    fatGoal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyStatsCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    calories: number
    protein: number
    carbs: number
    fat: number
    weight: number
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyStatsAvgAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weight?: true
    calorieGoal?: true
    proteinGoal?: true
    carbsGoal?: true
    fatGoal?: true
  }

  export type DailyStatsSumAggregateInputType = {
    id?: true
    userId?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weight?: true
    calorieGoal?: true
    proteinGoal?: true
    carbsGoal?: true
    fatGoal?: true
  }

  export type DailyStatsMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weight?: true
    calorieGoal?: true
    proteinGoal?: true
    carbsGoal?: true
    fatGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyStatsMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weight?: true
    calorieGoal?: true
    proteinGoal?: true
    carbsGoal?: true
    fatGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyStatsCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    weight?: true
    calorieGoal?: true
    proteinGoal?: true
    carbsGoal?: true
    fatGoal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStats to aggregate.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyStats
    **/
    _count?: true | DailyStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyStatsMaxAggregateInputType
  }

  export type GetDailyStatsAggregateType<T extends DailyStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyStats[P]>
      : GetScalarType<T[P], AggregateDailyStats[P]>
  }




  export type DailyStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyStatsWhereInput
    orderBy?: DailyStatsOrderByWithAggregationInput | DailyStatsOrderByWithAggregationInput[]
    by: DailyStatsScalarFieldEnum[] | DailyStatsScalarFieldEnum
    having?: DailyStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyStatsCountAggregateInputType | true
    _avg?: DailyStatsAvgAggregateInputType
    _sum?: DailyStatsSumAggregateInputType
    _min?: DailyStatsMinAggregateInputType
    _max?: DailyStatsMaxAggregateInputType
  }

  export type DailyStatsGroupByOutputType = {
    id: number
    userId: number
    date: Date
    calories: number
    protein: number
    carbs: number
    fat: number
    weight: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt: Date
    updatedAt: Date
    _count: DailyStatsCountAggregateOutputType | null
    _avg: DailyStatsAvgAggregateOutputType | null
    _sum: DailyStatsSumAggregateOutputType | null
    _min: DailyStatsMinAggregateOutputType | null
    _max: DailyStatsMaxAggregateOutputType | null
  }

  type GetDailyStatsGroupByPayload<T extends DailyStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyStatsGroupByOutputType[P]>
            : GetScalarType<T[P], DailyStatsGroupByOutputType[P]>
        }
      >
    >


  export type DailyStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    weight?: boolean
    calorieGoal?: boolean
    proteinGoal?: boolean
    carbsGoal?: boolean
    fatGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    weight?: boolean
    calorieGoal?: boolean
    proteinGoal?: boolean
    carbsGoal?: boolean
    fatGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    weight?: boolean
    calorieGoal?: boolean
    proteinGoal?: boolean
    carbsGoal?: boolean
    fatGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyStats"]>

  export type DailyStatsSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    weight?: boolean
    calorieGoal?: boolean
    proteinGoal?: boolean
    carbsGoal?: boolean
    fatGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DailyStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "calories" | "protein" | "carbs" | "fat" | "weight" | "calorieGoal" | "proteinGoal" | "carbsGoal" | "fatGoal" | "createdAt" | "updatedAt", ExtArgs["result"]["dailyStats"]>
  export type DailyStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyStats"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      date: Date
      calories: number
      protein: number
      carbs: number
      fat: number
      weight: number | null
      calorieGoal: number
      proteinGoal: number
      carbsGoal: number
      fatGoal: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyStats"]>
    composites: {}
  }

  type DailyStatsGetPayload<S extends boolean | null | undefined | DailyStatsDefaultArgs> = $Result.GetResult<Prisma.$DailyStatsPayload, S>

  type DailyStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyStatsCountAggregateInputType | true
    }

  export interface DailyStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyStats'], meta: { name: 'DailyStats' } }
    /**
     * Find zero or one DailyStats that matches the filter.
     * @param {DailyStatsFindUniqueArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyStatsFindUniqueArgs>(args: SelectSubset<T, DailyStatsFindUniqueArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyStatsFindUniqueOrThrowArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindFirstArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyStatsFindFirstArgs>(args?: SelectSubset<T, DailyStatsFindFirstArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindFirstOrThrowArgs} args - Arguments to find a DailyStats
     * @example
     * // Get one DailyStats
     * const dailyStats = await prisma.dailyStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyStats
     * const dailyStats = await prisma.dailyStats.findMany()
     * 
     * // Get first 10 DailyStats
     * const dailyStats = await prisma.dailyStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyStatsFindManyArgs>(args?: SelectSubset<T, DailyStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyStats.
     * @param {DailyStatsCreateArgs} args - Arguments to create a DailyStats.
     * @example
     * // Create one DailyStats
     * const DailyStats = await prisma.dailyStats.create({
     *   data: {
     *     // ... data to create a DailyStats
     *   }
     * })
     * 
     */
    create<T extends DailyStatsCreateArgs>(args: SelectSubset<T, DailyStatsCreateArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyStats.
     * @param {DailyStatsCreateManyArgs} args - Arguments to create many DailyStats.
     * @example
     * // Create many DailyStats
     * const dailyStats = await prisma.dailyStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyStatsCreateManyArgs>(args?: SelectSubset<T, DailyStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyStats and returns the data saved in the database.
     * @param {DailyStatsCreateManyAndReturnArgs} args - Arguments to create many DailyStats.
     * @example
     * // Create many DailyStats
     * const dailyStats = await prisma.dailyStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyStats and only return the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyStats.
     * @param {DailyStatsDeleteArgs} args - Arguments to delete one DailyStats.
     * @example
     * // Delete one DailyStats
     * const DailyStats = await prisma.dailyStats.delete({
     *   where: {
     *     // ... filter to delete one DailyStats
     *   }
     * })
     * 
     */
    delete<T extends DailyStatsDeleteArgs>(args: SelectSubset<T, DailyStatsDeleteArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyStats.
     * @param {DailyStatsUpdateArgs} args - Arguments to update one DailyStats.
     * @example
     * // Update one DailyStats
     * const dailyStats = await prisma.dailyStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyStatsUpdateArgs>(args: SelectSubset<T, DailyStatsUpdateArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyStats.
     * @param {DailyStatsDeleteManyArgs} args - Arguments to filter DailyStats to delete.
     * @example
     * // Delete a few DailyStats
     * const { count } = await prisma.dailyStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyStatsDeleteManyArgs>(args?: SelectSubset<T, DailyStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyStats
     * const dailyStats = await prisma.dailyStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyStatsUpdateManyArgs>(args: SelectSubset<T, DailyStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyStats and returns the data updated in the database.
     * @param {DailyStatsUpdateManyAndReturnArgs} args - Arguments to update many DailyStats.
     * @example
     * // Update many DailyStats
     * const dailyStats = await prisma.dailyStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyStats and only return the `id`
     * const dailyStatsWithIdOnly = await prisma.dailyStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyStats.
     * @param {DailyStatsUpsertArgs} args - Arguments to update or create a DailyStats.
     * @example
     * // Update or create a DailyStats
     * const dailyStats = await prisma.dailyStats.upsert({
     *   create: {
     *     // ... data to create a DailyStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyStats we want to update
     *   }
     * })
     */
    upsert<T extends DailyStatsUpsertArgs>(args: SelectSubset<T, DailyStatsUpsertArgs<ExtArgs>>): Prisma__DailyStatsClient<$Result.GetResult<Prisma.$DailyStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsCountArgs} args - Arguments to filter DailyStats to count.
     * @example
     * // Count the number of DailyStats
     * const count = await prisma.dailyStats.count({
     *   where: {
     *     // ... the filter for the DailyStats we want to count
     *   }
     * })
    **/
    count<T extends DailyStatsCountArgs>(
      args?: Subset<T, DailyStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyStatsAggregateArgs>(args: Subset<T, DailyStatsAggregateArgs>): Prisma.PrismaPromise<GetDailyStatsAggregateType<T>>

    /**
     * Group by DailyStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyStatsGroupByArgs} args - Group by arguments.
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
      T extends DailyStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyStatsGroupByArgs['orderBy'] }
        : { orderBy?: DailyStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyStats model
   */
  readonly fields: DailyStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyStats model
   */
  interface DailyStatsFieldRefs {
    readonly id: FieldRef<"DailyStats", 'Int'>
    readonly userId: FieldRef<"DailyStats", 'Int'>
    readonly date: FieldRef<"DailyStats", 'DateTime'>
    readonly calories: FieldRef<"DailyStats", 'Float'>
    readonly protein: FieldRef<"DailyStats", 'Float'>
    readonly carbs: FieldRef<"DailyStats", 'Float'>
    readonly fat: FieldRef<"DailyStats", 'Float'>
    readonly weight: FieldRef<"DailyStats", 'Float'>
    readonly calorieGoal: FieldRef<"DailyStats", 'Float'>
    readonly proteinGoal: FieldRef<"DailyStats", 'Float'>
    readonly carbsGoal: FieldRef<"DailyStats", 'Float'>
    readonly fatGoal: FieldRef<"DailyStats", 'Float'>
    readonly createdAt: FieldRef<"DailyStats", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyStats findUnique
   */
  export type DailyStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats findUniqueOrThrow
   */
  export type DailyStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats findFirst
   */
  export type DailyStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats findFirstOrThrow
   */
  export type DailyStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyStats.
     */
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats findMany
   */
  export type DailyStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter, which DailyStats to fetch.
     */
    where?: DailyStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyStats to fetch.
     */
    orderBy?: DailyStatsOrderByWithRelationInput | DailyStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyStats.
     */
    cursor?: DailyStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyStats.
     */
    skip?: number
    distinct?: DailyStatsScalarFieldEnum | DailyStatsScalarFieldEnum[]
  }

  /**
   * DailyStats create
   */
  export type DailyStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyStats.
     */
    data: XOR<DailyStatsCreateInput, DailyStatsUncheckedCreateInput>
  }

  /**
   * DailyStats createMany
   */
  export type DailyStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyStats.
     */
    data: DailyStatsCreateManyInput | DailyStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyStats createManyAndReturn
   */
  export type DailyStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data used to create many DailyStats.
     */
    data: DailyStatsCreateManyInput | DailyStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyStats update
   */
  export type DailyStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyStats.
     */
    data: XOR<DailyStatsUpdateInput, DailyStatsUncheckedUpdateInput>
    /**
     * Choose, which DailyStats to update.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats updateMany
   */
  export type DailyStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyStats.
     */
    data: XOR<DailyStatsUpdateManyMutationInput, DailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyStats to update
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to update.
     */
    limit?: number
  }

  /**
   * DailyStats updateManyAndReturn
   */
  export type DailyStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * The data used to update DailyStats.
     */
    data: XOR<DailyStatsUpdateManyMutationInput, DailyStatsUncheckedUpdateManyInput>
    /**
     * Filter which DailyStats to update
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyStats upsert
   */
  export type DailyStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyStats to update in case it exists.
     */
    where: DailyStatsWhereUniqueInput
    /**
     * In case the DailyStats found by the `where` argument doesn't exist, create a new DailyStats with this data.
     */
    create: XOR<DailyStatsCreateInput, DailyStatsUncheckedCreateInput>
    /**
     * In case the DailyStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyStatsUpdateInput, DailyStatsUncheckedUpdateInput>
  }

  /**
   * DailyStats delete
   */
  export type DailyStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
    /**
     * Filter which DailyStats to delete.
     */
    where: DailyStatsWhereUniqueInput
  }

  /**
   * DailyStats deleteMany
   */
  export type DailyStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyStats to delete
     */
    where?: DailyStatsWhereInput
    /**
     * Limit how many DailyStats to delete.
     */
    limit?: number
  }

  /**
   * DailyStats without action
   */
  export type DailyStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyStats
     */
    select?: DailyStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyStats
     */
    omit?: DailyStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyStatsInclude<ExtArgs> | null
  }


  /**
   * Model UserGoal
   */

  export type AggregateUserGoal = {
    _count: UserGoalCountAggregateOutputType | null
    _avg: UserGoalAvgAggregateOutputType | null
    _sum: UserGoalSumAggregateOutputType | null
    _min: UserGoalMinAggregateOutputType | null
    _max: UserGoalMaxAggregateOutputType | null
  }

  export type UserGoalAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    startWeight: number | null
    targetWeight: number | null
  }

  export type UserGoalSumAggregateOutputType = {
    id: number | null
    userId: number | null
    startWeight: number | null
    targetWeight: number | null
  }

  export type UserGoalMinAggregateOutputType = {
    id: number | null
    userId: number | null
    startDate: Date | null
    endDate: Date | null
    startWeight: number | null
    targetWeight: number | null
    achieved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGoalMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    startDate: Date | null
    endDate: Date | null
    startWeight: number | null
    targetWeight: number | null
    achieved: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserGoalCountAggregateOutputType = {
    id: number
    userId: number
    startDate: number
    endDate: number
    startWeight: number
    targetWeight: number
    achieved: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserGoalAvgAggregateInputType = {
    id?: true
    userId?: true
    startWeight?: true
    targetWeight?: true
  }

  export type UserGoalSumAggregateInputType = {
    id?: true
    userId?: true
    startWeight?: true
    targetWeight?: true
  }

  export type UserGoalMinAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    startWeight?: true
    targetWeight?: true
    achieved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGoalMaxAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    startWeight?: true
    targetWeight?: true
    achieved?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserGoalCountAggregateInputType = {
    id?: true
    userId?: true
    startDate?: true
    endDate?: true
    startWeight?: true
    targetWeight?: true
    achieved?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserGoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGoal to aggregate.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserGoals
    **/
    _count?: true | UserGoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserGoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserGoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserGoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserGoalMaxAggregateInputType
  }

  export type GetUserGoalAggregateType<T extends UserGoalAggregateArgs> = {
        [P in keyof T & keyof AggregateUserGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserGoal[P]>
      : GetScalarType<T[P], AggregateUserGoal[P]>
  }




  export type UserGoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserGoalWhereInput
    orderBy?: UserGoalOrderByWithAggregationInput | UserGoalOrderByWithAggregationInput[]
    by: UserGoalScalarFieldEnum[] | UserGoalScalarFieldEnum
    having?: UserGoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserGoalCountAggregateInputType | true
    _avg?: UserGoalAvgAggregateInputType
    _sum?: UserGoalSumAggregateInputType
    _min?: UserGoalMinAggregateInputType
    _max?: UserGoalMaxAggregateInputType
  }

  export type UserGoalGroupByOutputType = {
    id: number
    userId: number
    startDate: Date
    endDate: Date | null
    startWeight: number
    targetWeight: number
    achieved: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserGoalCountAggregateOutputType | null
    _avg: UserGoalAvgAggregateOutputType | null
    _sum: UserGoalSumAggregateOutputType | null
    _min: UserGoalMinAggregateOutputType | null
    _max: UserGoalMaxAggregateOutputType | null
  }

  type GetUserGoalGroupByPayload<T extends UserGoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGoalGroupByOutputType[P]>
            : GetScalarType<T[P], UserGoalGroupByOutputType[P]>
        }
      >
    >


  export type UserGoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    startWeight?: boolean
    targetWeight?: boolean
    achieved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGoal"]>

  export type UserGoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    startWeight?: boolean
    targetWeight?: boolean
    achieved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGoal"]>

  export type UserGoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    startWeight?: boolean
    targetWeight?: boolean
    achieved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userGoal"]>

  export type UserGoalSelectScalar = {
    id?: boolean
    userId?: boolean
    startDate?: boolean
    endDate?: boolean
    startWeight?: boolean
    targetWeight?: boolean
    achieved?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserGoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "startDate" | "endDate" | "startWeight" | "targetWeight" | "achieved" | "createdAt" | "updatedAt", ExtArgs["result"]["userGoal"]>
  export type UserGoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserGoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserGoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserGoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserGoal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      startDate: Date
      endDate: Date | null
      startWeight: number
      targetWeight: number
      achieved: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userGoal"]>
    composites: {}
  }

  type UserGoalGetPayload<S extends boolean | null | undefined | UserGoalDefaultArgs> = $Result.GetResult<Prisma.$UserGoalPayload, S>

  type UserGoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserGoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserGoalCountAggregateInputType | true
    }

  export interface UserGoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserGoal'], meta: { name: 'UserGoal' } }
    /**
     * Find zero or one UserGoal that matches the filter.
     * @param {UserGoalFindUniqueArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserGoalFindUniqueArgs>(args: SelectSubset<T, UserGoalFindUniqueArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserGoal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserGoalFindUniqueOrThrowArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserGoalFindUniqueOrThrowArgs>(args: SelectSubset<T, UserGoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGoal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindFirstArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserGoalFindFirstArgs>(args?: SelectSubset<T, UserGoalFindFirstArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserGoal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindFirstOrThrowArgs} args - Arguments to find a UserGoal
     * @example
     * // Get one UserGoal
     * const userGoal = await prisma.userGoal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserGoalFindFirstOrThrowArgs>(args?: SelectSubset<T, UserGoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserGoals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserGoals
     * const userGoals = await prisma.userGoal.findMany()
     * 
     * // Get first 10 UserGoals
     * const userGoals = await prisma.userGoal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userGoalWithIdOnly = await prisma.userGoal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserGoalFindManyArgs>(args?: SelectSubset<T, UserGoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserGoal.
     * @param {UserGoalCreateArgs} args - Arguments to create a UserGoal.
     * @example
     * // Create one UserGoal
     * const UserGoal = await prisma.userGoal.create({
     *   data: {
     *     // ... data to create a UserGoal
     *   }
     * })
     * 
     */
    create<T extends UserGoalCreateArgs>(args: SelectSubset<T, UserGoalCreateArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserGoals.
     * @param {UserGoalCreateManyArgs} args - Arguments to create many UserGoals.
     * @example
     * // Create many UserGoals
     * const userGoal = await prisma.userGoal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserGoalCreateManyArgs>(args?: SelectSubset<T, UserGoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserGoals and returns the data saved in the database.
     * @param {UserGoalCreateManyAndReturnArgs} args - Arguments to create many UserGoals.
     * @example
     * // Create many UserGoals
     * const userGoal = await prisma.userGoal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserGoals and only return the `id`
     * const userGoalWithIdOnly = await prisma.userGoal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserGoalCreateManyAndReturnArgs>(args?: SelectSubset<T, UserGoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserGoal.
     * @param {UserGoalDeleteArgs} args - Arguments to delete one UserGoal.
     * @example
     * // Delete one UserGoal
     * const UserGoal = await prisma.userGoal.delete({
     *   where: {
     *     // ... filter to delete one UserGoal
     *   }
     * })
     * 
     */
    delete<T extends UserGoalDeleteArgs>(args: SelectSubset<T, UserGoalDeleteArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserGoal.
     * @param {UserGoalUpdateArgs} args - Arguments to update one UserGoal.
     * @example
     * // Update one UserGoal
     * const userGoal = await prisma.userGoal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserGoalUpdateArgs>(args: SelectSubset<T, UserGoalUpdateArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserGoals.
     * @param {UserGoalDeleteManyArgs} args - Arguments to filter UserGoals to delete.
     * @example
     * // Delete a few UserGoals
     * const { count } = await prisma.userGoal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserGoalDeleteManyArgs>(args?: SelectSubset<T, UserGoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserGoals
     * const userGoal = await prisma.userGoal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserGoalUpdateManyArgs>(args: SelectSubset<T, UserGoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserGoals and returns the data updated in the database.
     * @param {UserGoalUpdateManyAndReturnArgs} args - Arguments to update many UserGoals.
     * @example
     * // Update many UserGoals
     * const userGoal = await prisma.userGoal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserGoals and only return the `id`
     * const userGoalWithIdOnly = await prisma.userGoal.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserGoalUpdateManyAndReturnArgs>(args: SelectSubset<T, UserGoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserGoal.
     * @param {UserGoalUpsertArgs} args - Arguments to update or create a UserGoal.
     * @example
     * // Update or create a UserGoal
     * const userGoal = await prisma.userGoal.upsert({
     *   create: {
     *     // ... data to create a UserGoal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserGoal we want to update
     *   }
     * })
     */
    upsert<T extends UserGoalUpsertArgs>(args: SelectSubset<T, UserGoalUpsertArgs<ExtArgs>>): Prisma__UserGoalClient<$Result.GetResult<Prisma.$UserGoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserGoals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalCountArgs} args - Arguments to filter UserGoals to count.
     * @example
     * // Count the number of UserGoals
     * const count = await prisma.userGoal.count({
     *   where: {
     *     // ... the filter for the UserGoals we want to count
     *   }
     * })
    **/
    count<T extends UserGoalCountArgs>(
      args?: Subset<T, UserGoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserGoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserGoalAggregateArgs>(args: Subset<T, UserGoalAggregateArgs>): Prisma.PrismaPromise<GetUserGoalAggregateType<T>>

    /**
     * Group by UserGoal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGoalGroupByArgs} args - Group by arguments.
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
      T extends UserGoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGoalGroupByArgs['orderBy'] }
        : { orderBy?: UserGoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserGoal model
   */
  readonly fields: UserGoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserGoal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserGoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserGoal model
   */
  interface UserGoalFieldRefs {
    readonly id: FieldRef<"UserGoal", 'Int'>
    readonly userId: FieldRef<"UserGoal", 'Int'>
    readonly startDate: FieldRef<"UserGoal", 'DateTime'>
    readonly endDate: FieldRef<"UserGoal", 'DateTime'>
    readonly startWeight: FieldRef<"UserGoal", 'Float'>
    readonly targetWeight: FieldRef<"UserGoal", 'Float'>
    readonly achieved: FieldRef<"UserGoal", 'Boolean'>
    readonly createdAt: FieldRef<"UserGoal", 'DateTime'>
    readonly updatedAt: FieldRef<"UserGoal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserGoal findUnique
   */
  export type UserGoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal findUniqueOrThrow
   */
  export type UserGoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal findFirst
   */
  export type UserGoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGoals.
     */
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal findFirstOrThrow
   */
  export type UserGoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoal to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserGoals.
     */
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal findMany
   */
  export type UserGoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter, which UserGoals to fetch.
     */
    where?: UserGoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserGoals to fetch.
     */
    orderBy?: UserGoalOrderByWithRelationInput | UserGoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserGoals.
     */
    cursor?: UserGoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserGoals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserGoals.
     */
    skip?: number
    distinct?: UserGoalScalarFieldEnum | UserGoalScalarFieldEnum[]
  }

  /**
   * UserGoal create
   */
  export type UserGoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The data needed to create a UserGoal.
     */
    data: XOR<UserGoalCreateInput, UserGoalUncheckedCreateInput>
  }

  /**
   * UserGoal createMany
   */
  export type UserGoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserGoals.
     */
    data: UserGoalCreateManyInput | UserGoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserGoal createManyAndReturn
   */
  export type UserGoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * The data used to create many UserGoals.
     */
    data: UserGoalCreateManyInput | UserGoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGoal update
   */
  export type UserGoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The data needed to update a UserGoal.
     */
    data: XOR<UserGoalUpdateInput, UserGoalUncheckedUpdateInput>
    /**
     * Choose, which UserGoal to update.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal updateMany
   */
  export type UserGoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserGoals.
     */
    data: XOR<UserGoalUpdateManyMutationInput, UserGoalUncheckedUpdateManyInput>
    /**
     * Filter which UserGoals to update
     */
    where?: UserGoalWhereInput
    /**
     * Limit how many UserGoals to update.
     */
    limit?: number
  }

  /**
   * UserGoal updateManyAndReturn
   */
  export type UserGoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * The data used to update UserGoals.
     */
    data: XOR<UserGoalUpdateManyMutationInput, UserGoalUncheckedUpdateManyInput>
    /**
     * Filter which UserGoals to update
     */
    where?: UserGoalWhereInput
    /**
     * Limit how many UserGoals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserGoal upsert
   */
  export type UserGoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * The filter to search for the UserGoal to update in case it exists.
     */
    where: UserGoalWhereUniqueInput
    /**
     * In case the UserGoal found by the `where` argument doesn't exist, create a new UserGoal with this data.
     */
    create: XOR<UserGoalCreateInput, UserGoalUncheckedCreateInput>
    /**
     * In case the UserGoal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserGoalUpdateInput, UserGoalUncheckedUpdateInput>
  }

  /**
   * UserGoal delete
   */
  export type UserGoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
    /**
     * Filter which UserGoal to delete.
     */
    where: UserGoalWhereUniqueInput
  }

  /**
   * UserGoal deleteMany
   */
  export type UserGoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserGoals to delete
     */
    where?: UserGoalWhereInput
    /**
     * Limit how many UserGoals to delete.
     */
    limit?: number
  }

  /**
   * UserGoal without action
   */
  export type UserGoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserGoal
     */
    select?: UserGoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserGoal
     */
    omit?: UserGoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserGoalInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    age: 'age',
    gender: 'gender',
    weight: 'weight',
    height: 'height',
    activityLevel: 'activityLevel',
    goal: 'goal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    servingSize: 'servingSize',
    servingUnit: 'servingUnit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const MealItemScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    foodItemId: 'foodItemId',
    quantity: 'quantity'
  };

  export type MealItemScalarFieldEnum = (typeof MealItemScalarFieldEnum)[keyof typeof MealItemScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const DailyStatsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    weight: 'weight',
    calorieGoal: 'calorieGoal',
    proteinGoal: 'proteinGoal',
    carbsGoal: 'carbsGoal',
    fatGoal: 'fatGoal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyStatsScalarFieldEnum = (typeof DailyStatsScalarFieldEnum)[keyof typeof DailyStatsScalarFieldEnum]


  export const UserGoalScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startDate: 'startDate',
    endDate: 'endDate',
    startWeight: 'startWeight',
    targetWeight: 'targetWeight',
    achieved: 'achieved',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserGoalScalarFieldEnum = (typeof UserGoalScalarFieldEnum)[keyof typeof UserGoalScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'Goal'
   */
  export type EnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal'>
    


  /**
   * Reference to a field of type 'Goal[]'
   */
  export type ListEnumGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Goal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MealType'
   */
  export type EnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType'>
    


  /**
   * Reference to a field of type 'MealType[]'
   */
  export type ListEnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    weight?: FloatNullableFilter<"User"> | number | null
    height?: FloatNullableFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableFilter<"User"> | $Enums.ActivityLevel | null
    goal?: EnumGoalNullableFilter<"User"> | $Enums.Goal | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
    dailyStats?: DailyStatsListRelationFilter
    userGoals?: UserGoalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meals?: MealOrderByRelationAggregateInput
    dailyStats?: DailyStatsOrderByRelationAggregateInput
    userGoals?: UserGoalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    age?: IntNullableFilter<"User"> | number | null
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    weight?: FloatNullableFilter<"User"> | number | null
    height?: FloatNullableFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableFilter<"User"> | $Enums.ActivityLevel | null
    goal?: EnumGoalNullableFilter<"User"> | $Enums.Goal | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
    dailyStats?: DailyStatsListRelationFilter
    userGoals?: UserGoalListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    goal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableWithAggregatesFilter<"User"> | $Enums.ActivityLevel | null
    goal?: EnumGoalNullableWithAggregatesFilter<"User"> | $Enums.Goal | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: IntFilter<"FoodItem"> | number
    name?: StringFilter<"FoodItem"> | string
    calories?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    servingSize?: FloatFilter<"FoodItem"> | number
    servingUnit?: StringFilter<"FoodItem"> | string
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
    mealItems?: MealItemListRelationFilter
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealItems?: MealItemOrderByRelationAggregateInput
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    calories?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    servingSize?: FloatFilter<"FoodItem"> | number
    servingUnit?: StringFilter<"FoodItem"> | string
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
    mealItems?: MealItemListRelationFilter
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodItem"> | number
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    calories?: FloatWithAggregatesFilter<"FoodItem"> | number
    protein?: FloatWithAggregatesFilter<"FoodItem"> | number
    carbs?: FloatWithAggregatesFilter<"FoodItem"> | number
    fat?: FloatWithAggregatesFilter<"FoodItem"> | number
    servingSize?: FloatWithAggregatesFilter<"FoodItem"> | number
    servingUnit?: StringWithAggregatesFilter<"FoodItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
  }

  export type MealItemWhereInput = {
    AND?: MealItemWhereInput | MealItemWhereInput[]
    OR?: MealItemWhereInput[]
    NOT?: MealItemWhereInput | MealItemWhereInput[]
    id?: IntFilter<"MealItem"> | number
    mealId?: IntFilter<"MealItem"> | number
    foodItemId?: IntFilter<"MealItem"> | number
    quantity?: FloatFilter<"MealItem"> | number
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }

  export type MealItemOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    meal?: MealOrderByWithRelationInput
    foodItem?: FoodItemOrderByWithRelationInput
  }

  export type MealItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealItemWhereInput | MealItemWhereInput[]
    OR?: MealItemWhereInput[]
    NOT?: MealItemWhereInput | MealItemWhereInput[]
    mealId?: IntFilter<"MealItem"> | number
    foodItemId?: IntFilter<"MealItem"> | number
    quantity?: FloatFilter<"MealItem"> | number
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    foodItem?: XOR<FoodItemScalarRelationFilter, FoodItemWhereInput>
  }, "id">

  export type MealItemOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
    _count?: MealItemCountOrderByAggregateInput
    _avg?: MealItemAvgOrderByAggregateInput
    _max?: MealItemMaxOrderByAggregateInput
    _min?: MealItemMinOrderByAggregateInput
    _sum?: MealItemSumOrderByAggregateInput
  }

  export type MealItemScalarWhereWithAggregatesInput = {
    AND?: MealItemScalarWhereWithAggregatesInput | MealItemScalarWhereWithAggregatesInput[]
    OR?: MealItemScalarWhereWithAggregatesInput[]
    NOT?: MealItemScalarWhereWithAggregatesInput | MealItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MealItem"> | number
    mealId?: IntWithAggregatesFilter<"MealItem"> | number
    foodItemId?: IntWithAggregatesFilter<"MealItem"> | number
    quantity?: FloatWithAggregatesFilter<"MealItem"> | number
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    userId?: IntFilter<"Meal"> | number
    type?: EnumMealTypeFilter<"Meal"> | $Enums.MealType
    date?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mealItems?: MealItemListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    mealItems?: MealItemOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    userId?: IntFilter<"Meal"> | number
    type?: EnumMealTypeFilter<"Meal"> | $Enums.MealType
    date?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mealItems?: MealItemListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    userId?: IntWithAggregatesFilter<"Meal"> | number
    type?: EnumMealTypeWithAggregatesFilter<"Meal"> | $Enums.MealType
    date?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type DailyStatsWhereInput = {
    AND?: DailyStatsWhereInput | DailyStatsWhereInput[]
    OR?: DailyStatsWhereInput[]
    NOT?: DailyStatsWhereInput | DailyStatsWhereInput[]
    id?: IntFilter<"DailyStats"> | number
    userId?: IntFilter<"DailyStats"> | number
    date?: DateTimeFilter<"DailyStats"> | Date | string
    calories?: FloatFilter<"DailyStats"> | number
    protein?: FloatFilter<"DailyStats"> | number
    carbs?: FloatFilter<"DailyStats"> | number
    fat?: FloatFilter<"DailyStats"> | number
    weight?: FloatNullableFilter<"DailyStats"> | number | null
    calorieGoal?: FloatFilter<"DailyStats"> | number
    proteinGoal?: FloatFilter<"DailyStats"> | number
    carbsGoal?: FloatFilter<"DailyStats"> | number
    fatGoal?: FloatFilter<"DailyStats"> | number
    createdAt?: DateTimeFilter<"DailyStats"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DailyStatsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrderInput | SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_date?: DailyStatsUserIdDateCompoundUniqueInput
    AND?: DailyStatsWhereInput | DailyStatsWhereInput[]
    OR?: DailyStatsWhereInput[]
    NOT?: DailyStatsWhereInput | DailyStatsWhereInput[]
    userId?: IntFilter<"DailyStats"> | number
    date?: DateTimeFilter<"DailyStats"> | Date | string
    calories?: FloatFilter<"DailyStats"> | number
    protein?: FloatFilter<"DailyStats"> | number
    carbs?: FloatFilter<"DailyStats"> | number
    fat?: FloatFilter<"DailyStats"> | number
    weight?: FloatNullableFilter<"DailyStats"> | number | null
    calorieGoal?: FloatFilter<"DailyStats"> | number
    proteinGoal?: FloatFilter<"DailyStats"> | number
    carbsGoal?: FloatFilter<"DailyStats"> | number
    fatGoal?: FloatFilter<"DailyStats"> | number
    createdAt?: DateTimeFilter<"DailyStats"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStats"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_date">

  export type DailyStatsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrderInput | SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyStatsCountOrderByAggregateInput
    _avg?: DailyStatsAvgOrderByAggregateInput
    _max?: DailyStatsMaxOrderByAggregateInput
    _min?: DailyStatsMinOrderByAggregateInput
    _sum?: DailyStatsSumOrderByAggregateInput
  }

  export type DailyStatsScalarWhereWithAggregatesInput = {
    AND?: DailyStatsScalarWhereWithAggregatesInput | DailyStatsScalarWhereWithAggregatesInput[]
    OR?: DailyStatsScalarWhereWithAggregatesInput[]
    NOT?: DailyStatsScalarWhereWithAggregatesInput | DailyStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyStats"> | number
    userId?: IntWithAggregatesFilter<"DailyStats"> | number
    date?: DateTimeWithAggregatesFilter<"DailyStats"> | Date | string
    calories?: FloatWithAggregatesFilter<"DailyStats"> | number
    protein?: FloatWithAggregatesFilter<"DailyStats"> | number
    carbs?: FloatWithAggregatesFilter<"DailyStats"> | number
    fat?: FloatWithAggregatesFilter<"DailyStats"> | number
    weight?: FloatNullableWithAggregatesFilter<"DailyStats"> | number | null
    calorieGoal?: FloatWithAggregatesFilter<"DailyStats"> | number
    proteinGoal?: FloatWithAggregatesFilter<"DailyStats"> | number
    carbsGoal?: FloatWithAggregatesFilter<"DailyStats"> | number
    fatGoal?: FloatWithAggregatesFilter<"DailyStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DailyStats"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyStats"> | Date | string
  }

  export type UserGoalWhereInput = {
    AND?: UserGoalWhereInput | UserGoalWhereInput[]
    OR?: UserGoalWhereInput[]
    NOT?: UserGoalWhereInput | UserGoalWhereInput[]
    id?: IntFilter<"UserGoal"> | number
    userId?: IntFilter<"UserGoal"> | number
    startDate?: DateTimeFilter<"UserGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"UserGoal"> | Date | string | null
    startWeight?: FloatFilter<"UserGoal"> | number
    targetWeight?: FloatFilter<"UserGoal"> | number
    achieved?: BoolFilter<"UserGoal"> | boolean
    createdAt?: DateTimeFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeFilter<"UserGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserGoalOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserGoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserGoalWhereInput | UserGoalWhereInput[]
    OR?: UserGoalWhereInput[]
    NOT?: UserGoalWhereInput | UserGoalWhereInput[]
    userId?: IntFilter<"UserGoal"> | number
    startDate?: DateTimeFilter<"UserGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"UserGoal"> | Date | string | null
    startWeight?: FloatFilter<"UserGoal"> | number
    targetWeight?: FloatFilter<"UserGoal"> | number
    achieved?: BoolFilter<"UserGoal"> | boolean
    createdAt?: DateTimeFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeFilter<"UserGoal"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserGoalOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserGoalCountOrderByAggregateInput
    _avg?: UserGoalAvgOrderByAggregateInput
    _max?: UserGoalMaxOrderByAggregateInput
    _min?: UserGoalMinOrderByAggregateInput
    _sum?: UserGoalSumOrderByAggregateInput
  }

  export type UserGoalScalarWhereWithAggregatesInput = {
    AND?: UserGoalScalarWhereWithAggregatesInput | UserGoalScalarWhereWithAggregatesInput[]
    OR?: UserGoalScalarWhereWithAggregatesInput[]
    NOT?: UserGoalScalarWhereWithAggregatesInput | UserGoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserGoal"> | number
    userId?: IntWithAggregatesFilter<"UserGoal"> | number
    startDate?: DateTimeWithAggregatesFilter<"UserGoal"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"UserGoal"> | Date | string | null
    startWeight?: FloatWithAggregatesFilter<"UserGoal"> | number
    targetWeight?: FloatWithAggregatesFilter<"UserGoal"> | number
    achieved?: BoolWithAggregatesFilter<"UserGoal"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserGoal"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    dailyStats?: DailyStatsCreateNestedManyWithoutUserInput
    userGoals?: UserGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyStatsUncheckedCreateNestedManyWithoutUserInput
    userGoals?: UserGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    dailyStats?: DailyStatsUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyStatsUncheckedUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateInput = {
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealItems?: MealItemCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUncheckedCreateInput = {
    id?: number
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealItems?: MealItemUncheckedCreateNestedManyWithoutFoodItemInput
  }

  export type FoodItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUncheckedUpdateManyWithoutFoodItemNestedInput
  }

  export type FoodItemCreateManyInput = {
    id?: number
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemCreateInput = {
    quantity: number
    meal: MealCreateNestedOneWithoutMealItemsInput
    foodItem: FoodItemCreateNestedOneWithoutMealItemsInput
  }

  export type MealItemUncheckedCreateInput = {
    id?: number
    mealId: number
    foodItemId: number
    quantity: number
  }

  export type MealItemUpdateInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    meal?: MealUpdateOneRequiredWithoutMealItemsNestedInput
    foodItem?: FoodItemUpdateOneRequiredWithoutMealItemsNestedInput
  }

  export type MealItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealItemCreateManyInput = {
    id?: number
    mealId: number
    foodItemId: number
    quantity: number
  }

  export type MealItemUpdateManyMutationInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealCreateInput = {
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealsInput
    mealItems?: MealItemCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealItems?: MealItemUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
    mealItems?: MealItemUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsCreateInput = {
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDailyStatsInput
  }

  export type DailyStatsUncheckedCreateInput = {
    id?: number
    userId: number
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStatsUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyStatsNestedInput
  }

  export type DailyStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsCreateManyInput = {
    id?: number
    userId: number
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStatsUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalCreateInput = {
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserGoalsInput
  }

  export type UserGoalUncheckedCreateInput = {
    id?: number
    userId: number
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserGoalsNestedInput
  }

  export type UserGoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalCreateManyInput = {
    id?: number
    userId: number
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type EnumGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableFilter<$PrismaModel> | $Enums.Goal | null
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

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type DailyStatsListRelationFilter = {
    every?: DailyStatsWhereInput
    some?: DailyStatsWhereInput
    none?: DailyStatsWhereInput
  }

  export type UserGoalListRelationFilter = {
    every?: UserGoalWhereInput
    some?: UserGoalWhereInput
    none?: UserGoalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailyStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserGoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    weight?: SortOrder
    height?: SortOrder
    activityLevel?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    weight?: SortOrder
    height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type EnumGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.Goal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumGoalNullableFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MealItemListRelationFilter = {
    every?: MealItemWhereInput
    some?: MealItemWhereInput
    none?: MealItemWhereInput
  }

  export type MealItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
    servingUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    servingSize?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type FoodItemScalarRelationFilter = {
    is?: FoodItemWhereInput
    isNot?: FoodItemWhereInput
  }

  export type MealItemCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type MealItemAvgOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type MealItemMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type MealItemMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type MealItemSumOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    foodItemId?: SortOrder
    quantity?: SortOrder
  }

  export type EnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type DailyStatsUserIdDateCompoundUniqueInput = {
    userId: number
    date: Date | string
  }

  export type DailyStatsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStatsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
  }

  export type DailyStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStatsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyStatsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    weight?: SortOrder
    calorieGoal?: SortOrder
    proteinGoal?: SortOrder
    carbsGoal?: SortOrder
    fatGoal?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserGoalCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
  }

  export type UserGoalMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
    achieved?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserGoalSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startWeight?: SortOrder
    targetWeight?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MealCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type DailyStatsCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput> | DailyStatsCreateWithoutUserInput[] | DailyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStatsCreateOrConnectWithoutUserInput | DailyStatsCreateOrConnectWithoutUserInput[]
    createMany?: DailyStatsCreateManyUserInputEnvelope
    connect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
  }

  export type UserGoalCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput> | UserGoalCreateWithoutUserInput[] | UserGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput | UserGoalCreateOrConnectWithoutUserInput[]
    createMany?: UserGoalCreateManyUserInputEnvelope
    connect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type DailyStatsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput> | DailyStatsCreateWithoutUserInput[] | DailyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStatsCreateOrConnectWithoutUserInput | DailyStatsCreateOrConnectWithoutUserInput[]
    createMany?: DailyStatsCreateManyUserInputEnvelope
    connect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
  }

  export type UserGoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput> | UserGoalCreateWithoutUserInput[] | UserGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput | UserGoalCreateOrConnectWithoutUserInput[]
    createMany?: UserGoalCreateManyUserInputEnvelope
    connect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel | null
  }

  export type NullableEnumGoalFieldUpdateOperationsInput = {
    set?: $Enums.Goal | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MealUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type DailyStatsUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput> | DailyStatsCreateWithoutUserInput[] | DailyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStatsCreateOrConnectWithoutUserInput | DailyStatsCreateOrConnectWithoutUserInput[]
    upsert?: DailyStatsUpsertWithWhereUniqueWithoutUserInput | DailyStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStatsCreateManyUserInputEnvelope
    set?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    disconnect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    delete?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    connect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    update?: DailyStatsUpdateWithWhereUniqueWithoutUserInput | DailyStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStatsUpdateManyWithWhereWithoutUserInput | DailyStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStatsScalarWhereInput | DailyStatsScalarWhereInput[]
  }

  export type UserGoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput> | UserGoalCreateWithoutUserInput[] | UserGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput | UserGoalCreateOrConnectWithoutUserInput[]
    upsert?: UserGoalUpsertWithWhereUniqueWithoutUserInput | UserGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGoalCreateManyUserInputEnvelope
    set?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    disconnect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    delete?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    connect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    update?: UserGoalUpdateWithWhereUniqueWithoutUserInput | UserGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGoalUpdateManyWithWhereWithoutUserInput | UserGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGoalScalarWhereInput | UserGoalScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type DailyStatsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput> | DailyStatsCreateWithoutUserInput[] | DailyStatsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyStatsCreateOrConnectWithoutUserInput | DailyStatsCreateOrConnectWithoutUserInput[]
    upsert?: DailyStatsUpsertWithWhereUniqueWithoutUserInput | DailyStatsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyStatsCreateManyUserInputEnvelope
    set?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    disconnect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    delete?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    connect?: DailyStatsWhereUniqueInput | DailyStatsWhereUniqueInput[]
    update?: DailyStatsUpdateWithWhereUniqueWithoutUserInput | DailyStatsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyStatsUpdateManyWithWhereWithoutUserInput | DailyStatsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyStatsScalarWhereInput | DailyStatsScalarWhereInput[]
  }

  export type UserGoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput> | UserGoalCreateWithoutUserInput[] | UserGoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserGoalCreateOrConnectWithoutUserInput | UserGoalCreateOrConnectWithoutUserInput[]
    upsert?: UserGoalUpsertWithWhereUniqueWithoutUserInput | UserGoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserGoalCreateManyUserInputEnvelope
    set?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    disconnect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    delete?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    connect?: UserGoalWhereUniqueInput | UserGoalWhereUniqueInput[]
    update?: UserGoalUpdateWithWhereUniqueWithoutUserInput | UserGoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserGoalUpdateManyWithWhereWithoutUserInput | UserGoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserGoalScalarWhereInput | UserGoalScalarWhereInput[]
  }

  export type MealItemCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput> | MealItemCreateWithoutFoodItemInput[] | MealItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodItemInput | MealItemCreateOrConnectWithoutFoodItemInput[]
    createMany?: MealItemCreateManyFoodItemInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type MealItemUncheckedCreateNestedManyWithoutFoodItemInput = {
    create?: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput> | MealItemCreateWithoutFoodItemInput[] | MealItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodItemInput | MealItemCreateOrConnectWithoutFoodItemInput[]
    createMany?: MealItemCreateManyFoodItemInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealItemUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput> | MealItemCreateWithoutFoodItemInput[] | MealItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodItemInput | MealItemCreateOrConnectWithoutFoodItemInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutFoodItemInput | MealItemUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: MealItemCreateManyFoodItemInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutFoodItemInput | MealItemUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutFoodItemInput | MealItemUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type MealItemUncheckedUpdateManyWithoutFoodItemNestedInput = {
    create?: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput> | MealItemCreateWithoutFoodItemInput[] | MealItemUncheckedCreateWithoutFoodItemInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutFoodItemInput | MealItemCreateOrConnectWithoutFoodItemInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutFoodItemInput | MealItemUpsertWithWhereUniqueWithoutFoodItemInput[]
    createMany?: MealItemCreateManyFoodItemInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutFoodItemInput | MealItemUpdateWithWhereUniqueWithoutFoodItemInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutFoodItemInput | MealItemUpdateManyWithWhereWithoutFoodItemInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutMealItemsInput = {
    create?: XOR<MealCreateWithoutMealItemsInput, MealUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMealItemsInput
    connect?: MealWhereUniqueInput
  }

  export type FoodItemCreateNestedOneWithoutMealItemsInput = {
    create?: XOR<FoodItemCreateWithoutMealItemsInput, FoodItemUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutMealItemsInput
    connect?: FoodItemWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutMealItemsNestedInput = {
    create?: XOR<MealCreateWithoutMealItemsInput, MealUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMealItemsInput
    upsert?: MealUpsertWithoutMealItemsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutMealItemsInput, MealUpdateWithoutMealItemsInput>, MealUncheckedUpdateWithoutMealItemsInput>
  }

  export type FoodItemUpdateOneRequiredWithoutMealItemsNestedInput = {
    create?: XOR<FoodItemCreateWithoutMealItemsInput, FoodItemUncheckedCreateWithoutMealItemsInput>
    connectOrCreate?: FoodItemCreateOrConnectWithoutMealItemsInput
    upsert?: FoodItemUpsertWithoutMealItemsInput
    connect?: FoodItemWhereUniqueInput
    update?: XOR<XOR<FoodItemUpdateToOneWithWhereWithoutMealItemsInput, FoodItemUpdateWithoutMealItemsInput>, FoodItemUncheckedUpdateWithoutMealItemsInput>
  }

  export type UserCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    connect?: UserWhereUniqueInput
  }

  export type MealItemCreateNestedManyWithoutMealInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type MealItemUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
  }

  export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType
  }

  export type UserUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    upsert?: UserUpsertWithoutMealsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealsInput, UserUpdateWithoutMealsInput>, UserUncheckedUpdateWithoutMealsInput>
  }

  export type MealItemUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutMealInput | MealItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutMealInput | MealItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutMealInput | MealItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type MealItemUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput> | MealItemCreateWithoutMealInput[] | MealItemUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealItemCreateOrConnectWithoutMealInput | MealItemCreateOrConnectWithoutMealInput[]
    upsert?: MealItemUpsertWithWhereUniqueWithoutMealInput | MealItemUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealItemCreateManyMealInputEnvelope
    set?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    disconnect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    delete?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    connect?: MealItemWhereUniqueInput | MealItemWhereUniqueInput[]
    update?: MealItemUpdateWithWhereUniqueWithoutMealInput | MealItemUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealItemUpdateManyWithWhereWithoutMealInput | MealItemUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDailyStatsInput = {
    create?: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyStatsNestedInput = {
    create?: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyStatsInput
    upsert?: UserUpsertWithoutDailyStatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyStatsInput, UserUpdateWithoutDailyStatsInput>, UserUncheckedUpdateWithoutDailyStatsInput>
  }

  export type UserCreateNestedOneWithoutUserGoalsInput = {
    create?: XOR<UserCreateWithoutUserGoalsInput, UserUncheckedCreateWithoutUserGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserGoalsNestedInput = {
    create?: XOR<UserCreateWithoutUserGoalsInput, UserUncheckedCreateWithoutUserGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserGoalsInput
    upsert?: UserUpsertWithoutUserGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserGoalsInput, UserUpdateWithoutUserGoalsInput>, UserUncheckedUpdateWithoutUserGoalsInput>
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type NestedEnumGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableFilter<$PrismaModel> | $Enums.Goal | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Goal | EnumGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Goal[] | ListEnumGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.Goal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumGoalNullableFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type NestedEnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MealCreateWithoutUserInput = {
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealItems?: MealItemCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    mealItems?: MealItemUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutUserInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealCreateManyUserInputEnvelope = {
    data: MealCreateManyUserInput | MealCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyStatsCreateWithoutUserInput = {
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStatsUncheckedCreateWithoutUserInput = {
    id?: number
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStatsCreateOrConnectWithoutUserInput = {
    where: DailyStatsWhereUniqueInput
    create: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput>
  }

  export type DailyStatsCreateManyUserInputEnvelope = {
    data: DailyStatsCreateManyUserInput | DailyStatsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserGoalCreateWithoutUserInput = {
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalUncheckedCreateWithoutUserInput = {
    id?: number
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalCreateOrConnectWithoutUserInput = {
    where: UserGoalWhereUniqueInput
    create: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
  }

  export type UserGoalCreateManyUserInputEnvelope = {
    data: UserGoalCreateManyUserInput | UserGoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealUpsertWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealUpdateWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
  }

  export type MealUpdateManyWithWhereWithoutUserInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutUserInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: IntFilter<"Meal"> | number
    userId?: IntFilter<"Meal"> | number
    type?: EnumMealTypeFilter<"Meal"> | $Enums.MealType
    date?: DateTimeFilter<"Meal"> | Date | string
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type DailyStatsUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyStatsWhereUniqueInput
    update: XOR<DailyStatsUpdateWithoutUserInput, DailyStatsUncheckedUpdateWithoutUserInput>
    create: XOR<DailyStatsCreateWithoutUserInput, DailyStatsUncheckedCreateWithoutUserInput>
  }

  export type DailyStatsUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyStatsWhereUniqueInput
    data: XOR<DailyStatsUpdateWithoutUserInput, DailyStatsUncheckedUpdateWithoutUserInput>
  }

  export type DailyStatsUpdateManyWithWhereWithoutUserInput = {
    where: DailyStatsScalarWhereInput
    data: XOR<DailyStatsUpdateManyMutationInput, DailyStatsUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyStatsScalarWhereInput = {
    AND?: DailyStatsScalarWhereInput | DailyStatsScalarWhereInput[]
    OR?: DailyStatsScalarWhereInput[]
    NOT?: DailyStatsScalarWhereInput | DailyStatsScalarWhereInput[]
    id?: IntFilter<"DailyStats"> | number
    userId?: IntFilter<"DailyStats"> | number
    date?: DateTimeFilter<"DailyStats"> | Date | string
    calories?: FloatFilter<"DailyStats"> | number
    protein?: FloatFilter<"DailyStats"> | number
    carbs?: FloatFilter<"DailyStats"> | number
    fat?: FloatFilter<"DailyStats"> | number
    weight?: FloatNullableFilter<"DailyStats"> | number | null
    calorieGoal?: FloatFilter<"DailyStats"> | number
    proteinGoal?: FloatFilter<"DailyStats"> | number
    carbsGoal?: FloatFilter<"DailyStats"> | number
    fatGoal?: FloatFilter<"DailyStats"> | number
    createdAt?: DateTimeFilter<"DailyStats"> | Date | string
    updatedAt?: DateTimeFilter<"DailyStats"> | Date | string
  }

  export type UserGoalUpsertWithWhereUniqueWithoutUserInput = {
    where: UserGoalWhereUniqueInput
    update: XOR<UserGoalUpdateWithoutUserInput, UserGoalUncheckedUpdateWithoutUserInput>
    create: XOR<UserGoalCreateWithoutUserInput, UserGoalUncheckedCreateWithoutUserInput>
  }

  export type UserGoalUpdateWithWhereUniqueWithoutUserInput = {
    where: UserGoalWhereUniqueInput
    data: XOR<UserGoalUpdateWithoutUserInput, UserGoalUncheckedUpdateWithoutUserInput>
  }

  export type UserGoalUpdateManyWithWhereWithoutUserInput = {
    where: UserGoalScalarWhereInput
    data: XOR<UserGoalUpdateManyMutationInput, UserGoalUncheckedUpdateManyWithoutUserInput>
  }

  export type UserGoalScalarWhereInput = {
    AND?: UserGoalScalarWhereInput | UserGoalScalarWhereInput[]
    OR?: UserGoalScalarWhereInput[]
    NOT?: UserGoalScalarWhereInput | UserGoalScalarWhereInput[]
    id?: IntFilter<"UserGoal"> | number
    userId?: IntFilter<"UserGoal"> | number
    startDate?: DateTimeFilter<"UserGoal"> | Date | string
    endDate?: DateTimeNullableFilter<"UserGoal"> | Date | string | null
    startWeight?: FloatFilter<"UserGoal"> | number
    targetWeight?: FloatFilter<"UserGoal"> | number
    achieved?: BoolFilter<"UserGoal"> | boolean
    createdAt?: DateTimeFilter<"UserGoal"> | Date | string
    updatedAt?: DateTimeFilter<"UserGoal"> | Date | string
  }

  export type MealItemCreateWithoutFoodItemInput = {
    quantity: number
    meal: MealCreateNestedOneWithoutMealItemsInput
  }

  export type MealItemUncheckedCreateWithoutFoodItemInput = {
    id?: number
    mealId: number
    quantity: number
  }

  export type MealItemCreateOrConnectWithoutFoodItemInput = {
    where: MealItemWhereUniqueInput
    create: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput>
  }

  export type MealItemCreateManyFoodItemInputEnvelope = {
    data: MealItemCreateManyFoodItemInput | MealItemCreateManyFoodItemInput[]
    skipDuplicates?: boolean
  }

  export type MealItemUpsertWithWhereUniqueWithoutFoodItemInput = {
    where: MealItemWhereUniqueInput
    update: XOR<MealItemUpdateWithoutFoodItemInput, MealItemUncheckedUpdateWithoutFoodItemInput>
    create: XOR<MealItemCreateWithoutFoodItemInput, MealItemUncheckedCreateWithoutFoodItemInput>
  }

  export type MealItemUpdateWithWhereUniqueWithoutFoodItemInput = {
    where: MealItemWhereUniqueInput
    data: XOR<MealItemUpdateWithoutFoodItemInput, MealItemUncheckedUpdateWithoutFoodItemInput>
  }

  export type MealItemUpdateManyWithWhereWithoutFoodItemInput = {
    where: MealItemScalarWhereInput
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyWithoutFoodItemInput>
  }

  export type MealItemScalarWhereInput = {
    AND?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
    OR?: MealItemScalarWhereInput[]
    NOT?: MealItemScalarWhereInput | MealItemScalarWhereInput[]
    id?: IntFilter<"MealItem"> | number
    mealId?: IntFilter<"MealItem"> | number
    foodItemId?: IntFilter<"MealItem"> | number
    quantity?: FloatFilter<"MealItem"> | number
  }

  export type MealCreateWithoutMealItemsInput = {
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutMealItemsInput = {
    id?: number
    userId: number
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealCreateOrConnectWithoutMealItemsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutMealItemsInput, MealUncheckedCreateWithoutMealItemsInput>
  }

  export type FoodItemCreateWithoutMealItemsInput = {
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUncheckedCreateWithoutMealItemsInput = {
    id?: number
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    servingSize: number
    servingUnit: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemCreateOrConnectWithoutMealItemsInput = {
    where: FoodItemWhereUniqueInput
    create: XOR<FoodItemCreateWithoutMealItemsInput, FoodItemUncheckedCreateWithoutMealItemsInput>
  }

  export type MealUpsertWithoutMealItemsInput = {
    update: XOR<MealUpdateWithoutMealItemsInput, MealUncheckedUpdateWithoutMealItemsInput>
    create: XOR<MealCreateWithoutMealItemsInput, MealUncheckedCreateWithoutMealItemsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutMealItemsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutMealItemsInput, MealUncheckedUpdateWithoutMealItemsInput>
  }

  export type MealUpdateWithoutMealItemsInput = {
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutMealItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUpsertWithoutMealItemsInput = {
    update: XOR<FoodItemUpdateWithoutMealItemsInput, FoodItemUncheckedUpdateWithoutMealItemsInput>
    create: XOR<FoodItemCreateWithoutMealItemsInput, FoodItemUncheckedCreateWithoutMealItemsInput>
    where?: FoodItemWhereInput
  }

  export type FoodItemUpdateToOneWithWhereWithoutMealItemsInput = {
    where?: FoodItemWhereInput
    data: XOR<FoodItemUpdateWithoutMealItemsInput, FoodItemUncheckedUpdateWithoutMealItemsInput>
  }

  export type FoodItemUpdateWithoutMealItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateWithoutMealItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    servingSize?: FloatFieldUpdateOperationsInput | number
    servingUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutMealsInput = {
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyStats?: DailyStatsCreateNestedManyWithoutUserInput
    userGoals?: UserGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyStats?: DailyStatsUncheckedCreateNestedManyWithoutUserInput
    userGoals?: UserGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
  }

  export type MealItemCreateWithoutMealInput = {
    quantity: number
    foodItem: FoodItemCreateNestedOneWithoutMealItemsInput
  }

  export type MealItemUncheckedCreateWithoutMealInput = {
    id?: number
    foodItemId: number
    quantity: number
  }

  export type MealItemCreateOrConnectWithoutMealInput = {
    where: MealItemWhereUniqueInput
    create: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput>
  }

  export type MealItemCreateManyMealInputEnvelope = {
    data: MealItemCreateManyMealInput | MealItemCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMealsInput = {
    update: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserUpdateWithoutMealsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyStats?: DailyStatsUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyStats?: DailyStatsUncheckedUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealItemUpsertWithWhereUniqueWithoutMealInput = {
    where: MealItemWhereUniqueInput
    update: XOR<MealItemUpdateWithoutMealInput, MealItemUncheckedUpdateWithoutMealInput>
    create: XOR<MealItemCreateWithoutMealInput, MealItemUncheckedCreateWithoutMealInput>
  }

  export type MealItemUpdateWithWhereUniqueWithoutMealInput = {
    where: MealItemWhereUniqueInput
    data: XOR<MealItemUpdateWithoutMealInput, MealItemUncheckedUpdateWithoutMealInput>
  }

  export type MealItemUpdateManyWithWhereWithoutMealInput = {
    where: MealItemScalarWhereInput
    data: XOR<MealItemUpdateManyMutationInput, MealItemUncheckedUpdateManyWithoutMealInput>
  }

  export type UserCreateWithoutDailyStatsInput = {
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    userGoals?: UserGoalCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyStatsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    userGoals?: UserGoalUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyStatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
  }

  export type UserUpsertWithoutDailyStatsInput = {
    update: XOR<UserUpdateWithoutDailyStatsInput, UserUncheckedUpdateWithoutDailyStatsInput>
    create: XOR<UserCreateWithoutDailyStatsInput, UserUncheckedCreateWithoutDailyStatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyStatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyStatsInput, UserUncheckedUpdateWithoutDailyStatsInput>
  }

  export type UserUpdateWithoutDailyStatsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    userGoals?: UserGoalUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserGoalsInput = {
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
    dailyStats?: DailyStatsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserGoalsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    age?: number | null
    gender?: $Enums.Gender | null
    weight?: number | null
    height?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    goal?: $Enums.Goal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
    dailyStats?: DailyStatsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserGoalsInput, UserUncheckedCreateWithoutUserGoalsInput>
  }

  export type UserUpsertWithoutUserGoalsInput = {
    update: XOR<UserUpdateWithoutUserGoalsInput, UserUncheckedUpdateWithoutUserGoalsInput>
    create: XOR<UserCreateWithoutUserGoalsInput, UserUncheckedCreateWithoutUserGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserGoalsInput, UserUncheckedUpdateWithoutUserGoalsInput>
  }

  export type UserUpdateWithoutUserGoalsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
    dailyStats?: DailyStatsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserGoalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    goal?: NullableEnumGoalFieldUpdateOperationsInput | $Enums.Goal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
    dailyStats?: DailyStatsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealCreateManyUserInput = {
    id?: number
    type: $Enums.MealType
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyStatsCreateManyUserInput = {
    id?: number
    date?: Date | string
    calories: number
    protein: number
    carbs: number
    fat: number
    weight?: number | null
    calorieGoal: number
    proteinGoal: number
    carbsGoal: number
    fatGoal: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserGoalCreateManyUserInput = {
    id?: number
    startDate?: Date | string
    endDate?: Date | string | null
    startWeight: number
    targetWeight: number
    achieved?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateWithoutUserInput = {
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealItems?: MealItemUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyStatsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    calorieGoal?: FloatFieldUpdateOperationsInput | number
    proteinGoal?: FloatFieldUpdateOperationsInput | number
    carbsGoal?: FloatFieldUpdateOperationsInput | number
    fatGoal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUpdateWithoutUserInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserGoalUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startWeight?: FloatFieldUpdateOperationsInput | number
    targetWeight?: FloatFieldUpdateOperationsInput | number
    achieved?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealItemCreateManyFoodItemInput = {
    id?: number
    mealId: number
    quantity: number
  }

  export type MealItemUpdateWithoutFoodItemInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    meal?: MealUpdateOneRequiredWithoutMealItemsNestedInput
  }

  export type MealItemUncheckedUpdateWithoutFoodItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealItemUncheckedUpdateManyWithoutFoodItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealItemCreateManyMealInput = {
    id?: number
    foodItemId: number
    quantity: number
  }

  export type MealItemUpdateWithoutMealInput = {
    quantity?: FloatFieldUpdateOperationsInput | number
    foodItem?: FoodItemUpdateOneRequiredWithoutMealItemsNestedInput
  }

  export type MealItemUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
  }

  export type MealItemUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodItemId?: IntFieldUpdateOperationsInput | number
    quantity?: FloatFieldUpdateOperationsInput | number
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