export default function saveUtms () {
  const url = new URL(window.location.href)
  const utmSource = url.searchParams.get('utm_source')
  const utmCampaign = url.searchParams.get('utm_campaign')
  const utmMedium = url.searchParams.get('utm_medium')
  const click_id = url.searchParams.get('click_id')

  if (!utmSource) {
    return
  }
  window.localStorage.setItem('utm_source', utmSource)
  window.localStorage.setItem('utm_campaign', utmCampaign)
  window.localStorage.setItem('utm_medium', utmMedium)
  window.localStorage.setItem('click_id', click_id)
}
