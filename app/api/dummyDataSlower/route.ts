import { NextResponse } from 'next/server'

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return NextResponse.json({
    id: 'Slower',
    title: 'Slower Data',
    timestamp: new Date().toISOString()
  })
}
