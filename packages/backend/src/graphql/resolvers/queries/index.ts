import { users } from './users'

export default {
  queryTest: () => {
    return true
  },
  users: () => {
    return users()
  },
}
