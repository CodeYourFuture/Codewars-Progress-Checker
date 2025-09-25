import { parse } from 'node-html-parser';

async function fetchKataDetails(kataId) {
  const kataUrl = `https://www.codewars.com/api/v1/code-challenges/${kataId}`;
  const response = await fetch(kataUrl);
  const data = await response.json();
  return data;
}


if (process.argv.length < 3) {
  console.error(
    `Usage: node ${process.argv[1]} <collection URL|slug|id> ["language1,language2,..."]`
  );
  process.exit(1);
}

const collectionId = process.argv[2].split('/').pop();
const collectionUrl = `https://www.codewars.com/collections/${collectionId}`;

const languages = process.argv[3] ? 
  process.argv[3].split(',').map(lang => lang.trim().toLowerCase()) : [];

console.log(`Fetching collection from: ${collectionUrl}`);

(async function fetchCollectionKatas() {
  try {
    const response = await fetch(collectionUrl);
    const html = await response.text();
    const doc = parse(html);

    let katas = [... doc.querySelectorAll(".list-item-kata")].map(
      el => ({
        id: el.getAttribute("id"), 
        name: el.getAttribute("data-title")
      })
    );

    if (languages.length > 0) {
      // Filter katas by languages
      katas = katas.filter(async kata => {
        // Fetch kata details to get available languages
        const kataDetails = await fetchKataDetails(kata.id);
        let kataLanguages = kataDetails.languages || [];
        kataLanguages = kataLanguages.map(lang => lang.toLowerCase());
        return languages.some(lang => kataLanguages.includes(lang));
      });
    }

    console.log(JSON.stringify(katas, null, 2));

  } catch (error) {
    console.error("Failed to fetch collection katas:", error);
  }
})();

