
const Committee = () => {
  const committees = [
    {
      name: "Chief Patrons",
      members: [
        {
          id: 1,
          name: "Dr. N. Vijaya Bhaskar Choudary",
          role: "Secretary & Correspondent",
        },
        // Add more members to this section
      ],
    },
    {
      name: "Patrons",
      members: [
        {
          id: 1,
          name: "Mrs. Keerthi Nadella",
          role: "Executive Director",
        },
        {
          id: 2,
          name: "Mr. N. Dwarakanath",
          role: "President - RRR Educational Academy",
        },
        // Add more members to this section
      ],
    },
    {
      name: "Chief Coordinator",
      members: [
        {
          id: 1,
          name: "Dr. C. Yuvaraj",
          role: "Principal",
        },
        // Add more members to this section
      ],
    },
    {
      name: "Convener",
      members: [
        {
          id: 1,
          name: "Dr. S. Rajasekaran",
          role: "Professor, HOD ECE",
        },
        // Add more members to this section
      ],
    },
    {
      name: "Faculty Coordinators",
      members: [
        {
          id: 1,
          name: "Dr. Dhruba Jyothi Bora",
          role: "Assistant Professor",
        },
        {
          id: 2,
          name: "Dr. Devashish",
          role: "Assistant Professor",
        },
        // Add more members to this section
      ],
    },
  ];

  return (
    <div id="com">
      <div className="p-4 md:p-9 bg-gray-200 shadow-xl">
      <h1 className="text-3xl font-semibold m-6 text-center">Committee</h1>
        {committees.map((committee, index) => (
          <div key={index} className="mb-8 ">
            <h2 className="text-2xl font-semibold mb-4">{committee.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              {committee.members.map((member) => (
                <div key={member.id} className="bg-white shadow-md rounded px-4 py-3">
                  <h3 className="text-lg font-semibold mb-1">Name: {member.name}</h3>
                  <p className="text-gray-700 mb-1">Role: {member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
