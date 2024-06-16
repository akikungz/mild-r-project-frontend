import { useTranslation } from 'react-i18next'

export interface MenuItem {
  title: string
  path: string
}

const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation()

  return [
    {
      title: t('header.1'),
      path: '/',
    },
    {
      title: t('header.2'),
      path: '/',
    },
    {
      title: t('header.3'),
      path: '/',
    },
  ]
}

export default useMenuItems
