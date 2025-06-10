// app/api/metrics/route.ts
import { NextRequest } from 'next/server'
import client from 'prom-client'

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

export const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

export async function GET(req: NextRequest) {
  const metrics = await client.register.metrics()
  return new Response(metrics, {
    status: 200,
    headers: {
      'Content-Type': client.register.contentType,
    },
  })
}
