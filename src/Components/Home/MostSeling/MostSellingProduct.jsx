import Product from "./Product";
import ring from '../../assets/Accessories.png';
import ring2 from '../../assets/watch2.png';
import watch from '../../assets/Accessories2.png';

const MostSellingProduct = () => {
  const details = [
    {
      id: 1,
      image: ring,
      date: 'May 11, 2024',
      title: "Spring - Summer Trending 2024",
      description: 'Topology is the work of typesetter compositers, typographers, graphic designers, art directors, manga artists, ...',
    },
    {
      id: 2,
      image: ring2,
      date: 'June 15, 2024',
      title: "The Easiest Way to Break Out on Top",
      description: 'Topology is the work of typesetter compositers, typographers, graphic designers, art directors, manga artists, ...',
    },
    {
      id: 3,
      image: watch,
      date: 'Sep 01, 2024',
      title: "Style for Couple in Wedding Season",
      description: 'Topology is the work of typesetter compositers, typographers, graphic designers, art directors, manga artists, ...',
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 justify-center items-center lg:gap-8  md:gap-3 sm:gap-2 gap-2 lg:m-14 md:m-8 sm:m-6 m-2 lg:min-h-[340px]">
      {details.map(({ id, image, title, description, date }) => (
        <Product 
          key={id} 
          image={image} 
          heading={title} 
          description={description} 
          date={date} 
        />
      ))}
    </div>
  );
}

export default MostSellingProduct;
