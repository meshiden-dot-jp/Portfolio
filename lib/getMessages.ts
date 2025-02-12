import { Locale } from "../i18n";

export async function getMessages(locale: Locale) {
  return (await import(`../locales/${locale}/common.json`)).default;
}
