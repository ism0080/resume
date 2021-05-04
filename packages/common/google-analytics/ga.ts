import ReactGA from 'react-ga'

import { getApplicationConfig } from '@project/business/common/get-application-config'

const config = getApplicationConfig()

export const initGA = () => {
  ReactGA.initialize(config.GA_TAG)
}

export const GApageView = (page: string) => {
  ReactGA.pageview(page)
}

export const GAmodalView = (modal: string) => {
  ReactGA.modalview(modal)
}

export const GAevent = (category: string, action: string, label?: string, nonInteraction = false) => {
  ReactGA.event({
    category,
    action,
    label,
    nonInteraction
  })
}

export const GAtiming = (category: string, variable: string, value: number) => {
  ReactGA.timing({
    category,
    variable,
    value
  })
}

export const GAexception = (detail: string) => {
  ReactGA.exception({ description: detail })
}
