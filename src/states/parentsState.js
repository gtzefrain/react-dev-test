import {
    atom,
    selector,
} from 'recoil'

const parentSelector = selector({
    key: 'parentsSelector',
    get: async ({ get }) => {
        // ideally this would be a service like apiService.getParents()
        const response = await fetch('http://54.177.198.128:8001/api/cat-amenities-parents/')
        // The response for this endpoint is currently 400 with the actual response in the body, should be 200
        const data = await response.json()
        return data
    }
})

const parentsState = atom({
    key: 'parents',
    default: parentSelector
})

export { parentSelector, parentsState }