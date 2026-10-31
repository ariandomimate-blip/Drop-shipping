import fs from "node:fs/promises";
import path from "node:path";
const markup=Number(process.env.MARKUP_PERCENT??100);
export function retailPrice(cost){const n=Number(cost);if(!Number.isFinite(n)||n<0)throw new Error("Invalid supplier cost");return Number((n*(1+markup/100)).toFixed(2));}
async function readJson(file,fallback){try{return JSON.parse(await fs.readFile(file,"utf8"));}catch{return fallback;}}
export async function loadCatalog(){
 const demo=await readJson(path.resolve("data/products.json"),[]);
 // Provider feeds should be normalized to {id,title,cost,currency,category,image,description,stock,provider}.
 return demo.map(p=>({...p,price:retailPrice(p.cost),currency:p.currency||"EUR"}));
}