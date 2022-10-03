import { apiActions } from 'modules/api/actions'
import api from 'modules/api/api'
import { JOBS } from 'modules/api/endpoints'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Jobs = () => {
  const state = useSelector((state) => state.api[JOBS])

  console.log(state)

  return <div>Jobs Component</div>
}
