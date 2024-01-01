"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const handleChange = (open: boolean) => {
    if (!open) {
      // Reset the form
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={handleChange}
    >
      Form
    </Modal>
  );
};

export default UploadModal;
