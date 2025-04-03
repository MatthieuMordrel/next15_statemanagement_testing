import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return NextResponse.json({
    id: 'Slow',
    title: 'Slow Data',
    timestamp: new Date().toISOString()
  })
}
