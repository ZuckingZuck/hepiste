import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Space,
  Table,
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import AddTeamWork from "./Modals/AddTeamWork";
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
const AdminTeamWork = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [ teamWorks, setTeamWorks] = useState();

  const fetchTeamWorks = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/admin/teamwork`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    if (response.status === 403 || response.status === 401) {
      message.error("Yetkiniz yok!");
      navigate("/admin");
    }

    if (response.ok) {
      const json = await response.json();
      setTeamWorks(json);
    }
  };

  useState(() => {
    fetchTeamWorks();
  }, [user, teamWorks])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      const deleteService = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admin/teamwork/${id}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        if(response.status === 403 || response.status === 401){
          message.error("Yetkiniz yok!")
          navigate("/admin");
        }
        if(response.ok) {
          window.location.reload();
        }
      };

      deleteService();
    }
  };

  const columns = [
    {
      title: "Başlık",
      dataIndex: "title",
      key: "title",
    },
    {
        title: "Görsel",
        dataIndex: "imgUrl",
        key: "imgUrl",
        render: (_, record) => (
          <img
            className="h-52 w-52 p-3 rounded object-cover bg-black"
            src={record.imgUrl}
            alt=""
          />
        ),
      },
    {
      title: "İşlemler",
      key: "action",
      render: (_, record) => (
        <div>
          <Space size="middle">
            <Button
              className="ml-2"
              danger
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => {
                handleDelete(record._id);
              }}
            />
          </Space>
        </div>
      ),
    },
  ];


  return (
    <div className="flex">
      <AdminNavbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 pt-7">Takım Çalışması Görselleri</h1>
        <div className="mb-4">
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={showModal}
          >
            Yeni Veri Ekle
          </Button>
        </div>
        <div>
          <Table dataSource={teamWorks} columns={columns} rowKey={"_id"} />
        </div>

        <AddTeamWork open={isModalVisible} setOpen={setIsModalVisible} />
      </div>
    </div>
  );
};

export default AdminTeamWork;
