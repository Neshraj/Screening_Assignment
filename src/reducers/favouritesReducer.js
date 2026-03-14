export const ACTIONS = {
  TOGGLE: 'TOGGLE',   // add if not favourited, remove if favourited
  CLEAR:  'CLEAR',    // remove all favourites at once
};


/**

 * @param {Set<string>} state     - current favourites
 * @param {{ type: string, payload?: string }} action
 * @returns {Set<string>}         - NEW set (never mutate state directly)
 */
export function favouritesReducer(state, action) {
  switch (action.type) {

    case ACTIONS.TOGGLE: {
      const next = new Set(state);

      if (next.has(action.payload)) {
        next.delete(action.payload); // was favourited → remove it
      } else {
        next.add(action.payload);    // was not favourited → add it
      }

      return next;
    }

    case ACTIONS.CLEAR: {
      return new Set(); // fresh empty Set
    }

    default: {
      return state;
    }
  }
}