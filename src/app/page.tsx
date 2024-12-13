import Hero from "@/components/Hero";
import home from '../../public/images/home.jpg';

export default function Home() {
  return (
    <Hero imgSrc={home} altText="home page img" title="Home page 01" />
  );
}
