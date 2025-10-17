import { useState } from "react";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  spineColor: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "1988",
    author: "Paulo Coelho",
    cover: "/books/alchemist/cover.jpg",
    spineColor: "bg-[url('/books/alchemist/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 2,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    cover: "/books/narnia/cover.jpg",
    spineColor: "bg-[url('/books/narnia/spine.jpg')] bg-cover bg-center",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://placehold.co/240x360?text=Book",
    spineColor: "from-blue-800 to-yellow-600",
  },
  {
    id: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  cover: "https://placehold.co/240x360?text=Book",
    spineColor: "from-amber-800 to-stone-700",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
  cover: "https://placehold.co/240x360?text=Book",
    spineColor: "from-rose-900 to-amber-100",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  cover: "https://placehold.co/240x360?text=Book",
    spineColor: "from-red-700 to-gray-600",
  },
  {
    id: 7,
    title: "Brave New World",
    author: "Aldous Huxley",
  cover: "https://placehold.co/240x360?text=Book",
    spineColor: "from-blue-600 to-cyan-400",
  },
];

const BookshelfSection = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
  <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Favorite Books
          </h2>
          <p className="text-lg text-muted-foreground">
            A curated collection of literary treasures
          </p>
        </div>

        {/* Bookshelf */}
        <div className="relative">
          {/* Shelf */}
          <div className="relative bg-gradient-to-b from-shelf-wood to-shelf-wood/80 h-8 rounded-lg shadow-2xl mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg" />
          </div>

          {/* Books Container */}
          <div 
            className="flex justify-center items-end gap-1 pb-8 perspective-1000"
            style={{ perspective: "2000px" }}
          >
            {books.map((book, index) => (
              <div
                key={book.id}
                className="relative transition-all duration-500 ease-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform:
                    hoveredBook === book.id
                      ? "translateZ(100px) translateY(-40px) rotateY(-25deg)"
                      : "translateZ(0) translateY(0) rotateY(0)",
                  zIndex: hoveredBook === book.id ? 50 : 10 - index,
                }}
                onMouseEnter={() => setHoveredBook(book.id)}
                onMouseLeave={() => setHoveredBook(null)}
              >
                {/* Book Spine (initial view) */}
                <div
                  className={`relative w-12 h-80 bg-gradient-to-r ${book.spineColor} rounded-sm shadow-xl cursor-pointer transition-all duration-500`}
                  style={{
                    opacity: hoveredBook === book.id ? 0 : 1,
                    transform: hoveredBook === book.id ? "rotateY(90deg)" : "rotateY(0)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 rounded-sm" />
                  
                  {/* Spine Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-shelf-paper text-xs font-bold writing-mode-vertical rotate-180 px-2 text-center leading-tight">
                      {book.title}
                    </p>
                  </div>
                  
                  {/* Spine Details */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                </div>

                {/* Book Cover (hover view) */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500"
                  style={{
                    width: "240px",
                    height: "360px",
                    opacity: hoveredBook === book.id ? 1 : 0,
                    transform:
                      hoveredBook === book.id
                        ? "translateZ(0) rotateY(0) scale(1)"
                        : "translateZ(-50px) rotateY(-90deg) scale(0.8)",
                    transformStyle: "preserve-3d",
                    pointerEvents: hoveredBook === book.id ? "auto" : "none",
                  }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={book.cover}
                      alt={`${book.title} by ${book.author}`}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 600px) 100vw, 240px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />
                    
                    {/* Book Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {book.title}
                      </h3>
                      <p className="text-white/80 text-sm">{book.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Shelf */}
          <div className="relative bg-gradient-to-b from-shelf-wood to-shelf-wood/90 h-6 rounded-lg shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-lg" />
          </div>
        </div>

        <p className="text-center mt-12 text-muted-foreground italic">
          Hover over the books to see their covers
        </p>
      </div>
    </section>
  );
};

export default BookshelfSection;
