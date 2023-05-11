//wouldn't have been possible without these guys
//https://www.smashingmagazine.com/2021/10/building-amazon-product-scraper-nodejs/
//https://www.youtube.com/watch?v=z9t7qOSqZB8

const axios = require('axios');
const cheerio = require('cheerio');



async function scrape(){

    const usersearch = "coolers";
    usersearch.replace(/[" "]/g, "+");

    const url = "https://www.amazon.com/s?k=" + usersearch + "&s=exact-aware-popularity-rank";
    //get data
    const {data} = await axios.get(url);
    //load up the html
    const $ = cheerio.load(data);

    const list = [];


    $('div.sg-col-inner').each((idx, el)=>{
        const result = $(el)
    
        const name = result.find("span.a-size-base-plus.a-color-base.a-text-normal").text().slice(0,50);
        const link = "www.amazon.com" + result.find('a.a-link-normal.a-text-normal').attr('href');
        const price = parseFloat(result.find("span.a-offscreen").text().replace(/[$,]/g, ""));


        const product = {name:'', price:'', link:''};

        product.name = name;
        product.link = link;
        product.price = price;
        if(!isNaN(price)){
        list.push(product);
        };
    });

console.log(list);
}
scrape();
