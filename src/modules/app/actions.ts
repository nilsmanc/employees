export const APP_ACTIONS = {
  APP_FILTER_EMPLOYEES: 'APP_FILTER_EMPLOYEES',
}

export function filterEmployees(filterBy: number) {
  return {
    type: APP_ACTIONS.APP_FILTER_EMPLOYEES,
    payload: filterBy,
  }
}
