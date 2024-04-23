export async function fetchCoins() {
  //   const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //   const json = await response.json();
  //   return json;
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}
