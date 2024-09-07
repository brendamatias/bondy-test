import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'
import bcrypt from 'bcrypt'

interface LoginDTO {
  email: string
  password: string
}

export const login = async (_parent, args: LoginDTO, _context, _info) => {
  const { email, password } = args
  await connection()

  try {
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error('User not found')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    return {
      token: 'tokenMocked',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        company: user.company,
      },
    }
  } catch (error) {
    throw new Error('Login failed')
  }
}
