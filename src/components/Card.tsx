import Image from "next/image";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="w-full max-w-sm border border-accent bg-[#0f0f0f] rounded-md shadow-[0_5px_30px_-10px_rgba(8,233,94,0.4)] transition-shadow duration-300 hover:shadow-[0_8px_40px_-8px_rgba(8,233,94,0.6)]"
      data-aos="zoom-in-up"
    >
      <div className="w-full overflow-hidden">
        <Image
          className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-110"
          src={img}
          width={500}
          height={500}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-5">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-sm text-gray-700">{desc}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((el) => (
            <div
              className="px-3 py-1 text-xs rounded-full bg-accent text-[#0A0A23]"
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
