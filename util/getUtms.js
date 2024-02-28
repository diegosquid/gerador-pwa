export default function getUtms () {
  const utm_source = window.localStorage.getItem('utm_source')
  const utm_campaign = window.localStorage.getItem('utm_campaign')
  const utm_medium = window.localStorage.getItem('utm_medium')
  const click_id = window.localStorage.getItem('click_id')

  if (!utm_source) {
    return 'utm_source=pwa'
  }

  return new URLSearchParams({ utm_source, utm_campaign, utm_medium, click_id }).toString()
}
