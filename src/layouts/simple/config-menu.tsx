// import { useTranslation } from 'react-i18next'

export interface MenuItem {
  title: string
  path: string
}

const useMenuItems = (): MenuItem[] => {
  // const { t } = useTranslation()

  return [
    {
      // title: t('header.1'),
      title: 'หน้าหลัก',
      path: '/home',
    },
    {
      title: 'ตารางไลฟ์',
      path: '/calendar',
    },
    {
      title: 'FanArt Gallery',
      path: '/gallery',
    },
    {
      title: 'Mild-R Song',
      path: '/song',
    },
    {
      title: 'ข่าวสาร',
      path: '/blog',
    },
    {
      title: 'เกี่ยวกับมายด์',
      path: '/about',
    },
  ]
}

export default useMenuItems
