import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePost, deletePost } from "../redux/postSlice";
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

import AddProject from "./Modals/AddProject";
import AdminNavbar from "../components/AdminNavbar";
import { useNavigate } from "react-router-dom";
import { deleteProject } from "../redux/projectSlice";
const AdminProjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const project = useSelector((state) => state.project);
  const [defaultProject, setDefaultProject] = useState({});
  const [description, setDescription] = useState(defaultProject.description);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Silmek istediğine emin misin?")) {
      const deletePosts = async () => {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/admin/project/${id}`,
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

        if (response.ok) {
          dispatch(deleteProject(id));
        }
      };

      deletePosts();
    }
  };

  const handleEdit = (record) => {
    setImgUrl(record.ImageUrl);
    setDefaultProject(record);
    setEditModal(true);
  };
  const columns = [
    {
      title: "Görsel",
      dataIndex: "ImageUrl",
      width: "10%",
      key: "ImageUrl",
      render: (_, record) => (
        <img
          className="h-12 w-12 p-3 rounded bg-black"
          src={record.ImageUrl}
          alt="resim"
        />
      ),
    },
    {
      title: "Başlık",
      dataIndex: "ProjectTitle",
      key: "ProjectTitle",
    },
    {
        title: "Kategori",
        dataIndex: "category",
        key: "category",
    },
    {
      title: "Ekleyen",
      dataIndex: "UserName",
      key: "UserName",
    },
    {
      title: "İşlemler",
      key: "action",
      render: (_, record) => (
        <div>
          <Space size="middle">
            <Button
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

  useEffect(() => {
    if (defaultProject) {
      form.setFieldsValue({
        ProjectTitle: defaultProject.ProjectTitle,
        ImageUrl: defaultProject.ImageUrl,
      });
    }
  }, [defaultProject, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = {
          ProjectTitle: values.ProjectTitle,
          ImageUrl: imgUrl,
          description: description,
          projectStatus: defaultProject.projectStatus,
        };

        const editServices = async () => {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/admin/project/${defaultProject._id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify({updateProject: data}),
            }
          );
          const json = await response.json();
          if (response.ok) {
            dispatch(changePost(json));
          }
        };
        editServices();

        setEditModal(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setEditModal(false);
  };

  const customRequest = ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("name", file);

    const apiUrl = `${process.env.REACT_APP_API_URL}/api/admin/upload`;

    fetch(apiUrl, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onSuccess();
        message.success("Dosya yüklendi.");
        setImgUrl(data.imgUrl);
      })
      .catch((error) => {
        onError();
        message.error("Dosya yüklenirken bir hata oluştu!");
        console.error("File upload error:", error);
      });
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Lütfen bir resim dosyası yükleyin!");
    }
    return isImage;
  };

  return (
    <div className="flex">
      <AdminNavbar />
      <div className="container mx-auto mt-6">
        <h1 className="text-3xl font-bold mb-4">Projelerimiz</h1>
        <div className="mb-4">
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={showModal}
          >
            Yeni Proje Ekle
          </Button>
        </div>
        <div>
          <Table dataSource={project?.projects} columns={columns} rowKey={"_id"} />
        </div>

        <AddProject open={isModalVisible} setOpen={setIsModalVisible} />
        <Modal
          width={"1000px"}
          title="Paylaşım Düzenle"
          open={editModal}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form layout="vertical" form={form}>
            <Form.Item
              name="ProjectTitle"
              label="Başlık"
              initialValue={defaultProject?.title}
              rules={[{ required: true, message: "Başlık alanı zorunludur!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="RedirectUrl"
              label="Proje Linki"
              initialValue={defaultProject?.RedirectUrl}
              rules={[{ required: true, message: "Başlık alanı zorunludur!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="ImageUrl"
              label="Kapak Resim URL"
              rules={[
                { required: true, message: "Lütfen bir görsel yükleyin!" },
              ]}
            >
              <Upload
                customRequest={customRequest}
                beforeUpload={beforeUpload}
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Görsel Yükle</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              name="description"
              label="Açıklama"
              rules={[{ required: true, message: "Açıklama alanı zorunludur!" }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AdminProjects;
