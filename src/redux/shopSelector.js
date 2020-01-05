import {createSelector} from 'reselect'

const selectShop = state => state.shop

export const shopSelector = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollections = createSelector(
    [shopSelector],
    collections => Object.keys(collections).map(key => collections[key])
)

export const collectionSelector = collectionParam => (
    createSelector(
        [shopSelector],
        (collections) => collections[collectionParam]
    )           
);