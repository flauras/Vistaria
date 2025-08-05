import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
import gallery7 from '@/assets/gallery-7.jpg';
import gallery8 from '@/assets/gallery-8.jpg';
import gallery9 from '@/assets/gallery-9.jpg';
import gallery10 from '@/assets/gallery-10.jpg';
import gallery11 from '@/assets/gallery-11.jpg';
import gallery12 from '@/assets/gallery-12.jpg';


const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      alt: "Gourmet appetizer selection",
      title: "Bruschetta",
      colSpan: "col-span-2 sm:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: 2,
      src: gallery2,
      alt: "Exquisite dessert presentation",
      title: "Decadent Desserts"
    },
    {
      id: 3,
      src: gallery3,
      alt: "Chef at work in kitchen",
      title: "Pizza Perfection"
    },
    {
      id: 4,
      src: gallery4,
      alt: "Chef at work in kitchen",
      title: "Stuffed Shell Pasta",
      colSpan: "col-span-2 md:col-span-1"
    },
    {
      id: 5,
      src: gallery5,
      alt: "Chef at work in kitchen",
      title: "Waffle Delight",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: 6,
      src: gallery6,
      alt: "Chef at work in kitchen",
      title: "Steak"
    },
    {
      id: 7,
      src: gallery7,
      alt: "Chef at work in kitchen",
      title: "Ricotta Ravioli",
      colSpan: "col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: 8,
      src: gallery8,
      alt: "Chef at work in kitchen",
      title: "Pancakes"
    },
    {
      id: 9,
      src: gallery9,
      alt: "Chef at work in kitchen",
      title: "Patatas Bravas",
    },
    {
      id: 10,
      src: gallery10,
      alt: "Chef at work in kitchen",
      title: "Chiken Alfredo",
      colSpan: "col-span-2 md:col-span-1"
    },
    {
      id: 11,
      src: gallery11,
      alt: "Chef at work in kitchen",
      title: "Hors d'oeuvres",
      colSpan: "col-span-1 md:col-span-2",
      rowSpan: "row-span-2"
    },
    {
      id: 12,
      src: gallery12,
      alt: "Chef at work in kitchen",
      title: "Moussaka"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-restaurant-warm-brown mb-6">
              Gallery
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A visual journey through our culinary creations and the artistry behind every dish.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grig-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id} 
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${image.colSpan ?? ''} ${image.rowSpan ?? ''}`}
              >
                <div className="relative overflow-hidden aspect-square lg:aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-2">
                        {image.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-restaurant-gold mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Images Row */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {galleryImages.map((image, index) => (
              <div key={`extra-${image.id}`} className="group relative overflow-hidden rounded-lg aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            ))}
          </div> */}

          {/* Bottom Text */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground italic">
              "Every dish is a canvas, every ingredient a brushstroke in our culinary masterpiece."
            </p>
            <p className="text-restaurant-gold font-medium mt-2">
              - Chef Isabella Romano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;