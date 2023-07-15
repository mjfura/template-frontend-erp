import { useBoolean } from '@/components/hooks'
import { act, renderHook } from '@testing-library/react'

describe('Hook useBoolean', () => {
  it('should return initial value', () => {
    const { result } = renderHook(() => useBoolean(true))
    expect(result.current.value).toEqual(true)
  })
  it('should toggle teh actual value', () => {
    const { result } = renderHook(() => useBoolean(true))

    act(() => {
      result.current.toggle()
    })
    expect(result.current.value).toEqual(false)
  })
  it('should return false when is off', () => {
    const { result } = renderHook(() => useBoolean(false))
    act(() => {
      result.current.off()
    })
    expect(result.current.value).toEqual(false)
  })
  it('should return true when is on', () => {
    const { result } = renderHook(() => useBoolean(true))
    act(() => {
      result.current.on()
    })
    expect(result.current.value).toEqual(true)
  })
})
