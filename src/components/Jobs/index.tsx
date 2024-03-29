import React, { useEffect } from 'react'

import { JOBS } from '../../modules/api/endpoints'
import Navigation from '../common/Navigation'
import useFetch from '../../hooks/useFetch'

const Jobs = () => {
  const { response, performFetch } = useFetch(JOBS)
  const { loading, data } = response

  useEffect(() => {
    performFetch()
  }, [performFetch])

  return <Navigation loading={loading} services={data} title={'Employees'} />
}

export default Jobs
