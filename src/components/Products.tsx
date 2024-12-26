import React from 'react';

const Products = async () => {
  const productApi = await fetch('https://api-routes-henna.vercel.app/api/products');
  const productData = await productApi.json();

  return (
    <div className="bg-gray-100 min-h-screen py-2 px-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((p: { 
          id: number; 
          title: string; 
          description: string; 
          price: number; 
          category: string; 
        }) => {
          return (
            <div
              key={p.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{p.description}</p>
              <p className="text-sm text-gray-500 font-semibold mb-2">Category: {p.category}</p>
              <p className="text-xl text-blue-600 font-bold">Price: ${p.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
