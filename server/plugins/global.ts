import { bearer } from '@elysiajs/bearer'
import { serverTiming } from '@elysiajs/server-timing'
import { jwt } from '@elysiajs/jwt'
import logixlysia from 'logixlysia'
import { ip } from "elysia-ip";
import { rateLimit } from 'elysia-rate-limit'

// JWT
export const appJWT = jwt({
  name: 'jwt',
  secret: process.env.JWT_SECRET as string,
  exp: '720d',
  alg: 'HS256',
})

// IP
export const appIP = ip()

// Rate Limit
export const appRateLimit = rateLimit({
  max: 60, 
  duration: 60000,
  errorResponse: new Response("rate-limited", {
    status: 429,
    statusText: 'Sorry, Rate limit exceeded',
    headers: new Headers({
      'Content-Type': 'text/plain',
      'Custom-Header': 'custom',
    }),
  }),
})

// Bearer
export const appBearer = bearer()

// Server Timing
export const appServerTiming = serverTiming()

// Logger
export const appLogger = logixlysia({
  config: {
    showStartupMessage: false,
    timestamp: {
      translateTime: 'yyyy-mm-dd HH:MM:ss.SSS'
    },
    logRotation: {
      maxSize: '10m',
      interval: '1d',
      maxFiles: '7d',
      compress: true
    },
    logFilePath: './logs/server.log',
    ip: true,
    customLogFormat: '{now} {level} {duration} {method} {pathname} {status} {message} {ip}'
  }
})