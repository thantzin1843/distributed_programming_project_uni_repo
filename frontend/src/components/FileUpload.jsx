import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function FileUpload({ label, multiple = false, onChange, previewType = "image" }) {
  const [preview, setPreview] = useState(multiple ? [] : null);

  const handleChange = (e) => {
    if (multiple) {
      const files = Array.from(e.target.files);
      setPreview(files);
      onChange(files);
    } else {
      const file = e.target.files[0];
      if (file) {
        setPreview(file);
        onChange(file);
      }
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <label className="cursor-pointer flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
        <FaUpload /> Upload {multiple ? "Files" : "File"}
        <input type="file" multiple={multiple} hidden onChange={handleChange} />
      </label>

      {previewType === "image" && preview && !multiple && (
        <img src={URL.createObjectURL(preview)} alt="Preview" className="h-20 w-28 object-cover rounded-lg border mt-2" />
      )}

      {multiple && preview.length > 0 && (
        <ul className="mt-2 text-sm text-gray-700">
          {preview.map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
