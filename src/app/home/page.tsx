import Image from 'next/image'
import Movie from '@/components/movie';
import Favmovie from '@/components/favmovie';

export default function Home() {
  return (
    <main>
      <Movie />
      <Favmovie />
    </main>
  );
}
