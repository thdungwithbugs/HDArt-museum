export const searchData = async (query) => {
  const apiUrl = `https://api.artic.edu/api/v1/artworks/search`;
  const qs = `?q=${query}&limit=36&fields=id,title,image_id,thumbnail`;
  try {
    const result = await fetch(apiUrl + qs);
    return result.json();
  } catch (error) {
    console.log(error);
  }
};
