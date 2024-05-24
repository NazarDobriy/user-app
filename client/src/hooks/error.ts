import { useState, useEffect } from "react";

const useErrorMessage = (initialErrorMessage: string | null) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(
    initialErrorMessage
  );

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
      setErrorMessage(null);
    }
  }, [errorMessage]);

  const setError = (message: string) => {
    setErrorMessage(message);
  };

  return { errorMessage, setError };
};

export default useErrorMessage;
