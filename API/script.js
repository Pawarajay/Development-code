const url = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");

// const btn = document.querySelector("#btn");
const btn = document.querySelector("#btn");

// btn.addEventListener("click" ,getData);
const getData = async () => {
    console.log("Getting data................");

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();

        factPara.innerText = data.fact; 
        console.log(data.fact);          
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

btn.addEventListener("click" ,getData);
getData();
