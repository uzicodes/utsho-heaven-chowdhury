import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 p-6">
      <div className="max-w-xl w-full text-center">
        <Image
          className="mx-auto mb-6 rounded-full border-4 border-gray-200 dark:border-gray-700"
          src="/favicon.ico"
          alt="Profile picture"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">Hi, I'm Utsho Heaven Chowdhury</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Welcome to my portfolio! I'm a passionate developer building modern web experiences with Next.js and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4 mb-4">
          {/* Placeholder for navigation or social links */}
          <a href="#projects" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Projects</a>
          <a href="#contact" className="px-4 py-2 rounded bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition">Contact</a>
        </div>
      </div>
    </div>
  );
}
