import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const shopSelector = createSelector(
    [selectShop],
    shop => shop.collections

)