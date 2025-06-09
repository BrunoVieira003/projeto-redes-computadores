// app/api/metrics/route.ts
import { NextRequest } from 'next/server'
import client from 'prom-client'

const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

export async function GET(req: NextRequest) {
  const metrics = await client.register.metrics()
  return new Response(metrics, {
    status: 200,
    headers: {
      'Content-Type': client.register.contentType,
    },
  })
}
