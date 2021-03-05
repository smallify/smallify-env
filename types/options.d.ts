import { Smallify, PluginOptions } from 'smallify'
import { JSONSchemaType } from 'ajv'

export class EnvOptions extends PluginOptions {
  schema: JSONSchemaType<Record<string, any>, true>
  data?: Record<string, unknown>
  env?: boolean
  dotenv?: boolean
}

export type SmallifyEnv = {
  (smallify: Smallify, opts: EnvOptions): Promise<void>
}
