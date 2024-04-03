import React, { useState } from "react";
import { Button, Modal, Form, Input, Upload, message, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../../redux/projectSlice";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddProject = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [selectedService, setSelectedService] = useState(null); 
  const service = useSelector((state) => state.service);
  console.log(service);
  const user = useSelector((state) => state.user.user);
  const [form] = Form.useForm();

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        const data = { ProjectTitle: values.ProjectTitle, description: values.description, RedirectUrl: values.RedirectUrl, ImageUrl: imgUrl, category: selectedService }; // Seçilen servisi backend'e göndermek için ekleme
        const postServices = async () => {
          const response = await fetch(
            `${process.env.REACT_APP_API_URL}/api/admin/project`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
              },
              body: JSON.stringify({addProject: data}),
            }
          );
          if(response.status === 403 || response.status === 401){
            message.error("Yetkiniz yok!")
            navigate("/admin");
          }
          if(response.ok){
            const json = await response.json();
            dispatch(addProject(json));
          }
        };
        postServices();
        setOpen(false);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    setOpen(false);
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
        message.success("Dosya yüklendi.");
        onSuccess(data);
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
    <Modal
      width={"1000px"}
      title="Paylaşım Yap"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="ProjectTitle"
          label="Başlık"
          rules={[{ required: true, message: "Başlık alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="RedirectUrl"
          label="Proje Linki"
          rules={[{ required: true, message: "Başlık alanı zorunludur!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="ImageUrl"
          label="Kapak Resim URL"
          valuePropName="fileList"
          getValueFromEvent={(e) => e.fileList}
          rules={[{ required: true, message: "Lütfen bir görsel yükleyin!" }]}
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
        <Form.Item
          name="service"
          label="Hizmet Seç"
          rules={[{ required: true, message: "Lütfen bir hizmet seçin!" }]}
        >
          <Select onChange={value => setSelectedService(value)}>
            {service?.services?.map(service => (
              <Option key={service._id} value={service.ServiceTitle}>{service.ServiceTitle}</Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProject;
