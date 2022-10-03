import api from 'modules/api/api'
import { JOBS } from 'modules/api/endpoints'
import React, { useEffect } from 'react'

export const Jobs = () => {
  useEffect(() => {
    const response = api.fetch(JOBS)
  }, [])
  return <div>Jobs Component</div>
}
