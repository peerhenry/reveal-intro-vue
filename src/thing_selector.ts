import { createSelector } from '@ngrx/store'

export interface AppState {
  count: number
}

export const selectFeatureCount = createSelector(
  (state: AppState) => state.count
)
