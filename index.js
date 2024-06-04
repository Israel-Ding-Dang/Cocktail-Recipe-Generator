import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/recipe", async (req, res) => {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const result = response.data.drinks[0];        

        res.render("index.ejs", { cocktail: result });
    } catch (error) {
        console.error('Error fetching data:', error.message);        
    }    
});

app.listen(port, () => {
    console.log(`Listening to app on port ${port}`);
});