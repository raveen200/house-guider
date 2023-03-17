
import {fetchUser} from '../..//utils/fetchDataLocal'

const userInfo = fetchUser()


export const inistialState = {
    user : userInfo,
    items: null,
}

