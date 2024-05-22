import React from 'react';
import OrganizationChart from './Organization';

const Team = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ekipte Yükselme Şartları</h1>
        <p className="text-gray-600">Her üye ve kaptanlık sistemi kurucu yönetici tarafından belirlenir. Gerekli çalışma ve emeği gösteren herkes her pozisyona yükselebilir.</p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Haftalık toplantıları kaçırmamak</li>
          <li>Grubunu etkili bir şekilde yönetmek</li>
          <li>Liderlik vasıflarına sahip olmak</li>
          <li>Özverili bir şekilde çalışmak</li>
          <li>Verilen görevleri en hızlı şekilde tamamlamak</li>
          <li>Hiyerarşik yapıya saygı duymak ve korumak</li>
          <li>Sadık ve bağlı olmak</li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">HEPİSTE Takım Yapısı</h1>
        <OrganizationChart />
      </div>
    </div>
  );
};

export default Team;
