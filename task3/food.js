const jsonDataURL =  "https://file.notion.so/f/f/663a35c6-2bd7-44e6-bf90-5f33d51f737c/a438c663-645c-4570-8503-11f20cea9b18/food.json?id=9f33085a-202e-4056-a4c4-08a0036624b4&table=block&spaceId=663a35c6-2bd7-44e6-bf90-5f33d51f737c&expirationTimestamp=1701424800000&signature=uFrUyaTjNxp5Zv0rPiSecI-las1fIKQUSeGAtd5n20E&downloadName=food.json";

fetch(jsonDataURL)
    .then(results => results.json())
    .then(jsonfoodData => {
        console.log(jsonfoodData);
        
        //all food items
        const allFoodItems = jsonfoodData.map(item => item.foodname);
        console.log(allFoodItems);

         //all the food items with category vegetables
        const vegetableItems = jsonfoodData.filter(item => item.category === 'Vegetable')
        console.log("The vegetables items are:");
        console.log(vegetableItems);

         //all the food items with category fruit
        const fruitsItems = jsonfoodData.filter(item => item.category === 'Fruit')
        console.log("The fruits items are:");
        console.log(fruitsItems);

         //all the food items with category protien
        const protienItems = jsonfoodData.filter(item => item.category === 'Protein')
        console.log("The proteins items are:");
        console.log(protienItems);

         //all the food items with category nuts
        const nutsItems = jsonfoodData.filter(item => item.category === 'Nuts')
        console.log("The nuts items are:");
        console.log(nutsItems);

        //all the food items with category grains
        const grainsItems = jsonfoodData.filter(item => item.category === 'Grain')
        console.log("The grains items are:");
        console.log(grainsItems);

        //all the food items with category dairy
        const dairyItems = jsonfoodData.filter(item => item.category === 'Dairy')
        console.log("The dairy items are:");
        console.log(dairyItems);

        // all the food items with calorie above 100
        const highcalorieItems = jsonfoodData.filter(item => item.calorie > 100)
        console.log("The calorie above 100 items are:");
        console.log(highcalorieItems);

        // all the food items with calorie below 100
        const lowcalorieItems = jsonfoodData.filter(item => item.calorie < 100)
        console.log("The calorie below 100 items are:");
        console.log(lowcalorieItems);

        // all the food items with highest protien content to lowest
        const highestprotienItems = jsonfoodData.sort((a,b) => b.protiens - a.protiens)
        console.log("The highest protein items are:");
        console.log(highestprotienItems);

        // all the food items with lowest cab content to highest
        const lowestcabItems = jsonfoodData.sort((a,b) => a.cab - b.cab)
        console.log("The lowest carbohydrate items are:");
        console.log(lowestcabItems);

});




