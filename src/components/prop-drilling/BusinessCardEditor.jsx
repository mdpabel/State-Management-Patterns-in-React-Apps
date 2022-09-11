import { useState } from 'react';

import BusinessCardForm from './BusinessCardForm';
import BusinessCardPreview from './BusinessCardPreview';

const BusinessCardEditor = () => {
  const [previewAvatar, setPreviewAvatar] = useState('');
  const [form, setForm] = useState({
    avatar: null,
    name: '',
    description: '',
    phone: '',
    address: '',
  });

  const onFileUpload = (e) => {
    const file = e.target.files?.[0];
    setForm((state) => ({
      ...state,
      avatar: file,
    }));

    if (!file) {
      setPreviewAvatar('');
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const avatarPreview = reader.result;
      setPreviewAvatar(avatarPreview);
    });

    reader.readAsDataURL(file);
  };

  const onInputChange = (e) => {
    console.log(e.target);
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="p-8 container mx-auto grid grid-cols-2 gap-8">
      <BusinessCardForm
        form={form}
        onFileUpload={onFileUpload}
        onInputChange={onInputChange}
      />
      <BusinessCardPreview form={{ ...form, avatar: previewAvatar }} />
    </div>
  );
};
export default BusinessCardEditor;
