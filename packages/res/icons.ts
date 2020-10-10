import { ComingSoon, EmailIcon, GitHubIcon, LinkedInIcon, Profile } from './components'

export const svgIcons = {
  comingSoon: ComingSoon,
  emailIcon: EmailIcon,
  gitHubIcon: GitHubIcon,
  linkedInIcon: LinkedInIcon,
  profile: Profile
}

export type svgIconsName = keyof typeof svgIcons
