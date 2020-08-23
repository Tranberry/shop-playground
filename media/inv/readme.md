# Add shop inventory images here
As is, it looks for _PNG_ image that is named after the ones you defined, except it replaces SPACE with a dash:  

    <<set $generalMart to [ 
         {shopitem: "groceries", cost: 300}, 
         {shopitem: "razors", cost : 2},
         {shopitem: "skin care", cost : 5},
         {shopitem: "lip balm", cost : 1},
         {shopitem: "snacks", cost : 10}
    ]>>

If this is your shops inventory it will look for:

    groceries.png
    razors.png
    skin-care.png
    lip-balm.png
    snacks.png

If you have it setup like this:

      <<set $yourShopInventory to [ 
         {shopitem: "we only sell toast", cost: 300}, 
      ]>>

It will look for:

      we-only-sell-toast.png