import { headers } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET() {
  //Interestingly, headers are empty when streaming the query from the server to the client
  const headerlist = await headers()
  headerlist.forEach((value, key) => {
    console.log(key, value)
  })
  await new Promise(resolve => setTimeout(resolve, 2000))
  return NextResponse.json({
    id: 'Slow',
    title: 'Slow Data',
    timestamp: new Date().toISOString()
  })
}
