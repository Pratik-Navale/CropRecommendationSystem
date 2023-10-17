const express = require('express');
// import express from 'express';
const app = express();
// const crop={
//     'apple':{
//         url:'',
//         description:'tthis is apple'
//     },
//     'mothbeans':{
//         url:'',
//         description:'tthis is mothbeans'
//     },
//     'kidneybeans':{
//         url:'',
//         description:'tthis is kidneybeans'
//     }
// }
const crop = {
    "rice": {
        "url": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Rice, one of the world's most important cereal grains, serves as a staple food for billions of people worldwide. It is a versatile crop, with thousands of varieties, and is a primary source of carbohydrates and essential nutrients in many cultures. Rice is commonly consumed as a side dish, in soups, and in dishes like sushi and risotto."
    },
    "maize": {
        "url": "https://images.unsplash.com/photo-1623066798929-946425dbe1b0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Maize, also known as corn, is a widely cultivated cereal crop with a broad range of applications. It plays a crucial role in global agriculture, serving as a source of food, animal feed, and industrial products such as corn syrup, cornmeal, and corn oil."
    },
    "chickpea": {
        "url": "https://images.unsplash.com/photo-1635843121634-3d071b6fb5d8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Chickpeas, small legumes with a nutty flavor, are rich in protein and dietary fiber. They are a staple in Middle Eastern and Indian cuisines and are used to prepare dishes like hummus, falafel, and chana masala. Chickpeas offer both culinary diversity and nutritional value."
    },
    "kidneybeans": {
        "url": "https://images.unsplash.com/photo-1635843121634-3d071b6fb5d8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Kidney beans are a type of common bean, recognized for their kidney-like shape and hearty flavor. They are high in protein and fiber and are often featured in classic dishes such as chili, red beans and rice, and bean salads."
    },
    "pigeonpeas": {
        "url": "https://ooofarms.com/cdn/shop/products/Toor1_UPDal.jpg?v=1672252037&width=3840",
        "description": "Pigeon peas, a nutritious legume, are cultivated for their drought-resistant qualities. They serve as a vital food source in many regions and are used in stews, curries, and dals. Pigeon peas are notable for their resilience in arid climates."
    },
    "mothbeans": {
        "url": "https://ooofarms.com/cdn/shop/products/MothBean1_whole.jpg?v=1672251298&width=3840",
        "description": "Moth beans, a hardy legume, are prized for their high protein content and adaptability to arid conditions. They are an essential food source in regions with challenging climates and are used in various culinary preparations."
    },
    "mungbean": {
        "url": "https://img.freepik.com/free-photo/green-soybeans_1368-9423.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697414400&semt=ais",
        "description": "Mung beans, small and green, are celebrated for their versatility and nutritional value. They are commonly used in dishes like mung bean sprouts, soups, and stir-fries. Mung beans are cherished for their protein and vitamins."
    },
    "blackgram": {
        "url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Black_gram.jpg",
        "description": "Black gram, also known as urad dal, is a protein-rich legume central to Indian cuisine. It is used to prepare dishes like dal makhani and idli. Black gram provides essential nutrients and is a staple in vegetarian diets."
    },
    "lentil": {
        "url": "https://images.unsplash.com/photo-1614373532201-c40b993f0013?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",
        "description": "Lentils, small but mighty legumes, come in various colors and are prized for their high protein and fiber content. They are a versatile ingredient, used in soups, stews, salads, and curries. Lentils offer excellent nutrition and culinary possibilities."
    },
    "pomegranate": {
        "url": "https://images.unsplash.com/photo-1601767770428-265b2c67780c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935",
        "description": "Pomegranate, a vibrant and nutrient-packed fruit, is known for its juicy, sweet-tart arils. It is rich in antioxidants and vitamins, making it a popular fresh fruit and the source of pomegranate juice, a refreshing and healthful beverage."
    },
    "banana": {
        "url": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1854",
        "description": "Bananas, versatile and nutritious, are consumed worldwide and are celebrated for their potassium content. They are enjoyed fresh, added to smoothies, and used in baking. Bananas are a convenient and popular fruit for all ages."
    },
    "mango": {
        "url": "https://images.unsplash.com/photo-1635843121634-3d071b6fb5d8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Mango is a tropical fruit known for its sweet and juicy flesh, making it a favorite for many. This fruit, derived from the mango tree, not only yields a delicious and refreshing treat but also serves as a valuable agricultural crop, providing farmers with financial benefits. The cultivation of mangoes can be financially rewarding due to the high demand for the fruit in both domestic and international markets, contributing to the economic well-being of growers and supporting the livelihoods of many in regions where mangoes are cultivated."
    },
    "grapes": {
        "url": "https://images.unsplash.com/photo-1539519532614-723937382b86?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",
        "description": "Grapes, sweet or tart, are small and versatile fruits that are consumed fresh and used to make products like wine, raisins, and grape juice. They are packed with antioxidants and are a wholesome choice for snacking."
    },
    "watermelon": {
        "url": "https://images.unsplash.com/photo-1621961048737-a9993789e1ad?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",
        "description": "Watermelon, a refreshing and hydrating fruit, is perfect for hot summer days. Its high water content and natural sweetness make it a favorite for picnics and barbecues. Watermelon is a guilt-free indulgence."
    },
    "muskmelon": {
        "url": "https://images.unsplash.com/photo-1646992122151-57c9b84d17a0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Muskmelon, also known as cantaloupe, is a sweet and fragrant fruit enjoyed fresh. It provides a source of vitamins and minerals and is a delightful addition to fruit salads and breakfasts."
    },
    "apple": {
        "url": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1974",
        "description": "Apple, a widely cultivated and diverse fruit, offers a broad spectrum of flavors and culinary uses. Whether enjoyed fresh or baked into pies, apples are rich in nutrition, including dietary fiber and various vitamins. They are celebrated for their long shelf life and are a culinary staple."
    },
    "orange": {
        "url": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935",
        "description": "Oranges, citrus wonders, are prized for their juicy, sweet or tart flavor. They are an excellent source of vitamin C and are enjoyed fresh or as orange juice. Oranges are a zesty burst of citrusy goodness."
    },
    "papaya": {
        "url": "https://images.unsplash.com/photo-1570044803045-d790fc159af3?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935",
        "description": "Papaya, a tropical treasure, is known for its sweet and orange flesh, brimming with vitamins and minerals. It is a versatile fruit used in fruit salads, smoothies, and as a natural meat tenderizer in savory dishes."
    },
    "coconut": {
        "url": "https://images.unsplash.com/photo-1553787434-dd9eb4ea4d0b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935",
        "description": "Coconut trees yield abundant coconuts, offering a reliable income source for farmers. These coconuts are versatile, used in products like coconut oil and coconut water, enhancing financial benefits. Coconut farming is sustainable, supporting biodiversity, but it also poses challenges, such as susceptibility to pests and market fluctuations, that need effective management for optimal financial outcomes."
    },
    "cotton": {
        "url": "https://images.unsplash.com/photo-1633527992904-53f86f81a23a?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1770",
        "description": "Cotton, a crucial crop, is known for its soft, durable fibers, making it a cornerstone of the textile industry. Various cotton varieties are cultivated to create fabrics for clothing, household items, and more."
    },
    "jute": {
        "url": "https://plus.unsplash.com/premium_photo-1674624789813-aee3aaa976cb?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887",
        "description": "Jute, a strong and resilient fiber crop, is prized for its versatility. It is used to produce textiles, ropes, and an array of products. Jute is essential for industries requiring robust and eco-friendly materials."
    },
    "coffee": {
        "url": "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1961",
        "description": "Coffee, a beloved beverage, is made from the roasted seeds of coffee beans. It is cherished for its stimulating effects and diverse flavor profiles, with various coffee bean varieties cultivated and prepared in a myriad of ways."
    }
}

// Define a route that returns JSON data
app.get('/api/data', (req, res) => {
    const cropName = req.query.name
    res.json(crop[cropName]);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
