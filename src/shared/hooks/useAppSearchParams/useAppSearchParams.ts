import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

interface UseAppSearchParamsProps {
  removeKeysOnChange?: ParamKey[]
  removeKeys?: ParamKey[]
  replace?: boolean
}

let removeKeysOnChangeState: ParamKey[] = []

const setRemoveKeysOnChangeState = (keys: ParamKey[]) => {
  removeKeysOnChangeState = [...removeKeysOnChangeState, ...keys]
}

const removeRemoveKeysOnChangeState = (removeKeys: ParamKey[]) => {
  const newList = removeKeysOnChangeState.filter(
    (item) => !removeKeys.includes(item),
  )

  removeKeysOnChangeState = newList
}

export const useAppSearchParams = ({
  removeKeysOnChange,
  removeKeys,
  replace = false,
}: UseAppSearchParamsProps = {}) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const deleteParamsRemoveKeysOnChangeState = () => {
    if (!removeKeysOnChangeState.length) return

    removeKeysOnChangeState?.forEach((key) => {
      deleteParam(key as ParamKey)
    })
  }

  const setParam = (key: ParamKey, value: string) => {
    deleteParamsRemoveKeysOnChangeState()
    onRemoveKeys()

    searchParams.set(String(key), value)
    setSearchParams(searchParams, { replace })
  }

  const setParams = (keys: { key: ParamKey; value: string }[]) => {
    keys.forEach((param) => {
      searchParams.set(String(param.key), param.value)
    })

    setSearchParams(searchParams, { replace })
  }

  const deleteParam = (key: ParamKey) => {
    searchParams.delete(String(key))
    setSearchParams(searchParams, { replace })
  }

  const deleteParams = (key: ParamKey[]) => {
    key.forEach((key) => searchParams.delete(String(key)))

    setSearchParams(searchParams, { replace })
  }

  const onRemoveKeys = () => {
    if (!removeKeys?.length) return

    deleteKeys(removeKeys)
  }

  const deleteKeys = (keys: ParamKey[]) => {
    keys.forEach((key) => {
      searchParams.delete(String(key))
    })
    setSearchParams(searchParams, { replace })
  }

  const getParam = (key: ParamKey) => {
    return searchParams.get(String(key))
  }

  const resetAllParams = () => {
    const emptySearchParams = new URLSearchParams()
    setSearchParams(emptySearchParams, { replace })
  }

  const getAllParams = () => {
    const params: Partial<CommonQuery> = {}

    searchParams.forEach((value, key: string) => {
      params[key as ParamKey] = value
    })

    return params
  }

  useEffect(() => {
    if (removeKeysOnChange?.length) {
      setRemoveKeysOnChangeState(removeKeysOnChange)
    }

    return () => {
      if (removeKeysOnChange?.length) {
        removeRemoveKeysOnChangeState(removeKeysOnChange)
      }
    }
  }, [removeKeysOnChange])

  return {
    setParam,
    deleteParam,
    deleteParams,
    getAllParams,
    resetAllParams,
    getParam,
    setParams,
  }
}
