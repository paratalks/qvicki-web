"use client";

import { Search, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    "Milk",
    "Bread & Pav",
    "Eggs",
    "Flakes & Kids Cereals",
    "Muesli & Granola",
    "Oats",
    "Paneer & Tofu",
    "Curd & Yogurt",
    "Butter & Cheese",
    "Ice Cream",
    "Soy & Almond Milk",
    "Flavored Milk",
  ];

  const navItems = [
    "Vegetables & Fruits",
    "Dairy & Breakfast",
    "Munchies",
    "Cold Drinks & Juices",
    "Instant & Frozen Food",
    "Tea, Coffee & Health Drinks",
    "Bakery & Biscuits",
    "Staples",
    "Sauces & Spreads",
    "Cleaning Essentials",
    "Beauty & Hygiene",
    "Home & Kitchen",
  ];

  const products = [
    {
      name: "Amul Taaza Toned Fresh Milk",
      volume: "500 ml",
      price: "₹28",
      delivery: "8 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
    },
    {
      name: "Amul Gold Full Cream Fresh Milk",
      volume: "500 ml",
      price: "₹34",
      delivery: "8 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
    },
    {
      name: "Mother Dairy Toned Fresh Milk",
      volume: "500 ml",
      price: "₹28",
      delivery: "8 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
    },
    {
      name: "Mother Dairy Cow Fresh Milk",
      volume: "500 ml",
      price: "₹29",
      delivery: "8 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614",
    },
    {
      name: "Nestle a+ Nourish Toned Milk",
      volume: "1 L",
      price: "₹80",
      delivery: "10 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856",
    },
    {
      name: "Amul Masti Buttermilk",
      volume: "1 L",
      price: "₹50",
      delivery: "8 MINS",
      image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592",
    },
    
  ];
  

  return (
    <div className="flex min-h-screen w-full flex-col text-black">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <button
            className="mr-4 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
          <Link className="mr-6 flex items-center" href="#">
            <Image
              src="/qvickiLogo.png"
              alt="Blinkit"
              className="h-8 w-auto"
              width={100}
              height={32}
            />
          </Link>
          <button className="mr-6 hidden md:flex items-center text-sm font-medium">
            Delivery in 8 minutes
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-xl">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search 'curd'"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 pl-8 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </div>
          <button className="mr-2 hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Login
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-primary-foreground hover:bg-green-700 h-10 px-4 py-2">
            <ShoppingCart className="mr-2 h-4 w-4" />
            My Cart
          </button>
        </div>
        <nav className="border-t hidden md:block">
          <div className="container flex gap-6 px-4 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="flex h-12 items-center text-sm whitespace-nowrap hover:text-green-600"
              >
                {item}
                {item === "More" && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="space-y-4 hidden md:block">
              <div className="font-medium">Categories</div>
              {categories.map((category) => (
                <Link
                  key={category}
                  href="#"
                  className="flex items-center text-sm hover:text-green-600"
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="md:col-span-4">
              <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Buy Milk Online</h1>
                <select className="w-[180px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <div
                    key={product.name}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="relative">
                      <div className="absolute left-2 top-2 rounded bg-white px-1.5 py-0.5 text-xs font-medium">
                        {product.delivery}
                      </div>
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="rounded-t-lg"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="p-4 text-black">
                      <h3 className="font-medium">{product.name}</h3>
                      <select className="my-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value={product.volume}>{product.volume}</option>
                        <option value="1 l">1 L</option>
                      </select>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">{product.price}</div>
                        <button className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-primary-foreground hover:bg-green-700 h-10 px-4 py-2 text-white">
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-y-0 left-0 z-50 h-full w-3/4 overflow-y-auto bg-white p-6 shadow-lg">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
              <span className="sr-only">Close</span>
            </button>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block text-lg font-medium hover:text-green-600"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
