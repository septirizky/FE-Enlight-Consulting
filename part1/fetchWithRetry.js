const fetchWithRetry = (url, options = {}, retries = 3, backoff = 300) => {
  return new Promise((resolve, reject) => {
    function attemptFetch(attempt) {
      fetch(url, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return resolve(response);
        })
        .catch((error) => {
          if (attempt < retries) {
            setTimeout(() => {
              console.log(`Retrying... Attempt ${attempt + 1}`);
              attemptFetch(attempt + 1);
            }, backoff * Math.pow(2, attempt));
          } else {
            reject(error);
          }
        });
    }
    attemptFetch(0);
  });
};
