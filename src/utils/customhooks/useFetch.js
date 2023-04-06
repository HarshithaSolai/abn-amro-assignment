import { useState, useEffect } from 'react';
import {API_BASE_URL} from '../config'

const useFetch = (endpoint)  => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
