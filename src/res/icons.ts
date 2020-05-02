import { ComingSoon, GitHubIcon, LinkedInIcon, EmailIcon, Profile } from './components'

export const svgIcons = {
  comingSoon: ComingSoon,
  emailIcon: EmailIcon,
  gitHubIcon: GitHubIcon,
  linkedInIcon: LinkedInIcon,
  profile: Profile,
}

export type svgIconsName = keyof typeof svgIcons
