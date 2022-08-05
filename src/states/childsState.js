import {
    atom,
    selector,
} from 'recoil'

const childSelector = selector({
    key: 'childSelector',
    get: async ({ get }) => {
        // ideally this would be a service like apiService.getChilds()
        // this is also page based, so I need to do multiple calls to get all of the data
        // needs to have a param option for me to just pass the property category id, if I want just those childs
        const response = await fetch('http://54.177.198.128:8001/api/cat-amenities-childs/')
        const data = await response.json()
        return data
    }
})

const childsState = atom({
    key: 'childs',
    default: childSelector
})

export { childSelector, childsState }