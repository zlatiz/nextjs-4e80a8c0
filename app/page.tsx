import Image from 'next/image';
import Button from '../components/ui/button';
import Card from '../components/ui/card';

const IMAGES: string[] = Array.isArray([
  'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg'
]) ? [
  'https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg',
  'https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg'
] : [];

export default function Page() {
  const heroImage = IMAGES[1];
  const gallery = IMAGES.slice(0, IMAGES.length);

  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div>
          <h1 id="home-heading" className="text-4xl font-bold">Garber Bros, Inc.</h1>
          <p className="mt-4 text-base leading-relaxed">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
          <div className="mt-6">
            <Button href="/vessels">View Our Fleet of Vessels</Button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <a href="javascript:previousSlide6347994()">Prev</a>
            <span className="mx-2">•</span>
            <a href="javascript:nextSlide6347994()">Next</a>
          </div>
        </div>
        <div className="card">
          <div className="aspect-4-3">
            {heroImage ? (() => {
              const safeSrc = encodeURI(heroImage);
              return (
                <Image src={safeSrc} alt="Home vessels" className="aspect-img" unoptimized width={1200} height={900} />
              );
            })() : null}
          </div>
        </div>
      </section>

      <section aria-labelledby="features" className="mt-8">
        <h2 id="features" className="text-2xl font-semibold">Featured</h2>
        <div className="three-grid">
          <Card title="Our Vessels" href="/vessels" imgSrc={IMAGES[1]} imgAlt="Vessels photo"> 
            <p>Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
          </Card>

          <Card title="Employment" href="/websites/garberbrosinc/images/application.pdf" imgSrc={IMAGES[2]} imgAlt="Employment application photo">
            <p>Interested in working at Garber Bros? Download our employment application.</p>
            <p className="mt-2"><a href="http://www.goodhiring.com/garberbrosinc/apply/open">Apply via GoodHiring</a></p>
          </Card>

          <Card title="Contact Us" href="/contact" imgSrc={IMAGES[3]} imgAlt="Contact Garber Bros photo">
            <p>To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <p className="mt-2"><a href="contact.aspx">Contact (alternate)</a></p>
          </Card>
        </div>
      </section>

      <section aria-labelledby="gallery" className="mt-8 pb-12">
        <h2 id="gallery" className="text-2xl font-semibold">Gallery</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {Array.isArray(gallery) ? (Array.isArray(gallery) ? gallery : []).map((src, idx) => {
            const safeSrc = encodeURI(src);
            return (
              <div key={idx} className="card">
                <div className="aspect-4-3">
                  <Image src={safeSrc} alt={idx === 0 ? 'Logo' : idx === 1 ? 'Vessels' : idx === 2 ? 'Employment' : 'Contact'} className="aspect-img" unoptimized width={600} height={450} />
                </div>
              </div>
            );
          }) : null}
        </div>
      </section>

      <a href="#" className="sr-only">Top</a>
    </>
  );
}
