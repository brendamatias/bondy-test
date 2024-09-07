import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'

export const users = async () => {
  await connection()

  try {
    const users = await User.find()

    if (!users) {
      return []
    }

    return users
  } catch (error) {
    throw new Error('Get users failed')
  }
}
