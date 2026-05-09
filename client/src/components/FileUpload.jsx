export default function FileUpload({ onFilesChange }) {
  return (
    <label>
      Upload photos or videos
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={(event) => onFilesChange?.(Array.from(event.target.files))}
      />
    </label>
  );
}
