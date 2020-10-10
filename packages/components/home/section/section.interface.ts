interface SectionProps extends CommonProps {
  height?: number
  color?: 'light' | 'dark'
  twoColumn?: boolean
  children: import('react').ReactNode
}
