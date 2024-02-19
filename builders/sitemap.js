import GenerateSitemap from "react-router-sitemap-maker";
import { Router } from '../src/Routes';

async function createSitemap() {
  let sitemap = GenerateSitemap(Router(false), {
    baseUrl: "https://detkewldog.netlify.app",
    hashrouting: false,
    changeFrequency: "weekly"
  });
  await sitemap.toFile('./public/sitemap.xml');
}
createSitemap();