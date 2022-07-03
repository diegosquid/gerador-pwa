export default function track () {
  const url = new URL(window.location.href)
  const utmSource = url.searchParams.get('utm_source')
  const utmCampaign = url.searchParams.get('utm_campaign')
  const utmMedium = url.searchParams.get('utm_medium')
  const click = url.searchParams.get('click')

  try {
    fetch (`https://ct.popcash.net/click?aid=250197&clickid=${click}&payout=0`)
  } catch (e) {
    console.log(e)
  }
}