// Hierarchical menu data structure for Presken
export const menuData = {
  categories: [
    {
      id: 'meals',
      name: 'Meals',
      subcategories: [
        {
          id: 'standard-breakfast',
          name: 'Standard Breakfast',
          items: [
            { id: 'sb1', name: 'Omelet Combo', description: 'Omelet, Sausage, Baked Beans, Bread', price: '₦4,000', image: '/images/omelet-combo.png' },
            { id: 'sb2', name: 'Boiled Yam & Egg Sauce', description: 'Fresh boiled yam with savory egg sauce', price: '₦4,000', image: '/images/yam-egg-sauce.png' },
            { id: 'sb3', name: 'Akara/Moi-Moi & Pap', description: 'Bean cakes or pudding with corn pap', price: '₦4,000', image: '/images/akara-pap.png' },
            { id: 'sb4', name: 'Custard or Cornflakes', description: 'Creamy custard or crunchy cornflakes', price: '₦4,000', image: '/images/custard-cornflakes.png' },
            { id: 'sb5', name: 'Plantain & Egg Sauce', description: 'Fried plantain with egg sauce', price: '₦4,000', image: '/images/plantain-egg-sauce.png' }
          ]
        },
        {
          id: 'english-breakfast',
          name: 'English Breakfast',
          items: [
            { id: 'eb1', name: 'Cereal & Toast Combo', description: 'Toast/Fresh Bread with choice of Cereal  (Custard, Oat, or Cornflakes) served with choice of Egg (Scrambled/Sunny Side Up/Boiled Egg)', price: '₦7,000', image: '/images/cereal-toast-combo.png ' },
            { id: 'eb2', name: 'Savory English Breakfast Combo', description: '(Tomato/Plain/Spanish/ Sardine) with Sausage & Baked Beans', price: '₦7,000', image: '/images/savory-english-breakfast.png' }
          ]
        },
        {
          id: 'appetizers',
          name: 'Appetizers',
          items: [
            { id: 'ap1', name: 'Pepper Soup', description: 'Chicken / Cow Tail / Cow Leg / Assorted Goat Meat / Turkey', price: '₦6,500', image: '/images/pepper-soup.png' },
            { id: 'ap2', name: 'Croaker Fish BBQ', description: 'Served with Chips', price: '₦15,000', image: '/images/croaker-bbq-chips.png' },
            { id: 'ap3', name: 'Croaker Fish Pepper Soup', description: 'Served with Yam or Rice', price: '₦14,000', image: '/images/croaker-pepper-soup.png' },
            { id: 'ap4', name: 'Giant BBQ Croaker Fish', description: 'Whole grilled croaker', price: '₦25,000', image: '/images/giant-bbq-croaker.png' },
            { id: 'ap5', name: 'Cat-Fish Pepper Soup', description: 'Served with Yam or Rice', price: '₦9,000', image: '/images/catfish-pepper-soup.png' },
            { id: 'ap6', name: 'Nkwobi', description: 'Spicy cow foot delicacy', price: '₦6,500', image: '/images/nkwobi.png' },
            { id: 'ap7', name: 'BBQ Cat-Fish', description: 'Grilled catfish', price: '₦10,000', image: '/images/bbq-catfish.png' },
            { id: 'ap8', name: 'Isi-Ewu', description: 'Spicy goat head', price: '₦10,000', image: '/images/isi-ewu.png' },
            { id: 'ap9', name: 'Pepper Snail', description: 'Spicy snail', price: '₦11,000', image: '/images/pepper-snail.png' },
            { id: 'ap10', name: 'Pepper Gizard', description: 'Spicy gizzard', price: '₦7,500', image: '/images/pepper-gizzard.png' }
          ]
        },
        {
          id: 'lunch-dinner',
          name: 'Lunch & Dinner',
          items: [
            { id: 'ld1', name: 'Yamarita', description: 'With any choice of protein • Free Water', price: '₦9,000', image: '/images/yamarita.png' },
            { id: 'ld3', name: 'Chicken & Chips', description: 'In Creamy Sauce • Free Water', price: '₦8,500', image: '/images/chicken-chips.png' },
            { id: 'ld5', name: 'Noodles with Protein', description: 'Served with Turkey/Chicken/Other Protein • Free Water', price: '₦8,500', image: '/images/noodles-protein.png' },
            { id: 'ld6', name: 'Plantain with Protein', description: 'With Goat Meat/Chicken/Beef • Free Water', price: '₦8,500', image: '/images/plantain-protein.png' }
          ]
        },
        {
          id: 'pasta',
          name: 'Pasta',
          items: [
            { id: 'p1', name: 'Spaghetti with Protein', description: 'Choice of Spaghetti with choice of protein • Free Water', price: '₦8,500', image: '/images/spaghetti-protein.png' },
            { id: 'p2', name: 'Spaghetti Bolognese', description: 'Classic meat sauce • Free Water', price: '₦10,000', image: '/images/spaghetti-bolognese.png' },
            { id: 'p3', name: 'Vegetable Pasta', description: 'Mixed vegetables • Free Water', price: '₦8,500', image: '/images/vegetable-pasta.png' },
            { id: 'p4', name: 'Stir Fried Spaghetti', description: 'With any choice of Protein • Free Water', price: '₦8,500', image: '/images/stir-fried-spaghetti.png' },
            { id: 'p5', name: 'Noodles & Egg', description: 'Simple noodles with egg • Free Water', price: '₦4,500', image: '/images/noodles-egg.png' }
          ]
        },
        {
          id: 'rice',
          name: 'Rice',
          items: [
            { id: 'r1', name: 'Jollof Rice', description: 'With any choice of Protein • Free Water', price: '₦8,500', image: '/images/jollof-rice.png' },
            { id: 'r2', name: 'Fried Rice', description: 'With any choice of Protein • Free Water', price: '₦8,500', image: '/images/fried-rice.png' },
            { id: 'r3', name: 'White Rice', description: 'With any choice of Protein • Free Water', price: '₦8,500', image: '/images/white-rice.png' }
          ]
        },
        {
          id: 'swallow',
          name: 'Swallow',
          items: [
            { id: 'sw1', name: 'Poundo Yam', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦8,500', image: '/images/poundo-yam.png' },
            { id: 'sw2', name: 'Semovita', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦8,500', image: '/images/semovita.png' },
            { id: 'sw4', name: 'Wheat', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦8,500', image: '/images/wheat.png' },
            { id: 'sw5', name: 'Eba', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦8,500', image: '/images/eba.png' },
            { id: 'sw6', name: 'Amala', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦8,500', image: '/images/amala.png' }
          ]
        },
        {
          id: 'extra',
          name: 'Extra',
          items: [
            { id: 'ex1', name: 'Swallow', description: 'Extra portion', price: '₦2,500', image: '/images/extra-swallow.png' },
            { id: 'ex2', name: 'Rice', description: 'Extra portion', price: '₦2,500', image: '/images/extra-rice.png' },
            { id: 'ex3', name: 'Plantain', description: 'Extra portion', price: '₦2,500', image: '/images/extra-plantain.png' },
            { id: 'ex4', name: 'Protein', description: 'Extra portion', price: '₦6,000', image: '/images/extra-protein.png' }
          ]
        }
      ]
    },
    {
      id: 'specials',
      name: 'Specials',
      subcategories: [
        {
          id: 'special-meals',
          name: 'Presken Food Menu Special Meals',
          items: [
            { id: 'sm27', name: 'Pounded Yam', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/pounded-yam-special.png' },
            { id: 'sm28', name: 'Special Fried Rice', description: 'With Sea Foods • Free Water', price: '₦20,000', image: '/images/fried-rice-special.png' },
            { id: 'sm29', name: 'Presken Special Noodles', description: 'House special noodles • Free Water', price: '₦6,500', image: '/images/noodles-special.png' },
            { id: 'sm1', name: 'Sea Food Okro', description: 'Rich seafood okra soup', price: '₦20,000', image: '/images/seafood-okro.png' },
            { id: 'sm2', name: 'Fisherman Soup', description: 'Traditional fisherman soup', price: '₦20,000', image: '/images/fisherman-soup.png' },
            { id: 'sm3', name: 'Brown Rice', description: 'Healthy brown rice', price: '₦10,000', image: '/images/brown-rice.png' },
            { id: 'sm4', name: 'Basmati Rice Jambalaya', description: 'Spicy basmati rice jambalaya', price: '₦15,000', image: '/images/basmati-jambalaya.png' },
            { id: 'sm5', name: 'Basmati Rice (White, Jollof, Fried)', description: 'Choice of white, jollof or fried basmati', price: '₦15,000', image: '/images/basmati-rice.png' },
            { id: 'sm6', name: 'Coconut Rice', description: 'Traditional coconut rice', price: '₦13,500', image: '/images/coconut-rice.png' },
            { id: 'sm7', name: 'Basmati Coconut Rice', description: 'Coconut basmati rice', price: '₦15,000', image: '/images/coconut-rice.jpg' },
            { id: 'sm8', name: 'Barbecue Croaker Fish', description: 'Grilled croaker fish', price: '₦20,000', image: '/images/croaker-bbq.jpg' },
            { id: 'sm9', name: 'Barbecue Catfish', description: 'Grilled catfish', price: '₦10,000', image: '/images/catfish-bbq.jpg' },
            { id: 'sm10', name: 'Crocker Fish Barbecue With Noodles', description: 'Grilled croaker with noodles', price: '₦23,000', image: '/images/croaker-noodles.jpg' },
            { id: 'sm11', name: 'Catfish Barbecue With Noodles', description: 'Grilled catfish with noodles', price: '₦13,000', image: '/images/catfish-noodles.jpg' },
            { id: 'sm12', name: 'Pepper Bush Meat', description: 'Spicy bush meat', price: '₦10,000', image: '/images/pepper-bush.jpg' },
            { id: 'sm13', name: 'Ofada Rice', description: 'Local ofada rice', price: '₦15,000', image: '/images/ofada.jpg' },
            { id: 'sm14', name: 'Bush Meat (With Swallow - 15,000)', description: 'Premium bush meat (with swallow)', price: '₦11,000', image: '/images/bushmeat.jpg' },
            { id: 'sm15', name: 'Amala & Abula With Any Choice Of Protein', description: 'Amala with abula soup and protein', price: '₦10,000', image: '/images/amala-abula.jpg' },
            { id: 'sm16', name: 'Catfish Omiobe With Rice', description: 'Catfish in omiobe sauce with rice', price: '₦15,000', image: '/images/catfish-omiobe.jpg' },
            { id: 'sm17', name: 'Fry Catfish With Yam & Plantain', description: 'Fried catfish with yam and plantain', price: '₦15,000', image: '/images/catfish-yam.jpg' },
            { id: 'sm18', name: 'Sea Food Rice', description: 'Rice with assorted seafood', price: '₦20,000', image: '/images/seafood-rice.jpg' },
            { id: 'sm19', name: 'Spaghetti Jambalaya', description: 'Spicy spaghetti jambalaya', price: '₦13,500', image: '/images/spaghetti-jambalaya.jpg' },
            { id: 'sm20', name: 'Black Soup', description: 'Traditional black soup', price: '₦15,000', image: '/images/black-soup.jpg' },
            { id: 'sm21', name: 'Pepper Snail', description: 'Spicy snail', price: '₦10,000', image: '/images/snail.jpg' },
            { id: 'sm22', name: 'White Soup With Any Choice Of Swallow', description: 'White soup with swallow choice', price: '₦15,000', image: '/images/white-soup.jpg' },
            { id: 'sm23', name: 'Live Chicken Pepper Soup', description: 'Fresh chicken pepper soup', price: '₦30,000', image: '/images/chicken-peppersoup.jpg' },
            { id: 'sm24', name: 'Live Chicken BBQ', description: 'Fresh grilled chicken', price: '₦35,000', image: '/images/live-chicken.jpg' },
            { id: 'sm25', name: 'Food Platter', description: 'Assorted food platter', price: '₦25,000', image: '/images/food-platter.jpg' },
            { id: 'sm26', name: 'Grilled Dragon (Full Goat)', description: 'Whole grilled goat', price: '₦250,000', image: '/images/grilled-goat.jpg' }
          ]
        },
        {
          id: 'special-soup',
          name: 'Special Soup',
          items: [
            { id: 'ss1', name: 'Bitter Leaf', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss2', name: 'Oha', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss3', name: 'Groundnut Soup', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss4', name: 'White Soup', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss5', name: 'Banga Soup', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss6', name: 'Afang', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' },
            { id: 'ss7', name: 'Black Soup', description: 'With any choice of Swallow • Free Water', price: '₦10,000', image: '/images/soup.jpg' }
          ]
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      subcategories: [
        {
          id: 'soft-drinks',
          name: 'Soft Drinks',
          items: [
            { id: 'sd1', name: 'Pet Mineral', description: 'Coke, Fanta, Sprite', price: '₦800', image: '/images/soft-drinks.jpg' },
            { id: 'sd2', name: 'Teem', description: 'Refreshing soda', price: '₦800', image: '/images/team.jpg' },
            { id: 'sd3', name: 'Pulpy', description: 'Fruit juice drink', price: '₦800', image: '/images/pulpy.jpg' },
            { id: 'sd4', name: 'Fayrouz', description: 'Sparkling soft drink', price: '₦800', image: '/images/Fayrouz.jpg' },
            { id: 'sd5', name: 'Small Water', description: 'Bottled water', price: '₦400', image: '/images/water.jpg' },
            { id: 'sd6', name: 'Swan Water', description: 'Premium bottled water', price: '₦400', image: '/images/swanWater.jpg' },
            { id: 'sd7', name: 'Big Water', description: 'Large bottled water', price: '₦700', image: '/images/bigwater.jpg' },
            { id: 'sd8', name: 'Amstel Malt', description: 'Premium malt drink', price: '₦1,000', image: '/images/AmstelMalt.jpg' },
            { id: 'sd9', name: 'Maltina', description: 'Classic malt drink', price: '₦1,000', image: '/images/malt.jpg' },
            { id: 'sd10', name: 'Vita Milk', description: 'Soy milk drink', price: '₦2,500', image: '/images/vitamilk.jpg' },
            { id: 'sd11', name: 'Schweppes', description: 'Sparkling mixer', price: '₦1,000', image: '/images/schweppes.jpg' }
          ]
        },
        {
          id: 'juice',
          name: 'Juice',
          items: [
            { id: 'j1', name: 'Active', description: 'Fruit juice', price: '₦3,000', image: '/images/active.jpg' },
            { id: 'j2', name: 'Exotic', description: 'Exotic fruit blend', price: '₦3,000', image: '/images/exotic.jpg' },
            { id: 'j3', name: 'Hollandia', description: 'Yogurt drink', price: '₦3,000', image: '/images/hollandia.jpg' },
            { id: 'j4', name: 'Cranberry', description: 'Cranberry juice', price: '₦12,000', image: '/images/cranberry.jpg' }
          ]
        },
        {
          id: 'beer',
          name: 'Beer',
          items: [
            { id: 'b1', name: 'Big Stout', description: 'Guinness Extra Stout', price: '₦2,500', image: '/images/big-stout.png' },
            { id: 'b2', name: 'Smirnoff (B)', description: 'Smirnoff Ice Black', price: '₦2,000', image: '/images/SmirnoffB.jpg' },
            { id: 'b3', name: 'Budweiser', description: 'King of beers', price: '₦2,000', image: '/images/Budweiser.jpg' },
            { id: 'b4', name: 'Heineken', description: 'Premium lager', price: '₦2,000', image: '/images/heineken.jpg' },
            { id: 'b5', name: 'Legend', description: 'Extra stout', price: '₦2,000', image: '/images/stout.jpg' },
            { id: 'b6', name: 'Gulder', description: 'The ultimate beer', price: '₦2,000', image: '/images/Gulder.jpg' },
            { id: 'b7', name: 'Star', description: 'Fine lager beer', price: '₦2,000', image: '/images/star.jpg' },
            { id: 'b8', name: 'Trophy Stout', description: 'Stout beer', price: '₦2,000', image: '/images/TrophyStout.jpg' },
            { id: 'b9', name: 'Goldberg', description: 'Lager beer', price: '₦2,000', image: '/images/goldberg.jpg' },
            { id: 'b10', name: '33 Export', description: 'Lager beer', price: '₦2,000', image: '/images/33-export.jpg' },
            { id: 'b11', name: 'Goldberg Black', description: 'Dark lager', price: '₦2,000', image: '/images/goldberg.jpg' },
            { id: 'b12', name: 'Medium Heineken', description: 'Lager beer', price: '₦2,000', image: '/images/heineken.jpg' },
            { id: 'b13', name: 'G/Smooth', description: 'Guinness Smooth', price: '₦2,000', image: '/images/stout.jpg' },
            { id: 'b14', name: 'Trophy', description: 'Lager beer', price: '₦2,000', image: '/images/Trophy.jpg' },
            { id: 'b15', name: 'Desperado', description: 'Tequila flavoured beer', price: '₦2,000', image: '/images/desperados-pack.jpg' },
            { id: 'b16', name: 'Hero', description: 'Lager beer', price: '₦2,000', image: '/images/hero.jpg' },
            { id: 'b17', name: 'Tiger', description: 'Asian lager', price: '₦2,000', image: '/images/tiger.jpg' },
            { id: 'b18', name: 'Castle Lite', description: 'Light beer', price: '₦2,000', image: '/images/Castle.jpg' },
            { id: 'b19', name: 'Origin (B)', description: 'Herbal drink', price: '₦1,500', image: '/images/origin.jpg' },
            { id: 'b20', name: 'Small Stout', description: 'Guinness Extra Stout', price: '₦1,500', image: '/images/stout.jpg' },
            { id: 'b21', name: 'Flying Fish', description: 'Lager beer', price: '₦1,200', image: '/images/flyingFish.jpg' },
            { id: 'b22', name: 'Star Radler', description: 'Citrus flavoured beer', price: '₦1,200', image: '/images/StarRadler.jpg' },
            { id: 'b23', name: 'Smirnoff (S)', description: 'Smirnoff Ice', price: '₦1,000', image: '/images/Smirnoffsmall.jpg' }
          ]
        },
        {
          id: 'energy-drinks',
          name: 'Energy Drinks',
          items: [
            { id: 'ed1', name: 'Power Horse', description: 'Energy drink', price: '₦2,500', image: '/images/energy.jpg' },
            { id: 'ed2', name: 'Red Bull', description: 'Energy drink', price: '₦2,500', image: '/images/redbull.jpg' },
            { id: 'ed3', name: 'Monster', description: 'Energy drink', price: '₦2,500', image: '/images/monster.jpg' },
            { id: 'ed4', name: 'Black Bullet', description: 'Energy drink', price: '₦2,500', image: '/images/bullet.jpg' }
          ]
        },
        {
          id: 'sparkling-drinks',
          name: 'Sparkling Drinks',
          items: [
            { id: 'spd1', name: 'Andre Brut', description: 'Sparkling wine', price: '₦20,000', image: '/images/Andre-Brut.jpg' },
            { id: 'spd2', name: 'Andre Rose', description: 'Sparkling rosé', price: '₦20,000', image: '/images/Andre-Rose.jpg' },
            { id: 'spd3', name: 'Chamdor', description: 'Non-alcoholic sparkling', price: '₦9,000', image: '/images/chamdor.jpg' }
          ]
        },
        {
          id: 'rum',
          name: 'Rum',
          items: [
            { id: 'r1', name: 'Bacardi', description: 'White rum', price: '₦25,000', image: '/images/rum.jpg' }
          ]
        },
        {
          id: 'tequila',
          name: 'Tequila',
          items: [
            { id: 't1', name: 'Olmeca Tequila', description: 'Silver tequila', price: '₦45,000', image: '/images/Olmeca.jpg' },
            { id: 't2', name: 'Sierra Tequila', description: 'Silver tequila', price: '₦25,000', image: '/images/Sierra.jpg' }
          ]
        },
        {
          id: 'vodka',
          name: 'Vodka',
          items: [
            { id: 'v1', name: 'Absolute Vodka (S)', description: 'Small bottle', price: '₦10,000', image: '/images/vodka.jpg' },
            { id: 'v2', name: 'Absolute Vodka (B)', description: 'Big bottle', price: '₦30,000', image: '/images/vodka.jpg' },
            { id: 'v3', name: 'Smirnoff Choco (B)', description: 'Chocolate flavoured', price: '₦12,000', image: '/images/SmirnoffChoco.jpg' },
            { id: 'v4', name: 'Smirnoff Choco (S)', description: 'Chocolate flavoured', price: '₦3,000', image: '/images/SmirnoffChocoSmall.jpg' },
            { id: 'v5', name: 'Magic Moment (B)', description: 'Premium vodka', price: '₦12,000', image: '/images/MagicMoment.jpg' },
            { id: 'v6', name: 'Magic Moment (S)', description: 'Premium vodka', price: '₦3,500', image: '/images/MagicMoment.jpg' },
            { id: 'v7', name: 'Grant (B)', description: 'Blended scotch', price: '₦10,000', image: '/images/Grant.jpg' },
            { id: 'v8', name: 'Grant (S)', description: 'Blended scotch', price: '₦6,000', image: '/images/Grant.jpg' }
          ]
        },
        {
          id: 'bitters',
          name: 'Bitters (Bottles)',
          items: [
            { id: 'bt1', name: 'Action Bitters (B)', description: 'Herbal bitters', price: '₦8,000', image: '/images/bitters.jpg' },
            { id: 'bt2', name: 'Action Bitters (M)', description: 'Herbal bitters', price: '₦3,000', image: '/images/bitters.jpg' },
            { id: 'bt3', name: 'Action Bitters (S)', description: 'Herbal bitters', price: '₦1,500', image: '/images/bitters.jpg' },
            { id: 'bt4', name: 'Origin Bottle Big', description: 'Herbal drink', price: '₦8,000', image: '/images/origin.jpg' },
            { id: 'bt5', name: 'Origin Bitters (B)', description: 'Herbal bitters', price: '₦6,000', image: '/images/origin.jpg' },
            { id: 'bt6', name: 'Origin Bitters (M)', description: 'Herbal bitters', price: '₦3,000', image: '/images/origin.jpg' },
            { id: 'bt7', name: 'Origin Beer', description: 'Herbal beer', price: '₦1,500', image: '/images/origin.jpg' },
            { id: 'bt8', name: 'Kolaq Alagbo', description: 'Herbal mixture', price: '₦1,500', image: '/images/Alagbo.jpg' },
            { id: 'bt9', name: 'Odogwu Bitters', description: 'Herbal bitters', price: '₦1,500', image: '/images/Odogwu.jpg' },
            { id: 'bt10', name: 'Judge Bitters', description: 'Herbal bitters', price: '₦1,500', image: '/images/Judge.jpg' },
            { id: 'bt11', name: 'Plastic Origin', description: 'Herbal drink', price: '₦2,000', image: '/images/originPlastic.jpg' }
          ]
        },
        {
          id: 'gin',
          name: 'Gin',
          items: [
            { id: 'g1', name: 'Gordon\'s Gin (B)', description: 'London dry gin', price: '₦15,000', image: '/images/gin.jpg' },
            { id: 'g2', name: 'Gordon\'s Gin (M)', description: 'London dry gin', price: '₦5,000', image: '/images/gin.jpg' },
            { id: 'g3', name: 'Gordon\'s Gin (S)', description: 'London dry gin', price: '₦3,000', image: '/images/gin.jpg' },
            { id: 'g4', name: 'Pink Gordon', description: 'Pink gin', price: '₦15,000', image: '/images/pinkgin.jpg' }
          ]
        },
        {
          id: 'aperitif',
          name: 'Aperitif',
          items: [
            { id: 'ap1', name: 'Campari (B)', description: 'Italian aperitif', price: '₦40,000', image: '/images/campari.jpg' },
            { id: 'ap2', name: 'Campari (M)', description: 'Italian aperitif', price: '₦30,000', image: '/images/campari.jpg' },
            { id: 'ap3', name: 'Campari (S)', description: 'Italian aperitif', price: '₦12,000', image: '/images/campari.jpg' }
          ]
        },
        {
          id: 'whisky',
          name: 'Whisky',
          items: [
            { id: 'w1', name: 'Black Label', description: 'Johnnie Walker', price: '₦60,000', image: '/images/BlackLabel.jpg' },
            { id: 'w2', name: 'Red Label (B)', description: 'Johnnie Walker', price: '₦30,000', image: '/images/redLabel.jpg' },
            { id: 'w3', name: 'Jack Daniels', description: 'Tennessee whiskey', price: '₦40,000', image: '/images/Jack.jpg' },
            { id: 'w4', name: 'Altemura', description: 'Premium spirit', price: '₦100,000', image: '/images/Altemura.jpg' },
            { id: 'w5', name: 'Glenfiddich 18 Years', description: 'Single malt scotch', price: '₦200,000', image: '/images/Glenfiddich18.jpg' },
            { id: 'w6', name: 'Glenfiddich 15 Years', description: 'Single malt scotch', price: '₦150,000', image: '/images/Glenfiddich15.jpg' },
            { id: 'w7', name: 'Glenfiddich 12 Years', description: 'Single malt scotch', price: '₦120,000', image: '/images/Glenfiddich12.jpg' },
            { id: 'w8', name: 'Jameson (B)', description: 'Irish whiskey', price: '₦40,000', image: '/images/Jameson2.jpg' },
            { id: 'w9', name: 'Jameson (S)', description: 'Irish whiskey', price: '₦15,000', image: '/images/Jameson2.jpg' },
            { id: 'w10', name: 'Black Barrel', description: 'Jameson Select Reserve', price: '₦60,000', image: '/images/Jameson-Black-barrel.jpg' },
            { id: 'w11', name: 'Best Whisky (B)', description: 'Blended whisky', price: '₦10,000', image: '/images/Blended-Scotch-Whisky.jpg' },
            { id: 'w12', name: 'Best Whisky (S)', description: 'Blended whisky', price: '₦3,000', image: '/images/Blended-Scotch-Whisky.jpg' },
            { id: 'w13', name: 'William Lawson', description: 'Blended scotch', price: '₦25,000', image: '/images/William-Lawson.jpg' },
            { id: 'w14', name: 'Monkey Shoulder', description: 'Blended malt scotch', price: '₦75,000', image: '/images/Ginger_Monkey_serve_bottle_shot.jpg' }
          ]
        },
        {
          id: 'cognac',
          name: 'Cognac',
          items: [
            { id: 'c1', name: 'Hennessy V.S.O.P.', description: 'Very Superior Old Pale', price: '₦180,000', image: '/images/hennessy.jpg' },
            { id: 'c2', name: 'Hennessy VS', description: 'Very Special', price: '₦90,000', image: '/images/hennessy.jpg' },
            { id: 'c3', name: 'Remy Martins V.S.O.P.', description: 'Fine Champagne Cognac', price: '₦80,000', image: '/images/martin.jpg' },
            { id: 'c4', name: 'Remy Martins VS', description: 'Fine Champagne Cognac', price: '₦60,000', image: '/images/cognac.jpg' },
            { id: 'c5', name: 'Martel VS', description: 'Fine Cognac', price: '₦60,000', image: '/images/martel.jpg' },
            { id: 'c6', name: 'Martel Swift', description: 'Fine Cognac', price: '₦130,000', image: '/images/cognac.jpg' }
          ]
        },
        {
          id: 'champagne',
          name: 'Champagne',
          items: [
            { id: 'ch1', name: 'Moet Brut', description: 'Impérial Brut', price: '₦150,000', image: '/images/Moet.jpg' },
            { id: 'ch2', name: 'Moet Rose', description: 'Impérial Rosé', price: '₦200,000', image: '/images/Moet2.jpg' }
          ]
        },
        {
          id: 'liquor',
          name: 'Liquor',
          items: [
            { id: 'l1', name: 'Baileys (Imported)', description: 'Irish Cream', price: '₦35,000', image: '/images/Baileys.jpg' },
            { id: 'l2', name: 'Baileys (Delight)', description: 'Irish Cream', price: '₦15,000', image: '/images/Baileys(Delight).jpg' },
            { id: 'l3', name: 'Baileys (S)', description: 'Irish Cream', price: '₦2,500', image: '/images/Baileys(S).jpg' },
            { id: 'l4', name: 'Amarula (B)', description: 'Cream Liqueur', price: '₦20,000', image: '/images/amarula.jpg' },
            { id: 'l5', name: 'Amarula (S)', description: 'Cream Liqueur', price: '₦6,000', image: '/images/amarula.jpg' },
            { id: 'l6', name: 'Best Cream (B)', description: 'Cream Liqueur', price: '₦12,000', image: '/images/best-cream-liqueur.jpg' },
            { id: 'l7', name: 'Best Cream (S)', description: 'Cream Liqueur', price: '₦3,500', image: '/images/BEST_CREAM_.jpg' }
          ]
        },
        {
          id: 'red-wines',
          name: 'Red Wines',
          items: [
            { id: 'rw1', name: 'Agor', description: 'Red wine', price: '₦13,000', image: '/images/agor.jpg' },
            { id: 'rw2', name: 'Cape Discovery', description: 'Red wine', price: '₦8,000', image: '/images/cape.jpg' },
            { id: 'rw3', name: 'Carlo Rossi', description: 'Red wine', price: '₦15,000', image: '/images/rossi.jpg' },
            { id: 'rw4', name: 'Casillero Dee Diabio (B)', description: 'Red wine', price: '₦20,000', image: '/images/diabio.jpg' },
            { id: 'rw5', name: 'Drostdy Hof (B)', description: 'Red wine', price: '₦15,000', image: '/images/DrostdyHof(B).jpg' },
            { id: 'rw6', name: 'Drostdy Hof (S)', description: 'Red wine', price: '₦7,000', image: '/images/DrostdyHof(B).jpg' },
            { id: 'rw7', name: 'Escodo Rojo', description: 'Red wine', price: '₦35,000', image: '/images/EscodoRojo.jpg' },
            { id: 'rw8', name: 'Four Cousin', description: 'Red wine', price: '₦12,000', image: '/images/FC-I.jpg' },
            { id: 'rw9', name: '4th Street', description: 'Sweet red wine', price: '₦10,000', image: '/images/street.jpg' },
            { id: 'rw10', name: 'B&G Cuvee Special', description: 'Red wine', price: '₦15,000', image: '/images/special.jpg' },
            { id: 'rw11', name: 'Baron De Romero', description: 'Red wine', price: '₦8,000', image: '/images/baron.jpg' },
            { id: 'rw12', name: 'Baron De valls', description: 'Red wine', price: '₦8,000', image: '/images/baron-de-Valls.jpg' },
            { id: 'rw13', name: 'De vin', description: 'Red wine', price: '₦10,000', image: '/images/devin.jpg' },
            { id: 'rw14', name: 'Declan', description: 'Red wine', price: '₦15,000', image: '/images/declan.jpg' },
            { id: 'rw15', name: 'Oviation', description: 'Red wine', price: '₦12,000', image: '/images/oviation.jpg' },
            { id: 'rw16', name: 'Pure Heaven', description: 'Non-alcoholic wine', price: '₦12,000', image: '/images/pureheaven.jpg' }
          ]
        }
      ]
    },
    {
      id: 'continental',
      name: 'Continental Dishes',
      subcategories: [
        {
          id: 'continental-main',
          name: 'Special Continental Dishes',
          items: [
            { id: 'cd1', name: 'Shredded Chicken in Gravy Sauce', description: 'Served with your choice of Rice / Mashed / Boiled Potatoes with a Steam Rice', price: '₦15,000', image: '/images/chicken-gravy.jpg' },
            { id: 'cd2', name: 'Chicken Chinese', description: 'Served with your choice of Fried / White / Steam or Jollof Rice', price: '₦15,000', image: '/images/chicken-chinese.jpg' },
            { id: 'cd3', name: 'Spaghetti Neapolitan', description: 'Classic Italian pasta', price: '₦15,000', image: '/images/spaghetti-neapolitan.jpg' },
            { id: 'cd4', name: 'Spaghetti Carbonara', description: 'Creamy Italian pasta', price: '₦15,000', image: '/images/spaghetti-carbonara.jpg' },
            { id: 'cd5', name: 'Shredded Beef With White Sauce', description: 'Served with your choice of Rice', price: '₦15,000', image: '/images/beef-white-sauce.jpg' },
            { id: 'cd6', name: 'Chicken Fingers With (Chips) Fries', description: 'Crispy chicken strips with fries', price: '₦12,500', image: '/images/chicken-fingers.jpg' },
            { id: 'cd7', name: 'Chef Salad With Chicken', description: 'Fresh garden salad with grilled chicken', price: '₦12,500', image: '/images/chef-salad.jpg' },
            { id: 'cd8', name: 'Noodles St. German', description: 'Specialty noodles', price: '₦13,500', image: '/images/noodles-german.jpg' },
            { id: 'cd9', name: 'Chicken Kebab', description: 'Served with your choice of Rice / Chips', price: '₦12,500', image: '/images/chicken-kebab.jpg' },
            { id: 'cd10', name: 'Fillet Fish with Sweet and Sour Sauce', description: 'Pan-fried fish fillet with tangy sauce', price: '₦12,500', image: '/images/fish-sweet-sour.jpg' },
            { id: 'cd11', name: 'Beef Kebab', description: 'Served with your choice of Fried / White / Steam or Jollof Rice', price: '₦12,500', image: '/images/beef-kebab.jpg' },
            { id: 'cd12', name: 'Chicken Escalope', description: 'Breaded chicken cutlet', price: '₦15,000', image: '/images/chicken-escalope.jpg' }
          ]
        }
      ]
    },
    {
      id: 'cocktails',
      name: 'Cocktails',
      subcategories: [
        {
          id: 'cocktail-menu',
          name: 'Cocktail Menu',
          items: [
            { id: 'ct1', name: 'Long Island Ice Tea', description: 'Classic mixed cocktail', price: '₦8,000', image: '/images/LongIslandIceTea.jpeg' },
            { id: 'ct2', name: 'Pina Colada', description: 'Tropical coconut and pineapple', price: '₦8,000', image: '/images/PinaColada.jpeg' },
            { id: 'ct3', name: 'Handsome Delight', description: 'Signature cocktail', price: '₦8,000', image: '/images/handsome-delight.jpeg' },
            { id: 'ct4', name: 'Watermelon Delight', description: 'Fresh watermelon cocktail', price: '₦8,000', image: '/images/watermelon-delight.jpeg' },
            { id: 'ct5', name: 'Margarita', description: 'Classic tequila cocktail', price: '₦7,000', image: '/images/margarita.jpeg' },
            { id: 'ct6', name: 'Tequila Sunrise', description: 'Tequila with orange and grenadine', price: '₦7,000', image: '/images/tequila-sunrise.jpeg' },
            { id: 'ct7', name: 'Sex On The Beach', description: 'Fruity vodka cocktail', price: '₦7,000', image: '/images/sex-beach.jpeg' },
            { id: 'ct8', name: 'Mojito', description: 'Refreshing mint and rum', price: '₦7,000', image: '/images/mojito.jpeg' },
            { id: 'ct9', name: 'Alcoholic Chapman', description: 'Nigerian favorite with alcohol', price: '₦7,000', image: '/images/alcoholic-chapman.jpeg' },
            { id: 'ct10', name: 'Gin & Tonic', description: 'Classic gin cocktail', price: '₦7,000', image: '/images/gin-tonic.jpeg' },
            { id: 'ct11', name: 'Screw Driver', description: 'Vodka and orange juice', price: '₦7,000', image: '/images/screwdriver.jpeg' },
            { id: 'ct12', name: 'Cosmopolitan', description: 'Elegant vodka cocktail', price: '₦7,000', image: '/images/cosmopolitan.jpeg' },
            { id: 'ct13', name: 'White Russia', description: 'Creamy vodka cocktail', price: '₦7,000', image: '/images/white-russia.jpeg' }
          ]
        },
        {
          id: 'mocktails',
          name: 'Mocktails',
          items: [
            { id: 'mt1', name: 'Non-Alcoholic Chapman', description: 'Classic Nigerian mocktail', price: '₦5,000', image: '/images/chapman.jpeg' },
            { id: 'mt2', name: 'Virgin Pina Colada', description: 'Non-alcoholic tropical drink', price: '₦5,000', image: '/images/virgin-pina.jpeg' },
            { id: 'mt3', name: 'Virgin Mojito', description: 'Refreshing mint mocktail', price: '₦5,000', image: '/images/virgin-mojito.jpeg' }
          ]
        },
        {
          id: 'fresh-smoothies',
          name: 'Fresh Smoothies',
          items: [
            { id: 'fs1', name: 'Tropical Splash Smoothie', description: 'Mixed tropical fruits', price: '₦5,000', image: '/images/tropical-smoothie.jpeg' },
            { id: 'fs2', name: 'Strawberry/Banana', description: 'Classic fruit smoothie', price: '₦5,000', image: '/images/strawberry-banana.jpeg' }
          ]
        },
        {
          id: 'juices',
          name: 'Juices',
          items: [
            { id: 'j1', name: 'Pineapple Juice', description: 'Fresh pineapple juice', price: '₦5,000', image: '/images/pineapple-juice.jpeg' },
            { id: 'j2', name: 'Watermelon Juice', description: 'Fresh watermelon juice', price: '₦5,000', image: '/images/watermelon-juice.jpeg' },
            { id: 'j3', name: 'Fresh Lemonade', description: 'Freshly squeezed lemonade', price: '₦5,000', image: '/images/lemonade.jpeg' },
            { id: 'j4', name: 'Vanilla Milk Shake', description: 'Creamy vanilla shake', price: '₦8,000', image: '/images/vanilla-shake.jpeg' }
          ]
        },
        {
          id: 'shots',
          name: 'Shots',
          items: [
            { id: 'sh1', name: 'Whiskey', description: 'Whiskey shot', price: '₦4,000', image: '/images/whiskey-shot.jpeg' },
            { id: 'sh2', name: 'Vodka', description: 'Vodka shot', price: '₦3,000', image: '/images/vodka-shot.jpeg' },
            { id: 'sh3', name: 'Tequila', description: 'Tequila shot', price: '₦4,000', image: '/images/tequila-shot.jpeg' },
            { id: 'sh4', name: 'Bacardi', description: 'Bacardi rum shot', price: '₦3,000', image: '/images/bacardi-shot.jpeg' },
            { id: 'sh5', name: 'Gin', description: 'Gin shot', price: '₦3,000', image: '/images/gin-shot.jpeg' }
          ]
        }
      ]
    }
  ]
};

// Get all items in a category (including all subcategories)
export const getItemsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') {
    // Return all items from all categories
    const allItems = [];
    menuData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        allItems.push(...subcategory.items);
      });
    });
    return allItems;
  }
  
  const category = menuData.categories.find(cat => cat.id === categoryId);
  if (!category) return [];
  
  const items = [];
  category.subcategories.forEach(subcategory => {
    items.push(...subcategory.items);
  });
  return items;
};

// Get category with all its subcategories
export const getCategoryData = (categoryId) => {
  return menuData.categories.find(cat => cat.id === categoryId);
};

// Search items across all categories
export const searchItems = (query) => {
  const lowerQuery = query.toLowerCase();
  const results = [];
  
  menuData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const matchingItems = subcategory.items.filter(item => 
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
      );
      if (matchingItems.length > 0) {
        results.push({
          category: category.name,
          subcategory: subcategory.name,
          items: matchingItems
        });
      }
    });
  });
  
  return results;
};
