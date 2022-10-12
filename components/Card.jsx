import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Alex G",
    title: "Regional Paradigm Technician",
    date: "OCT 29",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "boniver.jpg",
    artistID: "001",
  },
  {
    name: "Coast Modern",
    title: "Regional Paradigm Technician",
    date: "SEP 16",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "coastModern.jpeg",
    artistID: "002",
  },
  {
    name: "Father John Misty",
    title: "Regional Paradigm Technician",
    date: "AUG 21",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "ftm.jpg",
    artistID: "003",
  },
];

const Card = () => {
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {people.map((person) => (
          <li
            key={person.artistID}
            className="h-full w-full col-span-1 divide-y divide-gray-200 rounded-lg"
          >
            <div
              className="h-full w-full bg-cover bg-no-repeat bg-center rounded-lg min-h-[340px]"
              style={{ backgroundImage: `url(${person.imageUrl})` }}
            >
              <div className="w-full h-full bg-gradient-to-t from-gray-900 rounded-lg">
                <div className="flex-1 truncate">
                  <div className="flex items-center space-x-3">
                    <h3 className="truncate text-sm font-medium text-gray-900">
                      {person.name}
                    </h3>
                    <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                      {person.date}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm text-gray-500">
                    {person.title}
                  </p>
                </div>
              </div>
            </div>

            {/* <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={`mailto:${person.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <EnvelopeIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${person.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Card;
