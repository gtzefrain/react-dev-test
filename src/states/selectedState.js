import { atom } from 'recoil'

const selectedState = atom({
    key: 'selected',
    default: -1
})

export { selectedState }