import React, { useState, useRef, useEffect } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';

import { getS3saveLink, savePicture } from '../../../api/s3';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });

const Uploader = ({ setImagesUrls }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Dodaj zdjęcie
      </div>
    </div>
  );

  useEffect(() => {
    setImagesUrls([...fileList.map((file) => `${file.uid}-${file.name}`)]);
  }, [fileList, setImagesUrls]);

  return (
    <>
      <Upload
        customRequest={async (options) => {
          const { onSuccess, file, onError } = options;
          const { data, headers } = await getS3saveLink({
            name: `${file.uid}-${file.name}`,
            type: file.type,
          });

          await savePicture(data, file, headers)
            .then((res) => {
              console.log(res);
              onSuccess('ok');
            })
            .catch((error) => onError(error));
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default Uploader;
