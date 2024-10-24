import { StarIcon } from "@heroicons/react/20/solid";

const products = [
  {
    id: 5,
    name: "CAPAC B125 700*35 CU INCHIZATOR",
    price: "957 Lei",
    rating: 5,
    reviewCount: 10,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-b125-700-35-cu-inchizator-957-2.png",
    imageAlt: "CAPAC B125 700*35 CU INCHIZATOR",
    href: "#",
  },
  {
    id: 6,
    name: "CAPAC COMPOZIT 50 CLASA A15",
    price: "278 Lei",
    rating: 4,
    reviewCount: 8,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-50-clasa-a15-278-1.jpg",
    imageAlt: "CAPAC COMPOZIT 50 CLASA A15",
    href: "#",
  },
  {
    id: 7,
    name: "CAPAC COMPOZIT 790 D400 BALAMA+INCH",
    price: "1173 Lei",
    rating: 5,
    reviewCount: 12,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-790-d400-balama-inch-1173-1.jpg",
    imageAlt: "CAPAC COMPOZIT 790 D400 BALAMA+INCH",
    href: "#",
  },
  {
    id: 8,
    name: "CAPAC COMPOZIT B125 PT. TUB DN325",
    price: "10307 Lei",
    rating: 5,
    reviewCount: 5,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-b125-pt-tub-dn325-10307-1.jpg",
    imageAlt: "CAPAC COMPOZIT B125 PT. TUB DN325",
    href: "#",
  },
  {
    id: 6,
    name: "CAPAC COMPOZIT 50 CLASA A15",
    price: "278 Lei",
    rating: 4,
    reviewCount: 8,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-50-clasa-a15-278-1.jpg",
    imageAlt: "CAPAC COMPOZIT 50 CLASA A15",
    href: "#",
  },
  {
    id: 7,
    name: "CAPAC COMPOZIT 790 D400 BALAMA+INCH",
    price: "1173 Lei",
    rating: 5,
    reviewCount: 12,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-790-d400-balama-inch-1173-1.jpg",
    imageAlt: "CAPAC COMPOZIT 790 D400 BALAMA+INCH",
    href: "#",
  },
  {
    id: 8,
    name: "CAPAC COMPOZIT B125 PT. TUB DN325",
    price: "10307 Lei",
    rating: 5,
    reviewCount: 5,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-compozit-b125-pt-tub-dn325-10307-1.jpg",
    imageAlt: "CAPAC COMPOZIT B125 PT. TUB DN325",
    href: "#",
  },
  {
    id: 5,
    name: "CAPAC B125 700*35 CU INCHIZATOR",
    price: "957 Lei",
    rating: 5,
    reviewCount: 10,
    imageSrc:
      "https://www.medapark.ro/static/i/imagini-produse/capac-b125-700-35-cu-inchizator-957-2.png",
    imageAlt: "CAPAC B125 700*35 CU INCHIZATOR",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductList() {
  return (
    <div className="bg-white pt-8">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h2 className="font-playfair-display text-2xl font-bold text-gray-900 mb-8">
          Produse
        </h2>
        <div className="border-t grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
            >
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pb-4 pt-10 h-full text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <div className="mt-3 flex flex-col items-center">
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0",
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.reviewCount} reviews
                  </p>
                </div>
                <p className="mt-4 text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
