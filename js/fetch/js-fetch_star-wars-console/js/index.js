console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    const rd_d2 = data.results.filter((dict) => (dict.name = "R2-D2"));
    console.log(rd_d2);
    rd_d2.forEach((dict, index) => {
      console.log(`R2-D2 #${index} has ${dict.eye_color} eyes`);
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData();
