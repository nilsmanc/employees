import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { filterEmployees } from '../../modules/app/actions'
import { selectAppState } from '../../modules/app/selectors'

import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

type NavigationItemProps = {
  id: number
  jobId: number
  title: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({ id, jobId, title }) => {
  const dispatch = useDispatch()
  const appState = useSelector(selectAppState)
  const action = useCallback(() => {
    dispatch(filterEmployees(jobId))
  }, [jobId, dispatch])

  return (
    <ListItem button onClick={action} selected={jobId === appState.selectedJob}>
      <ListItemText primary={title} />
    </ListItem>
  )
}

export default NavigationItem
