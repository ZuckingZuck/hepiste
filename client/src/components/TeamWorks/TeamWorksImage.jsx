import React, { useState } from 'react';
import { Modal } from 'antd';

const TeamWorksImage = ({ teamWorks }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const showModal = (image) => {
        setSelectedImage(image);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <div className='text-center mt-5 bg-[#CD2147] text-white py-1 rounded'>
                <h1>HEPİSTE TAKIM ÇALIŞMALARIMIZ</h1>
            </div>
            <div className='flex flex-wrap justify-center gap-4 p-4'>
                {teamWorks?.map((item) => (
                    <img
                        key={item?.title}
                        src={item?.imgUrl}
                        alt={item?.title}
                        className='w-96 h-96 object-cover cursor-pointer rounded'
                        onClick={() => showModal(item?.imgUrl)}
                    />
                ))}
            </div>
            <Modal visible={isModalVisible} footer={null} onCancel={handleCancel}>
                {selectedImage && <img src={selectedImage} alt='Selected' className='w-full' />}
            </Modal>
        </div>
    );
};

export default TeamWorksImage;
