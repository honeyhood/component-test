import { useState, useEffect } from 'react';

import Feature from './Feature';

function Hero() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchMockData();
        setFeatures(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  async function fetchMockData() {
    const response = await fetch(
      'https://63b89f696f4d5660c6db1a01.mockapi.io/features'
    );
    const mockData = await response.json();
    return mockData;
  }

  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-indigo-600">
            Transactions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send money
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <Feature key={feature.id} {...feature} /> // you can give a prop isAdmin={true}
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
