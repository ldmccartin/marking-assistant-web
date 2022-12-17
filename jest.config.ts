import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  roots: [
    './src'
  ],
  preset: 'ts-jest',
  clearMocks: true
}

export default config
