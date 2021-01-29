type Environment = {
  AUTH: string
}

export const environment: Environment = {
  AUTH: process.env.AUTH as string
}
