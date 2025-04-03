import { fetchSlowData, fetchSlowerData } from '@/lib/data'
import { WrapperSlowComponent, WrapperSlowerComponent } from '../Wrappers'

export async function WrapperSlowComponent_RSC() {
  // The await here allows the component to suspend
  const data = await fetchSlowData()
  return <WrapperSlowComponent data={data} />
}

export async function WrapperSlowerComponent_RSC() {
  // The await here allows the component to suspend
  const data = await fetchSlowerData()
  return <WrapperSlowerComponent data={data} />
}
