export default function track () {
  const click = window.localStorage.getItem('click')

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