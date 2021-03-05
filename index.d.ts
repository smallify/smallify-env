import { Smallify } from 'smallify'
import { SmallifyEnv, EnvOptions } from './types/options'

declare const envSchema: SmallifyEnv

export = envSchema

declare module 'smallify' {
  interface SmallifyPlugin {
    (plugin: SmallifyEnv, opts: EnvOptions): Smallify
  }

  interface Smallify {
    $env: Record<string, unknown>
  }
}
