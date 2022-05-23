
interface Activity
{
  uuid: string,
  title: string,
  cover_image_url: string,
  retail_price: any,
  quantity: number
}

interface CartState 
{
  activities: Activity[]
}

interface Wish
{
  uuid: string,
  title: string
}

interface WishListState 
{
  wishes: Wish[]
}

export {
    type Activity,
    type CartState,
    type Wish,
    type WishListState
}