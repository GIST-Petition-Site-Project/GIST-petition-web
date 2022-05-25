import { useAppSelect } from '@redux/store.hooks'

export const useTranslate = (locale: Locale) => {
  const mode = useAppSelect(select => select.lang.mode)
  const keys = Object.keys(locale[mode])
  const translate = (key: typeof keys[number]) => {
    return locale[mode][key]
  }
  return translate
}
