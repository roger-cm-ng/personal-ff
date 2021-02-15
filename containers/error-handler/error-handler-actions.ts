export const ERROR_RAISED = 'ERROR_RAISED';
export const ERROR_RESET = 'ERROR_RESET';

export const raiseError = (component: any) => ({
  type: ERROR_RAISED,
  payload: component
});

export const resetError = () => ({
  type: ERROR_RESET
});
