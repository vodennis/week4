import Image from "next/image";
import Gallery from './Gallery';

const imageUrls = [
  '/pictures/teacher1.webp',
  '/pictures/teacher2.webp',
  '/pictures/teacher3.webp',
];

export default function Home() {
  return (
    <main>
      <h1><strong>Images</strong></h1>
      <Gallery images={imageUrls} />
    </main>
  );
}
