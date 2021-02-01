import configDev from '@project/web/config.dev.json'
import configRelease from '@project/web/config.json'

export type ApplicationConfig = typeof configDev

export const getApplicationConfig = (): ApplicationConfig => (__DEV__ ? configDev : configRelease)
