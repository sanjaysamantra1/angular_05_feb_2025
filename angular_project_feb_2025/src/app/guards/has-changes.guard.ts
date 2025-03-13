import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<unknown> = (component: any, currentRoute, currentState, nextState) => {
  if (!component.hasChanges) {
    return true;
  } else {
    alert('No hurryyy!!! Please save the changes before you jump to another page')
    return false;
  }
};
