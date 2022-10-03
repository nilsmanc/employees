import useFetch from 'hooks/useFetch'
import { JOBS } from 'modules/api/endpoints'
import React, { useEffect } from 'react'

export const Jobs = () => {
  const { response, performFetch } = useFetch(JOBS)

  useEffect(() => {
    performFetch()
  }, [performFetch])

  console.log(response)

  return <div>Jobs Component</div>
}
