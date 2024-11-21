// Function to fetch advice based on an ID
async function fetchAdvice(id) {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data.slip.advice;
    } catch (error) {
        throw new Error(`Error fetching advice: ${error.message}`);
    }
}

// Function to check a random number and return a promise
async function checkNumber() {
    const number = Math.floor(Math.random() * 10);
    if (number > 5) {
        return `Success: The number ${number} is greater than 5.`;
    } else {
        throw new Error(`Failure: The number ${number} is not greater than 5.`);
    }
}

// Function to check the number condition and fetch advice if successful
async function getAdviceIfNumberIsHigh() {
    try {
        const message = await checkNumber(); // Await the result of checkNumber
        console.log(message); // Log the success message
        const advice = await fetchAdvice(1); // Fetch advice if number check succeeded
        console.log(`Fetched Advice: ${advice}`);
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Call the function to execute the logic
getAdviceIfNumberIsHigh();
