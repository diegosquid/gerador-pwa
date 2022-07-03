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

  try {
    fetch (`http://postback.advertizer.com/pb.php?clickid=${click}&amount=0&advertiser_id=diegodiasmacedo&key=2d059be08a1df41e6dbe3efdf0219fe5`)
  } catch (e) {
    console.log(e)
  }
}
