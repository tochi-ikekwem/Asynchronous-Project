async function iterateWithAsyncAwait(values) {  
    for (const value of values) {  
        console.log(value);  
        await new Promise(resolve => setTimeout(resolve, 1000)); // Delay of 1 second  
    }  
}  

// Example usage  
iterateWithAsyncAwait(['Value 1', 'Value 2', 'Value 3']);



async function awaitCall() {  
    try {  
        const response = await fakeApiCall(); // Simulating an API call  
        console.log('Data received:', response);  
    } catch (error) {  
        console.error('Failed to fetch data:', error.message); // User-friendly error message  
    }  
}  

// Simulated API call function  
function fakeApiCall() {  
    return new Promise((resolve, reject) => {  
        setTimeout(() => {  
            const success = Math.random() > 0.5; // Randomly succeed or fail  
            if (success) {  
                resolve('Fetched data successfully!');  
            } else {  
                reject(new Error('API call failed!'));  
            }  
        }, 1000);  
    });  
}  

// Example usage  
awaitCall();




async function concurrentRequests() {  
    try {  
        const [result1, result2] = await Promise.all([fakeApiCall(), fakeApiCall()]);  
        console.log('Results from concurrent requests:', result1, result2);  
    } catch (error) {  
        console.error('Error in one of the requests:', error.message);  
    }  
}  

// Example usage  
concurrentRequests();