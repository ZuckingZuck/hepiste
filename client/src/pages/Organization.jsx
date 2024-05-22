import React from 'react';

const Captain = ({ title, members }) => (
  <div className="bg-gray-200 rounded-lg p-3 m-2">
    <h4 className="text-sm font-semibold">{title}</h4>
    <ul className="ml-4">
      {members.map((member, index) => (
        <li key={index}>{member}</li>
      ))}
    </ul>
  </div>
);

const Manager = ({ title, captains }) => (
  <div className="bg-gray-200 rounded-lg p-4 m-2">
    <h3 className="text-md font-semibold">{title}</h3>
    <div className="mt-4 flex flex-wrap">
      {captains.map((captain, index) => (
        <Captain key={index} title={captain.title} members={captain.members} />
      ))}
    </div>
  </div>
);

const CEO = ({ managers }) => (
  <div className="flex justify-center items-center">
    <div className="bg-gray-200 rounded-lg p-4 m-2">
      <h2 className="text-lg font-semibold text-center">Kurucu (CEO)</h2>
      <div className="mt-4 flex flex-wrap">
        {managers.map((manager, index) => (
          <Manager key={index} title={manager.title} captains={manager.captains} />
        ))}
      </div>
    </div>
  </div>
);

const OrganizationChart = () => {
  const managers = [
    {
      title: "İdari Genel Müdür",
      captains: [
        {
          title: "İdari Genel Kaptan",
          members: ["Motivasyon Kaptanı", "Proje Yazma Kaptanı", "Müzakere Kaptanı", "-Üyeler"]
        }
      ]
    },
    {
      title: "Genel Sekreter",
      captains: [
        {
          title: "Genel Sekreter",
          members: []
        }
      ]
    },
    {
      title: "Teorik Genel Müdür",
      captains: [
        {
          title: "Teorik Genel Kaptan",
          members: ["Batarya Yazılım Kaptanı", "Mekanik Aksam Kaptanı", "Motor ve Sürücü Kaptanı", "Yazılım Kaptanı", "-Üyeler"]
        }
      ]
    },
  ];

  return <CEO managers={managers} />;
};

export default OrganizationChart;
