import { z } from 'zod'
import { CurrencySchema } from '../schema'

export type Currency = z.infer<typeof CurrencySchema>