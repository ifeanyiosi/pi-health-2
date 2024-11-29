import Image from "next/image";

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: "Blossom Fletcher",
      title: "Founder / CEO / CTO",
      image: "/images/blossom.jpg", // Add the correct image path
      description:
        "ML Engineer with over 12 years of experience working in the NHS, DHSC, NHS Digital, and NATO. Current Pi-Health’s CEO/CTO. Masters in AI and Applied Robotics, Bachelors in Network Engineering.",
    },
    {
      name: "Jill Lockett",
      title: "Clinical Strategy Director",
      image: "/images/jill.jpg",
      description:
        "Jill is the immediate past MD of the Kings’ Health Partners and has led research in Guy’s and St Thomas, Imperial as well as Kings College London. She currently directs Clinical Strategy in Pi-Health.",
    },
    {
      name: "Chris Soltysiak",
      title: "Clinical Advisory",
      image: "/images/chris.jpg",
      description:
        "Ex-NHS director with over 35 years of experience within various hierarchies in the NHS. He brings to the team vast connections, Operations, and Delivery.",
    },
    {
      name: "Bob Stella",
      title: "Director - Workforce Strategy and Planning",
      image: "/images/bob.jpg",
      description:
        "Bob Stella is currently the Senior Workforce Manager at Indeed.com. He oversees workforce management, Strategy & Planning at Pi-Health.",
    },
    {
      name: "Stuart MacLennan",
      title: "Commercial Director",
      image: "/images/stuart.jpg",
      description:
        "Stuart is the current CEO of Peacock Technologies. He has led complex commercial processes for 30 years. He is currently the commercial director for Pi-Health.",
    },
    {
      name: "Peter Orubebe",
      title: "Director - New Business, ESG, and Sustainability",
      image: "/images/peter.jpg",
      description:
        "Peter is an ESG consultant and has worked across 2 continents. He leads our ESG and Sustainability at Pi-Health.",
    },
    {
      name: "Dr Phil Koczan",
      title: "Clinical Director",
      image: "/images/phil.jpg",
      description:
        "Currently Deputy Caldicott Guardian of NHS England & Clinical Safety Officer London Region. He oversees clinical oversight in Pi-Health.",
    },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        The Leadership Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-full object-cover"
                fill
              />
            </div>
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{member.title}</p>
            <p className="text-sm text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
